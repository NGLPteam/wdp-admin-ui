import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";

import { SchemaPropertyFragment$key } from "@/relay/SchemaPropertyFragment.graphql";

import * as Properties from "../../Properties";

/**
 * A factory that dispatches on `__typename` and renders
 * the appropriate property field.
 */
export default function SchemaProperty(props: Props) {
  const field = useFragment(fragment, props.field);

  switch (field.__typename) {
    case "AssetProperty":
      return <Properties.Asset field={field} />;
    case "AssetsProperty":
      return <Properties.Assets field={field} />;
    case "BooleanProperty":
      return <Properties.Boolean field={field} />;
    case "ContributorProperty":
      return <Properties.Contributor field={field} />;
    case "ContributorsProperty":
      return <Properties.Contributors field={field} />;
    case "DateProperty":
      return <Properties.Date field={field} />;
    case "EmailProperty":
      return <Properties.Email field={field} />;
    case "FloatProperty":
      return <Properties.Float field={field} />;
    case "IntegerProperty":
      return <Properties.Integer field={field} />;
    case "MarkdownProperty":
      return <Properties.Markdown field={field} />;
    case "MultiselectProperty":
      return <Properties.Multiselect field={field} />;
    case "SelectProperty":
      return <Properties.Select field={field} />;
    case "StringProperty":
      return <Properties.String field={field} />;
    case "TagsProperty":
      return <Properties.Tags field={field} />;
    default:
      console.warn("Got unknown schema property type: %s", field.__typename);
      return null;
  }
}

interface Props {
  field: SchemaPropertyFragment$key;
}

const fragment = graphql`
  fragment SchemaPropertyFragment on AnyScalarProperty {
    __typename

    ... on AssetProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...AssetPropertyFragment
    }

    ... on AssetsProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...AssetsPropertyFragment
    }

    ... on BooleanProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...BooleanPropertyFragment
    }

    ... on ContributorProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...ContributorPropertyFragment
    }

    ... on ContributorsProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...ContributorsPropertyFragment
    }

    ... on DateProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...DatePropertyFragment
    }

    ... on EmailProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...EmailPropertyFragment
    }

    ... on FloatProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...FloatPropertyFragment
    }

    ... on IntegerProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...IntegerPropertyFragment
    }

    ... on MarkdownProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...MarkdownPropertyFragment
    }

    ... on MultiselectProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...MultiselectPropertyFragment
    }

    ... on SelectProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...SelectPropertyFragment
    }

    ... on StringProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...StringPropertyFragment
    }

    ... on TagsProperty {
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...TagsPropertyFragment
    }
  }
`;
