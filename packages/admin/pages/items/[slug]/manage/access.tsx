import { graphql } from "relay-runtime";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import RoleAccessList from "components/composed/role/RoleAccessList";
import type { accessManageSlugItemsPagesQuery as Query } from "@/relay/accessManageSlugItemsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemAccess({ data }: Props) {
  return (
    <RoleAccessList<Query>
      data={data?.item}
      headerStyle="secondary"
      entityType="item"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["allAccessGrants", "assignedUsers"]}
      {...props}
    />
  );
};

ItemAccess.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query accessManageSlugItemsPagesQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      ...RoleAccessListFragment
    }
  }
`;

export default ItemAccess;
