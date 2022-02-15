/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UploadStorage = "CACHE" | "%future added value";
export type CreatePersonContributorInput = {
    email?: string | null | undefined;
    url?: string | null | undefined;
    bio?: string | null | undefined;
    links?: Array<ContributorLinkInput> | null | undefined;
    orcid?: string | null | undefined;
    image?: UploadedFileInput | null | undefined;
    imageMetadata?: ImageMetadataInput | null | undefined;
    givenName?: string | null | undefined;
    familyName?: string | null | undefined;
    title?: string | null | undefined;
    affiliation?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type ContributorLinkInput = {
    title: string;
    url: string;
};
export type UploadedFileInput = {
    id: unknown;
    storage?: UploadStorage | null | undefined;
    metadata?: UploadedFileMetadataInput | null | undefined;
};
export type UploadedFileMetadataInput = {
    alt?: string | null | undefined;
    filename?: string | null | undefined;
    mimeType?: string | null | undefined;
};
export type ImageMetadataInput = {
    alt?: string | null | undefined;
};
export type ContributorCreatePersonFormMutationVariables = {
    input: CreatePersonContributorInput;
};
export type ContributorCreatePersonFormMutationResponse = {
    readonly createPersonContributor: {
        readonly contributor: {
            readonly __typename: string;
            readonly givenName: string | null;
            readonly familyName: string | null;
            readonly title: string | null;
            readonly email: string | null;
            readonly affiliation: string | null;
            readonly bio: string | null;
            readonly orcid: string | null;
            readonly image: {
                readonly thumb: {
                    readonly png: {
                        readonly alt: string | null;
                        readonly url: string | null;
                    };
                };
            };
            readonly links: ReadonlyArray<{
                readonly title: string;
                readonly url: string;
            }>;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type ContributorCreatePersonFormMutation = {
    readonly response: ContributorCreatePersonFormMutationResponse;
    readonly variables: ContributorCreatePersonFormMutationVariables;
};



/*
mutation ContributorCreatePersonFormMutation(
  $input: CreatePersonContributorInput!
) {
  createPersonContributor(input: $input) {
    contributor {
      __typename
      givenName
      familyName
      title
      email
      affiliation
      bio
      orcid
      image {
        thumb {
          png {
            alt
            url
          }
        }
      }
      links {
        title
        url
      }
      id
    }
    ...MutationForm_mutationErrors
  }
}

fragment MutationForm_mutationErrors on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  attributeErrors {
    path
    type
    messages
  }
  globalErrors {
    message
  }
  errors {
    message
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orcid",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageDerivative",
          "kind": "LinkedField",
          "name": "png",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "alt",
              "storageKey": null
            },
            (v10/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "ContributorLink",
  "kind": "LinkedField",
  "name": "links",
  "plural": true,
  "selections": [
    (v5/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
},
v13 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v14 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationAttributeError",
      "kind": "LinkedField",
      "name": "attributeErrors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "path",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messages",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationGlobalError",
      "kind": "LinkedField",
      "name": "globalErrors",
      "plural": true,
      "selections": (v13/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v13/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorCreatePersonFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePersonContributorPayload",
        "kind": "LinkedField",
        "name": "createPersonContributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonContributor",
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v14/*: any*/)
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContributorCreatePersonFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePersonContributorPayload",
        "kind": "LinkedField",
        "name": "createPersonContributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonContributor",
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v14/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0248a44c0a0e6581221b0a21eb43dac3",
    "id": null,
    "metadata": {},
    "name": "ContributorCreatePersonFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributorCreatePersonFormMutation(\n  $input: CreatePersonContributorInput!\n) {\n  createPersonContributor(input: $input) {\n    contributor {\n      __typename\n      givenName\n      familyName\n      title\n      email\n      affiliation\n      bio\n      orcid\n      image {\n        thumb {\n          png {\n            alt\n            url\n          }\n        }\n      }\n      links {\n        title\n        url\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c19cbb2139571c7165fe696df404acc3';
export default node;
