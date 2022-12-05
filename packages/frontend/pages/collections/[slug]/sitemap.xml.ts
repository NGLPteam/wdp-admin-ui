import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import getEntitySitemap from "helpers/getEntitySitemap";
import {
  sitemapCollectionsQuery,
  sitemapCollectionsQueryResponse,
} from "@/relay/sitemapCollectionsQuery.graphql";

function generateSiteMap(data: sitemapCollectionsQueryResponse) {
  return data.collection ? getEntitySitemap(data.collection) : "";
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({
  res,
  query: urlQuery,
}: GetServerSidePropsContext) {
  const slug = routeQueryArrayToString(urlQuery?.slug);

  const env = environment();
  // We make an API call to gather the URLs for our site
  const data = await fetchQuery<sitemapCollectionsQuery>(env, query, {
    slug,
  }).toPromise();

  if (data) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  }

  return {
    props: {},
  };
}

export default SiteMap;

const query = graphql`
  query sitemapCollectionsQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...getEntitySitemapFragment
    }
  }
`;
