import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Download, 
  Trash2, 
  Mail, 
  CheckCircle,
  MoreHorizontal,
  Calendar,
  Building,
  User
} from "lucide-react";
import { ContactSubmission } from "@/integrations/supabase/contact-service";

interface DataManagementToolsProps {
  submissions: ContactSubmission[];
  selectedSubmissions: string[];
  onSelectionChange: (selected: string[]) => void;
  onStatusUpdate: (ids: string[], status: string) => void;
  onDelete: (ids: string[]) => void;
  onExport: (submissions: ContactSubmission[]) => void;
}

type SortField = 'name' | 'email' | 'company' | 'status' | 'created_at';
type SortOrder = 'asc' | 'desc';

export const DataManagementTools = ({
  submissions,
  selectedSubmissions,
  onSelectionChange,
  onStatusUpdate,
  onDelete,
  onExport
}: DataManagementToolsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Get unique companies for filter
  const uniqueCompanies = useMemo(() => {
    const companies = submissions
      .map(s => s.company)
      .filter((company): company is string => Boolean(company))
      .filter((company, index, arr) => arr.indexOf(company) === index)
      .sort();
    return companies;
  }, [submissions]);

  // Filter and sort submissions
  const filteredAndSortedSubmissions = useMemo(() => {
    let filtered = submissions;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(sub => 
        sub.name.toLowerCase().includes(query) ||
        sub.email.toLowerCase().includes(query) ||
        sub.company?.toLowerCase().includes(query) ||
        sub.message?.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(sub => sub.status === statusFilter);
    }

    // Company filter
    if (companyFilter !== "all") {
      filtered = filtered.filter(sub => sub.company === companyFilter);
    }

    // Date filter
    if (dateFilter !== "all") {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateFilter) {
        case "today":
          filterDate.setHours(0, 0, 0, 0);
          break;
        case "week":
          filterDate.setDate(now.getDate() - 7);
          break;
        case "month":
          filterDate.setMonth(now.getMonth() - 1);
          break;
        default:
          filterDate.setTime(0);
      }
      
      filtered = filtered.filter(sub => new Date(sub.created_at) >= filterDate);
    }

    // Sort
    filtered.sort((a, b) => {
      let aVal: string | number | Date, bVal: string | number | Date;
      
      switch (sortField) {
        case 'name':
          aVal = a.name.toLowerCase();
          bVal = b.name.toLowerCase();
          break;
        case 'email':
          aVal = a.email.toLowerCase();
          bVal = b.email.toLowerCase();
          break;
        case 'company':
          aVal = (a.company || '').toLowerCase();
          bVal = (b.company || '').toLowerCase();
          break;
        case 'status':
          aVal = a.status;
          bVal = b.status;
          break;
        case 'created_at':
          aVal = new Date(a.created_at);
          bVal = new Date(b.created_at);
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [submissions, searchQuery, statusFilter, dateFilter, companyFilter, sortField, sortOrder]);

  const handleSelectAll = () => {
    if (selectedSubmissions.length === filteredAndSortedSubmissions.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(filteredAndSortedSubmissions.map(s => s.id));
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setDateFilter("all");
    setCompanyFilter("all");
  };

  const activeFilterCount = [
    searchQuery,
    statusFilter !== "all" ? statusFilter : null,
    dateFilter !== "all" ? dateFilter : null,
    companyFilter !== "all" ? companyFilter : null
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name, email, company, or message..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
            </SelectContent>
          </Select>

          {uniqueCompanies.length > 0 && (
            <Select value={companyFilter} onValueChange={setCompanyFilter}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                {uniqueCompanies.map(company => (
                  <SelectItem key={company} value={company}>{company}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Clear Filters */}
        {activeFilterCount > 0 && (
          <Button variant="outline" onClick={clearFilters} className="whitespace-nowrap">
            Clear ({activeFilterCount})
          </Button>
        )}
      </div>

      {/* Results Info and Bulk Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selectedSubmissions.length === filteredAndSortedSubmissions.length && filteredAndSortedSubmissions.length > 0}
              onCheckedChange={handleSelectAll}
            />
            <span className="text-sm">
              {selectedSubmissions.length > 0 ? (
                `${selectedSubmissions.length} of ${filteredAndSortedSubmissions.length} selected`
              ) : (
                `${filteredAndSortedSubmissions.length} submissions`
              )}
            </span>
          </div>

          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              <Filter className="h-3 w-3 mr-1" />
              {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} active
            </Badge>
          )}
        </div>

        {/* Bulk Actions */}
        {selectedSubmissions.length > 0 && (
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Update Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onStatusUpdate(selectedSubmissions, 'new')}>
                  Mark as New
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onStatusUpdate(selectedSubmissions, 'contacted')}>
                  Mark as Contacted
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onStatusUpdate(selectedSubmissions, 'in-progress')}>
                  Mark as In Progress
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onStatusUpdate(selectedSubmissions, 'completed')}>
                  Mark as Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onExport(filteredAndSortedSubmissions.filter(s => selectedSubmissions.includes(s.id)))}
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(selectedSubmissions)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        )}
      </div>

      {/* Sort Controls */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Sort by:</span>
        {[
          { key: 'created_at', label: 'Date', icon: Calendar },
          { key: 'name', label: 'Name', icon: User },
          { key: 'company', label: 'Company', icon: Building },
          { key: 'email', label: 'Email', icon: Mail },
          { key: 'status', label: 'Status', icon: CheckCircle },
        ].map(({ key, label, icon: Icon }) => (
          <Button
            key={key}
            variant="ghost"
            size="sm"
            onClick={() => handleSort(key as SortField)}
            className={`h-8 px-3 ${
              sortField === key ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            <Icon className="h-3 w-3 mr-1" />
            {label}
            {sortField === key && (
              <ArrowUpDown className={`h-3 w-3 ml-1 ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
            )}
          </Button>
        ))}
      </div>

      {/* Return filtered submissions for the table */}
      <div className="hidden">
        {JSON.stringify({ filteredAndSortedSubmissions, selectedSubmissions })}
      </div>
    </div>
  );
};
