/**
 * @generated SignedSource<<6d2dc0813b6c7a498bb4ea231668771d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type GlobalSettingsEditFormFragment$data = {
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
  readonly logo: {
    readonly " $fragmentSpreads": FragmentRefs<"SiteLogoUploadFragment">;
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
  readonly " $fragmentType": "GlobalSettingsEditFormFragment";
};
export type GlobalSettingsEditFormFragment$key = {
  readonly " $data"?: GlobalSettingsEditFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GlobalSettingsEditFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalSettingsEditFormFragment",
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
    {
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
    {
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
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteLogoAttachment",
      "kind": "LinkedField",
      "name": "logo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SiteLogoUploadFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ContributionRoleConfiguration",
      "kind": "LinkedField",
      "name": "contributionRoles",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ControlledVocabulary",
          "kind": "LinkedField",
          "name": "controlledVocabulary",
          "plural": false,
          "selections": [
            (v0/*: any*/),
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
                (v0/*: any*/),
                (v1/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "concreteType": "ControlledVocabularyItem",
          "kind": "LinkedField",
          "name": "defaultItem",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};
})();

(node as any).hash = "7a003328f24c0057693d62cd90f20424";

export default node;
