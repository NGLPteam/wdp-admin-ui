/**
 * @generated SignedSource<<0e523ad2ebb35b8c2abe78018aeb6f66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnalyticsPrecision = "DAY" | "HOUR" | "MONTH" | "QUARTER" | "WEEK" | "YEAR" | "%future added value";
export type DateFilterInput = {
  endDate?: string | null | undefined;
  startDate?: string | null | undefined;
  timeZone?: string | null | undefined;
};
export type pageItemMetricsQuery$variables = {
  dateRange: DateFilterInput;
  precision: AnalyticsPrecision;
  slug: string;
  usOnly: boolean;
};
export type pageItemMetricsQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleAnalyticsBlockFragment">;
  } | null | undefined;
};
export type pageItemMetricsQuery = {
  response: pageItemMetricsQuery$data;
  variables: pageItemMetricsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dateRange"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "precision"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "usOnly"
},
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v5 = {
  "kind": "Variable",
  "name": "precision",
  "variableName": "precision"
},
v6 = {
  "kind": "Variable",
  "name": "usOnly",
  "variableName": "usOnly"
},
v7 = {
  "kind": "Variable",
  "name": "dateFilter",
  "variableName": "dateRange"
},
v8 = [
  (v7/*: any*/),
  (v5/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v11 = [
  (v9/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "unfilteredTotal",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "minDate",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsEventCountResult",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v10/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v12 = [
  (v7/*: any*/),
  (v6/*: any*/)
],
v13 = [
  (v9/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsRegionCountResult",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "countryCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "regionCode",
        "storageKey": null
      },
      (v10/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageItemMetricsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "dateRange",
                "variableName": "dateRange"
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "ArticleAnalyticsBlockFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageItemMetricsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "alias": "downloadsByDate",
            "args": (v8/*: any*/),
            "concreteType": "AnalyticsEventCountSummary",
            "kind": "LinkedField",
            "name": "assetDownloads",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "AnalyticsRegionCountSummary",
            "kind": "LinkedField",
            "name": "assetDownloadsByRegion",
            "plural": false,
            "selections": (v13/*: any*/),
            "storageKey": null
          },
          {
            "alias": "viewsByDate",
            "args": (v8/*: any*/),
            "concreteType": "AnalyticsEventCountSummary",
            "kind": "LinkedField",
            "name": "entityViews",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "AnalyticsRegionCountSummary",
            "kind": "LinkedField",
            "name": "entityViewsByRegion",
            "plural": false,
            "selections": (v13/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "65315e630027c5c141895d21d0c5cd8f",
    "id": null,
    "metadata": {},
    "name": "pageItemMetricsQuery",
    "operationKind": "query",
    "text": "query pageItemMetricsQuery(\n  $slug: Slug!\n  $dateRange: DateFilterInput!\n  $precision: AnalyticsPrecision!\n  $usOnly: Boolean!\n) {\n  item(slug: $slug) {\n    ...ArticleAnalyticsBlockFragment_3yzii9\n    id\n  }\n}\n\nfragment ArticleAnalyticsBlockFragment_3yzii9 on Item {\n  downloadsByDate: assetDownloads(dateFilter: $dateRange, precision: $precision) {\n    total\n    unfilteredTotal\n    minDate\n    results {\n      count\n      date\n    }\n  }\n  assetDownloadsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  viewsByDate: entityViews(dateFilter: $dateRange, precision: $precision) {\n    total\n    unfilteredTotal\n    minDate\n    results {\n      count\n      date\n    }\n  }\n  entityViewsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "5c4a2e6225b6b3ae511af015bb31cda8";

export default node;
