import { useSearchQueryVars } from "hooks";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import ItemList from "components/composed/item/ItemList";
import { ItemListQuery as Query } from "@/relay/ItemListQuery.graphql";
import { LoadingPage } from "components/atomic";
import { query } from "components/composed/item/ItemList/ItemList";

export default function ItemListView() {
  const searchQueryVars = useSearchQueryVars();

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ ...searchQueryVars, hasQuery }}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) => queryRef && <ItemList queryRef={queryRef} />}
    </QueryLoaderWrapper>
  );
}
