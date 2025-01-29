import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDrawerHelper } from "hooks";
import { Drawer } from "components/layout";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import ContributionCreateForm from "../ContributionCreateForm";
import type { ItemContributionCreateDrawerQuery as Query } from "__generated__/ItemContributionCreateDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function ItemContributionCreateDrawer({
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
        data?.item?.id && data?.item?.title ? (
          <Drawer
            header={t("actions.create.contribution")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <ContributionCreateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              contributableId={data.item.id}
              contributableName={data.item.title}
              type="item"
            />
          </Drawer>
        ) : null
      }
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query ItemContributionCreateDrawerQuery($slug: Slug!) {
    item(slug: $slug) {
      id
      title
    }
  }
`;
