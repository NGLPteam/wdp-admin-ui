/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugItemQueryVariables = {
    slug: string;
};
export type SlugItemQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityContentLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment">;
};
export type SlugItemQuery = {
    readonly response: SlugItemQueryResponse;
    readonly variables: SlugItemQueryVariables;
};



/*
query SlugItemQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    ...EntityContentLayoutFactoryFragment
    id
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

fragment ArticleContributorFragment on ItemContributionConnection {
  nodes {
    role
    ...ContributionAuthorBlockFragment
    id
  }
  ...ContributionsBlockFragment
}

fragment ArticleHeroFragment on Item {
  slug
  title
  subtitle
  summary
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

fragment ArticleSummaryFragment on Item {
  __typename
  title
  subtitle
  thumbnail {
    storage
    ...SquareThumbnailFragment
  }
  slug
  summary
  contributions {
    ...ContributorsListFragment
  }
  published {
    value
    ...PrecisionDateFragment
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

fragment ArticleTextFragment on Item {
  thumbnail {
    storage
    ...ContentImageFragment
  }
  bodyText: schemaProperty(fullPath: "body") {
    __typename
    ... on FullTextProperty {
      fullText {
        content
      }
    }
    ...FullTextFragment
  }
  pdf: schemaProperty(fullPath: "pdf_version") {
    __typename
    ... on AssetProperty {
      asset {
        __typename
        ...AssetInlinePDFFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment AssetDownloadButtonFragment on Asset {
  __isAsset: __typename
  name
  downloadUrl
  kind
  contentType
}

fragment AssetInlinePDFFragment on Asset {
  __isAsset: __typename
  ... on AssetPDF {
    downloadUrl
  }
  ...AssetDownloadButtonFragment
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

fragment ContributionAuthorBlockFragment on Contribution {
  __isContribution: __typename
  affiliation
  role
  ... on CollectionContribution {
    collection {
      slug
      id
    }
  }
  ... on ItemContribution {
    item {
      slug
      id
    }
  }
  contributor {
    __typename
    ... on Sluggable {
      __isSluggable: __typename
      slug
    }
    ... on PersonContributor {
      __typename
      title
      bio
      affiliation
      image {
        storage
        ...ContributorAvatarFragment
      }
      ...ContributorNameFragment
    }
    ... on OrganizationContributor {
      __typename
      bio
      image {
        storage
        ...ContributorAvatarFragment
      }
      ...ContributorNameFragment
    }
    ... on Node {
      __isNode: __typename
      id
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

fragment EntityAnnouncementsFragment on AnnouncementConnection {
  nodes {
    teaser
    header
    slug
    id
  }
}

fragment EntityContentLayoutFactoryFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFactoryFragment
    ...EntityOrderingLayoutFactoryFragment
    ...JournalLayoutFragment
    ...JournalContentFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFactoryFragment
    ...EntityOrderingLayoutFactoryFragment
    ...ArticleLayoutFragment
    ...ArticleTextFragment
    ...HowToCiteFragment
    contributions {
      ...ArticleContributorFragment
    }
  }
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
  orderings {
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

fragment EntityOrderSelectFragment on OrderingConnection {
  edges {
    node {
      name
      identifier
      id
    }
  }
}

fragment EntityOrderingLayoutFactoryFragment on Entity {
  __isEntity: __typename
  schemaDefinition {
    identifier
    id
  }
  initialOrdering {
    identifier
    id
  }
  ...IssueSidebarNavFragment
}

fragment FeaturedIssueFragment on Collection {
  id
  title
  subtitle
  slug
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
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
  ordering(identifier: "articles") {
    identifier
    children(perPage: 3) {
      edges {
        node {
          entry {
            __typename
            ... on Sluggable {
              __isSluggable: __typename
              slug
            }
            ...ArticleSummaryFragment
            ... on Node {
              __isNode: __typename
              id
            }
          }
          id
        }
      }
      pageInfo {
        totalCount
      }
    }
    id
  }
  featuredArticles: schemaProperty(fullPath: "featured_articles") {
    __typename
    ... on EntitiesProperty {
      entities {
        __typename
        ... on Sluggable {
          __isSluggable: __typename
          slug
        }
        ...ArticleSummaryFragment
        ... on Node {
          __isNode: __typename
          id
        }
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

fragment HowToCiteFragment on Item {
  citation: schemaProperty(fullPath: "citation") {
    __typename
    ... on MarkdownProperty {
      content
    }
  }
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
  }
  relatedCollections(page: 1, perPage: 4) {
    ...RelatedIssuesFragment
  }
}

fragment IssueSidebarNavFragment on Collection {
  orderings {
    ...EntityOrderSelectFragment
  }
  ...IssueSidebarNavListFragment
}

fragment IssueSidebarNavListFragment on Collection {
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

fragment IssueSummaryFragment on Collection {
  id
  title
  subtitle
  slug
  summary
  cover: thumbnail {
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
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
  issueNumber: schemaProperty(fullPath: "number") {
    __typename
    ... on StringProperty {
      content
    }
  }
}

fragment ItemLayoutQueryFragment_20J5Pl on Query {
  item(slug: $slug) {
    ...AppLayoutEntityFragment
    ...EntityHTMLHeadFragment
    community {
      ...AppLayoutCommunityFragment
      id
    }
    id
  }
  ...EntityHTMLHeadAppFragment
}

fragment JournalContentFragment on Collection {
  slug
  description: schemaProperty(fullPath: "description") {
    __typename
    ... on FullTextProperty {
      fullText {
        content
      }
    }
    ...FullTextFragment
  }
  about: schemaProperty(fullPath: "about") {
    __typename
    ... on MarkdownProperty {
      content
    }
  }
  issues: collections(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {
    ...RecentIssuesFragment
  }
  currentIssue: firstCollection(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {
    ...FeaturedIssueFragment
    id
  }
  announcements {
    ...EntityAnnouncementsFragment
    nodes {
      slug
      id
    }
  }
}

fragment JournalHeroCompactFragment on Collection {
  title
  subtitle
}

fragment JournalHeroFragment on Collection {
  slug
  title
  subtitle
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

fragment RecentIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...IssueSummaryFragment
      id
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

fragment SquareThumbnailFragment on ImageAttachment {
  image: medium {
    webp {
      alt
      url
    }
  }
}

fragment VolumeHeroFragment on Collection {
  id
  title
  subtitle
  summary
  ...DOIFragment
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
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
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
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
  "name": "count",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v12 = {
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
            (v4/*: any*/),
            (v3/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v14 = [
  (v13/*: any*/),
  (v2/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": (v14/*: any*/),
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v17 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v8/*: any*/)
    ],
    "storageKey": null
  }
],
v18 = {
  "alias": "placeholder",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": (v17/*: any*/),
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
      "plural": false,
      "selections": (v17/*: any*/),
      "storageKey": null
    },
    (v18/*: any*/)
  ],
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v21 = [
  (v20/*: any*/)
],
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v23 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v25 = {
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
        (v8/*: any*/),
        (v20/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v26 = {
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
v27 = [
  (v26/*: any*/)
],
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v29 = [
  (v24/*: any*/),
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
          (v28/*: any*/),
          (v11/*: any*/),
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
v30 = [
  (v28/*: any*/)
],
v31 = [
  (v24/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v30/*: any*/),
    "type": "MarkdownProperty",
    "abstractKey": null
  }
],
v32 = {
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
  "selections": (v31/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"about\")"
},
v33 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v34 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
},
v35 = {
  "kind": "Literal",
  "name": "page",
  "value": 1
},
v36 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v38 = [
  (v25/*: any*/)
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
    "value": "nglp:journal_volume"
  }
],
v43 = [
  (v3/*: any*/)
],
v44 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v45 = [
  (v24/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v43/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v44/*: any*/)
],
v46 = {
  "alias": "volume",
  "args": (v42/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v45/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v47 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_article"
  }
],
v48 = {
  "alias": "articles",
  "args": (v47/*: any*/),
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": (v27/*: any*/),
  "storageKey": "items(schema:\"nglp:journal_article\")"
},
v49 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": (v38/*: any*/),
  "storageKey": null
},
v50 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v51 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v20/*: any*/),
      (v8/*: any*/)
    ],
    "storageKey": null
  }
],
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v53 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v55 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v56 = {
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
v57 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v24/*: any*/),
    (v53/*: any*/),
    (v50/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v54/*: any*/),
        (v55/*: any*/)
      ],
      "type": "PersonContributor",
      "abstractKey": null
    },
    (v56/*: any*/),
    (v44/*: any*/)
  ],
  "storageKey": null
},
v58 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemContribution",
  "kind": "LinkedField",
  "name": "nodes",
  "plural": true,
  "selections": [
    (v52/*: any*/),
    (v57/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v59 = [
  (v24/*: any*/),
  (v50/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v3/*: any*/),
      (v16/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageAttachment",
        "kind": "LinkedField",
        "name": "thumbnail",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": "image",
            "args": null,
            "concreteType": "ImageSize",
            "kind": "LinkedField",
            "name": "medium",
            "plural": false,
            "selections": (v51/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/),
      (v37/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemContributionConnection",
        "kind": "LinkedField",
        "name": "contributions",
        "plural": false,
        "selections": [
          (v58/*: any*/)
        ],
        "storageKey": null
      },
      (v41/*: any*/)
    ],
    "type": "Item",
    "abstractKey": null
  },
  (v44/*: any*/)
],
v60 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v25/*: any*/),
    (v5/*: any*/),
    (v18/*: any*/)
  ],
  "storageKey": null
},
v61 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v62 = {
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
v63 = [
  (v24/*: any*/),
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
v64 = {
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
  "selections": (v63/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v66 = {
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
    (v24/*: any*/),
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
            (v65/*: any*/),
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
v67 = {
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
  "selections": (v63/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v68 = {
  "kind": "InlineFragment",
  "selections": [
    (v64/*: any*/),
    (v66/*: any*/),
    (v67/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v69 = {
  "alias": "journal",
  "args": (v61/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": [
    (v24/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v3/*: any*/),
        (v16/*: any*/),
        (v62/*: any*/),
        (v68/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v44/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v70 = {
  "kind": "InlineFragment",
  "selections": (v43/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v71 = [
  (v24/*: any*/),
  (v70/*: any*/),
  (v44/*: any*/)
],
v72 = {
  "alias": "volume",
  "args": (v42/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v71/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v73 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "pdf_version"
  }
],
v74 = [
  (v24/*: any*/),
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
          (v24/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "downloadUrl",
                "storageKey": null
              },
              (v11/*: any*/),
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
          (v44/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "AssetProperty",
    "abstractKey": null
  }
],
v75 = {
  "alias": "pdfVersion",
  "args": (v73/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v74/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
},
v76 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v5/*: any*/)
    ],
    "storageKey": null
  }
],
v77 = {
  "kind": "InlineFragment",
  "selections": (v76/*: any*/),
  "type": "PersonContributor",
  "abstractKey": null
},
v78 = {
  "kind": "InlineFragment",
  "selections": (v76/*: any*/),
  "type": "OrganizationContributor",
  "abstractKey": null
},
v79 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v80 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v81 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contributorKind",
  "storageKey": null
},
v82 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "small",
  "plural": false,
  "selections": (v51/*: any*/),
  "storageKey": null
},
v83 = {
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
        (v82/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
},
v84 = [
  (v4/*: any*/),
  (v2/*: any*/)
],
v85 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v84/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ItemContribution",
  "abstractKey": null
},
v86 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v84/*: any*/),
      "storageKey": null
    }
  ],
  "type": "CollectionContribution",
  "abstractKey": null
},
v87 = [
  (v4/*: any*/),
  (v52/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v24/*: any*/),
      (v77/*: any*/),
      (v78/*: any*/),
      (v44/*: any*/)
    ],
    "storageKey": null
  },
  (v2/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v79/*: any*/),
      (v80/*: any*/),
      (v81/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v53/*: any*/),
          (v50/*: any*/),
          (v83/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v79/*: any*/),
              (v54/*: any*/),
              (v55/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v56/*: any*/)
        ],
        "storageKey": null
      },
      (v85/*: any*/),
      (v86/*: any*/)
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v88 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionContributionConnection",
  "kind": "LinkedField",
  "name": "contributions",
  "plural": false,
  "selections": [
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
              "selections": (v87/*: any*/),
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
              "selections": (v87/*: any*/),
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
v89 = {
  "alias": "journal",
  "args": (v61/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v45/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v90 = {
  "alias": null,
  "args": [
    (v35/*: any*/),
    (v23/*: any*/)
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
            (v4/*: any*/),
            (v24/*: any*/),
            (v3/*: any*/),
            (v16/*: any*/),
            (v2/*: any*/),
            (v49/*: any*/),
            (v41/*: any*/),
            (v46/*: any*/),
            (v89/*: any*/),
            {
              "alias": "articles",
              "args": (v47/*: any*/),
              "concreteType": "CollectionConnection",
              "kind": "LinkedField",
              "name": "collections",
              "plural": false,
              "selections": (v27/*: any*/),
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
v91 = {
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
    (v65/*: any*/),
    (v11/*: any*/),
    (v4/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v92 = {
  "alias": null,
  "args": null,
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
        (v4/*: any*/),
        (v13/*: any*/),
        (v10/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v93 = {
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
            (v3/*: any*/),
            (v4/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v94 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v95 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v96 = {
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
v97 = {
  "alias": "journal",
  "args": (v61/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": [
    (v70/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v98 = {
  "alias": "issue",
  "args": [
    (v36/*: any*/)
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v71/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
},
v99 = {
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
  "selections": (v71/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v100 = {
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
  "selections": (v71/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:series\")"
},
v101 = {
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
  "selections": (v71/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
},
v102 = {
  "kind": "InlineFragment",
  "selections": [
    (v99/*: any*/),
    (v101/*: any*/)
  ],
  "type": "Collection",
  "abstractKey": null
},
v103 = {
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
v104 = {
  "alias": "journal",
  "args": (v61/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": [
    (v24/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v67/*: any*/),
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
          "selections": (v63/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
        },
        (v64/*: any*/),
        (v66/*: any*/)
      ],
      "type": "SchemaInstance",
      "abstractKey": "__isSchemaInstance"
    },
    (v44/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v105 = {
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
  "selections": (v29/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"abstract\")"
},
v106 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    (v13/*: any*/),
    (v9/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v107 = {
  "alias": null,
  "args": null,
  "concreteType": "AnyAssetConnection",
  "kind": "LinkedField",
  "name": "assets",
  "plural": false,
  "selections": (v27/*: any*/),
  "storageKey": null
},
v108 = [
  (v24/*: any*/),
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
      (v28/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v109 = {
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
            (v3/*: any*/),
            (v4/*: any*/),
            (v103/*: any*/),
            (v89/*: any*/),
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
              "selections": (v108/*: any*/),
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
              "selections": (v108/*: any*/),
              "storageKey": "schemaProperty(fullPath:\"id\")"
            },
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v110 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
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
            (v20/*: any*/),
            (v8/*: any*/),
            (v6/*: any*/),
            (v7/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v18/*: any*/)
  ],
  "storageKey": null
},
v111 = {
  "kind": "InlineFragment",
  "selections": [
    (v97/*: any*/),
    (v72/*: any*/),
    (v98/*: any*/),
    (v99/*: any*/),
    (v100/*: any*/),
    (v101/*: any*/)
  ],
  "type": "Item",
  "abstractKey": null
},
v112 = {
  "kind": "InlineFragment",
  "selections": [
    (v24/*: any*/),
    (v91/*: any*/),
    (v94/*: any*/),
    (v111/*: any*/),
    (v102/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v113 = {
  "kind": "InlineFragment",
  "selections": [
    (v66/*: any*/),
    (v67/*: any*/),
    (v64/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v114 = {
  "alias": null,
  "args": null,
  "concreteType": "Ordering",
  "kind": "LinkedField",
  "name": "initialOrdering",
  "plural": false,
  "selections": (v14/*: any*/),
  "storageKey": null
},
v115 = {
  "alias": null,
  "args": null,
  "concreteType": "OrderingConnection",
  "kind": "LinkedField",
  "name": "orderings",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Ordering",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v9/*: any*/),
            (v13/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v116 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v117 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v82/*: any*/)
  ],
  "storageKey": null
},
v118 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v77/*: any*/),
      (v78/*: any*/)
    ],
    "storageKey": null
  },
  {
    "kind": "InlineFragment",
    "selections": [
      (v80/*: any*/),
      (v81/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v83/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v119 = [
  (v5/*: any*/),
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
          (v8/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityContentLayoutFactoryFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ItemLayoutQueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugItemQuery",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "logo",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageOriginal",
                    "kind": "LinkedField",
                    "name": "original",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
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
                  (v4/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v15/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v16/*: any*/),
                  (v19/*: any*/),
                  (v22/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v23/*: any*/)
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
                              (v4/*: any*/),
                              (v24/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v16/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "updatedAt",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
                                  (v25/*: any*/)
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
                                "selections": (v27/*: any*/),
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
                  {
                    "alias": "description",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "description"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v29/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"description\")"
                  },
                  (v32/*: any*/),
                  {
                    "alias": "issues",
                    "args": [
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v35/*: any*/),
                      (v23/*: any*/),
                      (v36/*: any*/)
                    ],
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "collections",
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
                              (v4/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v16/*: any*/),
                              (v37/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": (v38/*: any*/),
                                "storageKey": null
                              },
                              (v41/*: any*/),
                              (v46/*: any*/),
                              (v48/*: any*/),
                              {
                                "alias": "issueNumber",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "fullPath",
                                    "value": "number"
                                  }
                                ],
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": [
                                  (v24/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v30/*: any*/),
                                    "type": "StringProperty",
                                    "abstractKey": null
                                  }
                                ],
                                "storageKey": "schemaProperty(fullPath:\"number\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
                  },
                  {
                    "alias": "currentIssue",
                    "args": [
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/)
                    ],
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "firstCollection",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v16/*: any*/),
                      (v4/*: any*/),
                      (v49/*: any*/),
                      (v41/*: any*/),
                      (v46/*: any*/),
                      (v48/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "identifier",
                            "value": "articles"
                          }
                        ],
                        "concreteType": "Ordering",
                        "kind": "LinkedField",
                        "name": "ordering",
                        "plural": false,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "perPage",
                                "value": 3
                              }
                            ],
                            "concreteType": "OrderingEntryConnection",
                            "kind": "LinkedField",
                            "name": "children",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrderingEntryEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "OrderingEntry",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "entry",
                                        "plural": false,
                                        "selections": (v59/*: any*/),
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v26/*: any*/)
                            ],
                            "storageKey": "children(perPage:3)"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": "ordering(identifier:\"articles\")"
                      },
                      {
                        "alias": "featuredArticles",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "fullPath",
                            "value": "featured_articles"
                          }
                        ],
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": [
                          (v24/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "entities",
                                "plural": true,
                                "selections": (v59/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "EntitiesProperty",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
                      }
                    ],
                    "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnnouncementConnection",
                    "kind": "LinkedField",
                    "name": "announcements",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Announcement",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "teaser",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "header",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v2/*: any*/)
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
                          (v37/*: any*/),
                          (v41/*: any*/),
                          (v60/*: any*/),
                          (v69/*: any*/),
                          (v72/*: any*/),
                          (v75/*: any*/),
                          (v88/*: any*/),
                          (v90/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v24/*: any*/),
                                  (v91/*: any*/),
                                  (v92/*: any*/),
                                  (v93/*: any*/),
                                  (v94/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v95/*: any*/)
                                    ],
                                    "type": "AnyEntity",
                                    "abstractKey": "__isAnyEntity"
                                  }
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v95/*: any*/),
                              (v94/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          },
                          (v96/*: any*/),
                          (v62/*: any*/),
                          (v68/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v24/*: any*/),
                              (v91/*: any*/),
                              (v94/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v97/*: any*/),
                                  (v98/*: any*/),
                                  (v99/*: any*/),
                                  (v100/*: any*/),
                                  (v101/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v102/*: any*/)
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          }
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v37/*: any*/),
                          (v103/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ItemContributionConnection",
                            "kind": "LinkedField",
                            "name": "contributions",
                            "plural": false,
                            "selections": [
                              (v58/*: any*/),
                              (v26/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v75/*: any*/),
                          (v104/*: any*/),
                          (v105/*: any*/),
                          (v106/*: any*/),
                          (v93/*: any*/),
                          (v107/*: any*/),
                          (v109/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v24/*: any*/),
                                  (v91/*: any*/),
                                  (v94/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v110/*: any*/),
                                          (v92/*: any*/)
                                        ],
                                        "type": "Entity",
                                        "abstractKey": "__isEntity"
                                      },
                                      (v95/*: any*/)
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
                          (v112/*: any*/),
                          (v96/*: any*/),
                          (v113/*: any*/)
                        ],
                        "type": "Item",
                        "abstractKey": null
                      },
                      (v95/*: any*/),
                      (v94/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v24/*: any*/),
                          (v92/*: any*/),
                          (v93/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v114/*: any*/),
                      (v24/*: any*/),
                      (v91/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v115/*: any*/),
                          (v12/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v94/*: any*/)
                    ],
                    "type": "Entity",
                    "abstractKey": "__isEntity"
                  },
                  (v96/*: any*/),
                  (v62/*: any*/),
                  (v68/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v15/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v16/*: any*/),
                  (v37/*: any*/),
                  (v103/*: any*/),
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
                          (v52/*: any*/),
                          (v57/*: any*/),
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v79/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contributor",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v3/*: any*/),
                                      (v116/*: any*/),
                                      (v79/*: any*/),
                                      (v117/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v56/*: any*/)
                                        ],
                                        "type": "AnyContributor",
                                        "abstractKey": "__isAnyContributor"
                                      }
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v116/*: any*/),
                                      (v117/*: any*/)
                                    ],
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v86/*: any*/),
                              (v85/*: any*/)
                            ],
                            "type": "Contribution",
                            "abstractKey": "__isContribution"
                          }
                        ],
                        "storageKey": null
                      },
                      (v26/*: any*/),
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
                                "selections": (v118/*: any*/),
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
                                "selections": (v118/*: any*/),
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
                  (v75/*: any*/),
                  (v104/*: any*/),
                  (v105/*: any*/),
                  (v106/*: any*/),
                  (v93/*: any*/),
                  (v107/*: any*/),
                  (v109/*: any*/),
                  (v110/*: any*/),
                  {
                    "alias": "bodyText",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "body"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v29/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"body\")"
                  },
                  {
                    "alias": "pdf",
                    "args": (v73/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v74/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
                  },
                  {
                    "alias": "citation",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "citation"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v31/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"citation\")"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v37/*: any*/),
                          (v41/*: any*/),
                          (v60/*: any*/),
                          (v69/*: any*/),
                          (v72/*: any*/),
                          (v75/*: any*/),
                          (v88/*: any*/),
                          (v90/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v91/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v37/*: any*/),
                                          (v110/*: any*/)
                                        ],
                                        "type": "Entity",
                                        "abstractKey": "__isEntity"
                                      }
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
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": "journal",
                                    "args": (v61/*: any*/),
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "ancestorOfType",
                                    "plural": false,
                                    "selections": (v71/*: any*/),
                                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                                  },
                                  (v72/*: any*/),
                                  (v98/*: any*/),
                                  (v99/*: any*/),
                                  (v100/*: any*/),
                                  (v101/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v102/*: any*/)
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          }
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v24/*: any*/),
                                  (v91/*: any*/),
                                  (v94/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v19/*: any*/),
                                          (v22/*: any*/),
                                          (v92/*: any*/)
                                        ],
                                        "type": "Entity",
                                        "abstractKey": "__isEntity"
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v32/*: any*/)
                                        ],
                                        "type": "Item",
                                        "abstractKey": null
                                      },
                                      (v95/*: any*/)
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
                          (v112/*: any*/),
                          (v96/*: any*/),
                          (v113/*: any*/)
                        ],
                        "type": "Item",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v114/*: any*/),
                      (v24/*: any*/),
                      (v91/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v115/*: any*/),
                          (v12/*: any*/),
                          (v99/*: any*/),
                          (v101/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v94/*: any*/),
                      (v111/*: any*/)
                    ],
                    "type": "Entity",
                    "abstractKey": "__isEntity"
                  },
                  (v96/*: any*/),
                  (v113/*: any*/)
                ],
                "type": "Item",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v37/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": (v119/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageMetadata",
                    "kind": "LinkedField",
                    "name": "thumbnailMetadata",
                    "plural": false,
                    "selections": (v21/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "heroImage",
                    "plural": false,
                    "selections": (v119/*: any*/),
                    "storageKey": null
                  },
                  (v22/*: any*/)
                ],
                "type": "Entity",
                "abstractKey": "__isEntity"
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v24/*: any*/),
              (v3/*: any*/),
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
                      (v24/*: any*/),
                      (v50/*: any*/),
                      (v70/*: any*/),
                      (v44/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v50/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
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
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "00718e1d404f7e1ee619daf55c3bdbee",
    "id": null,
    "metadata": {},
    "name": "SlugItemQuery",
    "operationKind": "query",
    "text": "query SlugItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityContentLayoutFactoryFragment\n    id\n  }\n  ...ItemLayoutQueryFragment_20J5Pl\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppBodyEntityFragment on Entity {\n  __isEntity: __typename\n  ...AppHeaderEntityFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment AppLayoutEntityFragment on Entity {\n  __isEntity: __typename\n  ...CommunityNavBarEntityFragment\n  ...AppBodyEntityFragment\n}\n\nfragment ArticleContributorFragment on ItemContributionConnection {\n  nodes {\n    role\n    ...ContributionAuthorBlockFragment\n    id\n  }\n  ...ContributionsBlockFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  abstract: schemaProperty(fullPath: \"abstract\") {\n    __typename\n    ...FullTextFragment\n  }\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n  ...OpenAccessFragment\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Entity {\n  __isEntity: __typename\n  ... on Item {\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    series: ancestorOfType(schema: \"nglp:series\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Collection {\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleSummaryFragment on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  schemaVersion {\n    identifier\n    name\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment ArticleTextFragment on Item {\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  bodyText: schemaProperty(fullPath: \"body\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  pdf: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetInlinePDFFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment AssetInlinePDFFragment on Asset {\n  __isAsset: __typename\n  ... on AssetPDF {\n    downloadUrl\n  }\n  ...AssetDownloadButtonFragment\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributionAuthorBlockFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  role\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on PersonContributor {\n      __typename\n      title\n      bio\n      affiliation\n      image {\n        storage\n        ...ContributorAvatarFragment\n      }\n      ...ContributorNameFragment\n    }\n    ... on OrganizationContributor {\n      __typename\n      bio\n      image {\n        storage\n        ...ContributorAvatarFragment\n      }\n      ...ContributorNameFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributionsBlockFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment EntityContentLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFactoryFragment\n    ...EntityOrderingLayoutFactoryFragment\n    ...JournalLayoutFragment\n    ...JournalContentFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFactoryFragment\n    ...EntityOrderingLayoutFactoryFragment\n    ...ArticleLayoutFragment\n    ...ArticleTextFragment\n    ...HowToCiteFragment\n    contributions {\n      ...ArticleContributorFragment\n    }\n  }\n}\n\nfragment EntityHTMLHeadAppFragment on Query {\n  globalConfiguration {\n    site {\n      installationName\n    }\n    id\n  }\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    summary\n    thumbnail {\n      storage\n      medium {\n        webp {\n          url\n          width\n          height\n        }\n      }\n    }\n    thumbnailMetadata {\n      alt\n    }\n    heroImage {\n      storage\n      medium {\n        webp {\n          url\n          width\n          height\n        }\n      }\n    }\n    heroImageMetadata {\n      alt\n    }\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    subtitle\n    summary\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Collection {\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n  ... on Item {\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n    ...SeriesLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  initialOrdering {\n    identifier\n    id\n  }\n  ...IssueSidebarNavFragment\n}\n\nfragment FeaturedIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ordering(identifier: \"articles\") {\n    identifier\n    children(perPage: 3) {\n      edges {\n        node {\n          entry {\n            __typename\n            ... on Sluggable {\n              __isSluggable: __typename\n              slug\n            }\n            ...ArticleSummaryFragment\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n    id\n  }\n  featuredArticles: schemaProperty(fullPath: \"featured_articles\") {\n    __typename\n    ... on EntitiesProperty {\n      entities {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ArticleSummaryFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment HowToCiteFragment on Item {\n  citation: schemaProperty(fullPath: \"citation\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...ContributionsBlockFragment\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  issueNumber: schemaProperty(fullPath: \"number\") {\n    __typename\n    ... on StringProperty {\n      content\n    }\n  }\n}\n\nfragment ItemLayoutQueryFragment_20J5Pl on Query {\n  item(slug: $slug) {\n    ...AppLayoutEntityFragment\n    ...EntityHTMLHeadFragment\n    community {\n      ...AppLayoutCommunityFragment\n      id\n    }\n    id\n  }\n  ...EntityHTMLHeadAppFragment\n}\n\nfragment JournalContentFragment on Collection {\n  slug\n  description: schemaProperty(fullPath: \"description\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...RecentIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...FeaturedIssueFragment\n    id\n  }\n  announcements {\n    ...EntityAnnouncementsFragment\n    nodes {\n      slug\n      id\n    }\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RecentIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...IssueSummaryFragment\n      id\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SeriesHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  ...ArticleParentHeaderFragment\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n}\n\nfragment SeriesLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...SeriesHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n"
  }
};
})();
(node as any).hash = 'a01506230b914edb99f33e2705229cf0';
export default node;
