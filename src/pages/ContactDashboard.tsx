import { useState, useEffect } from "react";
import { ContactService, ContactSubmission } from "@/integrations/supabase/contact-service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Mail, Phone, Building, LogOut, Shield, Users, BarChart3, Settings, Clock, TrendingUp, Activity, Target, Download } from "lucide-react";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { DataManagementTools } from "@/components/DataManagementTools";
import { EnhancedSubmissionsTable } from "@/components/EnhancedSubmissionsTable";

interface ContactStats {
  total: number;
  new: number;
  contacted: number;
  inProgress: number;
  completed: number;
  todaySubmissions: number;
  weekSubmissions: number;
  conversionRate: number;
}

const ContactSubmissionsDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedSubmissions, setSelectedSubmissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);
  const [stats, setStats] = useState<ContactStats>({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0,
    completed: 0,
    todaySubmissions: 0,
    weekSubmissions: 0,
    conversionRate: 0
  });

  const calculateStats = (submissions: ContactSubmission[]): ContactStats => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    return submissions.reduce((acc, submission) => {
      const createdAt = new Date(submission.created_at);
      
      // Count by status
      switch (submission.status) {
        case 'new': acc.new++; break;
        case 'contacted': acc.contacted++; break;
        case 'in-progress': acc.inProgress++; break;
        case 'completed': acc.completed++; break;
      }

      // Count by time period
      if (createdAt >= today) acc.todaySubmissions++;
      if (createdAt >= weekAgo) acc.weekSubmissions++;

      return acc;
    }, {
      total: submissions.length,
      new: 0,
      contacted: 0,
      inProgress: 0,
      completed: 0,
      todaySubmissions: 0,
      weekSubmissions: 0,
      conversionRate: submissions.length > 0 
        ? ((submissions.filter(s => s.status !== 'new').length) / submissions.length) * 100 
        : 0
    });
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    const result = await ContactService.getSubmissions();
    
    if (result.success && result.data) {
      setSubmissions(result.data);
      setFilteredSubmissions(result.data);
      setStats(calculateStats(result.data));
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to load submissions",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdatingStatus(id);
    const result = await ContactService.updateSubmissionStatus(id, status);
    
    if (result.success) {
      toast({
        title: "Status Updated",
        description: "Submission status has been updated successfully.",
      });
      fetchSubmissions();
    } else {
      toast({
        title: "Update Failed",
        description: result.error || "Failed to update status",
        variant: "destructive",
      });
    }
    setUpdatingStatus(null);
  };

  const handleBulkStatusUpdate = async (status: string) => {
    if (selectedSubmissions.length === 0) return;
    
    try {
      const promises = selectedSubmissions.map(id => 
        ContactService.updateSubmissionStatus(id, status)
      );
      
      await Promise.all(promises);
      
      toast({
        title: "Bulk Update Successful",
        description: `Updated ${selectedSubmissions.length} submissions to ${status}`,
      });
      
      setSelectedSubmissions([]);
      fetchSubmissions();
    } catch (error) {
      toast({
        title: "Bulk Update Failed",
        description: "Some updates may have failed",
        variant: "destructive",
      });
    }
  };

  const handleBulkDelete = async () => {
    if (selectedSubmissions.length === 0) return;
    
    try {
      const promises = selectedSubmissions.map(id => 
        fetch(`/api/submissions/${id}`, { method: 'DELETE' })
      );
      
      await Promise.all(promises);
      
      toast({
        title: "Bulk Delete Successful",
        description: `Deleted ${selectedSubmissions.length} submissions`,
      });
      
      setSelectedSubmissions([]);
      fetchSubmissions();
    } catch (error) {
      toast({
        title: "Bulk Delete Failed",
        description: "Some deletions may have failed",
        variant: "destructive",
      });
    }
  };

  const handleExport = () => {
    const selectedData = submissions.filter(s => 
      selectedSubmissions.length === 0 || selectedSubmissions.includes(s.id)
    );
    
    if (selectedData.length === 0) {
      toast({
        title: "No Data to Export",
        description: "Select submissions to export or export all data",
        variant: "destructive",
      });
      return;
    }

    // Create CSV content
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Message', 'Status', 'Created', 'Updated'];
    const rows = selectedData.map(s => [
      s.name,
      s.email,
      s.phone || '',
      s.company || '',
      s.message?.replace(/\n/g, ' ') || '',
      s.status,
      s.created_at,
      s.updated_at
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: `Exported ${selectedData.length} submissions to CSV`,
    });
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-64">
          <RefreshCw className="w-8 h-8 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            Robust Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Advanced contact submission management & analytics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={fetchSubmissions} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button 
            onClick={handleExport} 
            variant="outline" 
            size="sm"
            disabled={submissions.length === 0}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={onLogout} variant="outline" size="sm" className="text-red-600 hover:text-red-700">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                <div className="text-xs text-blue-600/70">Total</div>
              </div>
              <Activity className="w-6 h-6 text-blue-600/50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">{stats.new}</div>
                <div className="text-xs text-orange-600/70">New</div>
              </div>
              <Users className="w-6 h-6 text-orange-600/50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{stats.contacted}</div>
                <div className="text-xs text-purple-600/70">Contacted</div>
              </div>
              <Mail className="w-6 h-6 text-purple-600/50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-indigo-600">{stats.inProgress}</div>
                <div className="text-xs text-indigo-600/70">In Progress</div>
              </div>
              <Clock className="w-6 h-6 text-indigo-600/50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                <div className="text-xs text-green-600/70">Completed</div>
              </div>
              <Building className="w-6 h-6 text-green-600/50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-cyan-600">{stats.todaySubmissions}</div>
                <div className="text-xs text-cyan-600/70">Today</div>
              </div>
              <TrendingUp className="w-6 h-6 text-cyan-600/50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-emerald-600">{stats.conversionRate.toFixed(1)}%</div>
                <div className="text-xs text-emerald-600/70">Conv. Rate</div>
              </div>
              <Target className="w-6 h-6 text-emerald-600/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="submissions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="submissions" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Submissions
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="management" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Management
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Contact Submissions
                <div className="flex items-center gap-2">
                  {selectedSubmissions.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {selectedSubmissions.length} selected
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleBulkStatusUpdate('contacted')}
                      >
                        Mark Contacted
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleBulkStatusUpdate('completed')}
                      >
                        Mark Completed
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={handleBulkDelete}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              </CardTitle>
              <CardDescription>
                {filteredSubmissions.length} of {submissions.length} submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EnhancedSubmissionsTable
                submissions={filteredSubmissions}
                selectedSubmissions={selectedSubmissions}
                onSelectionChange={setSelectedSubmissions}
                onStatusUpdate={updateStatus}
                updatingStatus={updatingStatus}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>

        <TabsContent value="management">
          <DataManagementTools
            submissions={submissions}
            onFilter={setFilteredSubmissions}
          />
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export Tools
                </CardTitle>
                <CardDescription>
                  Export submission data in various formats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleExport} 
                  className="w-full" 
                  disabled={submissions.length === 0}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export to CSV
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={selectedSubmissions.length === 0}
                >
                  Export Selected Only
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Data Refresh
                </CardTitle>
                <CardDescription>
                  Refresh and sync data from database
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={fetchSubmissions} className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh All Data
                </Button>
                <Button variant="outline" className="w-full">
                  Auto-refresh: Off
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security
                </CardTitle>
                <CardDescription>
                  Security and access management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  View Access Logs
                </Button>
                <Button 
                  onClick={onLogout} 
                  variant="destructive" 
                  className="w-full"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Secure Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactSubmissionsDashboard;
