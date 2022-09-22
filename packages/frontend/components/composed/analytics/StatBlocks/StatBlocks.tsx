import StatBlock from "./StatBlock";
import STATES from "./states.json";
import * as Styled from "./StatBlocks.styles";
import { ArticleAnalyticsBlockFragment$data } from "@/relay/ArticleAnalyticsBlockFragment.graphql";

type Props = {
  data: ArticleAnalyticsBlockFragment$data;
  region: string;
  mode: string;
  dateLabel: string;
};

export default function StatBlocks({
  data,
  region: map,
  mode,
  dateLabel,
}: Props) {
  const total =
    mode === "views"
      ? data.viewsByDate.unfilteredTotal
      : data.downloadsByDate.unfilteredTotal;
  const filteredTotal =
    mode === "views" ? data.viewsByDate.total : data.downloadsByDate.total;

  const regionsData =
    mode === "views"
      ? [...data.entityViewsByRegion.results]
      : [...data.assetDownloadsByRegion.results];

  const aggregatedByCountry = regionsData.reduce(
    (obj: { [key: string]: number }, region) => {
      const { count, countryCode } = region;
      if (Object.keys(obj).includes(countryCode)) {
        obj[countryCode] = obj[countryCode] + count;
        return obj;
      }
      obj[countryCode] = count;
      return obj;
    },
    {}
  );
  const topRegion = regionsData.sort((a, b) => a.count - b.count)[
    regionsData.length - 1
  ];
  const topAggregateRegion = Object.keys(aggregatedByCountry).sort(
    (a, b) => aggregatedByCountry[a] - aggregatedByCountry[b]
  )[Object.keys(aggregatedByCountry).length - 1];

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const regionName =
    map === "US"
      ? STATES[topRegion.regionCode as keyof typeof STATES]
      : regionNames.of(topAggregateRegion);

  return (
    <Styled.BlockGroup>
      <StatBlock
        stat={total}
        label={
          mode === "views"
            ? "analytics.total_views"
            : "analytics.total_downloads"
        }
      />
      <StatBlock
        stat={filteredTotal}
        label={
          mode === "views"
            ? `analytics.views_${dateLabel}`
            : `analytics.downloads_${dateLabel}`
        }
      />
      <StatBlock
        headingLevel={3}
        stat={regionName}
        label={map === "US" ? "analytics.top_state" : "analytics.top_country"}
      />
    </Styled.BlockGroup>
  );
}
