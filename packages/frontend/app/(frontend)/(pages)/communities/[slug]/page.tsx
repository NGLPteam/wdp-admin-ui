import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import TemplateFactory from "@/components/templates/Factory";
import MainLayoutGrid from "@/components/templates/MainGrid";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplateQuery as Query } from "@/relay/pageTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";

export default async function TemplatePage({
  params: { slug },
}: BasePageParams) {
  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { community } = data ?? {};

  if (!community) return notFound();

  const { main } = community.layouts;

  const { templates } = main ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <MainLayoutGrid>
        {!!templates?.length &&
          templates.map((t, i) => <TemplateFactory key={i} data={t} />)}
      </MainLayoutGrid>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplateQuery($slug: Slug!) {
    community(slug: $slug) {
      layouts {
        main {
          templates {
            ...FactoryTemplatesFragment
          }
        }
      }
    }
  }
`;
