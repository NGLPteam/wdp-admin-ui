/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateDrawerQueryVariables = {
    itemSlug: string;
};
export type ItemUpdateDrawerQueryResponse = {
    readonly item: {
        readonly id: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFragment" | "SchemaInstanceFormFragment">;
    } | null;
};
export type ItemUpdateDrawerQuery = {
    readonly response: ItemUpdateDrawerQueryResponse;
    readonly variables: ItemUpdateDrawerQueryVariables;
};



/*
query ItemUpdateDrawerQuery(
  $itemSlug: Slug!
) {
  item(slug: $itemSlug) {
    id
    title
    ...ItemUpdateFormFragment
    ...SchemaInstanceFormFragment
  }
}

fragment AssetPropertyFragment on AssetProperty {
  ...ScalarPropertyFragment
}

fragment AssetsPropertyFragment on AssetsProperty {
  ...ScalarPropertyFragment
}

fragment BooleanPropertyFragment on BooleanProperty {
  ...ScalarPropertyFragment
  checked
  checkedByDefault
}

fragment ContributorPropertyFragment on ContributorProperty {
  ...ScalarPropertyFragment
}

fragment ContributorsPropertyFragment on ContributorsProperty {
  ...ScalarPropertyFragment
}

fragment DatePropertyFragment on DateProperty {
  ...ScalarPropertyFragment
  date
}

fragment EmailPropertyFragment on EmailProperty {
  ...ScalarPropertyFragment
  address
  defaultAddress
}

fragment FloatPropertyFragment on FloatProperty {
  ...ScalarPropertyFragment
  floatValue
  defaultFloat
}

fragment GroupPropertyFragment on GroupProperty {
  legend
  path
  properties {
    __typename
    ...SchemaPropertyFragment
  }
}

fragment IntegerPropertyFragment on IntegerProperty {
  ...ScalarPropertyFragment
  integerValue
  defaultInteger
}

fragment ItemUpdateFormFieldsFragment on Item {
  title
  visibility
  summary
  visibleAfterAt
  visibleUntilAt
  thumbnail {
    thumb {
      png {
        alt
        url
      }
    }
  }
}

fragment ItemUpdateFormFragment on Item {
  itemId: id
  ...ItemUpdateFormFieldsFragment
}

fragment MarkdownPropertyFragment on MarkdownProperty {
  ...ScalarPropertyFragment
  content
  default
}

fragment MultiselectPropertyFragment on MultiselectProperty {
  ...ScalarPropertyFragment
  options {
    label
    value
  }
}

fragment ScalarPropertyFragment on ScalarProperty {
  __isScalarProperty: __typename
  name: fullPath
  label
  path
  required
  type
  isWide
}

fragment SchemaInstanceFormFragment on SchemaInstance {
  __isSchemaInstance: __typename
  context: schemaInstanceContext {
    ...SchemaInstanceProviderFragment
  }
  properties: schemaProperties {
    __typename
    ...SchemaInstancePropertyFragment
  }
  ...SchemaSelectorDataFragment
}

fragment SchemaInstancePropertyFragment on AnySchemaProperty {
  __isAnySchemaProperty: __typename
  __typename
  ... on GroupProperty {
    ...GroupPropertyFragment
  }
  ...SchemaPropertyFragment
}

fragment SchemaInstanceProviderFragment on SchemaInstanceContext {
  assets {
    kind
    label
    value
  }
  contributors {
    kind
    label
    value
  }
  defaultValues
  entityId
  fieldValues
  schemaVersionSlug
}

fragment SchemaPropertyFragment on AnyScalarProperty {
  __isAnyScalarProperty: __typename
  __typename
  ... on AssetProperty {
    ...AssetPropertyFragment
  }
  ... on AssetsProperty {
    ...AssetsPropertyFragment
  }
  ... on BooleanProperty {
    ...BooleanPropertyFragment
  }
  ... on ContributorProperty {
    ...ContributorPropertyFragment
  }
  ... on ContributorsProperty {
    ...ContributorsPropertyFragment
  }
  ... on DateProperty {
    ...DatePropertyFragment
  }
  ... on EmailProperty {
    ...EmailPropertyFragment
  }
  ... on FloatProperty {
    ...FloatPropertyFragment
  }
  ... on IntegerProperty {
    ...IntegerPropertyFragment
  }
  ... on MarkdownProperty {
    ...MarkdownPropertyFragment
  }
  ... on MultiselectProperty {
    ...MultiselectPropertyFragment
  }
  ... on SelectProperty {
    ...SelectPropertyFragment
  }
  ... on StringProperty {
    ...StringPropertyFragment
  }
  ... on TagsProperty {
    ...TagsPropertyFragment
  }
}

fragment SchemaSelectorDataFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
  ... on Item {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
}

fragment SelectPropertyFragment on SelectProperty {
  options {
    label
    value
  }
  ...ScalarPropertyFragment
}

fragment StringPropertyFragment on StringProperty {
  ...ScalarPropertyFragment
  content
  default
}

fragment TagsPropertyFragment on TagsProperty {
  ...ScalarPropertyFragment
  tags
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "kind",
    "storageKey": null
  },
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    (v4/*: any*/),
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
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
      "name": "isWide",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "AssetProperty",
  "abstractKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "AssetsProperty",
  "abstractKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checked",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checkedByDefault",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "type": "BooleanProperty",
  "abstractKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "ContributorProperty",
  "abstractKey": null
},
v15 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "ContributorsProperty",
  "abstractKey": null
},
v16 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "type": "DateProperty",
  "abstractKey": null
},
v17 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultAddress",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "type": "EmailProperty",
  "abstractKey": null
},
v18 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultFloat",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "type": "FloatProperty",
  "abstractKey": null
},
v19 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "integerValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultInteger",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "type": "IntegerProperty",
  "abstractKey": null
},
v20 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "default",
    "storageKey": null
  },
  (v9/*: any*/)
],
v21 = {
  "kind": "InlineFragment",
  "selections": (v20/*: any*/),
  "type": "MarkdownProperty",
  "abstractKey": null
},
v22 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "SelectOption",
    "kind": "LinkedField",
    "name": "options",
    "plural": true,
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "storageKey": null
  },
  (v9/*: any*/)
],
v23 = {
  "kind": "InlineFragment",
  "selections": (v22/*: any*/),
  "type": "MultiselectProperty",
  "abstractKey": null
},
v24 = {
  "kind": "InlineFragment",
  "selections": (v22/*: any*/),
  "type": "SelectProperty",
  "abstractKey": null
},
v25 = {
  "kind": "InlineFragment",
  "selections": (v20/*: any*/),
  "type": "StringProperty",
  "abstractKey": null
},
v26 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tags",
      "storageKey": null
    },
    (v9/*: any*/)
  ],
  "type": "TagsProperty",
  "abstractKey": null
},
v27 = [
  {
    "alias": "entityId",
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "SchemaVersion",
    "kind": "LinkedField",
    "name": "schemaVersion",
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
        "name": "number",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      },
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemUpdateFormFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SchemaInstanceFormFragment"
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
    "name": "ItemUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "itemId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibility",
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
            "name": "visibleAfterAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibleUntilAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetPreview",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PreviewImageMap",
                "kind": "LinkedField",
                "name": "thumb",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PreviewImage",
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
            "selections": [
              {
                "alias": "context",
                "args": null,
                "concreteType": "SchemaInstanceContext",
                "kind": "LinkedField",
                "name": "schemaInstanceContext",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetSelectOption",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": true,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ContributorSelectOption",
                    "kind": "LinkedField",
                    "name": "contributors",
                    "plural": true,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "defaultValues",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "entityId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fieldValues",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "schemaVersionSlug",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "properties",
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "schemaProperties",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isAnySchemaProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "legend",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "properties",
                        "plural": true,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyScalarProperty"
                          },
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/),
                          (v21/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "GroupProperty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/)
                    ],
                    "type": "AnyScalarProperty",
                    "abstractKey": "__isAnyScalarProperty"
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": (v27/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v27/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              }
            ],
            "type": "SchemaInstance",
            "abstractKey": "__isSchemaInstance"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e414dda6e531311f37725872567eb37c",
    "id": null,
    "metadata": {},
    "name": "ItemUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query ItemUpdateDrawerQuery(\n  $itemSlug: Slug!\n) {\n  item(slug: $itemSlug) {\n    id\n    title\n    ...ItemUpdateFormFragment\n    ...SchemaInstanceFormFragment\n  }\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AssetsPropertyFragment on AssetsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  ...ScalarPropertyFragment\n  checked\n  checkedByDefault\n}\n\nfragment ContributorPropertyFragment on ContributorProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment ContributorsPropertyFragment on ContributorsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment DatePropertyFragment on DateProperty {\n  ...ScalarPropertyFragment\n  date\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  ...ScalarPropertyFragment\n  address\n  defaultAddress\n}\n\nfragment FloatPropertyFragment on FloatProperty {\n  ...ScalarPropertyFragment\n  floatValue\n  defaultFloat\n}\n\nfragment GroupPropertyFragment on GroupProperty {\n  legend\n  path\n  properties {\n    __typename\n    ...SchemaPropertyFragment\n  }\n}\n\nfragment IntegerPropertyFragment on IntegerProperty {\n  ...ScalarPropertyFragment\n  integerValue\n  defaultInteger\n}\n\nfragment ItemUpdateFormFieldsFragment on Item {\n  title\n  visibility\n  summary\n  visibleAfterAt\n  visibleUntilAt\n  thumbnail {\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n}\n\nfragment ItemUpdateFormFragment on Item {\n  itemId: id\n  ...ItemUpdateFormFieldsFragment\n}\n\nfragment MarkdownPropertyFragment on MarkdownProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment MultiselectPropertyFragment on MultiselectProperty {\n  ...ScalarPropertyFragment\n  options {\n    label\n    value\n  }\n}\n\nfragment ScalarPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  name: fullPath\n  label\n  path\n  required\n  type\n  isWide\n}\n\nfragment SchemaInstanceFormFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  context: schemaInstanceContext {\n    ...SchemaInstanceProviderFragment\n  }\n  properties: schemaProperties {\n    __typename\n    ...SchemaInstancePropertyFragment\n  }\n  ...SchemaSelectorDataFragment\n}\n\nfragment SchemaInstancePropertyFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  __typename\n  ... on GroupProperty {\n    ...GroupPropertyFragment\n  }\n  ...SchemaPropertyFragment\n}\n\nfragment SchemaInstanceProviderFragment on SchemaInstanceContext {\n  assets {\n    kind\n    label\n    value\n  }\n  contributors {\n    kind\n    label\n    value\n  }\n  defaultValues\n  entityId\n  fieldValues\n  schemaVersionSlug\n}\n\nfragment SchemaPropertyFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on AssetsProperty {\n    ...AssetsPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on ContributorProperty {\n    ...ContributorPropertyFragment\n  }\n  ... on ContributorsProperty {\n    ...ContributorsPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...FloatPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...IntegerPropertyFragment\n  }\n  ... on MarkdownProperty {\n    ...MarkdownPropertyFragment\n  }\n  ... on MultiselectProperty {\n    ...MultiselectPropertyFragment\n  }\n  ... on SelectProperty {\n    ...SelectPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n}\n\nfragment SchemaSelectorDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Item {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n}\n\nfragment SelectPropertyFragment on SelectProperty {\n  options {\n    label\n    value\n  }\n  ...ScalarPropertyFragment\n}\n\nfragment StringPropertyFragment on StringProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  ...ScalarPropertyFragment\n  tags\n}\n"
  }
};
})();
(node as any).hash = '39e3962206dde5b418fa86d573f5c958';
export default node;
