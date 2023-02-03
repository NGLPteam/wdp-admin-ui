/**
 * @generated SignedSource<<ac8f2d66a11f58f6d17f32920829e79b>>
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
  clearLogo?: boolean | null;
  clientMutationId?: string | null;
  institution?: InstitutionSettingsInput | null;
  logo?: UploadedFileInput | null;
  logoMetadata?: ImageMetadataInput | null;
  site?: SiteSettingsInput | null;
  theme?: ThemeSettingsInput | null;
};
export type InstitutionSettingsInput = {
  name?: string | null;
};
export type UploadedFileInput = {
  id: any;
  metadata?: UploadedFileMetadataInput | null;
  storage?: UploadStorage | null;
};
export type UploadedFileMetadataInput = {
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
};
export type ImageMetadataInput = {
  alt?: string | null;
};
export type SiteSettingsInput = {
  footer?: SiteFooterInput | null;
  installationHomePageCopy?: string | null;
  installationName?: string | null;
  logoMode?: SiteLogoMode | null;
  providerName?: string | null;
};
export type SiteFooterInput = {
  copyrightStatement?: string | null;
  description?: string | null;
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
      readonly site: {
        readonly footer: {
          readonly copyrightStatement: string;
          readonly description: string;
        };
        readonly installationHomePageCopy: string;
        readonly installationName: string;
        readonly providerName: string;
      };
      readonly theme: {
        readonly color: string;
        readonly font: string;
      };
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null;
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
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v5 = {
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
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v4/*: any*/),
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
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v5/*: any*/)
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
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ee5dcd7a3baed946f9d15388b69c064c",
    "id": null,
    "metadata": {},
    "name": "GlobalSettingsEditFormMutation",
    "operationKind": "mutation",
    "text": "mutation GlobalSettingsEditFormMutation(\n  $input: UpdateGlobalConfigurationInput!\n) {\n  updateGlobalConfiguration(input: $input) {\n    globalConfiguration {\n      site {\n        providerName\n        installationName\n        installationHomePageCopy\n        footer {\n          description\n          copyrightStatement\n        }\n      }\n      theme {\n        color\n        font\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "5599b27e6c3442e3491e03a32ad44f1e";

export default node;
