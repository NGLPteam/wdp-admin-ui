import { Column } from "react-table";
import { UpdatableNode, PartialColumnish } from "./types";
import { formatDate } from "helpers";
import { useTranslation } from "react-i18next";

const UpdatedAtColumn = <NodeType extends UpdatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    align: "left",
    Header: <>{t("columns.updatedAt")}</>,
    id: "updatedAt",
    disableSortBy: false,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
    ...props,
  };
};

export default UpdatedAtColumn;
