/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FileSlugItemQueryVariables = {
    slug: string;
    file: string;
};
export type FileSlugItemQueryResponse = {
    readonly asset: {
        readonly " $fragmentRefs": FragmentRefs<"AssetDetailBlockFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment">;
};
export type FileSlugItemQuery = {
    readonly response: FileSlugItemQueryResponse;
    readonly variables: FileSlugItemQueryVariables;
};



/*
query FileSlugItemQuery(
  $slug: Slug!
  $file: Slug!
) {
  asset(slug: $file) {
    __typename
    ...AssetDetailBlockFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  ...ItemLayoutQueryFragment_20J5Pl
}

fragment AppBodyCommunityFragment on Community {
  ...AppHeaderCommunityFragment
  ...AppFooterCommunityFragment
}

fragment AppBodyEntityFragment on Entity {
  __isEntity: __typename
  ...AppHeaderEntityFragment
}

fragment AppFooterCommunityFragment on Community {
  slug
  title
  ...CommunityPickerActiveFragment
  ...CommunityNameFragment
}

fragment AppHeaderCommunityFragment on Community {
  ...CommunityPickerActiveFragment
  ...CommunityNavListFragment
  ...CommunityNameFragment
}

fragment AppHeaderEntityFragment on Entity {
  __isEntity: __typename
  ...SearchButtonFragment
}

fragment AppLayoutCommunityFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNavBarFragment
  ...AppBodyCommunityFragment
}

fragment AppLayoutEntityFragment on Entity {
  __isEntity: __typename
  ...CommunityNavBarEntityFragment
  ...AppBodyEntityFragment
}

fragment ArticleHeroFragment on Item {
  slug
  title
  subtitle
  summary
  visibility
  currentlyHidden
  ...DOIFragment
  published {
    ...PrecisionDateFragment
    value
  }
  contributions {
    ...ContributorsListFragment
  }
  pdfVersion: schemaProperty(fullPath: "pdf_version") {
    __typename
    ... on AssetProperty {
      asset {
        __typename
        ...AssetDownloadButtonFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ...PeerReviewedFragment
    ...PreprintVersionFragment
    ...OpenAccessFragment
    ...CCLicenseFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  abstract: schemaProperty(fullPath: "abstract") {
    __typename
    ...FullTextFragment
  }
  entityViews {
    ...ViewCountFragment
  }
  assetDownloads {
    ...DownloadCountFragment
  }
  ...CCLicenseFragment
  ...PeerReviewedFragment
  ...OpenAccessFragment
}

fragment ArticleLayoutFragment on Item {
  ...BreadcrumbsBarFragment
  ...ArticleParentHeaderFragment
  ...ArticleHeroFragment
  ...ArticleTabNavFragment
  relatedItems {
    ...RelatedArticlesFragment
  }
}

fragment ArticleParentHeaderFragment on Entity {
  __isEntity: __typename
  ... on Item {
    journal: ancestorOfType(schema: "nglp:journal") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    issue: ancestorOfType(schema: "nglp:journal_issue") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    unit: ancestorOfType(schema: "nglp:unit") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    series: ancestorOfType(schema: "nglp:series") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    campus: ancestorOfType(schema: "nglp:campus") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
  ... on Collection {
    unit: ancestorOfType(schema: "nglp:unit") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    campus: ancestorOfType(schema: "nglp:campus") {
      __typename
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment ArticleTabNavFragment on Item {
  schemaVersion {
    identifier
    name
    id
  }
  pages {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
  contributions {
    pageInfo {
      totalCount
    }
  }
  assets {
    pageInfo {
      totalCount
    }
  }
}

fragment AssetDetailBlockFragment on Node {
  __isNode: __typename
  ... on Asset {
    __isAsset: __typename
    slug
    caption
    kind
    downloadUrl
    fileSize
    name
    altText
    preview {
      storage
      ...ContentImageFragment
    }
    ...AssetPDFPreviewFragment
  }
  ... on AssetImage {
    updatedAt
  }
}

fragment AssetDownloadButtonFragment on Asset {
  __isAsset: __typename
  name
  downloadUrl
  kind
  contentType
}

fragment AssetPDFPreviewFragment on Asset {
  __isAsset: __typename
  ... on AssetPDF {
    downloadUrl
  }
}

fragment BreadcrumbLinkFragment on EntityBreadcrumb {
  label
  kind
  slug
}

fragment BreadcrumbsBarFragment on Entity {
  __isEntity: __typename
  __typename
  title
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  ...BreadcrumbsFragment
}

fragment BreadcrumbsFragment on Entity {
  __isEntity: __typename
  __typename
  title
  breadcrumbs {
    depth
    ...BreadcrumbLinkFragment
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
}

fragment CCLicenseFragment on SchemaInstance {
  __isSchemaInstance: __typename
  ccLicense: schemaProperty(fullPath: "cc_license") {
    __typename
    ... on SelectProperty {
      selection
      defaultSelection
      options {
        label
        value
      }
    }
  }
}

fragment CommunityHTMLHeadFragment on Community {
  title
}

fragment CommunityLogoFragment on ImageAttachment {
  storage
  original {
    url
    width
    height
  }
}

fragment CommunityNameFragment on Community {
  title
  slug
  logo {
    storage
    original {
      width
      height
    }
    ...CommunityLogoFragment
  }
}

fragment CommunityNavBarEntityFragment on Entity {
  __isEntity: __typename
  ...SearchButtonFragment
}

fragment CommunityNavBarFragment on Community {
  ...CommunityNameFragment
  ...CommunityNavListFragment
}

fragment CommunityNavListFragment on Community {
  slug
  schemaRanks {
    slug
    name
    count
    kind
    id
  }
  pages {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}

fragment CommunityPickerActiveFragment on Community {
  title
  slug
}

fragment ContentImageFragment on ImageAttachment {
  image: large {
    webp {
      alt
      url
      width
      height
    }
  }
  placeholder: thumb {
    webp {
      url
    }
  }
}

fragment ContributionBlockItemFragment on Contribution {
  __isContribution: __typename
  affiliation
  displayName
  contributorKind
  role
  contributor {
    __typename
    ... on Sluggable {
      __isSluggable: __typename
      slug
    }
    ... on Contributor {
      __isContributor: __typename
      image {
        ...ContributorAvatarFragment
      }
    }
    ... on PersonContributor {
      affiliation
      orcid
    }
    ...ContributorNameFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  ... on ItemContribution {
    item {
      slug
      id
    }
  }
  ... on CollectionContribution {
    collection {
      slug
      id
    }
  }
}

fragment ContributionsBlockFragment on Paginated {
  __isPaginated: __typename
  ... on ItemContributionConnection {
    nodes {
      slug
      role
      contributor {
        __typename
        ... on PersonContributor {
          image {
            storage
          }
        }
        ... on OrganizationContributor {
          image {
            storage
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      ...ContributionBlockItemFragment
      id
    }
  }
  ... on CollectionContributionConnection {
    nodes {
      slug
      role
      contributor {
        __typename
        ... on PersonContributor {
          image {
            storage
          }
        }
        ... on OrganizationContributor {
          image {
            storage
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      ...ContributionBlockItemFragment
      id
    }
  }
}

fragment ContributorAvatarFragment on ImageAttachment {
  small {
    webp {
      alt
      url
    }
  }
}

fragment ContributorNameFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on PersonContributor {
    __typename
    familyName
    givenName
  }
  ... on OrganizationContributor {
    __typename
    legalName
  }
}

fragment ContributorsListFragment on ItemContributionConnection {
  nodes {
    role
    contributor {
      __typename
      ... on Sluggable {
        __isSluggable: __typename
        slug
      }
      ...ContributorNameFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
    id
  }
}

fragment CoverImageFragment on ImageAttachment {
  image: large {
    webp {
      url
      alt
      width
      height
    }
  }
}

fragment DOIFragment on HasDOI {
  __isHasDOI: __typename
  doi
}

fragment DownloadCountFragment on AnalyticsEventCountSummary {
  total
}

fragment EntityHTMLHeadAppFragment on Query {
  globalConfiguration {
    site {
      installationName
    }
    id
  }
}

fragment EntityHTMLHeadFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Entity {
    __isEntity: __typename
    title
    summary
    thumbnail {
      storage
      medium {
        webp {
          url
          width
          height
        }
      }
    }
    thumbnailMetadata {
      alt
    }
    heroImage {
      storage
      medium {
        webp {
          url
          width
          height
        }
      }
    }
    heroImageMetadata {
      alt
    }
  }
}

fragment EntityHeroFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Entity {
    __isEntity: __typename
    title
    subtitle
    summary
    thumbnail {
      storage
      ...ContentImageFragment
    }
    heroImage {
      storage
      ...HeroImageFragment
    }
    heroImageMetadata {
      ...HeroImageMetadataFragment
    }
  }
  ... on Collection {
    visibility
    currentlyHidden
    published {
      ...PrecisionDateFragment
      value
    }
    about: schemaProperty(fullPath: "about") {
      __typename
      ... on MarkdownProperty {
        content
      }
    }
  }
  ... on Item {
    visibility
    currentlyHidden
    published {
      ...PrecisionDateFragment
      value
    }
    about: schemaProperty(fullPath: "about") {
      __typename
      ... on MarkdownProperty {
        content
      }
    }
  }
}

fragment EntityLayoutFactoryFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...JournalLayoutFragment
    ...IssueLayoutFragment
    ...VolumeLayoutFragment
    ...SeriesLayoutFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...ArticleLayoutFragment
  }
}

fragment EntityLayoutFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Entity {
    __isEntity: __typename
    ...BreadcrumbsBarFragment
    ...EntityHeroFragment
    ...EntityNavBarFragment
  }
}

fragment EntityNavBarFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Node {
    __isNode: __typename
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  ... on Entity {
    __isEntity: __typename
    title
    ...EntityNavListFragment
  }
}

fragment EntityNavListFragment on Entity {
  __isEntity: __typename
  __typename
  orderings(availability: ENABLED) {
    nodes {
      name
      slug
      identifier
      count
      id
    }
  }
  pages {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
}

fragment FullTextFragment on AnySchemaProperty {
  __isAnySchemaProperty: __typename
  ... on FullTextProperty {
    fullText {
      content
      kind
      lang
    }
    type
  }
}

fragment HeroImageFragment on ImageAttachment {
  image: hero {
    webp {
      url
    }
  }
  placeholder: thumb {
    webp {
      url
    }
  }
}

fragment HeroImageMetadataFragment on ImageMetadata {
  alt
}

fragment ISSNFragment on HasISSN {
  __isHasISSN: __typename
  issn
}

fragment IssueHeroFragment on Collection {
  id
  title
  subtitle
  summary
  ...DOIFragment
  visibility
  currentlyHidden
  published {
    value
    ...PrecisionDateFragment
  }
  thumbnail {
    ...CoverImageFragment
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ...JournalHeroCompactFragment
    ...JournalHeroMetadataFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  volume: ancestorOfType(schema: "nglp:journal_volume") {
    __typename
    ... on Entity {
      __isEntity: __typename
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  pdfVersion: schemaProperty(fullPath: "pdf_version") {
    __typename
    ... on AssetProperty {
      asset {
        __typename
        ...AssetDownloadButtonFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment IssueLayoutFragment on Collection {
  ...BreadcrumbsBarFragment
  ...IssueHeroFragment
  contributions {
    ...ContributionsBlockFragment
    pageInfo {
      totalCount
    }
  }
  relatedCollections(page: 1, perPage: 4) {
    ...RelatedIssuesFragment
  }
}

fragment ItemLayoutFragment_20J5Pl on Query {
  item(slug: $slug) {
    ...AppLayoutEntityFragment
    ...EntityHTMLHeadFragment
    ...EntityLayoutFactoryFragment
    community {
      ...AppLayoutCommunityFragment
      id
    }
    id
  }
  ...EntityHTMLHeadAppFragment
}

fragment ItemLayoutQueryFragment_20J5Pl on Query {
  ...ItemLayoutFragment_20J5Pl
}

fragment JournalHeroCompactFragment on Collection {
  title
  subtitle
}

fragment JournalHeroFragment on Collection {
  slug
  title
  subtitle
  visibility
  currentlyHidden
  heroImage {
    storage
    ...HeroImageFragment
  }
  heroImageMetadata {
    ...HeroImageMetadataFragment
  }
  ...DOIFragment
  ...JournalHeroMetadataFragment
}

fragment JournalHeroMetadataFragment on Collection {
  ...ISSNFragment
  ...OpenAccessFragment
  ...CCLicenseFragment
  ...PeerReviewedFragment
}

fragment JournalLayoutFragment on Collection {
  ...JournalHeroFragment
  ...EntityNavBarFragment
  ...BreadcrumbsBarFragment
  related: relatedCollections(order: RECENT, perPage: 4) {
    ...RelatedJournalsFragment
  }
}

fragment OpenAccessFragment on SchemaInstance {
  __isSchemaInstance: __typename
  openAccess: schemaProperty(fullPath: "open_access") {
    __typename
    ... on BooleanProperty {
      checked
      checkedByDefault
    }
  }
}

fragment PeerReviewedFragment on SchemaInstance {
  __isSchemaInstance: __typename
  peerReviewed: schemaProperty(fullPath: "peer_reviewed") {
    __typename
    ... on BooleanProperty {
      checked
      checkedByDefault
    }
  }
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment PreprintVersionFragment on SchemaInstance {
  __isSchemaInstance: __typename
  prePrintVersion: schemaProperty(fullPath: "preprint_version") {
    __typename
    ... on BooleanProperty {
      checked
      checkedByDefault
    }
  }
}

fragment RelatedArticlesFragment on ItemConnection {
  edges {
    node {
      title
      slug
      published {
        ...PrecisionDateFragment
      }
      journal: ancestorOfType(schema: "nglp:journal") {
        __typename
        ... on Collection {
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      volumeId: schemaProperty(fullPath: "volume.id") {
        __typename
        ... on StringProperty {
          fullPath
          content
        }
      }
      issueId: schemaProperty(fullPath: "id") {
        __typename
        ... on StringProperty {
          fullPath
          content
        }
      }
      id
    }
  }
}

fragment RelatedIssueBlockFragment on Collection {
  __typename
  title
  subtitle
  slug
  id
  thumbnail {
    ...CoverImageFragment
  }
  published {
    value
    ...PrecisionDateFragment
  }
  volume: ancestorOfType(schema: "nglp:journal_volume") {
    __typename
    ... on Collection {
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ... on Collection {
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  articles: collections(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
}

fragment RelatedIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...RelatedIssueBlockFragment
      id
    }
  }
}

fragment RelatedJournalFragment on Collection {
  __typename
  id
  title
  subtitle
  slug
  updatedAt
  thumbnail {
    storage
    ...CoverImageFragment
  }
  issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
    pageInfo {
      totalCount
    }
  }
}

fragment RelatedJournalsFragment on CollectionConnection {
  edges {
    node {
      slug
      ...RelatedJournalFragment
      id
    }
  }
}

fragment SearchButtonFragment on Entity {
  __isEntity: __typename
  ...SearchModalFragment
}

fragment SearchModalFragment on Entity {
  __isEntity: __typename
  __typename
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  title
  breadcrumbs {
    crumb {
      __typename
      ... on Sluggable {
        __isSluggable: __typename
        slug
      }
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    id
  }
}

fragment SeriesHeroFragment on Collection {
  slug
  title
  subtitle
  visibility
  currentlyHidden
  published {
    ...PrecisionDateFragment
    value
  }
  about: schemaProperty(fullPath: "about") {
    __typename
    ... on MarkdownProperty {
      content
    }
  }
  ...ArticleParentHeaderFragment
  thumbnail {
    storage
    ...ContentImageFragment
  }
}

fragment SeriesLayoutFragment on Collection {
  ...BreadcrumbsBarFragment
  ...SeriesHeroFragment
  ...EntityNavBarFragment
}

fragment ViewCountFragment on AnalyticsEventCountSummary {
  total
}

fragment VolumeHeroFragment on Collection {
  id
  title
  subtitle
  summary
  ...DOIFragment
  visibility
  currentlyHidden
  published {
    value
    ...PrecisionDateFragment
  }
  thumbnail {
    ...CoverImageFragment
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ...JournalHeroCompactFragment
    ...JournalHeroMetadataFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment VolumeLayoutFragment on Collection {
  ...BreadcrumbsBarFragment
  ...VolumeHeroFragment
  ...EntityNavBarFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "file"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "file"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "name": "slug",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v15 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "large",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageDerivative",
      "kind": "LinkedField",
      "name": "webp",
      "plural": false,
      "selections": [
        (v11/*: any*/),
        (v12/*: any*/),
        (v13/*: any*/),
        (v14/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v12/*: any*/)
    ],
    "storageKey": null
  }
],
v17 = {
  "alias": "placeholder",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": (v16/*: any*/),
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v21 = {
  "kind": "InlineFragment",
  "selections": [
    (v6/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v22 = [
  (v19/*: any*/)
],
v23 = {
  "kind": "InlineFragment",
  "selections": (v22/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v24 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v26 = [
  (v10/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "medium",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageDerivative",
        "kind": "LinkedField",
        "name": "webp",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v27 = [
  (v11/*: any*/)
],
v28 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": (v27/*: any*/),
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v29/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentlyHidden",
  "storageKey": null
},
v34 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "hero",
  "plural": false,
  "selections": (v16/*: any*/),
  "storageKey": null
},
v35 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v36 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "large",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageDerivative",
      "kind": "LinkedField",
      "name": "webp",
      "plural": false,
      "selections": [
        (v12/*: any*/),
        (v11/*: any*/),
        (v13/*: any*/),
        (v14/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v38 = [
  (v37/*: any*/)
],
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v39/*: any*/),
    (v40/*: any*/)
  ],
  "storageKey": null
},
v42 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v43 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "issn",
      "storageKey": null
    }
  ],
  "type": "HasISSN",
  "abstractKey": "__isHasISSN"
},
v44 = [
  (v4/*: any*/),
  {
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
      }
    ],
    "type": "BooleanProperty",
    "abstractKey": null
  }
],
v45 = {
  "alias": "openAccess",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "open_access"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v44/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v47 = {
  "alias": "ccLicense",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "cc_license"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "selection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultSelection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SelectOption",
          "kind": "LinkedField",
          "name": "options",
          "plural": true,
          "selections": [
            (v46/*: any*/),
            (v39/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"cc_license\")"
},
v48 = {
  "alias": "peerReviewed",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "peer_reviewed"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v44/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v49 = {
  "kind": "InlineFragment",
  "selections": [
    (v45/*: any*/),
    (v47/*: any*/),
    (v48/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v50 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v51 = [
  (v4/*: any*/),
  (v23/*: any*/),
  (v24/*: any*/)
],
v52 = {
  "alias": "volume",
  "args": (v50/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v51/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v53 = {
  "alias": "pdfVersion",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "pdf_version"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v9/*: any*/),
                (v8/*: any*/),
                (v7/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "contentType",
                  "storageKey": null
                }
              ],
              "type": "Asset",
              "abstractKey": "__isAsset"
            },
            (v24/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "AssetProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v55 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v10/*: any*/)
    ],
    "storageKey": null
  }
],
v56 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v57 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v58 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v59 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v60 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "legalName",
      "storageKey": null
    }
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v61 = [
  (v6/*: any*/),
  (v5/*: any*/)
],
v62 = [
  (v6/*: any*/),
  (v54/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": (v55/*: any*/),
        "type": "PersonContributor",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v55/*: any*/),
        "type": "OrganizationContributor",
        "abstractKey": null
      },
      (v24/*: any*/)
    ],
    "storageKey": null
  },
  (v5/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v56/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contributorKind",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v57/*: any*/),
          (v21/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "small",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageDerivative",
                        "kind": "LinkedField",
                        "name": "webp",
                        "plural": false,
                        "selections": [
                          (v11/*: any*/),
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Contributor",
            "abstractKey": "__isContributor"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v56/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "orcid",
                "storageKey": null
              },
              (v58/*: any*/),
              (v59/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v60/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v61/*: any*/),
            "storageKey": null
          }
        ],
        "type": "ItemContribution",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v61/*: any*/),
            "storageKey": null
          }
        ],
        "type": "CollectionContribution",
        "abstractKey": null
      }
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v63 = [
  (v4/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v22/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v24/*: any*/)
],
v64 = {
  "alias": "journal",
  "args": (v42/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v63/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v66 = {
  "alias": "about",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "about"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v65/*: any*/)
      ],
      "type": "MarkdownProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"about\")"
},
v67 = {
  "alias": null,
  "args": null,
  "concreteType": "EntityBreadcrumb",
  "kind": "LinkedField",
  "name": "breadcrumbs",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "depth",
      "storageKey": null
    },
    (v46/*: any*/),
    (v7/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v68 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "availability",
      "value": "ENABLED"
    }
  ],
  "concreteType": "OrderingConnection",
  "kind": "LinkedField",
  "name": "orderings",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Ordering",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v9/*: any*/),
        (v6/*: any*/),
        (v29/*: any*/),
        (v20/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "orderings(availability:\"ENABLED\")"
},
v69 = {
  "alias": null,
  "args": null,
  "concreteType": "PageConnection",
  "kind": "LinkedField",
  "name": "pages",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v19/*: any*/),
            (v6/*: any*/),
            (v5/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v70 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v15/*: any*/),
    (v17/*: any*/)
  ],
  "storageKey": null
},
v71 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v34/*: any*/),
    (v17/*: any*/)
  ],
  "storageKey": null
},
v72 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v40/*: any*/),
    (v39/*: any*/)
  ],
  "storageKey": null
},
v73 = [
  (v32/*: any*/),
  (v33/*: any*/),
  (v72/*: any*/),
  (v66/*: any*/)
],
v74 = {
  "kind": "InlineFragment",
  "selections": (v73/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v75 = {
  "kind": "InlineFragment",
  "selections": (v73/*: any*/),
  "type": "Item",
  "abstractKey": null
},
v76 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v77 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
      "storageKey": null
    }
  ],
  "type": "HasDOI",
  "abstractKey": "__isHasDOI"
},
v78 = {
  "alias": "unit",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:unit"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v51/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v79 = {
  "alias": "campus",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:campus"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v51/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
},
v80 = {
  "kind": "InlineFragment",
  "selections": [
    (v67/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "journal",
          "args": (v42/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v51/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
        },
        (v52/*: any*/),
        {
          "alias": "issue",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:journal_issue"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v51/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
        },
        (v78/*: any*/),
        {
          "alias": "series",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:series"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v51/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:series\")"
        },
        (v79/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v78/*: any*/),
        (v79/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v81 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v82 = [
  (v4/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullPath",
        "storageKey": null
      },
      (v65/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FileSlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AssetDetailBlockFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "ItemLayoutQueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FileSlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "caption",
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fileSize",
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "altText",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "preview",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v15/*: any*/),
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Asset",
                "abstractKey": "__isAsset"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v18/*: any*/)
                ],
                "type": "AssetImage",
                "abstractKey": null
              }
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
              (v19/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "logo",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageOriginal",
                    "kind": "LinkedField",
                    "name": "original",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v9/*: any*/),
                  (v20/*: any*/),
                  (v7/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageConnection",
                "kind": "LinkedField",
                "name": "pages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Page",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v19/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v19/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityBreadcrumb",
                "kind": "LinkedField",
                "name": "breadcrumbs",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "crumb",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v21/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v25/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": (v26/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageMetadata",
                    "kind": "LinkedField",
                    "name": "thumbnailMetadata",
                    "plural": false,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "heroImage",
                    "plural": false,
                    "selections": (v26/*: any*/),
                    "storageKey": null
                  },
                  (v28/*: any*/)
                ],
                "type": "Entity",
                "abstractKey": "__isEntity"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v30/*: any*/),
                  (v6/*: any*/),
                  (v19/*: any*/),
                  (v31/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "heroImage",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v34/*: any*/),
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v28/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v35/*: any*/)
                    ],
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "relatedCollections",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Collection",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v19/*: any*/),
                              (v31/*: any*/),
                              (v18/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/),
                                  (v36/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "issues",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "schema",
                                    "value": [
                                      "nglp:journal_issue"
                                    ]
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "scope",
                                    "value": "COLLECTION"
                                  }
                                ],
                                "concreteType": "EntityDescendantConnection",
                                "kind": "LinkedField",
                                "name": "descendants",
                                "plural": false,
                                "selections": (v38/*: any*/),
                                "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "relatedCollections(order:\"RECENT\",perPage:4)"
                  },
                  (v25/*: any*/),
                  (v41/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": [
                      (v36/*: any*/),
                      (v10/*: any*/),
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "journal",
                    "args": (v42/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v19/*: any*/),
                          (v31/*: any*/),
                          (v43/*: any*/),
                          (v49/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  (v52/*: any*/),
                  (v53/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionContributionConnection",
                    "kind": "LinkedField",
                    "name": "contributions",
                    "plural": false,
                    "selections": [
                      (v37/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ItemContribution",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": (v62/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "ItemContributionConnection",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CollectionContribution",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": (v62/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "CollectionContributionConnection",
                            "abstractKey": null
                          }
                        ],
                        "type": "Paginated",
                        "abstractKey": "__isPaginated"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "page",
                        "value": 1
                      },
                      (v35/*: any*/)
                    ],
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "relatedCollections",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Collection",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v4/*: any*/),
                              (v19/*: any*/),
                              (v31/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v36/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v41/*: any*/),
                              {
                                "alias": "volume",
                                "args": (v50/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "ancestorOfType",
                                "plural": false,
                                "selections": (v63/*: any*/),
                                "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                              },
                              (v64/*: any*/),
                              {
                                "alias": "articles",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "schema",
                                    "value": "nglp:journal_article"
                                  }
                                ],
                                "concreteType": "CollectionConnection",
                                "kind": "LinkedField",
                                "name": "collections",
                                "plural": false,
                                "selections": (v38/*: any*/),
                                "storageKey": "collections(schema:\"nglp:journal_article\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "relatedCollections(page:1,perPage:4)"
                  },
                  (v66/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v67/*: any*/),
                          (v68/*: any*/),
                          (v69/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v31/*: any*/),
                                  (v70/*: any*/),
                                  (v71/*: any*/)
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v74/*: any*/),
                              (v75/*: any*/),
                              (v76/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v76/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isSluggable"
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v77/*: any*/),
                  (v43/*: any*/),
                  (v49/*: any*/),
                  (v80/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v30/*: any*/),
                  (v6/*: any*/),
                  (v19/*: any*/),
                  (v31/*: any*/),
                  (v25/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/),
                  (v72/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemContributionConnection",
                    "kind": "LinkedField",
                    "name": "contributions",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ItemContribution",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v54/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "contributor",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v57/*: any*/),
                              (v21/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v58/*: any*/),
                                  (v59/*: any*/)
                                ],
                                "type": "PersonContributor",
                                "abstractKey": null
                              },
                              (v60/*: any*/),
                              (v24/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v37/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v53/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v42/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v48/*: any*/),
                          {
                            "alias": "prePrintVersion",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "fullPath",
                                "value": "preprint_version"
                              }
                            ],
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "schemaProperty",
                            "plural": false,
                            "selections": (v44/*: any*/),
                            "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
                          },
                          (v45/*: any*/),
                          (v47/*: any*/)
                        ],
                        "type": "SchemaInstance",
                        "abstractKey": "__isSchemaInstance"
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  {
                    "alias": "abstract",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "abstract"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                            "concreteType": "FullText",
                            "kind": "LinkedField",
                            "name": "fullText",
                            "plural": false,
                            "selections": [
                              (v65/*: any*/),
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "lang",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          }
                        ],
                        "type": "FullTextProperty",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": "schemaProperty(fullPath:\"abstract\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "entityViews",
                    "plural": false,
                    "selections": (v81/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "assetDownloads",
                    "plural": false,
                    "selections": (v81/*: any*/),
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
                      (v29/*: any*/),
                      (v9/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v69/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAssetConnection",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": false,
                    "selections": (v38/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemConnection",
                    "kind": "LinkedField",
                    "name": "relatedItems",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ItemEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Item",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v19/*: any*/),
                              (v6/*: any*/),
                              (v72/*: any*/),
                              (v64/*: any*/),
                              {
                                "alias": "volumeId",
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
                                "selections": (v82/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                              },
                              {
                                "alias": "issueId",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "fullPath",
                                    "value": "id"
                                  }
                                ],
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": (v82/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"id\")"
                              },
                              (v5/*: any*/)
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
                        "kind": "InlineFragment",
                        "selections": [
                          (v67/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v31/*: any*/),
                                  (v70/*: any*/),
                                  (v71/*: any*/),
                                  (v68/*: any*/),
                                  (v69/*: any*/)
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v74/*: any*/),
                              (v75/*: any*/),
                              (v76/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v80/*: any*/),
                  (v77/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v47/*: any*/),
                      (v48/*: any*/),
                      (v45/*: any*/)
                    ],
                    "type": "SchemaInstance",
                    "abstractKey": "__isSchemaInstance"
                  }
                ],
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
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
                "name": "installationName",
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
    "cacheID": "ad0160b35f34f4d9acaaded64e8ac8ad",
    "id": null,
    "metadata": {},
    "name": "FileSlugItemQuery",
    "operationKind": "query",
    "text": "query FileSlugItemQuery(\n  $slug: Slug!\n  $file: Slug!\n) {\n  asset(slug: $file) {\n    __typename\n    ...AssetDetailBlockFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...ItemLayoutQueryFragment_20J5Pl\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppBodyEntityFragment on Entity {\n  __isEntity: __typename\n  ...AppHeaderEntityFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  slug\n  title\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment AppLayoutEntityFragment on Entity {\n  __isEntity: __typename\n  ...CommunityNavBarEntityFragment\n  ...AppBodyEntityFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  visibility\n  currentlyHidden\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  abstract: schemaProperty(fullPath: \"abstract\") {\n    __typename\n    ...FullTextFragment\n  }\n  entityViews {\n    ...ViewCountFragment\n  }\n  assetDownloads {\n    ...DownloadCountFragment\n  }\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n  ...OpenAccessFragment\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Entity {\n  __isEntity: __typename\n  ... on Item {\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    series: ancestorOfType(schema: \"nglp:series\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Collection {\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  schemaVersion {\n    identifier\n    name\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment AssetDetailBlockFragment on Node {\n  __isNode: __typename\n  ... on Asset {\n    __isAsset: __typename\n    slug\n    caption\n    kind\n    downloadUrl\n    fileSize\n    name\n    altText\n    preview {\n      storage\n      ...ContentImageFragment\n    }\n    ...AssetPDFPreviewFragment\n  }\n  ... on AssetImage {\n    updatedAt\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment AssetPDFPreviewFragment on Asset {\n  __isAsset: __typename\n  ... on AssetPDF {\n    downloadUrl\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributionsBlockFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityHTMLHeadAppFragment on Query {\n  globalConfiguration {\n    site {\n      installationName\n    }\n    id\n  }\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    summary\n    thumbnail {\n      storage\n      medium {\n        webp {\n          url\n          width\n          height\n        }\n      }\n    }\n    thumbnailMetadata {\n      alt\n    }\n    heroImage {\n      storage\n      medium {\n        webp {\n          url\n          width\n          height\n        }\n      }\n    }\n    heroImageMetadata {\n      alt\n    }\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    subtitle\n    summary\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Collection {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n  ... on Item {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n    ...SeriesLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...ContributionsBlockFragment\n    pageInfo {\n      totalCount\n    }\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment ItemLayoutFragment_20J5Pl on Query {\n  item(slug: $slug) {\n    ...AppLayoutEntityFragment\n    ...EntityHTMLHeadFragment\n    ...EntityLayoutFactoryFragment\n    community {\n      ...AppLayoutCommunityFragment\n      id\n    }\n    id\n  }\n  ...EntityHTMLHeadAppFragment\n}\n\nfragment ItemLayoutQueryFragment_20J5Pl on Query {\n  ...ItemLayoutFragment_20J5Pl\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SeriesHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  ...ArticleParentHeaderFragment\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n}\n\nfragment SeriesLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...SeriesHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n"
  }
};
})();
(node as any).hash = 'fa4ba61938d8eb29a1b6013e4026e749';
export default node;
