import React from "react";
import { Pagination } from "components/atomic";
import { graphql, useFragment } from "react-relay";
import { ModelPaginationFragment$key } from "@/relay/ModelPaginationFragment.graphql";

interface ModelPaginationProps<T extends ModelPaginationFragment$key> {
  data: T;
}

function ModelPagination<T extends ModelPaginationFragment$key>({
  data,
}: ModelPaginationProps<T>) {
  const { pageInfo } = useFragment<ModelPaginationFragment$key>(fragment, data);

  return (
    <Pagination currentPage={pageInfo.page} totalPages={pageInfo.pageCount} />
  );
}

export default ModelPagination;

const fragment = graphql`
  fragment ModelPaginationFragment on Paginated {
    pageInfo {
      page
      pageCount
    }
  }
`;
