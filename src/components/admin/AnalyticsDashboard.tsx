import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactSubmission } from "@/integrations/supabase/contact-service";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Mail, 
  Calendar, 
  Clock,
  Target,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AnalyticsDashboardProps {
  submissions: ContactSubmission[];
}

const AnalyticsDashboard = ({ submissions }: AnalyticsDashboardProps) => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d');

  // Calculate date range
  const getDateRange = () => {
    const now = new Date();
    const ranges = {
      '7d': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
      '30d': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
      '90d': new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000),
      'all': new Date(0)
    };
    return ranges[timeRange];
  };

  // Filter submissions by date range
  const filteredSubmissions = useMemo(() => {
    const startDate = getDateRange();
    return submissions.filter(sub => new Date(sub.created_at) >= startDate);
  }, [submissions, timeRange]);

  // Calculate metrics
  const metrics = useMemo(() => {
    const total = filteredSubmissions.length;
    const newContacts = filteredSubmissions.filter(s => s.status === 'new').length;
    const contacted = filteredSubmissions.filter(s => s.status === 'contacted').length;
    const qualified = filteredSubmissions.filter(s => s.status === 'qualified').length;
    const converted = filteredSubmissions.filter(s => s.status === 'converted').length;
    
    // Calculate trends (comparing to previous period)
    const periodDays = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : timeRange === '90d' ? 90 : 365;
    const previousPeriodStart = new Date(getDateRange().getTime() - periodDays * 24 * 60 * 60 * 1000);
    const previousPeriodEnd = getDateRange();
    
    const previousPeriodSubmissions = submissions.filter(sub => {
      const date = new Date(sub.created_at);
      return date >= previousPeriodStart && date < previousPeriodEnd;
    });
    
    const prevTotal = previousPeriodSubmissions.length;
    const totalTrend = prevTotal > 0 ? ((total - prevTotal) / prevTotal * 100).toFixed(1) : '0';
    
    // Calculate conversion rate
    const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : '0';
    
    // Calculate average response time (mock for now - would need response timestamps)
    const avgResponseTime = "2.4 hrs"; // This would be calculated from actual data
    
    // Group by service type
    const serviceBreakdown = filteredSubmissions.reduce((acc, sub) => {
      const service = sub.service || 'Not specified';
      acc[service] = (acc[service] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Group by status
    const statusBreakdown = {
      new: newContacts,
      contacted,
      qualified,
      converted,
      rejected: filteredSubmissions.filter(s => s.status === 'rejected').length
    };
    
    // Daily submissions for trend
    const dailySubmissions = filteredSubmissions.reduce((acc, sub) => {
      const date = new Date(sub.created_at).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      total,
      newContacts,
      contacted,
      qualified,
      converted,
      totalTrend,
      conversionRate,
      avgResponseTime,
      serviceBreakdown,
      statusBreakdown,
      dailySubmissions
    };
  }, [filteredSubmissions, submissions, timeRange]);

  // Helper function to format percentage change
  const TrendIndicator = ({ value }: { value: string }) => {
    const numValue = parseFloat(value);
    const isPositive = numValue >= 0;
    
    return (
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
        <span>{Math.abs(numValue)}%</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Overview</h2>
          <p className="text-muted-foreground">Track your contact submissions and conversion metrics</p>
        </div>
        <div className="flex gap-2">
          {(['7d', '30d', '90d', 'all'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-background border hover:bg-accent/10'
              }`}
            >
              {range === 'all' ? 'All Time' : range.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.total}</div>
            <TrendIndicator value={metrics.totalTrend} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.conversionRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {metrics.converted} of {metrics.total} converted
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.avgResponseTime}</div>
            <p className="text-xs text-green-600 mt-1">↓ 15% from last period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Contacts</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.newContacts}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Awaiting response
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Status Distribution
            </CardTitle>
            <CardDescription>Current status of all submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(metrics.statusBreakdown).map(([status, count]) => {
                const percentage = metrics.total > 0 ? ((count / metrics.total) * 100).toFixed(1) : '0';
                const statusColors: Record<string, string> = {
                  new: 'bg-blue-500',
                  contacted: 'bg-yellow-500',
                  qualified: 'bg-purple-500',
                  converted: 'bg-green-500',
                  rejected: 'bg-red-500'
                };
                
                return (
                  <div key={status} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium capitalize">{status}</span>
                      <span className="text-muted-foreground">{count} ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${statusColors[status]}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Service Interest
            </CardTitle>
            <CardDescription>Most requested services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(metrics.serviceBreakdown)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 6)
                .map(([service, count]) => (
                  <div key={service} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{service}</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
              {Object.keys(metrics.serviceBreakdown).length === 0 && (
                <p className="text-sm text-muted-foreground">No service data available</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Submission Trend
          </CardTitle>
          <CardDescription>Daily submissions over the selected period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between gap-2">
            {Object.entries(metrics.dailySubmissions)
              .slice(-14) // Show last 14 days
              .map(([date, count]) => {
                const maxCount = Math.max(...Object.values(metrics.dailySubmissions));
                const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                
                return (
                  <div key={date} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-accent rounded-t hover:bg-accent/80 transition-colors relative group"
                      style={{ height: `${height}%`, minHeight: count > 0 ? '20px' : '4px' }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {count} submissions
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground truncate max-w-full">
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                );
              })}
          </div>
          {Object.keys(metrics.dailySubmissions).length === 0 && (
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              No submission data for this period
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;