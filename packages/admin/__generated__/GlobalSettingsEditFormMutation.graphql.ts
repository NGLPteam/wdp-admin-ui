/**
 * @generated SignedSource<<ea67900444e9901e8ed966ed45753cd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdateGlobalConfigurationInput = {
  clearLogo?: boolean | null | undefined;
  clientMutationId?: string | null | undefined;
  contributionRoles?: ContributionRoleConfigurationInput | null | undefined;
  entities?: EntitiesSettingsInput | null | undefined;
  institution?: InstitutionSettingsInput | null | undefined;
  logo?: UploadedFileInput | null | undefined;
  logoMetadata?: ImageMetadataInput | null | undefined;
  site?: SiteSettingsInput | null | undefined;
  theme?: ThemeSettingsInput | null | undefined;
};
export type ContributionRoleConfigurationInput = {
  controlledVocabularyId: string;
  defaultItemId: string;
  otherItemId?: string | null | undefined;
};
export type EntitiesSettingsInput = {
  suppressExternalLinks?: boolean | null | undefined;
};
export type InstitutionSettingsInput = {
  name?: string | null | undefined;
};
export type UploadedFileInput = {
  id: any;
  metadata?: UploadedFileMetadataInput | null | undefined;
  storage?: UploadStorage | null | undefined;
};
export type UploadedFileMetadataInput = {
  alt?: string | null | undefined;
  filename?: string | null | undefined;
  mimeType?: string | null | undefined;
};
export type ImageMetadataInput = {
  alt?: string | null | undefined;
};
export type SiteSettingsInput = {
  footer?: SiteFooterInput | null | undefined;
  installationHomePageCopy?: string | null | undefined;
  installationName?: string | null | undefined;
  logoMode?: SiteLogoMode | null | undefined;
  providerName?: string | null | undefined;
};
export type SiteFooterInput = {
  copyrightStatement?: string | null | undefined;
  description?: string | null | undefined;
};
export type ThemeSettingsInput = {
  color: string;
  font: string;
};
export type GlobalSettingsEditFormMutation$variables = {
  input: UpdateGlobalConfigurationInput;
};
export type GlobalSettingsEditFormMutation$data = {
  readonly updateGlobalConfiguration: {
    readonly globalConfiguration: {
      readonly contributionRoles: {
        readonly controlledVocabulary: {
          readonly id: string;
          readonly items: ReadonlyArray<{
            readonly id: string;
            readonly label: string;
            readonly unselectable: boolean;
          }>;
          readonly name: string;
        };
        readonly defaultItem: {
          readonly id: string;
          readonly label: string;
        };
      };
      readonly entities: {
        readonly suppressExternalLinks: boolean;
      };
      readonly site: {
        readonly footer: {
          readonly copyrightStatement: string;
          readonly description: string;
        };
        readonly installationHomePageCopy: string;
        readonly installationName: string;
        readonly logoMode: SiteLogoMode;
        readonly providerName: string;
      };
      readonly theme: {
        readonly color: string;
        readonly font: string;
      };
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type GlobalSettingsEditFormMutation = {
  response: GlobalSettingsEditFormMutation$data;
  variables: GlobalSettingsEditFormMutation$variables;
};

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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "installationName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "installationHomePageCopy",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteFooter",
      "kind": "LinkedField",
      "name": "footer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "copyrightStatement",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logoMode",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ThemeSettings",
  "kind": "LinkedField",
  "name": "theme",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "font",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "EntitiesSettings",
  "kind": "LinkedField",
  "name": "entities",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "suppressExternalLinks",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "ControlledVocabulary",
  "kind": "LinkedField",
  "name": "controlledVocabulary",
  "plural": false,
  "selections": [
    (v5/*: any*/),
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
      "concreteType": "ControlledVocabularyItem",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        (v5/*: any*/),
        (v6/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "unselectable",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ControlledVocabularyItem",
  "kind": "LinkedField",
  "name": "defaultItem",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v9 = {
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
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
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
    "name": "GlobalSettingsEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateGlobalConfigurationPayload",
        "kind": "LinkedField",
        "name": "updateGlobalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GlobalConfiguration",
            "kind": "LinkedField",
            "name": "globalConfiguration",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributionRoleConfiguration",
                "kind": "LinkedField",
                "name": "contributionRoles",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v9/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
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
    "name": "GlobalSettingsEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateGlobalConfigurationPayload",
        "kind": "LinkedField",
        "name": "updateGlobalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GlobalConfiguration",
            "kind": "LinkedField",
            "name": "globalConfiguration",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributionRoleConfiguration",
                "kind": "LinkedField",
                "name": "contributionRoles",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "33ec0adb0568e2a7c2561256051d45ef",
    "id": null,
    "metadata": {},
    "name": "GlobalSettingsEditFormMutation",
    "operationKind": "mutation",
    "text": "mutation GlobalSettingsEditFormMutation(\n  $input: UpdateGlobalConfigurationInput!\n) {\n  updateGlobalConfiguration(input: $input) {\n    globalConfiguration {\n      site {\n        providerName\n        installationName\n        installationHomePageCopy\n        footer {\n          description\n          copyrightStatement\n        }\n        logoMode\n      }\n      theme {\n        color\n        font\n      }\n      entities {\n        suppressExternalLinks\n      }\n      contributionRoles {\n        controlledVocabulary {\n          id\n          name\n          items {\n            id\n            label\n            unselectable\n          }\n        }\n        defaultItem {\n          id\n          label\n        }\n        id\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "732fcec26f8cf2f15251c269c29545df";

export default node;
