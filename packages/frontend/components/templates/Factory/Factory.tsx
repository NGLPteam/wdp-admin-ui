"use client";

import { graphql, useFragment } from "react-relay";
import { FactoryTemplatesFragment$key } from "@/relay/FactoryTemplatesFragment.graphql";
import Hero from "../Hero/Hero";
import Descendants, {
  type DescendantsTemplateData,
} from "../Descendants/Descendants";
import Detail, { type DetailTemplateData } from "../Detail/Detail";
import Contributors, {
  type ContributorsTemplateData,
} from "../Contributors/Contributors";
import EntityNavigation, {
  type EntityNavigationTemplateData,
} from "../EntityNavigation/EntityNavigation";
import Links, { type LinksTemplateData } from "../Links/Links";
import OrderingNavigation, {
  type OrderingNavigationTemplateData,
} from "../OrderingNavigation/OrderingNavigation";
import Pages, { type PagesTemplateData } from "../Pages/Pages";
import List from "../lists/List";

type AnyTemplate = (
  | DescendantsTemplateData
  | DetailTemplateData
  | ContributorsTemplateData
  | EntityNavigationTemplateData
  | LinksTemplateData
  | OrderingNavigationTemplateData
  | PagesTemplateData
) & { _typename: string };

// type TemplateData = {
//   hero: HeroTemplateData;
//   templates?: AnyTemplate[];
// };

const TEMPLATE_COMPONENT_MAP = {
  descendants: Descendants,
  detail: Detail,
  contributors: Contributors,
  links: Links,
  pages: Pages,
  entityNavigation: EntityNavigation,
  orderingNavigation: OrderingNavigation,
};

export default function TemplateFactory({
  data,
}: {
  data: FactoryTemplatesFragment$key | null;
}) {
  const entity = useFragment(fragment, data);

  const templates: AnyTemplate[] = [];

  return entity ? (
    <>
      <Hero data={entity} />
      {!!templates.length &&
        templates.map((t, i) => {
          const Template =
            TEMPLATE_COMPONENT_MAP[
              t._typename as keyof typeof TEMPLATE_COMPONENT_MAP
            ];
          // @ts-expect-error props for union type
          return <Template key={i} {...t} />;
        })}
      <List variant="card" />
      <div className="a-bg-custom10">
        <div className="l-container-wide" style={{ minBlockSize: "20vh" }}>
          templates here
        </div>
      </div>
      <List variant="grid" />
      <List variant="summary" bgColor="light" />
      <List variant="promo" />
      <List variant="compact" bgColor="light" />
    </>
  ) : null;
}

const fragment = graphql`
  fragment FactoryTemplatesFragment on AnyEntity {
    ...HeroTemplateFragment
  }
`;
