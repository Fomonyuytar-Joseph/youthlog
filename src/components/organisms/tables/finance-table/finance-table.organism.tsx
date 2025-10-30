"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ListFilter, SquarePen, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FinanceResponseType } from "@/types/finance.type";
import { formatDate } from "@/lib/utils/formatDate";

interface FinanceTableProps {
  data: FinanceResponseType[];
  handleDelete: (finance: FinanceResponseType) => void;
  handleEdit: (finance: FinanceResponseType) => void;
}

const FinanceTable: React.FC<FinanceTableProps> = ({
  data,
  handleDelete,
  handleEdit,
}) => {
  const columns: ColumnDef<FinanceResponseType>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="!px-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="!px-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("amount") + " XAF"}</div>
      ),
    },
    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="!px-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Type
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        const type = row.getValue("type");
        return (
          <div
            className={`capitalize w-fit text-xs rounded-full px-2 py-1 ${
              type === "INCOME"
                ? "text-green-500 bg-green-200"
                : "text-red-500 bg-red-200"
            }`}
          >
            {row.getValue("type")}
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        const formattedDate = formatDate(row.getValue("date"));
        return <div className="font-medium">{formattedDate}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-4">
            <Button
              className="bg-green-100 hover:bg-green-100 cursor-pointer"
              onClick={() => handleEdit(row.original)}
            >
              <SquarePen color="#15803d" />
            </Button>
            <Button
              className="bg-[#fdede4] hover:bg-[#fdede4] cursor-pointer"
              onClick={() => handleDelete(row.original)}
            >
              <Trash2 color="#b91c1c" />
            </Button>
          </div>
        );
      },
    },
  ];
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 py-4">
        <Input
          placeholder="Search finance name ..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm font-sans"
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 font-sans" asChild>
            <Button variant={"outline"}>
              <ListFilter />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>type</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Income</DropdownMenuItem>
                  <DropdownMenuItem>Expense</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Amount</DropdownMenuSubTrigger>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinanceTable;
