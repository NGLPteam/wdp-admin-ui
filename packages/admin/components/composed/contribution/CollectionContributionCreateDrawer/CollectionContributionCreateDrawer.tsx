import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper } from "hooks";
import { Drawer } from "components/layout";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import ContributionCreateForm from "../ContributionCreateForm";
import type { CollectionContributionCreateDrawerQuery as Query } from "__generated__/CollectionContributionCreateDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function CollectionContributionCreateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  // Check if we have a contribution or item id
  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  return (
    <LazyLoadQueryWrapper<Query> query={query} variables={{ slug: drawerSlug }}>
      {({ data }) =>
        data?.collection?.id && data?.collection?.title ? (
          <Drawer
            header={t("actions.create.contribution")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <ContributionCreateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              contributableId={data.collection.id}
              contributableName={data.collection.title}
              type="collection"
            />
          </Drawer>
        ) : null
      }
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query CollectionContributionCreateDrawerQuery($slug: Slug!) {
    collection(slug: $slug) {
      id
      title
    }
  }
`;
