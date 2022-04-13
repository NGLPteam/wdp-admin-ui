/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "DATE" | "EMAIL" | "ENTITIES" | "ENTITY" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
export type SearchFilterFragment = {
    readonly type?: SchemaPropertyType | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterInputFragment" | "SearchFilterSelectFragment" | "SearchFilterDateFragment" | "SearchFilterNumberFragment" | "SearchFilterBooleanFragment">;
    readonly " $refType": "SearchFilterFragment";
};
export type SearchFilterFragment$data = SearchFilterFragment;
export type SearchFilterFragment$key = {
    readonly " $data"?: SearchFilterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "type": "ScalarProperty",
      "abstractKey": "__isScalarProperty"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterInputFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterSelectFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterDateFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterNumberFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterBooleanFragment"
    }
  ],
  "type": "SearchableProperty",
  "abstractKey": "__isSearchableProperty"
};
(node as any).hash = '34ec771eb2a9af3944af3377e11725a8';
export default node;
