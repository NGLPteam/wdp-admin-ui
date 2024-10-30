import { useId } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import HeroTemplate from "@/components/templates/Hero";
import NavigationTemplate from "@/components/templates/EntityNavigation";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplateQuery as Query } from "@/relay/pageTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function TemplatePage() {
  const uid = useId();

  const slug = "QgEVDXxtMe5ieZLS6dZBfR2oowB4Kz";

  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { community } = data ?? {};

  if (!community) return notFound();

  const { hero, navigation, main } = community.layouts;

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <HeroTemplate data={community} layoutData={hero} />
      <NavigationTemplate data={navigation} skipToId={`${uid}-tab-content`} />
      {!!templates?.length &&
        templates.map((t, i) => (
          <TemplateFactory key={i} data={t} entityData={community} />
        ))}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplateQuery($slug: Slug!) {
    community(slug: $slug) {
      ...HeroTemplateFragment
      ...FactoryTemplatesEntityFragment
      layouts {
        hero {
          ...HeroTemplateLayoutFragment
        }
        navigation {
          ...EntityNavigationTemplateFragment
        }
        main {
          templates {
            ...FactoryTemplatesFragment
          }
        }
      }
    }
  }
`;
