/**
 * @generated SignedSource<<92e98bc44dd4c45c2926f4019fd4a17d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageItemFilesQuery$variables = {
  slug: string;
};
export type pageItemFilesQuery$data = {
  readonly item: {
    readonly assets: {
      readonly " $fragmentSpreads": FragmentRefs<"AssetsBlockFragment">;
    };
  } | null | undefined;
};
export type pageItemFilesQuery = {
  response: pageItemFilesQuery$data;
  variables: pageItemFilesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "updatedAt",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageItemFilesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AnyAssetConnection",
            "kind": "LinkedField",
            "name": "assets",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AssetsBlockFragment"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageItemFilesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AnyAssetConnection",
            "kind": "LinkedField",
            "name": "assets",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AnyAssetEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "caption",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "contentType",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "downloadUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fileSize",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "kind",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "slug",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "altText",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageAttachment",
                            "kind": "LinkedField",
                            "name": "preview",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "storage",
                                "storageKey": null
                              },
                              {
                                "alias": "image",
                                "args": null,
                                "concreteType": "ImageSize",
                                "kind": "LinkedField",
                                "name": "small",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ImageDerivative",
                                    "kind": "LinkedField",
                                    "name": "webp",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "alt",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "url",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v2/*: any*/),
                            "type": "AssetDocument",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v2/*: any*/),
                            "type": "AssetImage",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v2/*: any*/),
                            "type": "AssetPDF",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v2/*: any*/),
                            "type": "AssetAudio",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v2/*: any*/),
                            "type": "AssetVideo",
                            "abstractKey": null
                          }
                        ],
                        "type": "Asset",
                        "abstractKey": "__isAsset"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f6ab8fecf6ef1ab1c22734d373cc8b30",
    "id": null,
    "metadata": {},
    "name": "pageItemFilesQuery",
    "operationKind": "query",
    "text": "query pageItemFilesQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    assets {\n      ...AssetsBlockFragment\n    }\n    id\n  }\n}\n\nfragment AssetBlockItemFragment on Asset {\n  __isAsset: __typename\n  caption\n  contentType\n  downloadUrl\n  fileSize\n  kind\n  name\n  slug\n  ...AssetThumbnailFragment\n  ... on AssetDocument {\n    updatedAt\n  }\n  ... on AssetImage {\n    updatedAt\n  }\n  ... on AssetPDF {\n    updatedAt\n  }\n  ... on AssetAudio {\n    updatedAt\n  }\n  ... on AssetVideo {\n    updatedAt\n  }\n}\n\nfragment AssetThumbnailFragment on Asset {\n  __isAsset: __typename\n  kind\n  slug\n  altText\n  preview {\n    storage\n    image: small {\n      webp {\n        alt\n        url\n      }\n    }\n  }\n}\n\nfragment AssetsBlockFragment on AnyAssetConnection {\n  edges {\n    node {\n      __typename\n      ...AssetBlockItemFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "88b81b43dfac826184315e403b589c87";

export default node;
