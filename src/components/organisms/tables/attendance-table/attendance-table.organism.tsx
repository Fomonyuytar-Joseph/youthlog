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
import { ArrowUpDown, SquarePen, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AttendanceType } from "@/types/attendance.type";

interface AttendanceTableProps {
  data: AttendanceType[];
  handleDelete :(attendance:AttendanceType)=>void
  handleEdit :(attendance:AttendanceType)=>void
}



const AttendanceTable:React.FC<AttendanceTableProps> = ({data,handleDelete,handleEdit}) => {
 const columns: ColumnDef<AttendanceType>[] = [
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
     accessorKey: "date",
     header: "Date",
     cell: ({ row }) => {
       return <div className="font-medium">{row.getValue("date")}</div>;
     },
   },
   {
     accessorKey: "present",
     header: ({ column }) => {
       return (
         <Button
           variant="ghost"
           className="!px-0"
           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
           Present
           <ArrowUpDown />
         </Button>
       );
     },
     cell: ({ row }) => (
       <div className="capitalize">{row.getValue("present")}</div>
     ),
   },
   {
     accessorKey: "absent",
     header: "Absent",
     cell: ({ row }) => {
       return <div className="font-medium">{row.getValue("absent")}</div>;
     },
   },
   {
     id: "actions",
     enableHiding: false,
     cell: ({ row }) => {
      //  console.log("Row data:", row.original);

       return (
         <div className="flex items-center gap-4">
           <Button className="bg-green-100 hover:bg-green-100 cursor-pointer" onClick={() => handleEdit(row.original)}>
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

export default AttendanceTable;


