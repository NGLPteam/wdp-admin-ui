/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppContextProviderQueryVariables = {};
export type AppContextProviderQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"GlobalContextFragment" | "ViewerContextFragment">;
};
export type AppContextProviderQuery = {
    readonly response: AppContextProviderQueryResponse;
    readonly variables: AppContextProviderQueryVariables;
};



/*
query AppContextProviderQuery {
  ...GlobalContextFragment
  ...ViewerContextFragment
}

fragment AvatarFragment on ImageAttachment {
  storage
  small {
    webp {
      ...ImageFragment
    }
  }
}

fragment GlobalContextFragment on Query {
  globalConfiguration {
    ...ProviderBarFragment
    id
  }
}

fragment ImageFragment on Image {
  __isImage: __typename
  alt
  url
  width
  height
}

fragment ProviderBarFragment on GlobalConfiguration {
  site {
    providerName
  }
}

fragment ViewerContextFragment on Query {
  viewer {
    name
    allowedActions
    uploadAccess
    uploadToken
    avatar {
      ...AvatarFragment
    }
    globalAdmin
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppContextProviderQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "GlobalContextFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ViewerContextFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppContextProviderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteSettings",
            "kind": "LinkedField",
            "name": "site",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "providerName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
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
            "name": "allowedActions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uploadAccess",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uploadToken",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "avatar",
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
                "alias": null,
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
                        "kind": "InlineFragment",
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "width",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "height",
                            "storageKey": null
                          }
                        ],
                        "type": "Image",
                        "abstractKey": "__isImage"
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "globalAdmin",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "00f15e7c7a58d5532348d3628d62f4be",
    "id": null,
    "metadata": {},
    "name": "AppContextProviderQuery",
    "operationKind": "query",
    "text": "query AppContextProviderQuery {\n  ...GlobalContextFragment\n  ...ViewerContextFragment\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment GlobalContextFragment on Query {\n  globalConfiguration {\n    ...ProviderBarFragment\n    id\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ProviderBarFragment on GlobalConfiguration {\n  site {\n    providerName\n  }\n}\n\nfragment ViewerContextFragment on Query {\n  viewer {\n    name\n    allowedActions\n    uploadAccess\n    uploadToken\n    avatar {\n      ...AvatarFragment\n    }\n    globalAdmin\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9046c90d28e32c399d0e9b1426a162c7';
export default node;
