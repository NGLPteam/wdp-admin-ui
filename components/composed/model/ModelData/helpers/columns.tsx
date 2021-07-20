import { formatDate } from "helpers";
import { NamedLink } from "components/atomic";
import React from "react";

const createdAt = {
  Header: "Created At",
  id: "createdAt",
  disableSortBy: true,
  accessor: (row) => formatDate(row.createdAt),
};

const updatedAt = {
  Header: "Updated At",
  id: "updatedAt",
  accessor: (row) => formatDate(row.updatedAt),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nameFactory = (route: string, label: string, accessor: any) => ({
  Header: label,
  accessor: accessor,
  disableSortBy: true,
  Cell: ({ row, value }) => {
    return (
      <NamedLink route={route} routeParams={{ id: row.original.slug }} passHref>
        <a>{value}</a>
      </NamedLink>
    );
  },
});

const columns = { createdAt, updatedAt, nameFactory };

export default columns;
