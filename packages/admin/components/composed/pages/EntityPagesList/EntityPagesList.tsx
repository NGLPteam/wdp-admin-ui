import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type { EntityPagesListFragment$key } from "@/relay/EntityPagesListFragment.graphql";
import type {
  EntityPagesListDataFragment,
  EntityPagesListDataFragment$key,
} from "@/relay/EntityPagesListDataFragment.graphql";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityPagesList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: EntityPagesListProps) {
  const { t } = useTranslation();

  /* eslint-disable max-len */
  const sourceEntity = useMaybeFragment<EntityPagesListFragment$key>(
    fragment,
    data
  );
  const pagesData = useMaybeFragment<EntityPagesListDataFragment$key>(
    linksFragment,
    sourceEntity?.pages
  );
  /* eslint-enable max-len */

  /** Columns */
  const columns = [
    ModelColumns.StringColumn<Node>({
      Header: <>{t("lists.name_column")}</>,
      id: "title",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("lists.slug_column")}</>,
      id: "slug",
    }),
  ];

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addPage"
        drawerQuery={{
          drawerSlug: sourceEntity?.slug ? sourceEntity.slug : "",
        }}
        icon="plus"
      >
        {t("actions.add.page")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, EntityPagesListDataFragment, Node>
      modelName={"page"}
      columns={columns}
      data={pagesData}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
    />
  );
}

interface EntityPagesListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityPagesListFragment$key | null;
}

type Node = EntityPagesListDataFragment["edges"][number]["node"];

const linksFragment = graphql`
  fragment EntityPagesListDataFragment on PageConnection {
    edges {
      node {
        title
        slug
      }
    }
    ...ModelListPageFragment
  }
`;

const fragment = graphql`
  fragment EntityPagesListFragment on AnyEntity {
    ... on Community {
      slug
      pages(page: $page, perPage: 20) {
        ...EntityPagesListDataFragment
      }
    }
    ... on Collection {
      slug
      pages(page: $page, perPage: 20) {
        ...EntityPagesListDataFragment
      }
    }
    ... on Item {
      slug
      pages(page: $page, perPage: 20) {
        ...EntityPagesListDataFragment
      }
    }
  }
`;

export default EntityPagesList;
