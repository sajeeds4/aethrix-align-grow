import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  TrendingDown,
  Mail, 
  Phone, 
  Building, 
  Calendar,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { ContactSubmission } from "@/integrations/supabase/contact-service";

interface AnalyticsDashboardProps {
  submissions: ContactSubmission[];
}

interface Analytics {
  totalSubmissions: number;
  newSubmissions: number;
  contactedSubmissions: number;
  inProgressSubmissions: number;
  completedSubmissions: number;
  conversionRate: number;
  avgResponseTime: string;
  topCompanies: { name: string; count: number }[];
  submissionsByDay: { date: string; count: number }[];
  submissionsByStatus: { status: string; count: number; percentage: number }[];
  recentTrend: 'up' | 'down' | 'stable';
  trendPercentage: number;
}

export const AnalyticsDashboard = ({ submissions }: AnalyticsDashboardProps) => {
  const analytics = useMemo((): Analytics => {
    const total = submissions.length;
    const newSubs = submissions.filter(s => s.status === 'new').length;
    const contacted = submissions.filter(s => s.status === 'contacted').length;
    const inProgress = submissions.filter(s => s.status === 'in-progress').length;
    const completed = submissions.filter(s => s.status === 'completed').length;

    // Calculate conversion rate (contacted + in-progress + completed / total)
    const convertedSubmissions = contacted + inProgress + completed;
    const conversionRate = total > 0 ? (convertedSubmissions / total) * 100 : 0;

    // Get top companies
    const companyCount: Record<string, number> = {};
    submissions.forEach(sub => {
      if (sub.company) {
        companyCount[sub.company] = (companyCount[sub.company] || 0) + 1;
      }
    });
    const topCompanies = Object.entries(companyCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Submissions by day (last 7 days)
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    const submissionsByDay = last7Days.map(date => {
      const count = submissions.filter(sub => 
        new Date(sub.created_at).toISOString().split('T')[0] === date
      ).length;
      return { date, count };
    });

    // Submissions by status with percentages
    const statusCounts = [
      { status: 'New', count: newSubs },
      { status: 'Contacted', count: contacted },
      { status: 'In Progress', count: inProgress },
      { status: 'Completed', count: completed }
    ];

    const submissionsByStatus = statusCounts.map(item => ({
      ...item,
      percentage: total > 0 ? (item.count / total) * 100 : 0
    }));

    // Calculate trend (comparing last 3 days vs previous 3 days)
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    const sixDaysAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);

    const recentSubmissions = submissions.filter(s => new Date(s.created_at) >= threeDaysAgo).length;
    const previousSubmissions = submissions.filter(s => {
      const date = new Date(s.created_at);
      return date >= sixDaysAgo && date < threeDaysAgo;
    }).length;

    let recentTrend: 'up' | 'down' | 'stable' = 'stable';
    let trendPercentage = 0;

    if (previousSubmissions > 0) {
      const change = ((recentSubmissions - previousSubmissions) / previousSubmissions) * 100;
      trendPercentage = Math.abs(change);
      
      if (change > 5) recentTrend = 'up';
      else if (change < -5) recentTrend = 'down';
    } else if (recentSubmissions > 0) {
      recentTrend = 'up';
      trendPercentage = 100;
    }

    return {
      totalSubmissions: total,
      newSubmissions: newSubs,
      contactedSubmissions: contacted,
      inProgressSubmissions: inProgress,
      completedSubmissions: completed,
      conversionRate,
      avgResponseTime: "2.5 hours", // Placeholder
      topCompanies,
      submissionsByDay,
      submissionsByStatus,
      recentTrend,
      trendPercentage
    };
  }, [submissions]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-blue-500';
      case 'contacted': return 'bg-orange-500';
      case 'in progress': return 'bg-purple-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTrendIcon = () => {
    switch (analytics.recentTrend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = () => {
    switch (analytics.recentTrend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {analytics.totalSubmissions}
                </div>
                <div className="text-sm text-muted-foreground">Total Submissions</div>
              </div>
              <Users className="w-8 h-8 text-blue-600 opacity-50" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              {getTrendIcon()}
              <span className={`ml-1 ${getTrendColor()}`}>
                {analytics.trendPercentage.toFixed(1)}% vs last 3 days
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {analytics.conversionRate.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
              <Target className="w-8 h-8 text-green-600 opacity-50" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              {analytics.contactedSubmissions + analytics.inProgressSubmissions + analytics.completedSubmissions} converted
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {analytics.newSubmissions}
                </div>
                <div className="text-sm text-muted-foreground">New Leads</div>
              </div>
              <Mail className="w-8 h-8 text-orange-600 opacity-50" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Awaiting first contact
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {analytics.completedSubmissions}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <Calendar className="w-8 h-8 text-purple-600 opacity-50" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Projects finished
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Status Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Status Distribution
                </CardTitle>
                <CardDescription>
                  Breakdown of submissions by current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.submissionsByStatus.map((item, index) => (
                    <div key={item.status} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                        <span className="text-sm font-medium">{item.status}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.count}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.percentage.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Companies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Top Companies
                </CardTitle>
                <CardDescription>
                  Companies with most submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analytics.topCompanies.length > 0 ? (
                  <div className="space-y-3">
                    {analytics.topCompanies.map((company, index) => (
                      <div key={company.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                            {index + 1}
                          </div>
                          <span className="text-sm font-medium">{company.name}</span>
                        </div>
                        <Badge variant="outline">
                          {company.count} submission{company.count !== 1 ? 's' : ''}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Building className="h-12 w-12 mx-auto mb-2 opacity-30" />
                    <p>No company data available yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Daily Submissions (Last 7 Days)
              </CardTitle>
              <CardDescription>
                Track submission volume over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analytics.submissionsByDay.map((day, index) => {
                  const maxCount = Math.max(...analytics.submissionsByDay.map(d => d.count));
                  const width = maxCount > 0 ? (day.count / maxCount) * 100 : 0;
                  
                  return (
                    <div key={day.date} className="flex items-center gap-3">
                      <div className="w-20 text-xs text-muted-foreground">
                        {new Date(day.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                        <div 
                          className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${Math.max(width, 10)}%` }}
                        >
                          {day.count > 0 && (
                            <span className="text-xs font-medium text-white">
                              {day.count}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Conversion Rate</div>
                    <div className="text-xs text-muted-foreground">
                      {analytics.conversionRate.toFixed(1)}% of leads are being followed up
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="text-sm font-medium">Response Time</div>
                    <div className="text-xs text-muted-foreground">
                      Average: {analytics.avgResponseTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="text-sm font-medium">Lead Quality</div>
                    <div className="text-xs text-muted-foreground">
                      {analytics.topCompanies.length > 0 ? 'Good' : 'Building'} company diversity
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analytics.newSubmissions > analytics.contactedSubmissions && (
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-sm font-medium text-orange-900">
                      High Volume of New Leads
                    </div>
                    <div className="text-xs text-orange-700 mt-1">
                      You have {analytics.newSubmissions} new submissions waiting for first contact
                    </div>
                  </div>
                )}

                {analytics.conversionRate < 50 && (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-sm font-medium text-blue-900">
                      Improve Follow-up Rate
                    </div>
                    <div className="text-xs text-blue-700 mt-1">
                      Consider implementing automated follow-up reminders
                    </div>
                  </div>
                )}

                {analytics.completedSubmissions === 0 && analytics.totalSubmissions > 0 && (
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-sm font-medium text-purple-900">
                      Track Project Completions
                    </div>
                    <div className="text-xs text-purple-700 mt-1">
                      Start marking projects as completed to track success rate
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
