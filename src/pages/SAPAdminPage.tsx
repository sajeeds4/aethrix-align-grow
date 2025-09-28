import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SAPDataTable } from "@/components/SAPDataTable";
import { SAPForm } from "@/components/SAPForm";
import { SAPNotificationSystem, useSAPNotifications } from "@/components/SAPNotificationSystem";
import JobManagementDashboard from "@/components/admin/JobManagementDashboard";
import ApplicationManagementDashboard from "@/components/admin/ApplicationManagementDashboard";
import { ContactService, ContactSubmission } from "@/integrations/supabase/contact-service";
import { 
  Menu, 
  Search, 
  Bell, 
  Settings, 
  User, 
  LogOut, 
  Home, 
  Users, 
  BarChart3, 
  FileText, 
  Database, 
  Shield,
  ChevronRight,
  Calendar,
  Mail,
  Phone,
  Building,
  TrendingUp,
  Activity,
  Target,
  Globe,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  Upload,
  RefreshCw,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

// SAP Color Palette
const sapColors = {
  primary: '#0070f3',
  secondary: '#354a5f',
  success: '#107e3e',
  warning: '#df6e00',
  error: '#bb0000',
  neutral: '#6a6d70',
  background: '#f7f7f7',
  surface: '#ffffff',
  border: '#d9d9d9'
};

interface SAPAdminPageProps {
  onLogout: () => void;
}

const SAPAdminPage = ({ onLogout }: SAPAdminPageProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const { notifications, addNotification, markAsRead, dismissNotification, markAllAsRead } = useSAPNotifications();

  // Mock data for demonstration
  const dashboardTiles = [
    {
      id: 1,
      title: 'Total Contacts',
      value: submissions.length.toString(),
      change: '+12%',
      trend: 'up',
      color: sapColors.primary,
      icon: Users
    },
    {
      id: 2,
      title: 'New Today',
      value: submissions.filter(s => {
        const today = new Date();
        const submissionDate = new Date(s.created_at);
        return submissionDate.toDateString() === today.toDateString();
      }).length.toString(),
      change: '+8%',
      trend: 'up',
      color: sapColors.success,
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Response Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      color: sapColors.warning,
      icon: Target
    },
    {
      id: 4,
      title: 'Active Sessions',
      value: '156',
      change: '-3%',
      trend: 'down',
      color: sapColors.secondary,
      icon: Activity
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'contact',
      message: 'New contact submission from TechCorp Inc.',
      timestamp: '2 minutes ago',
      status: 'new',
      icon: Mail
    },
    {
      id: 2,
      type: 'update',
      message: 'Contact status updated to "In Progress"',
      timestamp: '15 minutes ago',
      status: 'updated',
      icon: Edit
    },
    {
      id: 3,
      type: 'export',
      message: 'Contact data exported successfully',
      timestamp: '1 hour ago',
      status: 'completed',
      icon: Download
    },
    {
      id: 4,
      type: 'login',
      message: 'Admin user logged in from 192.168.1.100',
      timestamp: '2 hours ago',
      status: 'info',
      icon: Shield
    }
  ];

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      path: '/admin/dashboard'
    },
    {
      id: 'contacts',
      label: 'Contact Management',
      icon: Users,
      path: '/admin/contacts',
      badge: submissions.filter(s => s.status === 'new').length.toString()
    },
    {
      id: 'jobs',
      label: 'Job Management',
      icon: Briefcase,
      path: '/admin/jobs'
    },
    {
      id: 'applications',
      label: 'Job Applications',
      icon: Users,
      path: '/admin/applications'
    },
    {
      id: 'analytics',
      label: 'Analytics & Reports',
      icon: BarChart3,
      path: '/admin/analytics'
    },
    {
      id: 'forms',
      label: 'Forms & Data Entry',
      icon: FileText,
      path: '/admin/forms'
    },
    {
      id: 'database',
      label: 'Data Management',
      icon: Database,
      path: '/admin/database'
    },
    {
      id: 'settings',
      label: 'System Settings',
      icon: Settings,
      path: '/admin/settings'
    }
  ];

  // Fetch submissions data
  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const result = await ContactService.getSubmissions();
      if (result.success && result.data) {
        setSubmissions(result.data);
      }
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Data Loading Error',
        message: 'Failed to load contact submissions',
        category: 'system',
        priority: 'high'
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSubmissions();
    
    // Demo notifications
    addNotification({
      type: 'success',
      title: 'System Online',
      message: 'All systems are operational and running smoothly',
      category: 'system',
      priority: 'low',
      autoClose: 5
    });
  }, []);

  const contactTableColumns = [
    { key: 'name', label: 'Contact Name', sortable: true, filterable: true },
    { key: 'email', label: 'Email Address', sortable: true, filterable: true },
    { key: 'company', label: 'Company', sortable: true, filterable: true },
    { key: 'phone', label: 'Phone', sortable: false },
    { key: 'status', label: 'Status', sortable: true, type: 'status' as const },
    { key: 'created_at', label: 'Date Created', sortable: true, type: 'date' as const },
    { key: 'actions', label: 'Actions', type: 'action' as const, width: '32' }
  ];

  const handleRowAction = (action: string, row: any) => {
    switch (action) {
      case 'view':
        addNotification({
          type: 'info',
          title: 'Contact Details',
          message: `Viewing details for ${row.name}`,
          category: 'user',
          priority: 'low',
          autoClose: 3
        });
        break;
      case 'edit':
        setActiveSection('forms');
        break;
      case 'delete':
        addNotification({
          type: 'warning',
          title: 'Delete Contact',
          message: `Are you sure you want to delete ${row.name}?`,
          category: 'data',
          priority: 'medium',
          actions: [
            {
              label: 'Delete',
              action: () => console.log('Deleted'),
              variant: 'destructive'
            },
            {
              label: 'Cancel',
              action: () => console.log('Cancelled')
            }
          ],
          persistent: true
        });
        break;
    }
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    addNotification({
      type: 'success',
      title: 'Form Submitted',
      message: 'Contact information has been saved successfully',
      category: 'data',
      priority: 'medium',
      autoClose: 5
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return sapColors.primary;
      case 'updated': return sapColors.warning;
      case 'completed': return sapColors.success;
      case 'info': return sapColors.neutral;
      default: return sapColors.neutral;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SAP Notification System */}
      <SAPNotificationSystem
        notifications={notifications}
        onNotificationRead={markAsRead}
        onNotificationDismiss={dismissNotification}
        onMarkAllRead={markAllAsRead}
        position="top-right"
      />

      {/* SAP-Style Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo and Navigation Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Aethrix Admin</div>
                <div className="text-xs text-gray-500">Enterprise Portal</div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search contacts, reports, settings..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
              <div className="text-right text-sm">
                <div className="font-medium text-gray-900">Admin User</div>
                <div className="text-gray-500">System Administrator</div>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-blue-600 text-white text-sm">AU</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* SAP-Style Sidebar */}
        <aside className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 sticky top-16 h-screen overflow-y-auto",
          sidebarCollapsed ? "w-16" : "w-64"
        )}>
          <nav className="p-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start mb-1 h-10",
                    isActive && "bg-blue-600 text-white hover:bg-blue-700",
                    !isActive && "hover:bg-gray-100"
                  )}
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className={cn("w-5 h-5", !sidebarCollapsed && "mr-3")} />
                  {!sidebarCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && parseInt(item.badge) > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Administration</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">
              {navigationItems.find(item => item.id === activeSection)?.label}
            </span>
          </div>

          {/* Dashboard Content */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              {/* Page Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
                  <p className="text-gray-600 mt-1">
                    Welcome back! Here's what's happening with your business today.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={fetchSubmissions} disabled={loading}>
                    <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin")} />
                    Refresh
                  </Button>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Contact
                  </Button>
                </div>
              </div>

              {/* KPI Tiles - SAP Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardTiles.map((tile) => {
                  const Icon = tile.icon;
                  return (
                    <Card key={tile.id} className="relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 w-full h-1" 
                        style={{ backgroundColor: tile.color }}
                      />
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">{tile.title}</p>
                            <p className="text-2xl font-bold text-gray-900">{tile.value}</p>
                            <div className="flex items-center mt-2">
                              <span 
                                className={cn(
                                  "text-sm font-medium",
                                  tile.trend === 'up' ? "text-green-600" : "text-red-600"
                                )}
                              >
                                {tile.change}
                              </span>
                              <span className="text-sm text-gray-500 ml-1">vs last month</span>
                            </div>
                          </div>
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${tile.color}15` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: tile.color }} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Recent Activities
                    </CardTitle>
                    <CardDescription>
                      Latest system activities and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => {
                        const Icon = activity.icon;
                        return (
                          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${getStatusColor(activity.status)}15` }}
                            >
                              <Icon 
                                className="w-4 h-4" 
                                style={{ color: getStatusColor(activity.status) }}
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{activity.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>
                      Common administrative tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => setActiveSection('contacts')}
                    >
                      <Users className="w-4 h-4 mr-3" />
                      Manage Contacts
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => setActiveSection('analytics')}
                    >
                      <BarChart3 className="w-4 h-4 mr-3" />
                      View Analytics
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="w-4 h-4 mr-3" />
                      Export Data
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => setActiveSection('forms')}
                    >
                      <Plus className="w-4 h-4 mr-3" />
                      Add New Contact
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => setActiveSection('settings')}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      System Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    System Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-sm font-medium">Database</p>
                        <p className="text-xs text-gray-500">Operational</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-sm font-medium">API Services</p>
                        <p className="text-xs text-gray-500">Healthy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Background Jobs</p>
                        <p className="text-xs text-gray-500">3 pending</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Contact Management Section */}
          {activeSection === 'contacts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Contact Management</h1>
                  <p className="text-gray-600 mt-1">Manage and track all contact submissions</p>
                </div>
                <Button size="sm" onClick={() => setActiveSection('forms')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Contact
                </Button>
              </div>

              <SAPDataTable
                title="Contact Submissions"
                data={submissions}
                columns={contactTableColumns}
                onRowAction={handleRowAction}
                searchPlaceholder="Search contacts by name, email, or company..."
              />
            </div>
          )}

          {/* Forms Section */}
          {activeSection === 'forms' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Contact Form</h1>
                  <p className="text-gray-600 mt-1">Add or edit contact information</p>
                </div>
              </div>

              <SAPForm
                title="New Contact Entry"
                description="Enter complete contact information and preferences"
                onSubmit={handleFormSubmit}
                onCancel={() => setActiveSection('contacts')}
              />
            </div>
          )}

          {/* Job Management Section */}
          {activeSection === 'jobs' && (
            <JobManagementDashboard />
          )}

          {/* Job Applications Section */}
          {activeSection === 'applications' && (
            <ApplicationManagementDashboard />
          )}

          {/* Other sections */}
          {!['dashboard', 'contacts', 'forms', 'jobs', 'applications'].includes(activeSection) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {navigationItems.find(item => item.id === activeSection)?.label}
              </h3>
              <p className="text-gray-500">This section is under development</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SAPAdminPage;
