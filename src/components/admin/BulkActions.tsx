import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactSubmission } from "@/integrations/supabase/contact-service";
import { 
  Download, 
  Trash2, 
  Mail, 
  CheckSquare, 
  Square,
  MoreHorizontal,
  FileSpreadsheet,
  FileJson,
  Send
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface BulkActionsProps {
  selectedIds: string[];
  submissions: ContactSubmission[];
  onSelectionChange: (ids: string[]) => void;
  onBulkDelete?: (ids: string[]) => Promise<void>;
  onBulkStatusUpdate?: (ids: string[], status: string) => Promise<void>;
}

export const BulkActions = ({ 
  selectedIds, 
  submissions, 
  onSelectionChange,
  onBulkDelete,
  onBulkStatusUpdate 
}: BulkActionsProps) => {
  const { toast } = useToast();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedSubmissions = submissions.filter(sub => selectedIds.includes(sub.id));
  const allSelected = submissions.length > 0 && selectedIds.length === submissions.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(submissions.map(sub => sub.id));
    }
  };

  const exportToCSV = () => {
    if (selectedIds.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select items to export",
        variant: "destructive"
      });
      return;
    }

    const headers = ['Name', 'Email', 'Company', 'Phone', 'Status', 'Message', 'Created At'];
    const rows = selectedSubmissions.map(sub => [
      sub.name,
      sub.email,
      sub.company || '',
      sub.phone || '',
      sub.status,
      (sub.message || '').replace(/"/g, '""'), // Escape quotes
      new Date(sub.created_at).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `contacts_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    toast({
      title: "Export successful",
      description: `Exported ${selectedIds.length} contacts to CSV`
    });
  };

  const exportToJSON = () => {
    if (selectedIds.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select items to export",
        variant: "destructive"
      });
      return;
    }

    const jsonContent = JSON.stringify(selectedSubmissions, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `contacts_export_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    toast({
      title: "Export successful",
      description: `Exported ${selectedIds.length} contacts to JSON`
    });
  };

  const handleBulkDelete = async () => {
    if (!onBulkDelete) return;
    
    setIsProcessing(true);
    try {
      await onBulkDelete(selectedIds);
      setShowDeleteDialog(false);
      onSelectionChange([]);
      toast({
        title: "Deleted successfully",
        description: `Removed ${selectedIds.length} contacts`
      });
    } catch (error) {
      toast({
        title: "Delete failed",
        description: "Failed to delete selected contacts",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBulkStatusUpdate = async (status: string) => {
    if (!onBulkStatusUpdate) return;
    
    setIsProcessing(true);
    try {
      await onBulkStatusUpdate(selectedIds, status);
      onSelectionChange([]);
      toast({
        title: "Status updated",
        description: `Updated status for ${selectedIds.length} contacts`
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: "Failed to update contact status",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const copyEmails = () => {
    const emails = selectedSubmissions.map(sub => sub.email).join('; ');
    navigator.clipboard.writeText(emails);
    toast({
      title: "Emails copied",
      description: `Copied ${selectedIds.length} email addresses to clipboard`
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleSelectAll}
          className="gap-2"
        >
          {allSelected ? <CheckSquare className="h-4 w-4" /> : <Square className="h-4 w-4" />}
          {allSelected ? 'Deselect All' : 'Select All'}
        </Button>

        {selectedIds.length > 0 && (
          <>
            <div className="text-sm text-muted-foreground">
              {selectedIds.length} selected
            </div>

            <div className="flex items-center gap-2 ml-auto">
              {/* Export Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={exportToCSV} className="gap-2">
                    <FileSpreadsheet className="h-4 w-4" />
                    Export as CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={exportToJSON} className="gap-2">
                    <FileJson className="h-4 w-4" />
                    Export as JSON
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Status Update Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Send className="h-4 w-4" />
                    Update Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleBulkStatusUpdate('contacted')} disabled={isProcessing}>
                    Mark as Contacted
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleBulkStatusUpdate('qualified')} disabled={isProcessing}>
                    Mark as Qualified
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleBulkStatusUpdate('converted')} disabled={isProcessing}>
                    Mark as Converted
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleBulkStatusUpdate('rejected')} disabled={isProcessing}>
                    Mark as Rejected
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* More Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={copyEmails} className="gap-2">
                    <Mail className="h-4 w-4" />
                    Copy Email Addresses
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => setShowDeleteDialog(true)} 
                    className="gap-2 text-red-600"
                    disabled={isProcessing}
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete Selected
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {selectedIds.length} contacts?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The selected contacts and all their data
              will be permanently deleted from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isProcessing}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleBulkDelete} 
              disabled={isProcessing}
              className="bg-red-600 hover:bg-red-700"
            >
              {isProcessing ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BulkActions;