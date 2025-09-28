import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  Building, 
  Calendar,
  Eye,
  ExternalLink,
  MessageSquare,
  Clock,
  User
} from "lucide-react";
import { ContactSubmission } from "@/integrations/supabase/contact-service";

interface EnhancedSubmissionsTableProps {
  submissions: ContactSubmission[];
  selectedSubmissions: string[];
  onSelectionChange: (selected: string[]) => void;
  onStatusUpdate: (id: string, status: string) => void;
  updatingStatus: string | null;
}

export const EnhancedSubmissionsTable = ({
  submissions,
  selectedSubmissions,
  onSelectionChange,
  onStatusUpdate,
  updatingStatus
}: EnhancedSubmissionsTableProps) => {
  const [viewingSubmission, setViewingSubmission] = useState<ContactSubmission | null>(null);

  const handleRowSelect = (id: string) => {
    if (selectedSubmissions.includes(id)) {
      onSelectionChange(selectedSubmissions.filter(s => s !== id));
    } else {
      onSelectionChange([...selectedSubmissions, id]);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new':
        return 'default';
      case 'contacted':
        return 'secondary';
      case 'in-progress':
        return 'outline';
      case 'completed':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-600 bg-blue-50';
      case 'contacted': return 'text-orange-600 bg-orange-50';
      case 'in-progress': return 'text-purple-600 bg-purple-50';
      case 'completed': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
    return formatDate(dateString);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <MessageSquare className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedSubmissions.length === submissions.length && submissions.length > 0}
                  onCheckedChange={() => {
                    if (selectedSubmissions.length === submissions.length) {
                      onSelectionChange([]);
                    } else {
                      onSelectionChange(submissions.map(s => s.id));
                    }
                  }}
                />
              </TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow 
                key={submission.id} 
                className={`hover:bg-gray-50 ${
                  selectedSubmissions.includes(submission.id) ? 'bg-blue-50' : ''
                }`}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedSubmissions.includes(submission.id)}
                    onCheckedChange={() => handleRowSelect(submission.id)}
                  />
                </TableCell>
                
                <TableCell>
                  <div className="space-y-1 min-w-[200px]">
                    <div className="font-medium flex items-center gap-2">
                      <User className="w-3 h-3 text-gray-400" />
                      {submission.name}
                    </div>
                    <div 
                      className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer hover:text-blue-600"
                      onClick={() => copyToClipboard(submission.email)}
                      title="Click to copy email"
                    >
                      <Mail className="w-3 h-3" />
                      {submission.email}
                    </div>
                    {submission.phone && (
                      <div 
                        className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer hover:text-blue-600"
                        onClick={() => copyToClipboard(submission.phone)}
                        title="Click to copy phone"
                      >
                        <Phone className="w-3 h-3" />
                        {submission.phone}
                      </div>
                    )}
                  </div>
                </TableCell>
                
                <TableCell>
                  {submission.company ? (
                    <div className="flex items-center gap-1 text-sm">
                      <Building className="w-3 h-3 text-gray-400" />
                      <span className="font-medium">{submission.company}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400 text-sm">No company</span>
                  )}
                </TableCell>
                
                <TableCell>
                  <div className="max-w-xs">
                    {submission.message ? (
                      <div className="text-sm text-gray-600 line-clamp-2">
                        {submission.message.length > 100 ? (
                          <>
                            {submission.message.substring(0, 100)}...
                            <span className="text-blue-600 cursor-pointer ml-1">
                              more
                            </span>
                          </>
                        ) : (
                          submission.message
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">No message</span>
                    )}
                  </div>
                </TableCell>
                
                <TableCell>
                  <Select
                    value={submission.status}
                    onValueChange={(value) => onStatusUpdate(submission.id, value)}
                    disabled={updatingStatus === submission.id}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue>
                        <Badge 
                          variant={getStatusBadgeVariant(submission.status)}
                          className={`text-xs ${getStatusColor(submission.status)}`}
                        >
                          {submission.status}
                        </Badge>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                
                <TableCell>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {formatTimeAgo(submission.created_at)}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {formatDate(submission.created_at)}
                    </div>
                  </div>
                </TableCell>
                
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setViewingSubmission(submission)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Contact Submission Details
                        </DialogTitle>
                        <DialogDescription>
                          Submitted on {formatDate(submission.created_at)}
                        </DialogDescription>
                      </DialogHeader>
                      
                      {viewingSubmission && (
                        <div className="space-y-6">
                          {/* Status and Basic Info */}
                          <div className="flex items-center justify-between">
                            <Badge 
                              className={`px-3 py-1 ${getStatusColor(viewingSubmission.status)}`}
                            >
                              {viewingSubmission.status.toUpperCase()}
                            </Badge>
                            <div className="text-sm text-gray-500">
                              ID: {viewingSubmission.id.split('-')[0]}...
                            </div>
                          </div>

                          {/* Contact Information */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Name</label>
                                  <div className="flex items-center gap-2 mt-1">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <span className="font-medium">{viewingSubmission.name}</span>
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Company</label>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Building className="h-4 w-4 text-gray-400" />
                                    <span>{viewingSubmission.company || 'Not provided'}</span>
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Email</label>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                    <span 
                                      className="cursor-pointer hover:text-blue-600"
                                      onClick={() => copyToClipboard(viewingSubmission.email)}
                                    >
                                      {viewingSubmission.email}
                                    </span>
                                    <ExternalLink className="h-3 w-3 text-gray-400" />
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Phone</label>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span 
                                      className="cursor-pointer hover:text-blue-600"
                                      onClick={() => viewingSubmission.phone && copyToClipboard(viewingSubmission.phone)}
                                    >
                                      {viewingSubmission.phone || 'Not provided'}
                                    </span>
                                    {viewingSubmission.phone && <ExternalLink className="h-3 w-3 text-gray-400" />}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Message */}
                          {viewingSubmission.message && (
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-lg">Message</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <p className="text-gray-700 whitespace-pre-wrap">
                                    {viewingSubmission.message}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          )}

                          {/* Timeline */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Timeline</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <div>
                                    <div className="font-medium">Submission received</div>
                                    <div className="text-sm text-gray-500">
                                      {formatDate(viewingSubmission.created_at)}
                                    </div>
                                  </div>
                                </div>
                                
                                {viewingSubmission.updated_at !== viewingSubmission.created_at && (
                                  <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div>
                                      <div className="font-medium">Status updated</div>
                                      <div className="text-sm text-gray-500">
                                        {formatDate(viewingSubmission.updated_at)}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
