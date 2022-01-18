/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleMetadataBlockFragment = {
    readonly collectedMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly publishedMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly pageCountMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly volumeIdMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly onlineVersion: {
        readonly url?: {
            readonly href: string | null;
        } | null | undefined;
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ArticleIssueMetadataFragment">;
    readonly " $refType": "ArticleMetadataBlockFragment";
};
export type ArticleMetadataBlockFragment$data = ArticleMetadataBlockFragment;
export type ArticleMetadataBlockFragment$key = {
    readonly " $data"?: ArticleMetadataBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleMetadataBlockFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "MetadataFactoryFragment"
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleMetadataBlockFragment",
  "selections": [
    {
      "alias": "collectedMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "meta.collected"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.collected\")"
    },
    {
      "alias": "publishedMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "meta.published"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.published\")"
    },
    {
      "alias": "pageCountMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "meta.page_count"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.page_count\")"
    },
    {
      "alias": "volumeIdMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "volume.id"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"volume.id\")"
    },
    {
      "alias": "onlineVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "online_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "URLReference",
              "kind": "LinkedField",
              "name": "url",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "href",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "URLProperty",
          "abstractKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": "schemaProperty(fullPath:\"online_version\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleIssueMetadataFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '0919fb262b35f6a361b94897add2968f';
export default node;
