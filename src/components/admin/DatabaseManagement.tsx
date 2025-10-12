import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Download, 
  Upload, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle,
  HardDrive,
  Activity,
  Server,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const DatabaseManagement = () => {
  const { toast } = useToast();
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Mock database stats - in real implementation, these would come from Supabase
  const dbStats = {
    totalRecords: 247,
    totalSize: '2.4 MB',
    lastBackup: '2 hours ago',
    status: 'healthy' as const,
    tables: [
      { name: 'contact_submissions', records: 128, size: '1.2 MB' },
      { name: 'job_postings', records: 8, size: '45 KB' },
      { name: 'job_applications', records: 111, size: '980 KB' }
    ],
    connections: {
      active: 3,
      max: 60,
      idle: 2
    }
  };

  const handleBackup = async () => {
    setIsBackingUp(true);
    
    try {
      // Simulate backup process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Backup completed",
        description: "Database backup has been saved successfully"
      });
    } catch (error) {
      toast({
        title: "Backup failed",
        description: "Failed to create database backup",
        variant: "destructive"
      });
    } finally {
      setIsBackingUp(false);
    }
  };

  const handleHealthCheck = async () => {
    setIsChecking(true);
    
    try {
      // Simulate health check
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Health check completed",
        description: "All database systems are functioning normally"
      });
    } catch (error) {
      toast({
        title: "Health check failed",
        description: "Failed to perform database health check",
        variant: "destructive"
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleExportTable = (tableName: string) => {
    toast({
      title: "Export started",
      description: `Exporting ${tableName} data...`
    });
    
    // In real implementation, this would export the actual table data
    setTimeout(() => {
      toast({
        title: "Export completed",
        description: `${tableName} exported successfully`
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Database Management</h2>
        <p className="text-muted-foreground">Monitor and manage your database health and backups</p>
      </div>

      {/* Database Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-lg font-bold capitalize">{dbStats.status}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dbStats.totalRecords}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database Size</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dbStats.totalSize}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Backup</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dbStats.lastBackup}</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Perform common database operations</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button onClick={handleBackup} disabled={isBackingUp} className="gap-2">
            <Download className="h-4 w-4" />
            {isBackingUp ? 'Creating Backup...' : 'Backup Database'}
          </Button>
          <Button onClick={handleHealthCheck} disabled={isChecking} variant="outline" className="gap-2">
            <RefreshCw className={`h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
            {isChecking ? 'Checking...' : 'Health Check'}
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Restore from Backup
          </Button>
        </CardContent>
      </Card>

      {/* Connection Pool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Connection Pool
          </CardTitle>
          <CardDescription>Current database connections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Active Connections</span>
              <Badge variant="secondary">{dbStats.connections.active} / {dbStats.connections.max}</Badge>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${(dbStats.connections.active / dbStats.connections.max) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Idle: {dbStats.connections.idle}</span>
              <span>Available: {dbStats.connections.max - dbStats.connections.active}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tables Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Database Tables</CardTitle>
          <CardDescription>Overview of all database tables and their sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dbStats.tables.map((table) => (
              <div key={table.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{table.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {table.records} records • {table.size}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExportTable(table.name)}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Warnings */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Regular backups are essential for data safety. We recommend backing up your database
          at least once per week, and before making any major changes to the system.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DatabaseManagement;