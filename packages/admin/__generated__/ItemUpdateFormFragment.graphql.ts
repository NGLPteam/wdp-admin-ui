/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemUpdateFormFragment = {
    readonly itemId: string;
    readonly context: {
        readonly " $fragmentRefs": FragmentRefs<"useSchemaContextFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFieldsFragment" | "SchemaFormFieldsFragment" | "useSchemaPropertiesFragment">;
    readonly " $refType": "ItemUpdateFormFragment";
};
export type ItemUpdateFormFragment$data = ItemUpdateFormFragment;
export type ItemUpdateFormFragment$key = {
    readonly " $data"?: ItemUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemUpdateFormFragment",
  "selections": [
    {
      "alias": "itemId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": "context",
      "args": null,
      "concreteType": "SchemaInstanceContext",
      "kind": "LinkedField",
      "name": "schemaInstanceContext",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useSchemaContextFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemUpdateFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSchemaPropertiesFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '552c21993194c983a4d7619a326e4c70';
export default node;
