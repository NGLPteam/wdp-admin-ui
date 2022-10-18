/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdateCommunityInput = {
    communityId: string;
    position?: number | null | undefined;
    title: string;
    subtitle?: string | null | undefined;
    summary?: string | null | undefined;
    heroImage?: UploadedFileInput | null | undefined;
    heroImageMetadata?: ImageMetadataInput | null | undefined;
    thumbnail?: UploadedFileInput | null | undefined;
    thumbnailMetadata?: ImageMetadataInput | null | undefined;
    clearHeroImage?: boolean | null | undefined;
    clearThumbnail?: boolean | null | undefined;
    schemaProperties?: unknown | null | undefined;
    heroImageLayout: HeroImageLayout;
    tagline?: string | null | undefined;
    logo?: UploadedFileInput | null | undefined;
    logoMetadata?: ImageMetadataInput | null | undefined;
    clearLogo?: boolean | null | undefined;
    clientMutationId?: string | null | undefined;
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
export type CommunityUpdateFormMutationVariables = {
    input: UpdateCommunityInput;
};
export type CommunityUpdateFormMutationResponse = {
    readonly updateCommunity: {
        readonly community: {
            readonly name: string;
            readonly position: number | null;
            readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFieldsFragment">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors" | "CommunityUpdateFormSchemaErrorsFragment">;
    } | null;
};
export type CommunityUpdateFormMutation = {
    readonly response: CommunityUpdateFormMutationResponse;
    readonly variables: CommunityUpdateFormMutationVariables;
};



/*
mutation CommunityUpdateFormMutation(
  $input: UpdateCommunityInput!
) {
  updateCommunity(input: $input) {
    community {
      name
      position
      ...CommunityUpdateFormFieldsFragment
      id
    }
    ...MutationForm_mutationErrors
    ...CommunityUpdateFormSchemaErrorsFragment
  }
}

fragment CommunityUpdateFormFieldsFragment on Community {
  title
  name
  tagline
  summary
  heroImageLayout
  position
  heroImage {
    ...FileUploadFragment
  }
  logo {
    ...FileUploadFragment
  }
  heroImageMetadata {
    alt
  }
}

fragment CommunityUpdateFormSchemaErrorsFragment on UpdateCommunityPayload {
  schemaErrors {
    hint
    message
    metadata
    path
  }
}

fragment FileUploadFragment on ImageAttachment {
  originalFilename
  storage
  thumb {
    png {
      alt
      url
    }
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = {
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
        (v4/*: any*/),
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
      "selections": (v6/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v6/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaValueError",
  "kind": "LinkedField",
  "name": "schemaErrors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hint",
      "storageKey": null
    },
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "metadata",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "originalFilename",
    "storageKey": null
  },
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
          (v9/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunityUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCommunityPayload",
        "kind": "LinkedField",
        "name": "updateCommunity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityUpdateFormFieldsFragment"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v7/*: any*/)
            ]
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "CommunityUpdateFormSchemaErrorsFragment",
            "selections": [
              (v8/*: any*/)
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
    "name": "CommunityUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCommunityPayload",
        "kind": "LinkedField",
        "name": "updateCommunity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "tagline",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "summary",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "heroImageLayout",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "heroImage",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "logo",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageMetadata",
                "kind": "LinkedField",
                "name": "heroImageMetadata",
                "plural": false,
                "selections": [
                  (v9/*: any*/)
                ],
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
          },
          (v8/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "99e59c46eb62b81f9acaf747f1abe9f0",
    "id": null,
    "metadata": {},
    "name": "CommunityUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation CommunityUpdateFormMutation(\n  $input: UpdateCommunityInput!\n) {\n  updateCommunity(input: $input) {\n    community {\n      name\n      position\n      ...CommunityUpdateFormFieldsFragment\n      id\n    }\n    ...MutationForm_mutationErrors\n    ...CommunityUpdateFormSchemaErrorsFragment\n  }\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n  name\n  tagline\n  summary\n  heroImageLayout\n  position\n  heroImage {\n    ...FileUploadFragment\n  }\n  logo {\n    ...FileUploadFragment\n  }\n  heroImageMetadata {\n    alt\n  }\n}\n\nfragment CommunityUpdateFormSchemaErrorsFragment on UpdateCommunityPayload {\n  schemaErrors {\n    hint\n    message\n    metadata\n    path\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  originalFilename\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ca72c799ad4ca8c486a003fe79505010';
export default node;
