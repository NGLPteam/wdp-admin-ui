import { environment } from "@wdp/lib/app";
import { fetchQuery, graphql, readInlineData } from "relay-runtime";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetStaticPropsContext } from "next";
import { getStaticEntityDataQuery } from "@/relay/getStaticEntityDataQuery.graphql";

export default async function getStaticEntityData(
  context: GetStaticPropsContext
) {
  const { params: urlQuery } = context;

  const slug = routeQueryArrayToString(urlQuery?.slug);

  if (!slug) return;

  const env = environment();

  const data = await fetchQuery<getStaticEntityDataQuery>(env, query, {
    slug,
  }).toPromise();

  if (data) {
    return readInlineData(
      fragment,
      data.community || data.collection || data.item || null
    );
  }
}

const query = graphql`
  query getStaticEntityDataQuery($slug: Slug!) {
    community(slug: $slug) {
      ...getStaticEntityDataFragment
    }
    collection(slug: $slug) {
      ...getStaticEntityDataFragment
    }
    item(slug: $slug) {
      ...getStaticEntityDataFragment
    }
  }
`;

const fragment = graphql`
  fragment getStaticEntityDataFragment on AnyEntity @inline {
    ... on Entity {
      title
      summary
      thumbnail {
        storage
        medium {
          webp {
            url
            width
            height
          }
        }
      }
      thumbnailMetadata {
        alt
      }
      heroImage {
        storage
        medium {
          webp {
            url
            width
            height
          }
        }
      }
      heroImageMetadata {
        alt
      }
    }
  }
`;
