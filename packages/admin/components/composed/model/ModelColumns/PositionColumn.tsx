import get from "lodash/get";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
};

const PositionColumn = <T extends Node>(
  { Header: _header, ...props }: Props<T> = {
    Header: "Position",
  },
): ColumnDef<T> => {
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    id: "position",
    header: "Position",
    meta: {
      className: "t-column-indent",
    },
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T) => get(originalRow, "position") }),
    ...props,
  };
};

export default PositionColumn;
