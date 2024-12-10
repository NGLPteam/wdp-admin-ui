import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import type { HeroImageLayout } from "@/types/graphql-schema";
import { HeaderHeroFragment$key } from "@/relay/HeaderHeroFragment.graphql";
import Alert from "@/components/atomic/Alert";
import TitleBlock from "./HeaderTitleBlock";
import Sidebar from "./HeaderSidebar";
import styles from "./Header.module.css";

export default function HeroHeader({
  data,
  layout,
  hiddenAlert,
}: {
  data?: HeaderHeroFragment$key | null;
  layout?: HeroImageLayout;
  hiddenAlert?: string;
}) {
  const template = useFragment(fragment, data);

  const { slots } = template ?? {};

  return template ? (
    <div
      className={
        layout
          ? classNames(styles.columns, {
              [styles["columns--two-column"]]: layout === "TWO_COLUMN",
            })
          : styles.inner
      }
    >
      {!!hiddenAlert && <Alert message={hiddenAlert} badge color="blue" />}
      <TitleBlock layout={layout} data={slots} />
      <Sidebar data={template} />
    </div>
  ) : null;
}

const fragment = graphql`
  fragment HeaderHeroFragment on HeroTemplateInstance {
    ...HeaderSidebarFragment
    slots {
      ...HeaderTitleBlockFragment
    }
  }
`;
