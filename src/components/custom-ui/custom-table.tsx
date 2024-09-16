"use client";

import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  //   DropdownMenuCheckboxItem,
  //   DropdownMenuContent,
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
import { formatDate } from "@/utlis/date-formater";
import { cn } from "@/lib/utils";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { routes } from "@/utlis/routes";
import ConfirmModal from "./confirm-modal";
import { Search } from "lucide-react";

const data: Payment[] = [
  {
    id: 667,
    campaignName: "obinna campaign",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:52.767",
    endDate: "2016-11-05T22:29:52.767",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 668,
    campaignName: "michael opara",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:53.874",
    endDate: "2016-11-05T22:29:53.875",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Active",
  },
  {
    id: 669,
    campaignName: "samson david",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:54.093",
    endDate: "2016-11-05T22:29:54.093",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 670,
    campaignName: "Somto Clark",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:54.77",
    endDate: "2016-11-05T22:29:54.77",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Active",
  },
  {
    id: 672,
    campaignName: "Martins Xavi",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:55.238",
    endDate: "2016-11-05T22:29:55.238",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 673,
    campaignName: "Dark Charles",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:55.955",
    endDate: "2016-11-05T22:29:55.956",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 674,
    campaignName: "Ugo Zander",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:56.635",
    endDate: "2016-11-05T22:29:56.635",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 675,
    campaignName: "James campaign",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:56.842",
    endDate: "2016-11-05T22:29:56.842",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 676,
    campaignName: "Kate Lary",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:57.499",
    endDate: "2016-11-05T22:29:57.499",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "active",
  },
  {
    id: 677,
    campaignName: "Nath Haris",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:57.721",
    endDate: "2016-11-05T22:29:57.721",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "active",
  },
  {
    id: 678,
    campaignName: "Drake Samson",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:58.399",
    endDate: "2016-11-05T22:29:58.399",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 679,
    campaignName: "Lookman Frank",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:58.643",
    endDate: "2016-11-05T22:29:58.644",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 680,
    campaignName: "Ngozi Daris",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:58.871",
    endDate: "2016-11-05T22:29:58.871",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
  {
    id: 681,
    campaignName: "Dinma Ekene",
    campaignDescription: "obinna campaign",
    startDate: "2008-12-09T22:29:59.764",
    endDate: "2016-11-05T22:29:59.764",
    digestCampaign: "No",
    linkedKeywords: ["obi", "nna"],
    dailyDigest: "daily",
    campaignStatus: "Inactive",
  },
];

export type Payment = {
  id: number;
  startDate: string;
  campaignStatus: "Inactive" | "active" | "Active";
  campaignName: string;
  campaignDescription: string;
  endDate: string;
  digestCampaign: string;
  linkedKeywords: string[];
  dailyDigest: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "id",
    header: () => <p className="font-xs font-bold">S/N</p>,
    cell: ({ row }) => `${Number(row.id) + 1}.`,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "campaignName",
    header: () => <p className="font-xs font-bold">Campaign Name</p>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("campaignName")}</div>
    ),
  },
  //   {
  //     accessorKey: "email",
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Email
  //           <CaretSortIcon className="ml-2 h-4 w-4" />
  //         </Button>
  //       );
  //     },
  //     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  //   },
  {
    accessorKey: "startDate",
    header: () => <p className="font-xs font-bold">Start Date</p>,
    cell: ({ row }) => (
      <div className="lowercase">{formatDate(row.getValue("startDate"))}</div>
    ),
  },
  {
    accessorKey: "campaignStatus",
    header: () => <p className="font-xs font-bold">Status</p>,
    cell: ({ row }) => (
      <div
        className={cn(
          "font-bold text-xs uppercase",
          row.getValue("campaignStatus") === "Inactive"
            ? "text-[var(--error-color)]"
            : " text-[var(--success-color)]"
        )}
      >
        {row?.getValue("campaignStatus")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <p className="font-xs font-bold">Actions</p>,
    cell: ({ row }) => {
      return <ActionButton row={row} />;
    },
  },
];

export function CustomTable() {
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
      <div className="flex justify-between items-center py-4">
        <div className="inline-flex gap-x-4">
          <Button
            variant={
              (table
                .getColumn("campaignStatus")
                ?.getFilterValue() as string) === undefined
                ? "default"
                : "outline"
            }
            onClick={() =>
              table.getColumn("campaignStatus")?.setFilterValue("")
            }
            className={cn("text-sm font-medium rounded !p-2.5")}
          >
            All (90)
          </Button>
          <Button
            variant={
              (table
                .getColumn("campaignStatus")
                ?.getFilterValue() as string) === "Inactive"
                ? "default"
                : "outline"
            }
            onClick={() =>
              table.getColumn("campaignStatus")?.setFilterValue("Inactive")
            }
            className={cn("text-sm font-medium rounded !p-2.5")}
          >
            Inactive (4)
          </Button>
          <Button
            variant={
              (table
                .getColumn("campaignStatus")
                ?.getFilterValue() as string) === "Active"
                ? "default"
                : "outline"
            }
            onClick={() =>
              table.getColumn("campaignStatus")?.setFilterValue("Active")
            }
            className={cn("text-sm font-medium rounded !p-2.5")}
          >
            Active (86)
          </Button>
        </div>
        <div className="inline-flex items-center gap-x-[28px]">
          <div className="relative w-fit">
            <Input
              id="search"
              type="search"
              placeholder="Search..."
              value={
                (table.getColumn("campaignName")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("campaignName")
                  ?.setFilterValue(event.target.value)
              }
              className="!w-[240px] !h-[44px] focus-visible:ring-0 rounded bg-transparent pl-[10px] border-[var(--text-color3)]"
            />
            <Search className="absolute right-2.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer size-4 text-muted-foreground" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto !w-[190px] bg-transparent text-[var(--text-color3)] border-[var(--text-color3)] justify-between hover:border-[var(--text-color3)] rounded !h-[44px] "
              >
                Filter by date <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent> */}
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-[var(--bg-color)] py-3 px-2.5"
                    >
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
      <div className="flex items-center justify-between space-x-2 py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  if (table.getCanPreviousPage()) {
                    table.previousPage();
                  }
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  if (table.getCanNextPage()) {
                    table.nextPage();
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className=" text-sm text-black ">
          showing {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} results
        </div>
      </div>
    </div>
  );
}

function ActionButton({ row }: { row: Row<Payment> }) {
  const rowData = row.original;
  const [cancelCampaignModal, setCancelCampaignModal] =
    React.useState<boolean>(false);
  return (
    <div className="inline-flex gap-x-6 items-center">
      <Link to={routes.VIEW_CAMPAIGN(rowData.id)} className="cursor-pointer">
        <img src={EyeIcon} alt="eye icon" />
      </Link>
      <Link to={routes.EDIT_CAMPAIGN(rowData.id)} className="cursor-pointer">
        <img src={EditIcon} alt="eye icon" />
      </Link>
      <span
        className="cursor-pointer"
        onClick={() => setCancelCampaignModal(true)}
      >
        <img src={BinIcon} alt="eye icon" />
      </span>
      <ConfirmModal
        show={cancelCampaignModal}
        title="Stop Campaign"
        desc="Microsoft campaign"
        handleClose={() => setCancelCampaignModal(false)}
        handleConfirm={() => {
          setCancelCampaignModal(false);
        }}
      />
    </div>
  );
}
