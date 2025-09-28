import { useState, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Mail,
  Phone,
  Building,
  Calendar,
  User,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DataRow {
  [key: string]: string | number | Date | boolean | null | undefined;
}

interface SAPDataTableProps {
  title: string;
  data: DataRow[];
  columns: Array<{
    key: string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    type?: 'text' | 'number' | 'date' | 'status' | 'action';
    width?: string;
  }>;
  onRowSelect?: (selectedRows: DataRow[]) => void;
  onRowAction?: (action: string, row: DataRow) => void;
  allowBulkActions?: boolean;
  searchPlaceholder?: string;
}

export const SAPDataTable = ({
  title,
  data,
  columns,
  onRowSelect,
  onRowAction,
  allowBulkActions = true,
  searchPlaceholder = "Search..."
}: SAPDataTableProps) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  // Filter and sort data
  const processedData = useMemo(() => {
    let filtered = data.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    // Apply column filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        filtered = filtered.filter(row =>
          String(row[key]).toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    // Apply sorting
    if (sortConfig) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        
        if (aVal < bVal) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aVal > bVal) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, filters, sortConfig]);

  // Pagination
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return processedData.slice(start, start + pageSize);
  }, [processedData, currentPage, pageSize]);

  const totalPages = Math.ceil(processedData.length / pageSize);

  const handleSort = (columnKey: string) => {
    setSortConfig(current => {
      if (current?.key === columnKey) {
        return {
          key: columnKey,
          direction: current.direction === 'asc' ? 'desc' : 'asc'
        };
      }
      return { key: columnKey, direction: 'asc' };
    });
  };

  const handleRowSelect = (index: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
    
    if (onRowSelect) {
      const selectedData = Array.from(newSelected).map(i => paginatedData[i]);
      onRowSelect(selectedData);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
      if (onRowSelect) onRowSelect([]);
    } else {
      const allIndices = new Set(paginatedData.map((_, index) => index));
      setSelectedRows(allIndices);
      if (onRowSelect) onRowSelect(paginatedData);
    }
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig?.key !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="w-4 h-4 text-blue-600" />
      : <ArrowDown className="w-4 h-4 text-blue-600" />;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'new': { color: 'bg-blue-100 text-blue-800', label: 'New' },
      'contacted': { color: 'bg-orange-100 text-orange-800', label: 'Contacted' },
      'in-progress': { color: 'bg-purple-100 text-purple-800', label: 'In Progress' },
      'completed': { color: 'bg-green-100 text-green-800', label: 'Completed' },
      'active': { color: 'bg-green-100 text-green-800', label: 'Active' },
      'inactive': { color: 'bg-gray-100 text-gray-800', label: 'Inactive' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.new;
    return (
      <Badge className={cn("px-2 py-1 text-xs font-medium rounded-full", config.color)}>
        {config.label}
      </Badge>
    );
  };

  const renderCellContent = (value: string | number | Date | boolean | null | undefined, column: SAPDataTableProps['columns'][0], row?: DataRow) => {
    switch (column.type) {
      case 'status':
        return getStatusBadge(String(value || ''));
      case 'date':
        return value ? new Date(value as string | number | Date).toLocaleDateString() : '';
      case 'action':
        return (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRowAction?.('view', row!)}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRowAction?.('edit', row!)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRowAction?.('delete', row!)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        );
      default:
        return String(value || '');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription>
              {processedData.length} entries ({selectedRows.size} selected)
            </CardDescription>
          </div>
          
          {/* Toolbar Actions */}
          <div className="flex items-center gap-2">
            {allowBulkActions && selectedRows.size > 0 && (
              <>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Selected
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Bulk Edit
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Selected
                </Button>
              </>
            )}
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={pageSize.toString()} onValueChange={(value) => setPageSize(Number(value))}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 rows</SelectItem>
              <SelectItem value="25">25 rows</SelectItem>
              <SelectItem value="50">50 rows</SelectItem>
              <SelectItem value="100">100 rows</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Columns
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* SAP-Style Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                {allowBulkActions && (
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                )}
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={cn(
                      "font-medium text-gray-900",
                      column.sortable && "cursor-pointer hover:bg-gray-100",
                      column.width && `w-${column.width}`
                    )}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}
                      {column.sortable && getSortIcon(column.key)}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + (allowBulkActions ? 1 : 0)}
                    className="text-center py-8 text-gray-500"
                  >
                    No data found. Try adjusting your search or filters.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedData.map((row, index) => (
                  <TableRow
                    key={index}
                    className={cn(
                      "hover:bg-gray-50",
                      selectedRows.has(index) && "bg-blue-50"
                    )}
                  >
                    {allowBulkActions && (
                      <TableCell>
                        <Checkbox
                          checked={selectedRows.has(index)}
                          onCheckedChange={() => handleRowSelect(index)}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell key={column.key} className="py-3">
                        {renderCellContent(row[column.key], column, row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* SAP-Style Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
          <div className="text-sm text-gray-600">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} entries
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(1)}
            >
              First
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + Math.max(1, currentPage - 2);
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              Last
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
