import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Mail, Phone, Building, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service_type?: string;
  created_at: string;
}

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    if (password === "Osman@123") {
      setIsAuthenticated(true);
      fetchSubmissions();
      toast({
        title: "Access granted",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Invalid password",
        variant: "destructive"
      });
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('admin-submissions', {
        method: 'GET'
      });

      if (error) {
        console.error('Error fetching submissions:', error);
        toast({
          title: "Error loading submissions",
          description: "Unable to load contact submissions",
          variant: "destructive"
        });
      } else {
        setSubmissions(data?.data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to load submissions",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id: string) => {
    try {
      const { error } = await supabase.functions.invoke('admin-submissions', {
        method: 'DELETE',
        body: { id }
      });

      if (error) throw error;

      setSubmissions(prev => prev.filter(sub => sub.id !== id));
      toast({
        title: "Deleted",
        description: "Submission deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete submission",
        variant: "destructive"
      });
    }
  };

  const getServiceBadgeColor = (service?: string) => {
    const colors: Record<string, string> = {
      'ai-solutions': 'bg-blue-100 text-blue-800',
      'cloud-services': 'bg-green-100 text-green-800',
      'erp-systems': 'bg-purple-100 text-purple-800',
      'software-development': 'bg-orange-100 text-orange-800',
      'consultation': 'bg-gray-100 text-gray-800',
      'other': 'bg-yellow-100 text-yellow-800'
    };
    return colors[service || 'other'] || colors.other;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
            <CardDescription>Enter password to access admin panel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Access Panel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Panel</h1>
          <p className="text-slate-600">Manage contact form submissions</p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="outline" className="text-sm">
              Total: {submissions.length}
            </Badge>
            <Button onClick={fetchSubmissions} variant="outline" size="sm">
              Refresh
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="text-slate-600 mt-4">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">No contact submissions yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-lg">{submission.name}</CardTitle>
                        {submission.service_type && (
                          <Badge className={getServiceBadgeColor(submission.service_type)}>
                            {submission.service_type.replace('-', ' ').toUpperCase()}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(submission.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteSubmission(submission.id)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-slate-500" />
                      <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline">
                        {submission.email}
                      </a>
                    </div>
                    {submission.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-slate-500" />
                        <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline">
                          {submission.phone}
                        </a>
                      </div>
                    )}
                    {submission.company && (
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="h-4 w-4 text-slate-500" />
                        <span>{submission.company}</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-sm text-slate-700 mb-2">Message:</h4>
                    <p className="text-sm text-slate-800 whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;