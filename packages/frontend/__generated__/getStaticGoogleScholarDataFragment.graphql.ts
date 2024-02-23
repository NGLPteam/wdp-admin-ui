/**
 * @generated SignedSource<<125b53505ba26dc7cf6ef900b3fa0ef2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type getStaticGoogleScholarDataFragment$data = {
  readonly community?: {
    readonly title: string;
  };
  readonly contributions?: {
    readonly nodes: ReadonlyArray<{
      readonly contributor: {
        readonly __typename: "OrganizationContributor";
        readonly legalName: string | null | undefined;
      } | {
        readonly __typename: "PersonContributor";
        readonly familyName: string | null | undefined;
        readonly givenName: string | null | undefined;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
      readonly role: string | null | undefined;
    }>;
  };
  readonly endPage?: {
    readonly value?: number | null | undefined;
  } | null | undefined;
  readonly institution?: {
    readonly value?: string | null | undefined;
  } | null | undefined;
  readonly issn?: string | null | undefined;
  readonly issue?: {
    readonly number?: {
      readonly value?: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly issueNumber?: {
    readonly value?: string | null | undefined;
  } | null | undefined;
  readonly journal?: {
    readonly title?: string;
  } | null | undefined;
  readonly pdf?: {
    readonly asset?: {
      readonly downloadUrl?: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly published?: {
    readonly precision: DatePrecision;
    readonly value: string | null | undefined;
  };
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly startPage?: {
    readonly value?: number | null | undefined;
  } | null | undefined;
  readonly title?: string;
  readonly volume?: {
    readonly number?: {
      readonly value?: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly volumeNumber?: {
    readonly value?: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "getStaticGoogleScholarDataFragment";
};
export type getStaticGoogleScholarDataFragment$key = {
  readonly " $data"?: getStaticGoogleScholarDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getStaticGoogleScholarDataFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getStaticGoogleScholarDataFragment"
};

(node as any).hash = "ad5f35b1b75fbcde2072f22393ecdab2";

export default node;
