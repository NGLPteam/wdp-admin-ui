import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDestroyer, useDrawerHelper } from "hooks";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import ContributionUpdateForm from "components/composed/contribution/ContributionUpdateForm";
import type {
  CollectionContributionEditDrawerQuery as Query,
  CollectionContributionEditDrawerQuery$data as Response,
} from "__generated__/CollectionContributionEditDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function CollectionContributionEditDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render delete button */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Delete button */
    const handleDelete = () => {
      if (data.collectionContribution?.id) {
        destroy.contribution(
          { contributionId: data.collectionContribution.id },
          t("glossary.contribution"),
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions handleDelete={handleDelete} />;
  }

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ collectionContributionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          header={t("actions.edit.collection_contribution")}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons(data)}
        >
          {data && data.collectionContribution && (
            <ContributionUpdateForm
              data={data.collectionContribution}
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
            />
          )}
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  );
}
const query = graphql`
  query CollectionContributionEditDrawerQuery(
    $collectionContributionSlug: Slug!
  ) {
    collectionContribution(slug: $collectionContributionSlug) {
      ...ContributionUpdateFormFragment
      id
      collection {
        title
      }
    }
  }
`;
