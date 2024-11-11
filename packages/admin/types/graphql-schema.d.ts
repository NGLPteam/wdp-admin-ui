import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ControlledVocabularyItemSet: { input: string; output: string; }
  ISO8601Date: { input: string; output: string; }
  ISO8601DateTime: { input: string; output: string; }
  JSON: { input: any; output: any; }
  SchemaComponent: { input: string; output: string; }
  SchemaPropertyPath: { input: string; output: string; }
  Slug: { input: string; output: string; }
  TemplateSelectionSource: { input: string; output: string; }
  UploadID: { input: string; output: string; }
  VersionRequirement: { input: string; output: string; }
};

/** A scoped access control list for a specific point in the hierarchy */
export type AccessControlList = ExposesPermissions & {
  __typename?: 'AccessControlList';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /**
   * Permissions that will be applied on the attached entity's subcollections.
   *
   */
  collections: EntityPermissionGrid;
  /**
   * Permissions that will be applied on the attached entity's subitems.
   *
   */
  items: EntityPermissionGrid;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /**
   * A `self` grid applies to whatever entity this scoped ACL is applied to.
   *
   * Its children will inherit other permissions based
   * on `collections` and `items` respectively.
   *
   */
  self: EntityPermissionGrid;
};

/**
 * An access grant is a combination of an Entity, a Role, and a Subject. It determines permissions for
 * said subject at the specific point in the hierarchy, and any child entities will inherit that role
 * as its accessControlList defines.
 *
 */
export type AccessGrant = {
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  /** The role the subject has been assigned */
  role: Role;
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
};

/** Filters a set of access grants by what type of entity they've granted access to */
export type AccessGrantEntityFilter =
  /** All entity types */
  | 'ALL'
  /** Collections only */
  | 'COLLECTION'
  /** Communities only */
  | 'COMMUNITY'
  /** Items only */
  | 'ITEM'
  | '%future added value';

/**
 * An access grant subject is a person or group to which access for a specific entity
 * (and all its children) has been granted.
 *
 */
export type AccessGrantSubject = {
  /** A polymorphic connection for access grants from a subject */
  allAccessGrants: AnyAccessGrantConnection;
  /**
   * The roles this user has access to assign based on their `primaryRole`,
   * outside of any hierarchical context.
   *
   * When actually assigning roles for an entity, you should use `Entity.assignableRoles`,
   * because it will ensure that the user sufficient permissions at that level.
   *
   */
  assignableRoles: Array<Role>;
  /** The primary role associated with this subject. */
  primaryRole?: Maybe<Role>;
};


/**
 * An access grant subject is a person or group to which access for a specific entity
 * (and all its children) has been granted.
 *
 */
export type AccessGrantSubjectAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<AccessGrantEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Filters a set of access grants by what type of subject they've granted access to */
export type AccessGrantSubjectFilter =
  /** All subject types */
  | 'ALL'
  /** A group of users. Not currently exposed */
  | 'GROUP'
  /** An individual user */
  | 'USER'
  | '%future added value';

/** An accessible entity can be granted access directly */
export type Accessible = {
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
};


/** An accessible entity can be granted access directly */
export type AccessibleAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};

/** Autogenerated input type of AlterSchemaVersion */
export type AlterSchemaVersionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The entity that owns the attachment */
  entityId: Scalars['ID']['input'];
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   *
   */
  propertyValues: Scalars['JSON']['input'];
  /** The slug for the new schema to apply */
  schemaVersionSlug: Scalars['String']['input'];
  /**
   * This argument dictates how the mutation should handle received property values.
   * If set to `SKIP`, it will alter the schema version without setting any new properties.
   *
   */
  strategy?: InputMaybe<PropertyApplicationStrategy>;
};

/** Autogenerated return type of AlterSchemaVersion. */
export type AlterSchemaVersionPayload = StandardMutationPayload & {
  __typename?: 'AlterSchemaVersionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Collection>;
  community?: Maybe<Community>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  schemaErrors: Array<SchemaValueError>;
};

export type Analytics = {
  __typename?: 'Analytics';
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  entityViews: AnalyticsEventCountSummary;
  entityViewsByRegion: AnalyticsRegionCountSummary;
};


export type AnalyticsAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  precision?: InputMaybe<AnalyticsPrecision>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type AnalyticsAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AnalyticsEntityViewsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AnalyticsEntityViewsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * A simple, date/time-keyed representation of a specific event's
 * occurrences on a specific day (or time interval).
 *
 */
export type AnalyticsEventCountResult = {
  __typename?: 'AnalyticsEventCountResult';
  /**
   * The count of events for the given date / time.
   *
   */
  count: Scalars['Int']['output'];
  date: Scalars['ISO8601Date']['output'];
  /**
   * The time interval associated with this value. It will only
   * be populated when looking at `HOUR` precision.
   *
   */
  time?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/**
 * The summary of date-keyed event counts.
 *
 */
export type AnalyticsEventCountSummary = {
  __typename?: 'AnalyticsEventCountSummary';
  /** The newest date in the set of results (if present). */
  maxDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** The oldest date in the set of results (if present). */
  minDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** The level of precision requested */
  precision: AnalyticsPrecision;
  /**
   * Individual results. They are sorted in ascending date / time order.
   *
   */
  results: Array<AnalyticsEventCountResult>;
  /**
   * The filtered total of events in the date period.
   *
   */
  total: Scalars['Int']['output'];
  /**
   * The unfiltered total of events across the entire system (excluding date filters, but including all other filters).
   *
   */
  unfilteredTotal: Scalars['Int']['output'];
};

/**
 * The level of precision for analytics queries.
 *
 */
export type AnalyticsPrecision =
  | 'DAY'
  | 'HOUR'
  | 'MONTH'
  | 'QUARTER'
  | 'WEEK'
  | 'YEAR'
  | '%future added value';

/**
 * A count for specific events based on the visitor's detected country and region (if available).
 *
 */
export type AnalyticsRegionCountResult = {
  __typename?: 'AnalyticsRegionCountResult';
  /**
   * The count of events for the given country / region.
   *
   */
  count: Scalars['Int']['output'];
  /**
   * The two-letter country code, if available. Unknown / null values will be `"$unknown$"`.
   *
   */
  countryCode: Scalars['String']['output'];
  /**
   * The shortened region code, if available. Unknown / null values will be `"$unknown$"`.
   *
   */
  regionCode: Scalars['String']['output'];
};

/**
 * The summary of country/region-keyed event counts.
 *
 */
export type AnalyticsRegionCountSummary = {
  __typename?: 'AnalyticsRegionCountSummary';
  /**
   * Individual results. They are not in any deterministic order since they are based on countries / regions.
   *
   */
  results: Array<AnalyticsRegionCountResult>;
  /**
   * The filtered total of events in the date period.
   *
   */
  total: Scalars['Int']['output'];
  /**
   * The unfiltered total of events across the entire system (excluding date filters, but including all other filters).
   *
   */
  unfilteredTotal: Scalars['Int']['output'];
};

/**
 * The boolean result of evaluating the left and right predicates. Both must be true.
 *
 * While this is implemented, it is not likely that the first version of the search
 * UI will utilize it. It is intended for advanced searching.
 *
 */
export type AndOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};

/**
 * An announcement tied to an entity. These are configured through the backend and can be used
 * to provide time-sensensitive information and news about a specific entity in the system.
 *
 */
export type Announcement = Node & Sluggable & {
  __typename?: 'Announcement';
  /** A body for the announcement */
  body: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The entity that owns the announcement */
  entity: AnyEntity;
  /** A header value for the announcement */
  header: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The date of the announcement. */
  publishedOn: Scalars['ISO8601Date']['output'];
  slug: Scalars['Slug']['output'];
  /** A teaser for the announcement */
  teaser: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Announcement. */
export type AnnouncementConnection = Paginated & {
  __typename?: 'AnnouncementConnection';
  /** A list of edges. */
  edges: Array<AnnouncementEdge>;
  /** A list of nodes. */
  nodes: Array<Announcement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnnouncementEdge = {
  __typename?: 'AnnouncementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Announcement;
};

/** Order a list of announcements by publication date. */
export type AnnouncementOrder =
  /** Order announcements by least recently published */
  | 'OLDEST'
  /** Order announcements by most recently published */
  | 'RECENT'
  | '%future added value';

/**
 * Encompasses *all* possible access grant types
 *
 */
export type AnyAccessGrant = UserCollectionAccessGrant | UserCommunityAccessGrant | UserGroupCollectionAccessGrant | UserGroupCommunityAccessGrant | UserGroupItemAccessGrant | UserItemAccessGrant | { __typename?: "%other" };

/** The connection type for AnyAccessGrant. */
export type AnyAccessGrantConnection = Paginated & {
  __typename?: 'AnyAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyAccessGrantEdge = {
  __typename?: 'AnyAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyAccessGrant;
};

export type AnyAsset = AssetAudio | AssetDocument | AssetImage | AssetPdf | AssetUnknown | AssetVideo | { __typename?: "%other" };

/** The connection type for AnyAsset. */
export type AnyAssetConnection = Paginated & {
  __typename?: 'AnyAssetConnection';
  /** A list of edges. */
  edges: Array<AnyAssetEdge>;
  /** A list of nodes. */
  nodes: Array<AnyAsset>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyAssetEdge = {
  __typename?: 'AnyAssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyAsset;
};

/** Something that can be attached to */
export type AnyAttachable = Collection | Community | Item | { __typename?: "%other" };

/** Any entity that can have a parent. */
export type AnyChildEntity = Collection | Item | { __typename?: "%other" };

export type AnyCollectionAccessGrant = UserCollectionAccessGrant | UserGroupCollectionAccessGrant | { __typename?: "%other" };

/** The connection type for AnyCollectionAccessGrant. */
export type AnyCollectionAccessGrantConnection = Paginated & {
  __typename?: 'AnyCollectionAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyCollectionAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyCollectionAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyCollectionAccessGrantEdge = {
  __typename?: 'AnyCollectionAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyCollectionAccessGrant;
};

export type AnyCommunityAccessGrant = UserCommunityAccessGrant | UserGroupCommunityAccessGrant | { __typename?: "%other" };

/** The connection type for AnyCommunityAccessGrant. */
export type AnyCommunityAccessGrantConnection = Paginated & {
  __typename?: 'AnyCommunityAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyCommunityAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyCommunityAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyCommunityAccessGrantEdge = {
  __typename?: 'AnyCommunityAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyCommunityAccessGrant;
};

/** A union of possible contribution types */
export type AnyContribution = CollectionContribution | ItemContribution | { __typename?: "%other" };

export type AnyContributor = OrganizationContributor | PersonContributor | { __typename?: "%other" };

/** The connection type for AnyContributor. */
export type AnyContributorConnection = Paginated & {
  __typename?: 'AnyContributorConnection';
  /** A list of edges. */
  edges: Array<AnyContributorEdge>;
  /** A list of nodes. */
  nodes: Array<AnyContributor>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyContributorEdge = {
  __typename?: 'AnyContributorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyContributor;
};

/** A hierarchical entity type */
export type AnyEntity = Collection | Community | Item | { __typename?: "%other" };

/**
 * Encompasses all the possible template definition types that can fall under a `HERO` layout.
 *
 */
export type AnyHeroTemplateDefinition = HeroTemplateDefinition | { __typename?: "%other" };

/**
 * Encompasses all the possible template instance types that can fall under a `HERO` layout.
 *
 */
export type AnyHeroTemplateInstance = HeroTemplateInstance | { __typename?: "%other" };

/** Used by a LinkTargetCandidate, this describes any type of model that can act as a target for an EntityLink */
export type AnyLinkTarget = Collection | Item | { __typename?: "%other" };

/**
 * Encompasses all the possible template definition types that can fall under a `LIST_ITEM` layout.
 *
 */
export type AnyListItemTemplateDefinition = ListItemTemplateDefinition | { __typename?: "%other" };

/**
 * Encompasses all the possible template instance types that can fall under a `LIST_ITEM` layout.
 *
 */
export type AnyListItemTemplateInstance = ListItemTemplateInstance | { __typename?: "%other" };

/**
 * Encompasses all the possible template definition types that can fall under a `MAIN` layout.
 *
 */
export type AnyMainTemplateDefinition = ContributorListTemplateDefinition | DescendantListTemplateDefinition | DetailTemplateDefinition | LinkListTemplateDefinition | OrderingTemplateDefinition | PageListTemplateDefinition | { __typename?: "%other" };

/**
 * Encompasses all the possible template instance types that can fall under a `MAIN` layout.
 *
 */
export type AnyMainTemplateInstance = ContributorListTemplateInstance | DescendantListTemplateInstance | DetailTemplateInstance | LinkListTemplateInstance | OrderingTemplateInstance | PageListTemplateInstance | { __typename?: "%other" };

/**
 * Encompasses all the possible template definition types that can fall under a `METADATA` layout.
 *
 */
export type AnyMetadataTemplateDefinition = MetadataTemplateDefinition | { __typename?: "%other" };

/**
 * Encompasses all the possible template instance types that can fall under a `METADATA` layout.
 *
 */
export type AnyMetadataTemplateInstance = MetadataTemplateInstance | { __typename?: "%other" };

/**
 * Encompasses all the possible template definition types that can fall under a `NAVIGATION` layout.
 *
 */
export type AnyNavigationTemplateDefinition = NavigationTemplateDefinition | { __typename?: "%other" };

/**
 * Encompasses all the possible template instance types that can fall under a `NAVIGATION` layout.
 *
 */
export type AnyNavigationTemplateInstance = NavigationTemplateInstance | { __typename?: "%other" };

/** The various types an OrderingEntry can refer to */
export type AnyOrderingEntry = Collection | Community | EntityLink | Item | { __typename?: "%other" };

/**
 * All types in this union implement OrderingPath.
 *
 */
export type AnyOrderingPath = SchemaOrderingPath | StaticOrderingPath | { __typename?: "%other" };

/**
 * `AnyScalarProperty` represents a collection of known *scalar* properties. In effect,
 * it includes every possible schema property type except for groups (`GroupProperty`).
 *
 * This union is intended to iterate the properties within a group. To iterate over the
 * properties in a `SchemaInstance`, you should use `AnySchemaPropertyType` to ensure that
 * you are also seeing groups.
 *
 * Any object contained within this union is guaranteed to implement `ScalarProperty`
 * as well as `SchemaProperty`.
 *
 */
export type AnyScalarProperty = AssetProperty | AssetsProperty | BooleanProperty | ContributorProperty | ContributorsProperty | ControlledVocabulariesProperty | ControlledVocabularyProperty | DateProperty | EmailProperty | EntitiesProperty | EntityProperty | FloatProperty | FullTextProperty | IntegerProperty | MarkdownProperty | MultiselectProperty | SelectProperty | StringProperty | TagsProperty | TimestampProperty | UrlProperty | UnknownProperty | VariableDateProperty | { __typename?: "%other" };

/**
 * `AnySchemaProperty` represents the top level of a schema instance's properties. It can include any scalar property, as
 * well as any `GroupProperty` that the instance might have. To query only scalar properties, see `AnyScalarProperty`.
 *
 * All properties contained in this union are guaranteed to implement `SchemaProperty`.
 *
 */
export type AnySchemaProperty = AssetProperty | AssetsProperty | BooleanProperty | ContributorProperty | ContributorsProperty | ControlledVocabulariesProperty | ControlledVocabularyProperty | DateProperty | EmailProperty | EntitiesProperty | EntityProperty | FloatProperty | FullTextProperty | GroupProperty | IntegerProperty | MarkdownProperty | MultiselectProperty | SelectProperty | StringProperty | TagsProperty | TimestampProperty | UrlProperty | UnknownProperty | VariableDateProperty | { __typename?: "%other" };

/**
 * `AnySearchableProperty` represents a property that can be searched on.
 *
 * Any property underneath this can be assured to implement `SearchableProperty`.
 *
 */
export type AnySearchableProperty = BooleanProperty | DateProperty | FloatProperty | FullTextProperty | IntegerProperty | MarkdownProperty | MultiselectProperty | SelectProperty | StringProperty | TimestampProperty | VariableDateProperty | { __typename?: "%other" };

/**
 * Encompasses all the possible template definition types that can fall under a `SUPPLEMENTARY` layout.
 *
 */
export type AnySupplementaryTemplateDefinition = SupplementaryTemplateDefinition | { __typename?: "%other" };

/**
 * Encompasses all the possible template instance types that can fall under a `SUPPLEMENTARY` layout.
 *
 */
export type AnySupplementaryTemplateInstance = SupplementaryTemplateInstance | { __typename?: "%other" };

/**
 * Encompasses any access grant for a specific user.
 *
 */
export type AnyUserAccessGrant = UserCollectionAccessGrant | UserCommunityAccessGrant | UserItemAccessGrant | { __typename?: "%other" };

/** The connection type for AnyUserAccessGrant. */
export type AnyUserAccessGrantConnection = Paginated & {
  __typename?: 'AnyUserAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyUserAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyUserAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyUserAccessGrantEdge = {
  __typename?: 'AnyUserAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyUserAccessGrant;
};

/**
 * Encompasses any access grant for a group of users. Not currently exposed.
 *
 */
export type AnyUserGroupAccessGrant = UserGroupCollectionAccessGrant | UserGroupCommunityAccessGrant | UserGroupItemAccessGrant | { __typename?: "%other" };

/** The connection type for AnyUserGroupAccessGrant. */
export type AnyUserGroupAccessGrantConnection = Paginated & {
  __typename?: 'AnyUserGroupAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyUserGroupAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyUserGroupAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyUserGroupAccessGrantEdge = {
  __typename?: 'AnyUserGroupAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AnyUserGroupAccessGrant;
};

/** Autogenerated input type of ApplySchemaProperties */
export type ApplySchemaPropertiesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The entity that owns the attachment */
  entityId: Scalars['ID']['input'];
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   *
   */
  propertyValues: Scalars['JSON']['input'];
};

/** Autogenerated return type of ApplySchemaProperties. */
export type ApplySchemaPropertiesPayload = StandardMutationPayload & {
  __typename?: 'ApplySchemaPropertiesPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Collection>;
  community?: Maybe<Community>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  schemaErrors: Array<SchemaValueError>;
};

/** A generic asset type, implemented by all the more specific kinds */
export type Asset = {
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
};


/** A generic asset type, implemented by all the more specific kinds */
export type AssetAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


/** A generic asset type, implemented by all the more specific kinds */
export type AssetAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetAudio = Asset & Node & Sluggable & {
  __typename?: 'AssetAudio';
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type AssetAudioAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AssetAudioAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetDocument = Asset & Node & Sluggable & {
  __typename?: 'AssetDocument';
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type AssetDocumentAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AssetDocumentAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetImage = Asset & Node & Sluggable & {
  __typename?: 'AssetImage';
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type AssetImageAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AssetImageAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The supported kinds of assets in the system */
export type AssetKind =
  | 'audio'
  | 'document'
  | 'image'
  | 'pdf'
  | 'unknown'
  | 'video'
  | '%future added value';

/** The type(s) of assets to retrieve */
export type AssetKindFilter =
  | 'ALL'
  | 'AUDIO'
  | 'DOCUMENT'
  | 'IMAGE'
  /** An image, video, or audio file */
  | 'MEDIA'
  | 'PDF'
  | 'UNKNOWN'
  | 'VIDEO'
  | '%future added value';

export type AssetPdf = Asset & Node & Sluggable & {
  __typename?: 'AssetPDF';
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type AssetPdfAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AssetPdfAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A grid of permissions for creating, retrieving, updating, and deleting an `Asset` */
export type AssetPermissionGrid = CrudPermissionGrid & ExposesPermissions & PermissionGrid & {
  __typename?: 'AssetPermissionGrid';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  read: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

export type AssetProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'AssetProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  asset?: Maybe<AnyAsset>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** A select option for a single asset */
export type AssetSelectOption = {
  __typename?: 'AssetSelectOption';
  kind: AssetKind;
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AssetUnknown = Asset & Node & Sluggable & {
  __typename?: 'AssetUnknown';
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type AssetUnknownAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AssetUnknownAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetVideo = Asset & Node & Sluggable & {
  __typename?: 'AssetVideo';
  altText?: Maybe<Scalars['String']['output']>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']['output']>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  downloadURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use downloadURL instead */
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  kind: AssetKind;
  name: Scalars['String']['output'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type AssetVideoAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


export type AssetVideoAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetsProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'AssetsProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  assets: Array<AnyAsset>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** A model that has attached assets */
export type Attachable = {
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
};


/** A model that has attached assets */
export type AttachableAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<AssetKindFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** This describes where a given file attachment is stored (if at all) */
export type AttachmentStorage =
  /**
   * CACHE refers to temporary storage. When a file is first uploaded to the system, it lives in cache and needs to be processed.
   * A user could potentially fetch something from an API while a file is still being processed in the background, and if so, none
   * of its derivatives will be present yet.
   *
   */
  | 'CACHE'
  /** Not yet used */
  | 'DERIVATIVES'
  /**
   * Remote URL storage. Only used internally at present, but may sometimes appear during certain harvesting events.
   *
   */
  | 'REMOTE'
  /** STORE refers to permanent storage. An asset here has been fully processed and is ready for access */
  | 'STORE'
  | '%future added value';

export type BooleanProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'BooleanProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  checked?: Maybe<Scalars['Boolean']['output']>;
  checkedByDefault?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** A grid of permissions for creating, retrieving, updating, and deleting a model */
export type CrudPermissionGrid = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  read: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntity = {
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /**
   * Directly fetch a defined named ancestor by its name. It can be null,
   * either because an invalid name was provided, the schema hierarchy is
   * incomplete, or the association itself is optional.
   *
   */
  ancestorByName?: Maybe<AnyEntity>;
  /**
   * Look up an ancestor for this entity that implements a specific type. It ascends from this entity,
   * so it will first check the parent, then the grandparent, and so on.
   *
   */
  ancestorOfType?: Maybe<AnyEntity>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** The community this entity belongs to */
  community: Community;
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Whether the entity is _currently_ hidden, based on the server's time zone.
   *
   */
  currentlyHidden: Scalars['Boolean']['output'];
  /**
   * Whether the entity is _currently_ visible, based on the server's time zone.
   *
   */
  currentlyVisible: Scalars['Boolean']['output'];
  /**
   * Search and retrieve *all* descendants of this `Entity`, regardless of type.
   *
   */
  descendants: EntityDescendantConnection;
  /**
   * The Digital Object Identifier for this entity. See https://doi.org
   *
   */
  doi?: Maybe<Scalars['String']['output']>;
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /**
   * Whether the entity's visibility is set to `HIDDEN`
   *
   */
  hidden: Scalars['Boolean']['output'];
  /**
   * Specify a time to check to see if the entity will be hidden.
   *
   */
  hiddenAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int']['output'];
  /** A machine-readable identifier for the entity. Not presently used, but will be necessary for synchronizing with upstream providers. */
  identifier: Scalars['String']['output'];
  inCommunityOrdering?: Maybe<OrderingEntry>;
  /**
   * The initial ordering to display for this entity.
   *
   */
  initialOrdering?: Maybe<Ordering>;
  /**
   * The International Standard Serial Number for this entity. See https://issn.org
   *
   */
  issn?: Maybe<Scalars['String']['output']>;
  /**
   * Access layouts for this entity.
   *
   */
  layouts: EntityLayouts;
  leaf: Scalars['Boolean']['output'];
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /**
   * Fetch a list of named ancestors for this entity. This list is deterministically sorted
   * to retrieve the "closest" ancestors first, ascending upwards in the hierarchy from there.
   *
   * **Note**: Like breadcrumbs, this association is intentionally not paginated for ease of use,
   * because in practice a schema should not have many associations.
   *
   */
  namedAncestors: Array<NamedAncestor>;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /**
   * Retrieve a connection of orderings for the parent object.
   *
   */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The date this entity was published */
  published: VariablePrecisionDate;
  root: Scalars['Boolean']['output'];
  schemaDefinition: SchemaDefinition;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']['output']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String']['output'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /**
   * Whether the entity's visibility is set to `VISIBLE`.
   *
   */
  visible: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * Specify a time to check to see if the entity will be visible.
   *
   */
  visibleAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityAncestorByNameArgs = {
  name: Scalars['String']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityAncestorOfTypeArgs = {
  schema: Scalars['String']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityAnnouncementArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnnouncementOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityAssignedUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContextualPermissionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  order?: EntityDescendantOrder;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
  scope?: InputMaybe<EntityDescendantScopeFilter>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityHiddenAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityInCommunityOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityLinkTargetCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<LinkTargetCandidateFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityOrderingForSchemaArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityOrderingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<OrderingAvailabilityFilter>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderingOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<OrderingVisibilityFilter>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityPageArgs = {
  slug: Scalars['String']['input'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntitySearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 *
 */
export type ChildEntityVisibleAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** Autogenerated input type of ClearInitialOrdering */
export type ClearInitialOrderingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['ID']['input'];
};

/** Autogenerated return type of ClearInitialOrdering. */
export type ClearInitialOrderingPayload = StandardMutationPayload & {
  __typename?: 'ClearInitialOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** A collection of items */
export type Collection = Accessible & Attachable & ChildEntity & Contributable & Entity & ExposesPermissions & HasDoi & HasDefaultTimestamps & HasEntityAnalytics & HasEntityBreadcrumbs & HasIssn & HasSchemaProperties & Node & ReferencesEntityVisibility & ReferencesGlobalEntityDates & SchemaInstance & Searchable & Sluggable & {
  __typename?: 'Collection';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  accessGrants: AnyCollectionAccessGrantConnection;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /**
   * Directly fetch a defined named ancestor by its name. It can be null,
   * either because an invalid name was provided, the schema hierarchy is
   * incomplete, or the association itself is optional.
   *
   */
  ancestorByName?: Maybe<AnyEntity>;
  /**
   * Look up an ancestor for this entity that implements a specific type. It ascends from this entity,
   * so it will first check the parent, then the grandparent, and so on.
   *
   */
  ancestorOfType?: Maybe<AnyEntity>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** @deprecated Use Collection.collections */
  children: CollectionConnection;
  /** Retrieve the collections beneath this collection. */
  collections: CollectionConnection;
  community: Community;
  contributions: CollectionContributionConnection;
  /** Contributors to this element */
  contributors: AnyContributorConnection;
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Whether the entity is _currently_ hidden, based on the server's time zone.
   *
   */
  currentlyHidden: Scalars['Boolean']['output'];
  /**
   * Whether the entity is _currently_ visible, based on the server's time zone.
   *
   */
  currentlyVisible: Scalars['Boolean']['output'];
  /**
   * Search and retrieve *all* descendants of this `Entity`, regardless of type.
   *
   */
  descendants: EntityDescendantConnection;
  /**
   * The Digital Object Identifier for this entity. See https://doi.org
   *
   */
  doi?: Maybe<Scalars['String']['output']>;
  entityViews: AnalyticsEventCountSummary;
  entityViewsByRegion: AnalyticsRegionCountSummary;
  /** Retrieve the first matching collection beneath this collection. */
  firstCollection?: Maybe<Collection>;
  /** Retrieve the first matching item beneath this item. */
  firstItem?: Maybe<Item>;
  /** Whether this collection has any child collections */
  hasCollections: Scalars['Boolean']['output'];
  /** Whether this collection has any child items */
  hasItems: Scalars['Boolean']['output'];
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /**
   * Whether the entity's visibility is set to `HIDDEN`
   *
   */
  hidden: Scalars['Boolean']['output'];
  /**
   * Specify a time to check to see if the entity will be hidden.
   *
   */
  hiddenAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** A machine-readable identifier for the entity. Not presently used, but will be necessary for synchronizing with upstream providers. */
  identifier: Scalars['String']['output'];
  inCommunityOrdering?: Maybe<OrderingEntry>;
  /**
   * The initial ordering to display for this entity.
   *
   */
  initialOrdering?: Maybe<Ordering>;
  /**
   * The International Standard Serial Number for this entity. See https://issn.org
   *
   */
  issn?: Maybe<Scalars['String']['output']>;
  items: ItemConnection;
  /**
   * Access layouts for this entity.
   *
   */
  layouts: EntityLayouts;
  leaf: Scalars['Boolean']['output'];
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /**
   * Fetch a list of named ancestors for this entity. This list is deterministically sorted
   * to retrieve the "closest" ancestors first, ascending upwards in the hierarchy from there.
   *
   * **Note**: Like breadcrumbs, this association is intentionally not paginated for ease of use,
   * because in practice a schema should not have many associations.
   *
   */
  namedAncestors: Array<NamedAncestor>;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /**
   * Retrieve a connection of orderings for the parent object.
   *
   */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  parent?: Maybe<CollectionParent>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The date this entity was published */
  published: VariablePrecisionDate;
  /** Retrieve linked collections of the same schema type */
  relatedCollections: CollectionConnection;
  root: Scalars['Boolean']['output'];
  schemaDefinition: SchemaDefinition;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /**
   * Read a single schema property by its full path.
   *
   */
  schemaProperty?: Maybe<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  slug: Scalars['Slug']['output'];
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']['output']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String']['output'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Access grants for specific users */
  userAccessGrants: UserCollectionAccessGrantConnection;
  /** Not presently used */
  userGroupAccessGrants: UserGroupCollectionAccessGrantConnection;
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /**
   * Whether the entity's visibility is set to `VISIBLE`.
   *
   */
  visible: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * Specify a time to check to see if the entity will be visible.
   *
   */
  visibleAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};


/** A collection of items */
export type CollectionAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** A collection of items */
export type CollectionAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** A collection of items */
export type CollectionAncestorByNameArgs = {
  name: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionAncestorOfTypeArgs = {
  schema: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionAnnouncementArgs = {
  slug: Scalars['Slug']['input'];
};


/** A collection of items */
export type CollectionAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnnouncementOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** A collection of items */
export type CollectionAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A collection of items */
export type CollectionAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<AssetKindFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionAssignedUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContextualPermissionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionAvailableEntitiesForArgs = {
  fullPath: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A collection of items */
export type CollectionContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<ContributorFilterKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributorOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};


/** A collection of items */
export type CollectionDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  order?: EntityDescendantOrder;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
  scope?: InputMaybe<EntityDescendantScopeFilter>;
};


/** A collection of items */
export type CollectionEntityViewsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


/** A collection of items */
export type CollectionEntityViewsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A collection of items */
export type CollectionFirstCollectionArgs = {
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A collection of items */
export type CollectionFirstItemArgs = {
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A collection of items */
export type CollectionHiddenAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


/** A collection of items */
export type CollectionInCommunityOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<TreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A collection of items */
export type CollectionLinkTargetCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<LinkTargetCandidateFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/** A collection of items */
export type CollectionLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionOrderingForSchemaArgs = {
  slug: Scalars['Slug']['input'];
};


/** A collection of items */
export type CollectionOrderingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<OrderingAvailabilityFilter>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderingOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<OrderingVisibilityFilter>;
};


/** A collection of items */
export type CollectionPageArgs = {
  slug: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionRelatedCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionSchemaPropertyArgs = {
  fullPath: Scalars['String']['input'];
};


/** A collection of items */
export type CollectionSearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};


/** A collection of items */
export type CollectionUserAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionUserGroupAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A collection of items */
export type CollectionVisibleAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** The connection type for Collection. */
export type CollectionConnection = Paginated & {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** A list of nodes. */
  nodes: Array<Collection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A contribution to a collection */
export type CollectionContribution = Contribution & Node & Sluggable & {
  __typename?: 'CollectionContribution';
  /** A potentially-overridden value from person contributors */
  affiliation?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  contributor: AnyContributor;
  contributorKind: ContributorKind;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** A potentially-overridden display name value for all contributor types */
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** A potentially-overridden value from organization contributors */
  location?: Maybe<Scalars['String']['output']>;
  metadata: ContributionMetadata;
  /** An arbitrary text value describing the role the contributor had */
  role?: Maybe<Scalars['String']['output']>;
  slug: Scalars['Slug']['output'];
  /** A potentially-overridden value from person contributors */
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for CollectionContribution. */
export type CollectionContributionConnection = Paginated & {
  __typename?: 'CollectionContributionConnection';
  /** A list of edges. */
  edges: Array<CollectionContributionEdge>;
  /** A list of nodes. */
  nodes: Array<CollectionContribution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollectionContributionEdge = {
  __typename?: 'CollectionContributionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CollectionContribution;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

export type CollectionParent = Collection | Community | { __typename?: "%other" };

/** A community of users */
export type Community = Accessible & Attachable & Entity & ExposesPermissions & HasEntityAnalytics & HasEntityBreadcrumbs & HasSchemaProperties & Node & SchemaInstance & Searchable & Sluggable & {
  __typename?: 'Community';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  accessGrants: AnyCommunityAccessGrantConnection;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  collections: CollectionConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Search and retrieve *all* descendants of this `Entity`, regardless of type.
   *
   */
  descendants: EntityDescendantConnection;
  entityViews: AnalyticsEventCountSummary;
  entityViewsByRegion: AnalyticsRegionCountSummary;
  /** Retrieve the first matching collection beneath this collection. */
  firstCollection?: Maybe<Collection>;
  /** Retrieve the first matching item beneath this item. */
  firstItem?: Maybe<Item>;
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** The layout to use when rendering this community's hero image. */
  heroImageLayout: HeroImageLayout;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /**
   * The initial ordering to display for this entity.
   *
   */
  initialOrdering?: Maybe<Ordering>;
  /**
   * Access layouts for this entity.
   *
   */
  layouts: EntityLayouts;
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /** A logo for the community */
  logo: ImageAttachment;
  /** Configurable metadata for the logo attachment */
  logoMetadata?: Maybe<ImageMetadata>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use Community.title */
  name: Scalars['String']['output'];
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /**
   * Retrieve a connection of orderings for the parent object.
   *
   */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  position?: Maybe<Scalars['Int']['output']>;
  schemaDefinition: SchemaDefinition;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /**
   * Read a single schema property by its full path.
   *
   */
  schemaProperty?: Maybe<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  slug: Scalars['Slug']['output'];
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Access grants for specific users */
  userAccessGrants: UserCommunityAccessGrantConnection;
  /** Not presently used */
  userGroupAccessGrants: UserGroupCommunityAccessGrantConnection;
};


/** A community of users */
export type CommunityAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** A community of users */
export type CommunityAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** A community of users */
export type CommunityAnnouncementArgs = {
  slug: Scalars['Slug']['input'];
};


/** A community of users */
export type CommunityAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnnouncementOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A community of users */
export type CommunityAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** A community of users */
export type CommunityAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A community of users */
export type CommunityAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<AssetKindFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A community of users */
export type CommunityAssignedUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContextualPermissionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A community of users */
export type CommunityAvailableEntitiesForArgs = {
  fullPath: Scalars['String']['input'];
};


/** A community of users */
export type CommunityCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<TreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A community of users */
export type CommunityDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  order?: EntityDescendantOrder;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
  scope?: InputMaybe<EntityDescendantScopeFilter>;
};


/** A community of users */
export type CommunityEntityViewsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


/** A community of users */
export type CommunityEntityViewsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A community of users */
export type CommunityFirstCollectionArgs = {
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A community of users */
export type CommunityFirstItemArgs = {
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A community of users */
export type CommunityLinkTargetCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<LinkTargetCandidateFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/** A community of users */
export type CommunityLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A community of users */
export type CommunityOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/** A community of users */
export type CommunityOrderingForSchemaArgs = {
  slug: Scalars['Slug']['input'];
};


/** A community of users */
export type CommunityOrderingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<OrderingAvailabilityFilter>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderingOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<OrderingVisibilityFilter>;
};


/** A community of users */
export type CommunityPageArgs = {
  slug: Scalars['String']['input'];
};


/** A community of users */
export type CommunityPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A community of users */
export type CommunitySchemaPropertyArgs = {
  fullPath: Scalars['String']['input'];
};


/** A community of users */
export type CommunitySearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};


/** A community of users */
export type CommunityUserAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A community of users */
export type CommunityUserGroupAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Community. */
export type CommunityConnection = Paginated & {
  __typename?: 'CommunityConnection';
  /** A list of edges. */
  edges: Array<CommunityEdge>;
  /** A list of nodes. */
  nodes: Array<Community>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommunityEdge = {
  __typename?: 'CommunityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Community;
};

/** A contextual permission for a user, role, and entity */
export type ContextualPermission = ExposesPermissions & Node & Sluggable & {
  __typename?: 'ContextualPermission';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** The access grants that correspond to this contextual permission */
  accessGrants: Array<AnyUserAccessGrant>;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The roles that correspond to this contextual permission */
  roles: Array<Role>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
};

/** The connection type for ContextualPermission. */
export type ContextualPermissionConnection = Paginated & {
  __typename?: 'ContextualPermissionConnection';
  /** A list of edges. */
  edges: Array<ContextualPermissionEdge>;
  /** A list of nodes. */
  nodes: Array<ContextualPermission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContextualPermissionEdge = {
  __typename?: 'ContextualPermissionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContextualPermission;
};

/** A collection of options used to dictate how to order contextual permissions */
export type ContextualPermissionOrder =
  /** Order by the oldest granted permissions */
  | 'OLDEST'
  /** Order by the most recently granted permissions */
  | 'RECENT'
  /** Order by the user's name from A-Z */
  | 'USER_NAME_ASC'
  /** Order by the user's name from Z-A */
  | 'USER_NAME_DESC'
  | '%future added value';

/** Something that can be contributed to */
export type Contributable = {
  /** Contributors to this element */
  contributors: AnyContributorConnection;
};


/** Something that can be contributed to */
export type ContributableContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<ContributorFilterKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributorOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};

/** A contribution from a certain contributor */
export type Contribution = {
  /** A potentially-overridden value from person contributors */
  affiliation?: Maybe<Scalars['String']['output']>;
  contributor: AnyContributor;
  contributorKind: ContributorKind;
  /** A potentially-overridden display name value for all contributor types */
  displayName: Scalars['String']['output'];
  /** A potentially-overridden value from organization contributors */
  location?: Maybe<Scalars['String']['output']>;
  metadata: ContributionMetadata;
  /** An arbitrary text value describing the role the contributor had */
  role?: Maybe<Scalars['String']['output']>;
  /** A potentially-overridden value from person contributors */
  title?: Maybe<Scalars['String']['output']>;
};

/** Metadata for a contribution */
export type ContributionMetadata = {
  __typename?: 'ContributionMetadata';
  /** A value that can override a contribution's contributor's affiliation */
  affiliation?: Maybe<Scalars['String']['output']>;
  /** A value that can oerride a contribution's contributor's displayed name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** An arbitrary field describing how the contributor contributed */
  role?: Maybe<Scalars['String']['output']>;
  /** A value that can override a contribution's contributor's title */
  title?: Maybe<Scalars['String']['output']>;
};

/** An input type that builds contribution metadata */
export type ContributionMetadataInput = {
  /** A value that can override a contribution's contributor's affiliation */
  affiliation?: InputMaybe<Scalars['String']['input']>;
  /** A value that can override a contribution's contributor's displayed name */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** A value that can override a contribution's contributor's location */
  location?: InputMaybe<Scalars['String']['input']>;
  /** A value that can override a contribution's contributor's title */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Sort contributions by various properties and directions */
export type ContributionOrder =
  /** Sort contributors by oldest created date */
  | 'OLDEST'
  /** Sort contributors by newest created date */
  | 'RECENT'
  /** Sort contributors by their target's title A-Z */
  | 'TARGET_TITLE_ASCENDING'
  /** Sort contributors by their target's title Z-A */
  | 'TARGET_TITLE_DESCENDING'
  | '%future added value';

/** A contributor who has made a contribution */
export type Contributor = {
  bio?: Maybe<Scalars['String']['output']>;
  /** The total number of collection contributions from this contributor */
  collectionContributionCount: Scalars['Int']['output'];
  collectionContributions: CollectionContributionConnection;
  /** The total number of contributions (item + collection) from this contributor */
  contributionCount: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['String']['output'];
  /** An optional image associated with the contributor. */
  image: ImageAttachment;
  /** Configurable metadata for the image attachment */
  imageMetadata?: Maybe<ImageMetadata>;
  /** The total number of item contributions from this contributor */
  itemContributionCount: Scalars['Int']['output'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  links: Array<ContributorLink>;
  /** A display name, independent of the type of contributor */
  name: Scalars['String']['output'];
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** A contributor who has made a contribution */
export type ContributorCollectionContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A contributor who has made a contribution */
export type ContributorItemContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type ContributorFilterKind =
  | 'ALL'
  | 'ORGANIZATION'
  | 'PERSON'
  | '%future added value';

export type ContributorKind =
  | 'organization'
  | 'person'
  | '%future added value';

/** A link for a contributor */
export type ContributorLink = {
  __typename?: 'ContributorLink';
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** A mapping to build a contributor link */
export type ContributorLinkInput = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type ContributorListBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

export type ContributorListTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'ContributorListTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<ContributorListBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * Limit the number of contributors for this template.
   *
   */
  limit?: Maybe<Scalars['Int']['output']>;
  /**
   * Slot definitions for this template.
   *
   */
  slots: ContributorListTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type ContributorListTemplateDefinitionSlots = {
  __typename?: 'ContributorListTemplateDefinitionSlots';
  header?: Maybe<TemplateSlotInlineDefinition>;
};

export type ContributorListTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'ContributorListTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: ContributorListTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: ContributorListTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type ContributorListTemplateInstanceSlots = {
  __typename?: 'ContributorListTemplateInstanceSlots';
  header?: Maybe<TemplateSlotInlineInstance>;
};

export type ContributorLookupField =
  | 'EMAIL'
  | 'NAME'
  | 'ORCID'
  | '%future added value';

/** Sort contributors by various properties and directions */
export type ContributorOrder =
  /** Sort contributors by affiliation A-Z, then fall back to name A-Z */
  | 'AFFILIATION_ASCENDING'
  /** Sort contributors by affiliation Z-A, then fall back to name A-Z */
  | 'AFFILIATION_DESCENDING'
  /** Sort contributors by least contributions, then fall back to name A-Z */
  | 'LEAST_CONTRIBUTIONS'
  /** Sort contributors by most contributions, then fall back to name A-Z */
  | 'MOST_CONTRIBUTIONS'
  /** Sort contributors by name A-Z. For people, this currently uses western naming order (family name, given name). */
  | 'NAME_ASCENDING'
  /** Sort contributors by name Z-A. For people, this currently uses western naming order (family name, given name). */
  | 'NAME_DESCENDING'
  /** Sort contributors by oldest created date */
  | 'OLDEST'
  /** Sort contributors by newest created date */
  | 'RECENT'
  | '%future added value';

export type ContributorProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'ContributorProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  contributor?: Maybe<AnyContributor>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** A select option for a single contributor */
export type ContributorSelectOption = {
  __typename?: 'ContributorSelectOption';
  kind: ContributorKind;
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ContributorsProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'ContributorsProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  contributors: Array<AnyContributor>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

export type ControlledVocabulariesProperty = HasControlledVocabulary & ScalarProperty & SchemaProperty & {
  __typename?: 'ControlledVocabulariesProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * The vocabulary configured for this property, based on its `wants` value
   * and whatever is currently configured in `ControlledVocabularySource`.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
  controlledVocabularyItems: Array<ControlledVocabularyItem>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
  /**
   * The key used to determine which `ControlledVocabulary` to fetch.
   *
   * See `#controlledVocabulary`.
   *
   */
  wants?: Maybe<Scalars['String']['output']>;
};

/**
 * A set of terms that can be selected in schemas.
 *
 * See also `ControlledVocabularyItem` and `ControlledVocabularySource`.
 *
 */
export type ControlledVocabulary = Node & Sluggable & {
  __typename?: 'ControlledVocabulary';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * An optional internal description of the purpose/values contained within.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /**
   * A unique identifier for the controlled vocabulary (within the namespace).
   *
   */
  identifier: Scalars['String']['output'];
  /**
   * The items to render for this specific controlled vocabulary.
   *
   * This will be returned as a JSON array.
   *
   * See the type definitions at `/types/controlled_vocabulary_item_set.d.ts`.
   *
   */
  itemSet: Scalars['ControlledVocabularyItemSet']['output'];
  /**
   * The raw root item records.
   *
   */
  items: Array<ControlledVocabularyItem>;
  /**
   * The human-readable name of the controlled vocabulary.
   *
   */
  name: Scalars['String']['output'];
  /**
   * The namespace the controlled vocabulary lives in.
   *
   */
  namespace: Scalars['String']['output'];
  /**
   * The schema value that is provided by the CV.
   *
   * See `ControlledVocabularySource` for more details.
   *
   */
  provides: Scalars['String']['output'];
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * A unique version for the controlled vocabulary (within the namespace/identifier).
   *
   */
  version: Scalars['String']['output'];
};

/** The connection type for ControlledVocabulary. */
export type ControlledVocabularyConnection = Paginated & {
  __typename?: 'ControlledVocabularyConnection';
  /** A list of edges. */
  edges: Array<ControlledVocabularyEdge>;
  /** A list of nodes. */
  nodes: Array<ControlledVocabulary>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of ControlledVocabularyDestroy */
export type ControlledVocabularyDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The controlled vocabulary to destroy.
   *
   */
  controlledVocabularyId: Scalars['ID']['input'];
};

/** Autogenerated return type of ControlledVocabularyDestroy. */
export type ControlledVocabularyDestroyPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'ControlledVocabularyDestroyPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type ControlledVocabularyEdge = {
  __typename?: 'ControlledVocabularyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ControlledVocabulary;
};

/**
 * Filters for ControlledVocabulary.
 *
 */
export type ControlledVocabularyFilterInput = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  provides?: InputMaybe<Scalars['String']['input']>;
};

/**
 * An individual term within a `ControlledVocabulary`.
 *
 */
export type ControlledVocabularyItem = Node & Sluggable & {
  __typename?: 'ControlledVocabularyItem';
  /**
   * Any children for this vocab item. Starting from a depth of 0 at the top level, items cannot nest any deeper than 2.
   *
   */
  children: Array<ControlledVocabularyItem>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * An optional, internal description for this specific term.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /**
   * The unique, machine-readable identifier within the `ControlledVocabulary`.
   *
   */
  identifier: Scalars['String']['output'];
  /**
   * The unique label for the Controlled Vocabulary.
   *
   */
  label: Scalars['String']['output'];
  slug: Scalars['Slug']['output'];
  /**
   * Whether or not this should just be used as a grouping label and not be selectable. Implies children.
   *
   */
  unselectable: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * An optional URL that should be linked to if present, using the `label` as link text,
   * when displaying.
   *
   */
  url?: Maybe<Scalars['String']['output']>;
};

/**
 * Sort a collection of `ControlledVocabulary` records by specific properties and directions.
 *
 */
export type ControlledVocabularyOrder =
  /** Sort controlled vocabularies by their default order. */
  | 'DEFAULT'
  /** Sort controlled vocabularies by oldest created date. */
  | 'OLDEST'
  /** Sort controlled vocabularies by newest created date. */
  | 'RECENT'
  | '%future added value';

export type ControlledVocabularyProperty = HasControlledVocabulary & ScalarProperty & SchemaProperty & {
  __typename?: 'ControlledVocabularyProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * The vocabulary configured for this property, based on its `wants` value
   * and whatever is currently configured in `ControlledVocabularySource`.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
  controlledVocabularyItem?: Maybe<ControlledVocabularyItem>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
  /**
   * The key used to determine which `ControlledVocabulary` to fetch.
   *
   * See `#controlledVocabulary`.
   *
   */
  wants?: Maybe<Scalars['String']['output']>;
};

/**
 * A system-wide configuration that determines which `ControlledVocabulary` satisfies
 * a desired `provides` value in schemas.
 *
 */
export type ControlledVocabularySource = Node & Sluggable & {
  __typename?: 'ControlledVocabularySource';
  /**
   * The controlled vocabulary that provides terms, if selected / available.
   *
   * It can be blank when it needs to be populated.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  /**
   * This conforms to the `wants` attribute in CV schema properties.
   *
   */
  provides: Scalars['String']['output'];
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for ControlledVocabularySource. */
export type ControlledVocabularySourceConnection = Paginated & {
  __typename?: 'ControlledVocabularySourceConnection';
  /** A list of edges. */
  edges: Array<ControlledVocabularySourceEdge>;
  /** A list of nodes. */
  nodes: Array<ControlledVocabularySource>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ControlledVocabularySourceEdge = {
  __typename?: 'ControlledVocabularySourceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ControlledVocabularySource;
};

/**
 * Filters for ControlledVocabularySource.
 *
 */
export type ControlledVocabularySourceFilterInput = {
  /** Fetch only sources that remain unsatisfied. */
  unsatisfied?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Sort a collection of `ControlledVocabularySource` records by specific properties and directions.
 *
 */
export type ControlledVocabularySourceOrder =
  /** Sort controlled vocabulary sources by their default order. */
  | 'DEFAULT'
  /** Sort controlled vocabulary sources by oldest created date. */
  | 'OLDEST'
  /** Sort controlled vocabulary sources by newest created date. */
  | 'RECENT'
  | '%future added value';

/** Autogenerated input type of ControlledVocabularySourceUpdate */
export type ControlledVocabularySourceUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The controlled vocabulary to select as the provider
   *
   */
  controlledVocabularyId: Scalars['ID']['input'];
  /**
   * The controlled vocabulary source to update.
   *
   */
  controlledVocabularySourceId: Scalars['ID']['input'];
};

/** Autogenerated return type of ControlledVocabularySourceUpdate. */
export type ControlledVocabularySourceUpdatePayload = StandardMutationPayload & {
  __typename?: 'ControlledVocabularySourceUpdatePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /**
   * The newly-modified controlled vocabulary source, if successful.
   *
   */
  controlledVocabularySource?: Maybe<ControlledVocabularySource>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of ControlledVocabularyUpsert */
export type ControlledVocabularyUpsertInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The JSON definition for a controlled vocabulary.
   *
   * All controlled vocabulary details are derived from it.
   *
   */
  definition: Scalars['JSON']['input'];
  /**
   * If `true`, this will automatically select the controlled vocabulary as the source for whatever it `provides`.
   *
   */
  selectProvider?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of ControlledVocabularyUpsert. */
export type ControlledVocabularyUpsertPayload = StandardMutationPayload & {
  __typename?: 'ControlledVocabularyUpsertPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /**
   * The newly-modified controlled vocabulary, if successful.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateAnnouncement */
export type CreateAnnouncementInput = {
  /** A body for the announcement */
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID for an entity to create the announcement under. */
  entityId: Scalars['ID']['input'];
  /** A header value for the announcement */
  header: Scalars['String']['input'];
  /** The date of the announcement. */
  publishedOn: Scalars['ISO8601Date']['input'];
  /** A teaser for the announcement */
  teaser: Scalars['String']['input'];
};

/** Autogenerated return type of CreateAnnouncement. */
export type CreateAnnouncementPayload = StandardMutationPayload & {
  __typename?: 'CreateAnnouncementPayload';
  announcement?: Maybe<Announcement>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateAsset */
export type CreateAssetInput = {
  /** Alt text to display for the asset (if applicable) */
  altText?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an upload in Tus.
   *
   */
  attachment: UploadedFileInput;
  /** A caption to display below the asset (if applicable) */
  caption?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The entity that owns the attachment */
  entityId: Scalars['ID']['input'];
  /** A human readable name for the asset */
  name: Scalars['String']['input'];
  /** The position the asset occupies amongst siblings */
  position?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of CreateAsset. */
export type CreateAssetPayload = StandardMutationPayload & {
  __typename?: 'CreateAssetPayload';
  asset?: Maybe<AnyAsset>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateCollection */
export type CreateCollectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: InputMaybe<Scalars['String']['input']>;
  /**
   * The parent of the new collection. This can be the encoded ID of a community or another collection.
   *
   */
  parentId: Scalars['ID']['input'];
  /** The date this entity was published */
  published?: InputMaybe<VariablePrecisionDateInput>;
  schemaVersionSlug?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable subtitle for the entity */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A brief description of the entity's contents. */
  summary?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  thumbnail?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  thumbnailMetadata?: InputMaybe<ImageMetadataInput>;
  /** Human-readable title for the entity */
  title: Scalars['String']['input'];
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** Autogenerated return type of CreateCollection. */
export type CreateCollectionPayload = StandardMutationPayload & {
  __typename?: 'CreateCollectionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Collection>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateCommunity */
export type CreateCommunityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  heroImageLayout: HeroImageLayout;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  logo?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  logoMetadata?: InputMaybe<ImageMetadataInput>;
  /** The position the community occupies in the list */
  position?: InputMaybe<Scalars['Int']['input']>;
  schemaVersionSlug?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable subtitle for the entity */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A brief description of the entity's contents. */
  summary?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  thumbnail?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  thumbnailMetadata?: InputMaybe<ImageMetadataInput>;
  /** Human-readable title for the entity */
  title: Scalars['String']['input'];
};

/** Autogenerated return type of CreateCommunity. */
export type CreateCommunityPayload = StandardMutationPayload & {
  __typename?: 'CreateCommunityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A representation of a successfully created community */
  community?: Maybe<Community>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateItem */
export type CreateItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: InputMaybe<Scalars['String']['input']>;
  /**
   * The parent of the item. This can be the encoded ID of a collection or another item.
   *
   */
  parentId: Scalars['ID']['input'];
  /** The date this entity was published */
  published?: InputMaybe<VariablePrecisionDateInput>;
  schemaVersionSlug?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable subtitle for the entity */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A brief description of the entity's contents. */
  summary?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  thumbnail?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  thumbnailMetadata?: InputMaybe<ImageMetadataInput>;
  /** Human-readable title for the entity */
  title: Scalars['String']['input'];
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** Autogenerated return type of CreateItem. */
export type CreateItemPayload = StandardMutationPayload & {
  __typename?: 'CreateItemPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  /** A representation of a successfully created item */
  item?: Maybe<Item>;
};

/** Autogenerated input type of CreateOrdering */
export type CreateOrderingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The entity to create the ordering for.
   *
   */
  entityId: Scalars['ID']['input'];
  filter?: InputMaybe<OrderingFilterDefinitionInput>;
  /** Optional markdown content to display after the ordering's children */
  footer?: InputMaybe<Scalars['String']['input']>;
  /** Optional markdown content to display before the ordering's children */
  header?: InputMaybe<Scalars['String']['input']>;
  /** A unique (within the context of the entity) identifier. Cannot be changed */
  identifier: Scalars['String']['input'];
  /** A human readable label for the ordering */
  name?: InputMaybe<Scalars['String']['input']>;
  order: Array<OrderDefinitionInput>;
  render?: InputMaybe<OrderingRenderDefinitionInput>;
  select?: InputMaybe<OrderingSelectDefinitionInput>;
};

/** Autogenerated return type of CreateOrdering. */
export type CreateOrderingPayload = StandardMutationPayload & {
  __typename?: 'CreateOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  /** The created ordering */
  ordering?: Maybe<Ordering>;
};

/** Autogenerated input type of CreateOrganizationContributor */
export type CreateOrganizationContributorInput = {
  /** A summary of the contributor */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An email associated with the contributor */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  image?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  imageMetadata?: InputMaybe<ImageMetadataInput>;
  /** The legal name of the organization */
  legalName?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<ContributorLinkInput>>;
  /** Where the organization is located (if applicable) */
  location?: InputMaybe<Scalars['String']['input']>;
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: InputMaybe<Scalars['String']['input']>;
  /** A url associated with the contributor */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateOrganizationContributor. */
export type CreateOrganizationContributorPayload = StandardMutationPayload & {
  __typename?: 'CreateOrganizationContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The created organization */
  contributor?: Maybe<OrganizationContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreatePage */
export type CreatePageInput = {
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['ID']['input'];
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  position?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

/** Autogenerated return type of CreatePage. */
export type CreatePagePayload = StandardMutationPayload & {
  __typename?: 'CreatePagePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Page>;
};

/** Autogenerated input type of CreatePersonContributor */
export type CreatePersonContributorInput = {
  affiliation?: InputMaybe<Scalars['String']['input']>;
  /** A summary of the contributor */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An email associated with the contributor */
  email?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  image?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  imageMetadata?: InputMaybe<ImageMetadataInput>;
  links?: InputMaybe<Array<ContributorLinkInput>>;
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** A url associated with the contributor */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CreatePersonContributor. */
export type CreatePersonContributorPayload = StandardMutationPayload & {
  __typename?: 'CreatePersonContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The created person */
  contributor?: Maybe<PersonContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateRole */
export type CreateRoleInput = {
  accessControlList: Scalars['JSON']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated return type of CreateRole. */
export type CreateRolePayload = StandardMutationPayload & {
  __typename?: 'CreateRolePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

/**
 * Require that `path = value` while enforcing that value is a date.
 *
 */
export type DateEqualsOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['ISO8601Date']['input'];
};

/**
 * A date-filter for various analytics and other resolvers.
 *
 */
export type DateFilterInput = {
  /**
   * The end date. Make sure it is >= `start_date` if provided.
   *
   * For actual filtering, this will get turned into 23:59:59 in the provided `time_zone`.
   *
   */
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /**
   * The start date. Make sure it is <= `end_date` if provided.
   *
   * For actual filtering, this will get turned into midnight in the provided `time_zone`.
   *
   */
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /**
   * The time zone to use for calculating the range.
   *
   * If not provided, it will use the server's configured default,
   * which is at present UTC, but may be configurable later on.
   *
   */
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Require that `path ≥ value` while enforcing that value is a date.
 *
 */
export type DateGteOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['ISO8601Date']['input'];
};

/**
 * Require that `path ≤ value` while enforcing that value is a date.
 *
 */
export type DateLteOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['ISO8601Date']['input'];
};

/** This describes the level of precision a VariablePrecisionDate has, in increasing order of specificity. */
export type DatePrecision =
  | 'DAY'
  | 'MONTH'
  | 'NONE'
  | 'YEAR'
  | '%future added value';

export type DateProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'DateProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  date?: Maybe<Scalars['ISO8601Date']['output']>;
  default?: Maybe<Scalars['ISO8601Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type DescendantListBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type DescendantListSelectionMode =
  /**
   * Render descendants from a dynamic ordering, determined at query time.
   *
   */
  | 'DYNAMIC'
  /**
   * Render descendants from a manual ordering set on each individual entity. See `manualListName` for how this works.
   *
   */
  | 'MANUAL'
  /**
   * Render descendants from a named ordering that exists on the source entity.
   *
   */
  | 'NAMED'
  /**
   * Render entities from a schema property on the source entity.
   *
   */
  | 'PROPERTY'
  | '%future added value';

export type DescendantListTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'DescendantListTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<DescendantListBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * When `selectionMode` is set to `DYNAMIC`, this uses the same basic structure
   * as schemas to define a dynamic ordering that is resolved at runtime and based
   * on the `selectionSource`.
   *
   */
  dynamicOrderingDefinition?: Maybe<OrderingDefinition>;
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * When `selectionMode` is set to `MANUAL`, the purpose of this property
   * is to specify a name under which all the manual selections (per entity)
   * will be stored. This allows a layout to have multiple templates of the
   * same type using different lists, that will persist across rearrangements
   * of the layout _without_ losing connections between entities.
   *
   */
  manualListName?: Maybe<Scalars['SchemaComponent']['output']>;
  /**
   * When `selectionMode` is set to `NAMED`, this will look up the named ordering
   * on the resolved `selectionSource` and render up to `selectionLimit` entities.
   *
   */
  orderingIdentifier?: Maybe<Scalars['SchemaComponent']['output']>;
  seeAllButtonLabel?: Maybe<Scalars['String']['output']>;
  /**
   * Regardless of `selectionMode`, this limit will be applied on whatever resulting
   * list of entities are produced, so that only up to that amount of entities are
   * rendered in the template proper.
   *
   */
  selectionLimit?: Maybe<Scalars['Int']['output']>;
  selectionMode?: Maybe<DescendantListSelectionMode>;
  /**
   * When `selectionMode` is set to `PROPERTY`, this should be set to the full path
   * for a given schema property on the associated `selectionSource`
   *
   */
  selectionPropertyPath?: Maybe<Scalars['SchemaPropertyPath']['output']>;
  /**
   * When selecting entities based on `selectionMode`, this property determines
   * which entity (relevant to the rendering entity) should be used for lookups.
   *
   * By default, it is `self`, which means the rendering entity itself.
   *
   * It can also support things like `ancestor.journal`, `ancestor.issue`, etc.,
   * in order to render a list of values in its parent.
   *
   */
  selectionSource?: Maybe<Scalars['TemplateSelectionSource']['output']>;
  selectionSourceAncestorName?: Maybe<Scalars['SchemaComponent']['output']>;
  /**
   * An enum representing what mode `selectionSource` is in. Not directly set,
   * it is used internally for lookups.
   *
   */
  selectionSourceMode?: Maybe<SelectionSourceMode>;
  showEntityContext?: Maybe<Scalars['Boolean']['output']>;
  showSeeAllButton?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Slot definitions for this template.
   *
   */
  slots: DescendantListTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The variant rendering mode to use for this template. Affects presentation.
   *
   */
  variant?: Maybe<DescendantListVariant>;
};

/**
 * Slot definitions for the associated template.
 *
 */
export type DescendantListTemplateDefinitionSlots = {
  __typename?: 'DescendantListTemplateDefinitionSlots';
  header?: Maybe<TemplateSlotInlineDefinition>;
  headerAside?: Maybe<TemplateSlotInlineDefinition>;
  metadata?: Maybe<TemplateSlotInlineDefinition>;
  subtitle?: Maybe<TemplateSlotInlineDefinition>;
};

export type DescendantListTemplateInstance = Node & Renderable & Sluggable & TemplateHasEntityList & TemplateInstance & {
  __typename?: 'DescendantListTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: DescendantListTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  /**
   * The list of entities to render as part of this template's content.
   *
   */
  entityList: TemplateEntityList;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: DescendantListTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type DescendantListTemplateInstanceSlots = {
  __typename?: 'DescendantListTemplateInstanceSlots';
  header?: Maybe<TemplateSlotInlineInstance>;
  headerAside?: Maybe<TemplateSlotInlineInstance>;
  metadata?: Maybe<TemplateSlotInlineInstance>;
  subtitle?: Maybe<TemplateSlotInlineInstance>;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type DescendantListVariant =
  /**
   * A card list of entities.
   *
   */
  | 'CARDS'
  /**
   * A compact list of entities.
   *
   */
  | 'COMPACT'
  /**
   * A grid of entities
   *
   */
  | 'GRID'
  /**
   * A horizontal list of entities with promotional header.
   *
   */
  | 'PROMOS'
  /**
   * A vertical, summarized list of entities.
   *
   */
  | 'SUMMARY'
  | '%future added value';

/**
 * The most basic shared properties for a single schema, whether a definition,
 * a version, or an aggregate based on the former types.
 *
 */
export type DescribesSchema = {
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String']['output'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String']['output'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String']['output'];
};

/** Autogenerated input type of DestroyAnnouncement */
export type DestroyAnnouncementInput = {
  announcementId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of DestroyAnnouncement. */
export type DestroyAnnouncementPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyAnnouncementPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyAsset */
export type DestroyAssetInput = {
  /** The ID for the asset to destroy */
  assetId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of DestroyAsset. */
export type DestroyAssetPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyAssetPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyCollection */
export type DestroyCollectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID for the collection to destroy */
  collectionId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyCollection. */
export type DestroyCollectionPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyCollectionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyCommunity */
export type DestroyCommunityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID for the community to destroy */
  communityId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyCommunity. */
export type DestroyCommunityPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyCommunityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyContribution */
export type DestroyContributionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contributionId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyContribution. */
export type DestroyContributionPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyContributionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyContributor */
export type DestroyContributorInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contributorId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyContributor. */
export type DestroyContributorPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyEntityLink */
export type DestroyEntityLinkInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID for the EntityLink to destroy */
  entityLinkId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyEntityLink. */
export type DestroyEntityLinkPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyEntityLinkPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyItem */
export type DestroyItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID for the item to destroy */
  itemId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyItem. */
export type DestroyItemPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyItemPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** This mutation destroys a model */
export type DestroyMutationPayload = {
  attributeErrors: Array<MutationAttributeError>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyOrdering */
export type DestroyOrderingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderingId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyOrdering. */
export type DestroyOrderingPayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of DestroyPage */
export type DestroyPageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['ID']['input'];
};

/** Autogenerated return type of DestroyPage. */
export type DestroyPagePayload = DestroyMutationPayload & StandardMutationPayload & {
  __typename?: 'DestroyPagePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type DetailBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

export type DetailTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'DetailTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<DetailBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  showAnnouncements?: Maybe<Scalars['Boolean']['output']>;
  showHeroImage?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Slot definitions for this template.
   *
   */
  slots: DetailTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The variant rendering mode to use for this template. Affects presentation.
   *
   */
  variant?: Maybe<DetailVariant>;
};

/**
 * Slot definitions for the associated template.
 *
 */
export type DetailTemplateDefinitionSlots = {
  __typename?: 'DetailTemplateDefinitionSlots';
  header?: Maybe<TemplateSlotInlineDefinition>;
  subheader?: Maybe<TemplateSlotInlineDefinition>;
  summary?: Maybe<TemplateSlotBlockDefinition>;
};

export type DetailTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'DetailTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: DetailTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: DetailTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type DetailTemplateInstanceSlots = {
  __typename?: 'DetailTemplateInstanceSlots';
  header?: Maybe<TemplateSlotInlineInstance>;
  subheader?: Maybe<TemplateSlotInlineInstance>;
  summary?: Maybe<TemplateSlotBlockInstance>;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type DetailVariant =
  | 'FULL'
  | 'SUMMARY'
  | '%future added value';

export type Direction =
  | 'ASCENDING'
  | 'DESCENDING'
  | '%future added value';

/**
 * User-specific access permissions for non-hierarchical records.
 *
 */
export type EffectiveAccess = ExposesPermissions & {
  __typename?: 'EffectiveAccess';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /**
   * The values that may appear in `allowed_actions`. This is for introspection
   * and type-checking: the presence of a string here does _not_ mean the user
   * has the effective capability.
   *
   */
  availableActions: Array<Scalars['String']['output']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

export type EmailProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'EmailProperty';
  address?: Maybe<Scalars['String']['output']>;
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  defaultAddress?: Maybe<Scalars['String']['output']>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * A property that references a deterministically-ordered list of entities.
 *
 */
export type EntitiesProperty = HasAvailableEntities & ScalarProperty & SchemaProperty & {
  __typename?: 'EntitiesProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntities: Array<EntitySelectOption>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * A deterministically-ordered list of entities.
   *
   * Given the same input, this array will always be returned in the same order.
   *
   */
  entities: Array<AnyEntity>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** Settings specific to how entities should behave on this installation. */
export type EntitiesSettings = {
  __typename?: 'EntitiesSettings';
  /** Whether external links should be suppressed in certain schema field types. */
  suppressExternalLinks: Scalars['Boolean']['output'];
};

/** An object for updating EntitiesSettings */
export type EntitiesSettingsInput = {
  /** Whether external links should be suppressed in certain schema field types. */
  suppressExternalLinks?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An entity that exists in the hierarchy. */
export type Entity = {
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /**
   * Search and retrieve *all* descendants of this `Entity`, regardless of type.
   *
   */
  descendants: EntityDescendantConnection;
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int']['output'];
  /**
   * The initial ordering to display for this entity.
   *
   */
  initialOrdering?: Maybe<Ordering>;
  /**
   * Access layouts for this entity.
   *
   */
  layouts: EntityLayouts;
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /**
   * Retrieve a connection of orderings for the parent object.
   *
   */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  schemaDefinition: SchemaDefinition;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']['output']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String']['output'];
};


/** An entity that exists in the hierarchy. */
export type EntityAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** An entity that exists in the hierarchy. */
export type EntityAnnouncementArgs = {
  slug: Scalars['Slug']['input'];
};


/** An entity that exists in the hierarchy. */
export type EntityAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnnouncementOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An entity that exists in the hierarchy. */
export type EntityAssignedUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContextualPermissionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An entity that exists in the hierarchy. */
export type EntityDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  order?: EntityDescendantOrder;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
  scope?: InputMaybe<EntityDescendantScopeFilter>;
};


/** An entity that exists in the hierarchy. */
export type EntityLinkTargetCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<LinkTargetCandidateFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/** An entity that exists in the hierarchy. */
export type EntityLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An entity that exists in the hierarchy. */
export type EntityOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/** An entity that exists in the hierarchy. */
export type EntityOrderingForSchemaArgs = {
  slug: Scalars['Slug']['input'];
};


/** An entity that exists in the hierarchy. */
export type EntityOrderingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<OrderingAvailabilityFilter>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderingOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<OrderingVisibilityFilter>;
};


/** An entity that exists in the hierarchy. */
export type EntityPageArgs = {
  slug: Scalars['String']['input'];
};


/** An entity that exists in the hierarchy. */
export type EntityPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An entity that exists in the hierarchy. */
export type EntitySearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};

export type EntityBreadcrumb = Node & {
  __typename?: 'EntityBreadcrumb';
  crumb: AnyEntity;
  depth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  kind: EntityKind;
  label: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** A descendant of an `Entity`. */
export type EntityDescendant = {
  __typename?: 'EntityDescendant';
  /** The actual descendant entity */
  descendant: AnyEntity;
  /** The relative depth of this entity from its ancestor */
  relativeDepth: Scalars['Int']['output'];
  /** The scope of this entity relative to its ancestor */
  scope: EntityScope;
};

/** The connection type for EntityDescendant. */
export type EntityDescendantConnection = Paginated & {
  __typename?: 'EntityDescendantConnection';
  /** A list of edges. */
  edges: Array<EntityDescendantEdge>;
  /** A list of nodes. */
  nodes: Array<EntityDescendant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityDescendantEdge = {
  __typename?: 'EntityDescendantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EntityDescendant;
};

/** Sort entity descendants by specific attributes and order */
export type EntityDescendantOrder =
  /** Sort descendants by oldest published date (or OLDEST for communities) */
  | 'PUBLISHED_ASCENDING'
  /** Sort descendants by newest published date (or RECENT for communities) */
  | 'PUBLISHED_DESCENDING'
  /** Sort descendants by title A-Z */
  | 'TITLE_ASCENDING'
  /** Sort descendants by title Z-A */
  | 'TITLE_DESCENDING'
  | '%future added value';

/**
 * This enum is used to filter the type(s) of descendants to include
 * in a set of results.
 *
 */
export type EntityDescendantScopeFilter =
  /**
   * This will include anything regardless of type.
   *
   */
  | 'ALL'
  /**
   * This will include all `Collection`s and `Item`s that are direct descendants and not linked.
   *
   */
  | 'ANY_ENTITY'
  /**
   * This will include any _linked_ `Collection`s or `Item`s.
   *
   */
  | 'ANY_LINK'
  /**
   * This will include only directly descending `Collection`s, no links.
   *
   */
  | 'COLLECTION'
  /**
   * This will include any descendant `Collection`s, whether or not it is a link.
   *
   */
  | 'COLLECTION_OR_LINK'
  /**
   * This will include only directly descending `Item`s, no links.
   *
   */
  | 'ITEM'
  /**
   * This will include any descendant `Item`s, whether or not it is a link.
   *
   */
  | 'ITEM_OR_LINK'
  /**
   * This will only descendant `Collection`s that are linked.
   *
   */
  | 'LINKED_COLLECTION'
  /**
   * This will only descendant `Item`s that are linked.
   *
   */
  | 'LINKED_ITEM'
  | '%future added value';

/** An enumeration of the different kinds of hierarchical entities */
export type EntityKind =
  | 'COLLECTION'
  | 'COMMUNITY'
  | 'ITEM'
  | '%future added value';

/**
 * An accessor for pulling up layout instances for a given entity.
 *
 */
export type EntityLayouts = {
  __typename?: 'EntityLayouts';
  /**
   * The `HERO` layout instance for this entity.
   *
   */
  hero?: Maybe<HeroLayoutInstance>;
  /**
   * The `LIST_ITEM` layout instance for this entity.
   *
   */
  listItem?: Maybe<ListItemLayoutInstance>;
  /**
   * The `MAIN` layout instance for this entity.
   *
   */
  main?: Maybe<MainLayoutInstance>;
  /**
   * The `METADATA` layout instance for this entity.
   *
   */
  metadata?: Maybe<MetadataLayoutInstance>;
  /**
   * The `NAVIGATION` layout instance for this entity.
   *
   */
  navigation?: Maybe<NavigationLayoutInstance>;
  /**
   * The `SUPPLEMENTARY` layout instance for this entity.
   *
   */
  supplementary?: Maybe<SupplementaryLayoutInstance>;
};

/** A link between different entities */
export type EntityLink = Node & Sluggable & {
  __typename?: 'EntityLink';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  operator: EntityLinkOperator;
  scope: EntityLinkScope;
  slug: Scalars['Slug']['output'];
  source: AnyEntity;
  sourceCollection?: Maybe<Collection>;
  sourceCommunity?: Maybe<Community>;
  sourceItem?: Maybe<Item>;
  target: AnyEntity;
  targetCollection?: Maybe<Collection>;
  targetCommunity?: Maybe<Community>;
  targetItem?: Maybe<Item>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for EntityLink. */
export type EntityLinkConnection = Paginated & {
  __typename?: 'EntityLinkConnection';
  /** A list of edges. */
  edges: Array<EntityLinkEdge>;
  /** A list of nodes. */
  nodes: Array<EntityLink>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityLinkEdge = {
  __typename?: 'EntityLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EntityLink;
};

/** A link operator describes how a source is linked to its target */
export type EntityLinkOperator =
  | 'CONTAINS'
  | 'REFERENCES'
  | '%future added value';

/** A link scope succinctly describes the source and target types */
export type EntityLinkScope =
  /** A link to a collection from another collection */
  | 'COLLECTION_LINKED_COLLECTION'
  /** A link to a community from a collection */
  | 'COLLECTION_LINKED_COMMUNITY'
  /** A link to an item from a community */
  | 'COLLECTION_LINKED_ITEM'
  /** A link to a collection not directly owned by a community */
  | 'COMMUNITY_LINKED_COLLECTION'
  /** A link to a community from another community */
  | 'COMMUNITY_LINKED_COMMUNITY'
  /** A link to an item from a community */
  | 'COMMUNITY_LINKED_ITEM'
  /** A link to a collection from an item */
  | 'ITEM_LINKED_COLLECTION'
  /** A link to a community from an item */
  | 'ITEM_LINKED_COMMUNITY'
  /** A link to an item from another item */
  | 'ITEM_LINKED_ITEM'
  | '%future added value';

/** Sort entities by a specific property and order */
export type EntityOrder =
  /** Sort entities by oldest created date */
  | 'OLDEST'
  /** Sort communities by position 0-9; other entities by RECENT */
  | 'POSITION_ASCENDING'
  /** Sort communities by position 9-0; other entities by OLDEST */
  | 'POSITION_DESCENDING'
  /** Sort entities by oldest published date (or OLDEST for communities) */
  | 'PUBLISHED_ASCENDING'
  /** Sort entities by newest published date (or RECENT for communities) */
  | 'PUBLISHED_DESCENDING'
  /** Sort entities by newest created date */
  | 'RECENT'
  /** Sort entities by the name of their schema A-Z */
  | 'SCHEMA_NAME_ASCENDING'
  /** Sort entities by the name of their schema Z-A */
  | 'SCHEMA_NAME_DESCENDING'
  /** Sort entities by title A-Z */
  | 'TITLE_ASCENDING'
  /** Sort entities by title Z-A */
  | 'TITLE_DESCENDING'
  | '%future added value';

export type EntityPermissionFilter =
  | 'CRUD'
  | 'READ_ONLY'
  | '%future added value';

/** A grid of permissions for various hierarchical entity scopes. */
export type EntityPermissionGrid = CrudPermissionGrid & ExposesPermissions & PermissionGrid & {
  __typename?: 'EntityPermissionGrid';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  assets: AssetPermissionGrid;
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  manageAccess: Scalars['Boolean']['output'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  read: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/**
 * A property that references another entity within the system.
 *
 */
export type EntityProperty = HasAvailableEntities & ScalarProperty & SchemaProperty & {
  __typename?: 'EntityProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntities: Array<EntitySelectOption>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * A single reference to another entity within the system.
   *
   */
  entity?: Maybe<AnyEntity>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * This type is used for authorization and filtering, and can
 * distinguish an entity that has been linked to another from
 * one that exists directly in a hierarchy.
 *
 */
export type EntityScope =
  /**
   * A `Collection` that is an actual descendant at this point in the hierarchy.
   *
   */
  | 'COLLECTION'
  /**
   * A `Collection` that was linked from another `Collection`.
   *
   */
  | 'COLLECTION_LINKED_COLLECTION'
  /**
   * A `Community` that was linked from a `Collection`.
   *
   */
  | 'COLLECTION_LINKED_COMMUNITY'
  /**
   * An `Item` that was linked from a `Collection`.
   *
   */
  | 'COLLECTION_LINKED_ITEM'
  /**
   * A `Community` that is an actual descendant at this point in the hierarchy.
   *
   */
  | 'COMMUNITY'
  /**
   * A `Collection` that was linked from a `Community`.
   *
   */
  | 'COMMUNITY_LINKED_COLLECTION'
  /**
   * A `Community` that was linked from another `Community`.
   *
   */
  | 'COMMUNITY_LINKED_COMMUNITY'
  /**
   * An `Item` that was linked from a `Community`.
   *
   */
  | 'COMMUNITY_LINKED_ITEM'
  /**
   * An `Item` that is an actual descendant at this point in the hierarchy.
   *
   */
  | 'ITEM'
  /**
   * A `Collection` that was linked from an `Item`.
   *
   */
  | 'ITEM_LINKED_COLLECTION'
  /**
   * A `Community` that was linked from an `Item`.
   *
   */
  | 'ITEM_LINKED_COMMUNITY'
  /**
   * An `Item` that was linked from another `Item`.
   *
   */
  | 'ITEM_LINKED_ITEM'
  | '%future added value';

/** A select option for a single entity */
export type EntitySelectOption = HasEntityBreadcrumbs & {
  __typename?: 'EntitySelectOption';
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  entity: AnyEntity;
  kind: EntityKind;
  label: Scalars['String']['output'];
  schemaVersion: SchemaVersion;
  slug: Scalars['Slug']['output'];
  value: Scalars['ID']['output'];
};

/** The level of visibility an entity can have */
export type EntityVisibility =
  | 'HIDDEN'
  | 'LIMITED'
  | 'VISIBLE'
  | '%future added value';

/**
 * Filter entities by their visibility.
 *
 * `VISIBLE` is the default in most cases. Any other option requires special privileges.
 *
 */
export type EntityVisibilityFilter =
  /** Do not filter entities by their visibility at all. */
  | 'ALL'
  /** Fetch only *currently hidden* entities. */
  | 'HIDDEN'
  /** Fetch only *currently visible* entities. */
  | 'VISIBLE'
  | '%future added value';

/**
 * Require that `path = value`.
 *
 */
export type EqualsOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type ExposesEffectiveAccess = {
  /**
   * User-specific access permissions for this object.
   *
   */
  effectiveAccess: EffectiveAccess;
};

export type ExposesPermissions = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

export type FloatProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'FloatProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  defaultFloat?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  floatValue?: Maybe<Scalars['Float']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** A full-text searchable value for an entity */
export type FullText = {
  __typename?: 'FullText';
  /** The full-text searchable value itself */
  content?: Maybe<Scalars['String']['output']>;
  /** The content type for the text, if any */
  kind?: Maybe<FullTextKind>;
  /** The ISO-639 language code of this content, if any */
  lang?: Maybe<Scalars['String']['output']>;
};

/** It is necessary for the system to know what kind the content is in order to properly index it */
export type FullTextKind =
  | 'HTML'
  | 'MARKDOWN'
  | 'TEXT'
  | '%future added value';

export type FullTextProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'FullTextProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  fullText?: Maybe<FullText>;
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** A global ACL */
export type GlobalAccessControlList = ExposesPermissions & {
  __typename?: 'GlobalAccessControlList';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

/** The global configuration for this installation of Meru. */
export type GlobalConfiguration = Node & {
  __typename?: 'GlobalConfiguration';
  /** Settings specific to how entities should behave on this installation. */
  entities: EntitiesSettings;
  id: Scalars['ID']['output'];
  /** Settings specific to this institution. */
  institution: InstitutionSettings;
  /** The logo attachment. It may not always be present. */
  logo: SiteLogoAttachment;
  /** Configurable metadata for the logo attachment. */
  logoMetadata?: Maybe<ImageMetadata>;
  /** Settings specific to this site */
  site: SiteSettings;
  /** Settings specific to the site's theme */
  theme: ThemeSettings;
};

/** Autogenerated input type of GrantAccess */
export type GrantAccessInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['ID']['input'];
  roleId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated return type of GrantAccess. */
export type GrantAccessPayload = StandardMutationPayload & {
  __typename?: 'GrantAccessPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Whether or not access was granted */
  granted?: Maybe<Scalars['Boolean']['output']>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

export type GroupProperty = SchemaProperty & {
  __typename?: 'GroupProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  legend?: Maybe<Scalars['String']['output']>;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  properties: Array<AnyScalarProperty>;
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** Something which implements a #storage key that identifies where its attachment currently lives. */
export type HasAttachmentStorage = {
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   *
   */
  storage?: Maybe<AttachmentStorage>;
};

export type HasAvailableEntities = {
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntities: Array<EntitySelectOption>;
};

export type HasControlledVocabulary = {
  /**
   * The vocabulary configured for this property, based on its `wants` value
   * and whatever is currently configured in `ControlledVocabularySource`.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
  /**
   * The key used to determine which `ControlledVocabulary` to fetch.
   *
   * See `#controlledVocabulary`.
   *
   */
  wants?: Maybe<Scalars['String']['output']>;
};

/** An entity that has a DOI */
export type HasDoi = {
  /**
   * The Digital Object Identifier for this entity. See https://doi.org
   *
   */
  doi?: Maybe<Scalars['String']['output']>;
};

/**
 * Automatically-set timestamps present on most real models in the system.
 *
 */
export type HasDefaultTimestamps = {
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Entity models implement their own analytics views that come pre-filtered */
export type HasEntityAnalytics = {
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  entityViews: AnalyticsEventCountSummary;
  entityViewsByRegion: AnalyticsRegionCountSummary;
};


/** Entity models implement their own analytics views that come pre-filtered */
export type HasEntityAnalyticsAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Entity models implement their own analytics views that come pre-filtered */
export type HasEntityAnalyticsAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Entity models implement their own analytics views that come pre-filtered */
export type HasEntityAnalyticsEntityViewsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


/** Entity models implement their own analytics views that come pre-filtered */
export type HasEntityAnalyticsEntityViewsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HasEntityBreadcrumbs = {
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
};

/** An entity that has an ISSN */
export type HasIssn = {
  /**
   * The International Standard Serial Number for this entity. See https://issn.org
   *
   */
  issn?: Maybe<Scalars['String']['output']>;
};

export type HasSchemaProperties = {
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type HeroBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

/** The layout to use when rendering a Hero for an `Entity`. */
export type HeroImageLayout =
  | 'ONE_COLUMN'
  | 'TWO_COLUMN'
  | '%future added value';

export type HeroLayoutDefinition = LayoutDefinition & Node & Sluggable & {
  __typename?: 'HeroLayoutDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<HeroTemplateDefinition>;
  /**
   * The ordered template definitions available for this layout.
   *
   */
  templates: Array<AnyHeroTemplateDefinition>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type HeroLayoutInstance = LayoutInstance & Node & Renderable & Sluggable & {
  __typename?: 'HeroLayoutInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * The layout definition for this type.
   *
   */
  layoutDefinition: HeroLayoutDefinition;
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<HeroTemplateInstance>;
  /**
   * The ordered template instances available for this layout.
   *
   */
  templates: Array<AnyHeroTemplateInstance>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type HeroTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'HeroTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<HeroBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  descendantSearchPrompt?: Maybe<Scalars['String']['output']>;
  enableDescendantBrowsing?: Maybe<Scalars['Boolean']['output']>;
  enableDescendantSearch?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  listContributors?: Maybe<Scalars['Boolean']['output']>;
  showBasicViewMetrics?: Maybe<Scalars['Boolean']['output']>;
  showBigSearchPrompt?: Maybe<Scalars['Boolean']['output']>;
  showBreadcrumbs?: Maybe<Scalars['Boolean']['output']>;
  showDOI?: Maybe<Scalars['Boolean']['output']>;
  showHeroImage?: Maybe<Scalars['Boolean']['output']>;
  showISSN?: Maybe<Scalars['Boolean']['output']>;
  showSharingLink?: Maybe<Scalars['Boolean']['output']>;
  showSplitDisplay?: Maybe<Scalars['Boolean']['output']>;
  showThumbnailImage?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Slot definitions for this template.
   *
   */
  slots: HeroTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type HeroTemplateDefinitionSlots = {
  __typename?: 'HeroTemplateDefinitionSlots';
  callToAction?: Maybe<TemplateSlotInlineDefinition>;
  header?: Maybe<TemplateSlotInlineDefinition>;
  headerAside?: Maybe<TemplateSlotInlineDefinition>;
  headerSidebar?: Maybe<TemplateSlotBlockDefinition>;
  headerSummary?: Maybe<TemplateSlotBlockDefinition>;
  metadata?: Maybe<TemplateSlotInlineDefinition>;
  sidebar?: Maybe<TemplateSlotBlockDefinition>;
  subheader?: Maybe<TemplateSlotInlineDefinition>;
  subheaderAside?: Maybe<TemplateSlotInlineDefinition>;
  subheaderSummary?: Maybe<TemplateSlotBlockDefinition>;
  summary?: Maybe<TemplateSlotBlockDefinition>;
};

export type HeroTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'HeroTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: HeroTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: HeroTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type HeroTemplateInstanceSlots = {
  __typename?: 'HeroTemplateInstanceSlots';
  callToAction?: Maybe<TemplateSlotInlineInstance>;
  header?: Maybe<TemplateSlotInlineInstance>;
  headerAside?: Maybe<TemplateSlotInlineInstance>;
  headerSidebar?: Maybe<TemplateSlotBlockInstance>;
  headerSummary?: Maybe<TemplateSlotBlockInstance>;
  metadata?: Maybe<TemplateSlotInlineInstance>;
  sidebar?: Maybe<TemplateSlotBlockInstance>;
  subheader?: Maybe<TemplateSlotInlineInstance>;
  subheaderAside?: Maybe<TemplateSlotInlineInstance>;
  subheaderSummary?: Maybe<TemplateSlotBlockInstance>;
  summary?: Maybe<TemplateSlotBlockInstance>;
};

/**
 * A ranking of a schema from a certain point in the hierarchy. This can be used to generate
 * navigation or calculate statistics about what various entities contain.
 *
 */
export type HierarchicalSchemaRank = DescribesSchema & Node & {
  __typename?: 'HierarchicalSchemaRank';
  /** The number of entities that implement this schema from this point in the hierarchy. */
  count: Scalars['Int']['output'];
  /** A count of distinct versions of this specific schema type from this point of the hierarchy. */
  distinctVersionCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String']['output'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String']['output'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String']['output'];
  /** The rank of this schema at this point in the hierarchy, based on the statistical mode of its depth relative to the parent. */
  rank: Scalars['Int']['output'];
  /** A reference to the discrete schema definition */
  schemaDefinition: SchemaDefinition;
  /** A fully-qualified unique value that can be used to refer to this schema within the system */
  slug: Scalars['String']['output'];
  /** A reference to the schema versions from this ranking */
  versionRanks: Array<HierarchicalSchemaVersionRank>;
};

/**
 * A ranking of a schema version from a certain point in the hierarchy. This can be used to generate
 * navigation or calculate statistics about what versions of a schema various entities contain.
 *
 */
export type HierarchicalSchemaVersionRank = DescribesSchema & Node & {
  __typename?: 'HierarchicalSchemaVersionRank';
  /** The number of entities that implement this schema from this point in the hierarchy. */
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String']['output'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String']['output'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String']['output'];
  /** The rank of this schema at this point in the hierarchy, based on the statistical mode of its depth relative to the parent. */
  rank: Scalars['Int']['output'];
  /** A reference to the discrete schema definition */
  schemaDefinition: SchemaDefinition;
  /** A reference to the discrete schema version */
  schemaVersion: SchemaVersion;
  /** A fully-qualified unique value that can be used to refer to this schema within the system */
  slug: Scalars['String']['output'];
  /** A semantic version associated with the schema */
  versionNumber: Scalars['String']['output'];
};

/**
 * An interface for various component types of an image attachment
 * that allow it to be identified in name and purpose.
 *
 */
export type Image = {
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the image, if present */
  contentType?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use width and height directly. */
  dimensions?: Maybe<Array<Scalars['Int']['output']>>;
  /** The height of the image, if present */
  height?: Maybe<Scalars['Int']['output']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   *
   */
  storage?: Maybe<AttachmentStorage>;
  /** The URL for the image, if present. */
  url?: Maybe<Scalars['String']['output']>;
  /** The width of the image, if present */
  width?: Maybe<Scalars['Int']['output']>;
};

/** An attached image with standardized derivatives. */
export type ImageAttachment = HasAttachmentStorage & ImageIdentification & {
  __typename?: 'ImageAttachment';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
  /** A hero-sized mapping for derivative formats */
  hero: ImageSize;
  /** A large-sized mapping for derivative formats */
  large: ImageSize;
  /** A medium-sized mapping for derivative formats */
  medium: ImageSize;
  /** Configurable metadata for the image. */
  metadata?: Maybe<ImageMetadata>;
  /** The original source for the image */
  original: ImageOriginal;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
  /** A small-sized mapping for derivative formats */
  small: ImageSize;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   *
   */
  storage?: Maybe<AttachmentStorage>;
  /** A thumb-sized mapping for derivative formats */
  thumb: ImageSize;
};

/** A derivative of the image with a specific size and format. */
export type ImageDerivative = Image & ImageIdentification & {
  __typename?: 'ImageDerivative';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the image, if present */
  contentType?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use width and height directly. */
  dimensions?: Maybe<Array<Scalars['Int']['output']>>;
  /** The format of this derivative */
  format: ImageDerivativeFormat;
  /** The height of the image, if present */
  height?: Maybe<Scalars['Int']['output']>;
  /** The maximum height this size can occupy */
  maxHeight?: Maybe<Scalars['Int']['output']>;
  /** The maximum width this size can occupy */
  maxWidth?: Maybe<Scalars['Int']['output']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
  /** The size of this derivative */
  size: ImageDerivativeSize;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   *
   */
  storage?: Maybe<AttachmentStorage>;
  /** The URL for the image, if present. */
  url?: Maybe<Scalars['String']['output']>;
  /** The width of the image, if present */
  width?: Maybe<Scalars['Int']['output']>;
};

/** The format of a specific image derivative. */
export type ImageDerivativeFormat =
  /**
   * A Portable Network Graphics-formatted file, for legacy support on most all browsers.
   *
   */
  | 'PNG'
  /**
   * A more efficiently compressed image supported by most browsers worldwide.
   *
   */
  | 'WEBP'
  | '%future added value';

/** The size of a specific image derivative. */
export type ImageDerivativeSize =
  /** A hero-sized image, constrained to 2880px wide with no height limit. */
  | 'HERO'
  /** A large-sized image, constrained to 750px wide by 750px high. */
  | 'LARGE'
  /** A medium-sized image, constrained to 500px wide by 500px high. */
  | 'MEDIUM'
  /** A logo intended to be used when the site title is hidden, constrained to 80px high with no width limit. */
  | 'SANS_TEXT'
  /** A small-sized image, constrained to 250px wide by 250px high. */
  | 'SMALL'
  /** A thumb-sized image, constrained to 100px wide by 100px high. */
  | 'THUMB'
  /** A logo intended to be used when the site title is visible, constrained to 80px wide by 80px high. */
  | 'WITH_TEXT'
  | '%future added value';

/**
 * An interface for various component types of an image attachment
 * that allow it to be identified in name and purpose.
 *
 */
export type ImageIdentification = {
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
};

/** Shared metadata for image attachments */
export type ImageMetadata = {
  __typename?: 'ImageMetadata';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
};

/** Shared metadata for updating image attachments */
export type ImageMetadataInput = {
  /** Alt text for accessible images */
  alt?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The original source for the image. While derivatives are processing, it could be useful
 * for a temporary preview in the admin section, or for troubleshooting.
 *
 * As this is the raw image, it is not optimized for display in the frontend and is best
 * used only as a fallback.
 *
 */
export type ImageOriginal = HasAttachmentStorage & Image & ImageIdentification & {
  __typename?: 'ImageOriginal';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the image, if present */
  contentType?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use width and height directly. */
  dimensions?: Maybe<Array<Scalars['Int']['output']>>;
  /** The height of the image, if present */
  height?: Maybe<Scalars['Int']['output']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   *
   */
  storage?: Maybe<AttachmentStorage>;
  /** The URL for the image, if present. */
  url?: Maybe<Scalars['String']['output']>;
  /** The width of the image, if present */
  width?: Maybe<Scalars['Int']['output']>;
};

/**
 * Image attachments on entities fulfill different purposes. This can
 * be used to distinguish them at the `ImageAttachment` level.
 *
 */
export type ImagePurpose =
  /** A hero image. */
  | 'HERO_IMAGE'
  /** A logo (on a Community). */
  | 'LOGO'
  /** A fallback for otherwise-unspecified images. */
  | 'OTHER'
  /** The logo for the site. */
  | 'SITE_LOGO'
  /** A thumbnail that appears next to the entity in lists, grids, etc. */
  | 'THUMBNAIL'
  | '%future added value';

/**
 * This describes a specific derivative style
 * for an attachment, e.g. small, medium, thumb.
 *
 * It is further broken down into the various formats
 * the WDP generates, presently WEBP and PNG.
 *
 */
export type ImageSize = ImageIdentification & {
  __typename?: 'ImageSize';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
  /** The (maximum) height for this size. */
  height?: Maybe<Scalars['Int']['output']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /** A png-formatted image derivative for this particular size. */
  png: ImageDerivative;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
  size: ImageDerivativeSize;
  /** A webp-formatted image derivative for this particular size. */
  webp: ImageDerivative;
  /** The (maximum) width for this size. */
  width?: Maybe<Scalars['Int']['output']>;
};

/**
 * Require that the `path` must include or be one of the strings provided in `value`.
 *
 * The actual value of `path` may be an array (multiselect) or string (select).
 *
 */
export type InAnyOperatorInput = {
  path: Scalars['String']['input'];
  value: Array<Scalars['String']['input']>;
};

/** Configuration settings for the specific institution featured on this installation. */
export type InstitutionSettings = {
  __typename?: 'InstitutionSettings';
  /** The name of the institution. */
  name: Scalars['String']['output'];
};

/** An object for updating the site's configuration */
export type InstitutionSettingsInput = {
  /** The name of the institution. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IntegerProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'IntegerProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  defaultInteger?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  integerValue?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** An item that belongs to a collection */
export type Item = Accessible & Attachable & ChildEntity & Contributable & Entity & ExposesPermissions & HasDoi & HasDefaultTimestamps & HasEntityAnalytics & HasEntityBreadcrumbs & HasIssn & HasSchemaProperties & Node & ReferencesEntityVisibility & ReferencesGlobalEntityDates & SchemaInstance & Searchable & Sluggable & {
  __typename?: 'Item';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  accessGrants: AnyCollectionAccessGrantConnection;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /**
   * Directly fetch a defined named ancestor by its name. It can be null,
   * either because an invalid name was provided, the schema hierarchy is
   * incomplete, or the association itself is optional.
   *
   */
  ancestorByName?: Maybe<AnyEntity>;
  /**
   * Look up an ancestor for this entity that implements a specific type. It ascends from this entity,
   * so it will first check the parent, then the grandparent, and so on.
   *
   */
  ancestorOfType?: Maybe<AnyEntity>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  assetDownloads: AnalyticsEventCountSummary;
  assetDownloadsByRegion: AnalyticsRegionCountSummary;
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** @deprecated Use Item.items */
  children: ItemConnection;
  collection: Collection;
  community: Community;
  contributions: ItemContributionConnection;
  /** Contributors to this element */
  contributors: AnyContributorConnection;
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Whether the entity is _currently_ hidden, based on the server's time zone.
   *
   */
  currentlyHidden: Scalars['Boolean']['output'];
  /**
   * Whether the entity is _currently_ visible, based on the server's time zone.
   *
   */
  currentlyVisible: Scalars['Boolean']['output'];
  /**
   * Search and retrieve *all* descendants of this `Entity`, regardless of type.
   *
   */
  descendants: EntityDescendantConnection;
  /**
   * The Digital Object Identifier for this entity. See https://doi.org
   *
   */
  doi?: Maybe<Scalars['String']['output']>;
  entityViews: AnalyticsEventCountSummary;
  entityViewsByRegion: AnalyticsRegionCountSummary;
  /** Retrieve the first matching item beneath this item. */
  firstItem?: Maybe<Item>;
  /** Whether this item has any child items */
  hasItems: Scalars['Boolean']['output'];
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /**
   * Whether the entity's visibility is set to `HIDDEN`
   *
   */
  hidden: Scalars['Boolean']['output'];
  /**
   * Specify a time to check to see if the entity will be hidden.
   *
   */
  hiddenAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** A machine-readable identifier for the entity. Not presently used, but will be necessary for synchronizing with upstream providers. */
  identifier: Scalars['String']['output'];
  inCommunityOrdering?: Maybe<OrderingEntry>;
  /**
   * The initial ordering to display for this entity.
   *
   */
  initialOrdering?: Maybe<Ordering>;
  /**
   * The International Standard Serial Number for this entity. See https://issn.org
   *
   */
  issn?: Maybe<Scalars['String']['output']>;
  /** Retrieve the items beneath this item */
  items: ItemConnection;
  /**
   * Access layouts for this entity.
   *
   */
  layouts: EntityLayouts;
  leaf: Scalars['Boolean']['output'];
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /**
   * Fetch a list of named ancestors for this entity. This list is deterministically sorted
   * to retrieve the "closest" ancestors first, ascending upwards in the hierarchy from there.
   *
   * **Note**: Like breadcrumbs, this association is intentionally not paginated for ease of use,
   * because in practice a schema should not have many associations.
   *
   */
  namedAncestors: Array<NamedAncestor>;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /**
   * Retrieve a connection of orderings for the parent object.
   *
   */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  parent?: Maybe<ItemParent>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The date this entity was published */
  published: VariablePrecisionDate;
  /** Retrieve linked items of the same schema type */
  relatedItems: ItemConnection;
  root: Scalars['Boolean']['output'];
  schemaDefinition: SchemaDefinition;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /**
   * Read a single schema property by its full path.
   *
   */
  schemaProperty?: Maybe<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  slug: Scalars['Slug']['output'];
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']['output']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String']['output'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Access grants for specific users */
  userAccessGrants: UserCollectionAccessGrantConnection;
  /** Not presently used */
  userGroupAccessGrants: UserGroupCollectionAccessGrantConnection;
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /**
   * Whether the entity's visibility is set to `VISIBLE`.
   *
   */
  visible: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * Specify a time to check to see if the entity will be visible.
   *
   */
  visibleAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};


/** An item that belongs to a collection */
export type ItemAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** An item that belongs to a collection */
export type ItemAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/** An item that belongs to a collection */
export type ItemAncestorByNameArgs = {
  name: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemAncestorOfTypeArgs = {
  schema: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemAnnouncementArgs = {
  slug: Scalars['Slug']['input'];
};


/** An item that belongs to a collection */
export type ItemAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AnnouncementOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemAssetDownloadsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** An item that belongs to a collection */
export type ItemAssetDownloadsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An item that belongs to a collection */
export type ItemAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<AssetKindFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemAssignedUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContextualPermissionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemAvailableEntitiesForArgs = {
  fullPath: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<ContributorFilterKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributorOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};


/** An item that belongs to a collection */
export type ItemDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  order?: EntityDescendantOrder;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
  scope?: InputMaybe<EntityDescendantScopeFilter>;
};


/** An item that belongs to a collection */
export type ItemEntityViewsArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  precision?: InputMaybe<AnalyticsPrecision>;
};


/** An item that belongs to a collection */
export type ItemEntityViewsByRegionArgs = {
  dateFilter?: InputMaybe<DateFilterInput>;
  usOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An item that belongs to a collection */
export type ItemFirstItemArgs = {
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** An item that belongs to a collection */
export type ItemHiddenAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


/** An item that belongs to a collection */
export type ItemInCommunityOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<SubtreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** An item that belongs to a collection */
export type ItemLinkTargetCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<LinkTargetCandidateFilter>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/** An item that belongs to a collection */
export type ItemLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemOrderingArgs = {
  identifier: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemOrderingForSchemaArgs = {
  slug: Scalars['Slug']['input'];
};


/** An item that belongs to a collection */
export type ItemOrderingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<OrderingAvailabilityFilter>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderingOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<OrderingVisibilityFilter>;
};


/** An item that belongs to a collection */
export type ItemPageArgs = {
  slug: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemRelatedItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemSchemaPropertyArgs = {
  fullPath: Scalars['String']['input'];
};


/** An item that belongs to a collection */
export type ItemSearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};


/** An item that belongs to a collection */
export type ItemUserAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemUserGroupAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An item that belongs to a collection */
export type ItemVisibleAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** The connection type for Item. */
export type ItemConnection = Paginated & {
  __typename?: 'ItemConnection';
  /** A list of edges. */
  edges: Array<ItemEdge>;
  /** A list of nodes. */
  nodes: Array<Item>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A contribution to an item */
export type ItemContribution = Contribution & Node & Sluggable & {
  __typename?: 'ItemContribution';
  /** A potentially-overridden value from person contributors */
  affiliation?: Maybe<Scalars['String']['output']>;
  contributor: AnyContributor;
  contributorKind: ContributorKind;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** A potentially-overridden display name value for all contributor types */
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  item: Item;
  /** A potentially-overridden value from organization contributors */
  location?: Maybe<Scalars['String']['output']>;
  metadata: ContributionMetadata;
  /** An arbitrary text value describing the role the contributor had */
  role?: Maybe<Scalars['String']['output']>;
  slug: Scalars['Slug']['output'];
  /** A potentially-overridden value from person contributors */
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for ItemContribution. */
export type ItemContributionConnection = Paginated & {
  __typename?: 'ItemContributionConnection';
  /** A list of edges. */
  edges: Array<ItemContributionEdge>;
  /** A list of nodes. */
  nodes: Array<ItemContribution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ItemContributionEdge = {
  __typename?: 'ItemContributionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ItemContribution;
};

/** An edge in a connection. */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Item;
};

export type ItemParent = Collection | Item | { __typename?: "%other" };

/**
 * Entities within the system have layouts associated with their schema,
 * that can eventually be overridden for more custom approaches.
 *
 * This interface defines the *definition* for one such layout, while any
 * given entity will also have its own LayoutInstance.
 *
 */
export type LayoutDefinition = {
  layoutKind: LayoutKind;
};

/**
 * An interface describing an instance type that can be rendered for a given entity.
 *
 */
export type LayoutInstance = {
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
};

/**
 * The various kinds of `Layout`s in the system.
 *
 */
export type LayoutKind =
  /**
   * The "hero" layout for an Entity.
   *
   * It takes an associated `HERO` template.
   *
   */
  | 'HERO'
  /**
   * A layout describing how an entity should look when it is being rendered.
   *
   */
  | 'LIST_ITEM'
  /**
   * The "main" layout for the landing page of an entity.
   *
   * It is where most of the detail on an entity should go.
   *
   */
  | 'MAIN'
  /**
   * A layout for controlling how metadata should render.
   *
   */
  | 'METADATA'
  /**
   * A layout describing how an entity should be navigated.
   *
   */
  | 'NAVIGATION'
  /**
   * A shared layout for certain supplementary routes like contributors and metrics.
   *
   */
  | 'SUPPLEMENTARY'
  | '%future added value';

/** Autogenerated input type of LinkEntity */
export type LinkEntityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The 'type' of link */
  operator: EntityLinkOperator;
  /** The ID for the source entity */
  sourceId: Scalars['ID']['input'];
  /** The ID for the target entity */
  targetId: Scalars['ID']['input'];
};

/** Autogenerated return type of LinkEntity. */
export type LinkEntityPayload = StandardMutationPayload & {
  __typename?: 'LinkEntityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  /** The created or updated link, if applicable */
  link?: Maybe<EntityLink>;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type LinkListBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type LinkListSelectionMode =
  /**
   * Render links from a dynamic list, determined at query time.
   *
   */
  | 'DYNAMIC'
  /**
   * Render links from a manual list set on each individual entity. See `manualListName` for how this works.
   *
   */
  | 'MANUAL'
  | '%future added value';

export type LinkListTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'LinkListTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<LinkListBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * When `selectionMode` is set to `DYNAMIC`, this uses the same basic structure
   * as schemas to define a dynamic ordering that is resolved at runtime and based
   * on the `selectionSource`.
   *
   */
  dynamicOrderingDefinition?: Maybe<OrderingDefinition>;
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * When `selectionMode` is set to `MANUAL`, the purpose of this property
   * is to specify a name under which all the manual selections (per entity)
   * will be stored. This allows a layout to have multiple templates of the
   * same type using different lists, that will persist across rearrangements
   * of the layout _without_ losing connections between entities.
   *
   */
  manualListName?: Maybe<Scalars['SchemaComponent']['output']>;
  seeAllButtonLabel?: Maybe<Scalars['String']['output']>;
  /**
   * Regardless of `selectionMode`, this limit will be applied on whatever resulting
   * list of entities are produced, so that only up to that amount of entities are
   * rendered in the template proper.
   *
   */
  selectionLimit?: Maybe<Scalars['Int']['output']>;
  selectionMode?: Maybe<LinkListSelectionMode>;
  /**
   * When selecting entities based on `selectionMode`, this property determines
   * which entity (relevant to the rendering entity) should be used for lookups.
   *
   * By default, it is `self`, which means the rendering entity itself.
   *
   * It can also support things like `ancestor.journal`, `ancestor.issue`, etc.,
   * in order to render a list of values in its parent.
   *
   */
  selectionSource?: Maybe<Scalars['TemplateSelectionSource']['output']>;
  selectionSourceAncestorName?: Maybe<Scalars['SchemaComponent']['output']>;
  /**
   * An enum representing what mode `selectionSource` is in. Not directly set,
   * it is used internally for lookups.
   *
   */
  selectionSourceMode?: Maybe<SelectionSourceMode>;
  showEntityContext?: Maybe<Scalars['Boolean']['output']>;
  showSeeAllButton?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Slot definitions for this template.
   *
   */
  slots: LinkListTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The variant rendering mode to use for this template. Affects presentation.
   *
   */
  variant?: Maybe<LinkListVariant>;
};

/**
 * Slot definitions for the associated template.
 *
 */
export type LinkListTemplateDefinitionSlots = {
  __typename?: 'LinkListTemplateDefinitionSlots';
  header?: Maybe<TemplateSlotInlineDefinition>;
  headerAside?: Maybe<TemplateSlotInlineDefinition>;
  metadata?: Maybe<TemplateSlotInlineDefinition>;
  subtitle?: Maybe<TemplateSlotInlineDefinition>;
};

export type LinkListTemplateInstance = Node & Renderable & Sluggable & TemplateHasEntityList & TemplateInstance & {
  __typename?: 'LinkListTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: LinkListTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  /**
   * The list of entities to render as part of this template's content.
   *
   */
  entityList: TemplateEntityList;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: LinkListTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type LinkListTemplateInstanceSlots = {
  __typename?: 'LinkListTemplateInstanceSlots';
  header?: Maybe<TemplateSlotInlineInstance>;
  headerAside?: Maybe<TemplateSlotInlineInstance>;
  metadata?: Maybe<TemplateSlotInlineInstance>;
  subtitle?: Maybe<TemplateSlotInlineInstance>;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type LinkListVariant =
  /**
   * A card list of entities.
   *
   */
  | 'CARDS'
  /**
   * A compact list of entities.
   *
   */
  | 'COMPACT'
  /**
   * A grid of entities
   *
   */
  | 'GRID'
  /**
   * A horizontal list of entities with promotional header.
   *
   */
  | 'PROMOS'
  /**
   * A vertical, summarized list of entities.
   *
   */
  | 'SUMMARY'
  | '%future added value';

/** A candidate for a link target, scoped to a parent source */
export type LinkTargetCandidate = Node & {
  __typename?: 'LinkTargetCandidate';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** How deeply nested the candidate entity is */
  depth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  kind: LinkTargetCandidateKind;
  /** The actual target */
  target: AnyLinkTarget;
  /** The targetID to provide to linkEntity */
  targetId: Scalars['ID']['output'];
  /** The target entity's title */
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for LinkTargetCandidate. */
export type LinkTargetCandidateConnection = Paginated & {
  __typename?: 'LinkTargetCandidateConnection';
  /** A list of edges. */
  edges: Array<LinkTargetCandidateEdge>;
  /** A list of nodes. */
  nodes: Array<LinkTargetCandidate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LinkTargetCandidateEdge = {
  __typename?: 'LinkTargetCandidateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LinkTargetCandidate;
};

/** Filter the available candidates for a link target */
export type LinkTargetCandidateFilter =
  /** Show all possible link target candidate types */
  | 'ALL'
  /** Limit to collection candidates */
  | 'COLLECTION'
  /** Limit to item candidates */
  | 'ITEM'
  | '%future added value';

/** The kind of link target candidate */
export type LinkTargetCandidateKind =
  | 'COLLECTION'
  | 'ITEM'
  | '%future added value';

export type ListItemLayoutDefinition = LayoutDefinition & Node & Sluggable & {
  __typename?: 'ListItemLayoutDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<ListItemTemplateDefinition>;
  /**
   * The ordered template definitions available for this layout.
   *
   */
  templates: Array<AnyListItemTemplateDefinition>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ListItemLayoutInstance = LayoutInstance & Node & Renderable & Sluggable & {
  __typename?: 'ListItemLayoutInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * The layout definition for this type.
   *
   */
  layoutDefinition: ListItemLayoutDefinition;
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<ListItemTemplateInstance>;
  /**
   * The ordered template instances available for this layout.
   *
   */
  templates: Array<AnyListItemTemplateInstance>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ListItemTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'ListItemTemplateDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * Slot definitions for this template.
   *
   */
  slots: ListItemTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type ListItemTemplateDefinitionSlots = {
  __typename?: 'ListItemTemplateDefinitionSlots';
  contextA?: Maybe<TemplateSlotInlineDefinition>;
  contextB?: Maybe<TemplateSlotInlineDefinition>;
  contextC?: Maybe<TemplateSlotInlineDefinition>;
  description?: Maybe<TemplateSlotBlockDefinition>;
  header?: Maybe<TemplateSlotInlineDefinition>;
  metaA?: Maybe<TemplateSlotInlineDefinition>;
  metaB?: Maybe<TemplateSlotInlineDefinition>;
  subheader?: Maybe<TemplateSlotInlineDefinition>;
};

export type ListItemTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'ListItemTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: ListItemTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: ListItemTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type ListItemTemplateInstanceSlots = {
  __typename?: 'ListItemTemplateInstanceSlots';
  contextA?: Maybe<TemplateSlotInlineInstance>;
  contextB?: Maybe<TemplateSlotInlineInstance>;
  contextC?: Maybe<TemplateSlotInlineInstance>;
  description?: Maybe<TemplateSlotBlockInstance>;
  header?: Maybe<TemplateSlotInlineInstance>;
  metaA?: Maybe<TemplateSlotInlineInstance>;
  metaB?: Maybe<TemplateSlotInlineInstance>;
  subheader?: Maybe<TemplateSlotInlineInstance>;
};

export type MainLayoutDefinition = LayoutDefinition & Node & Sluggable & {
  __typename?: 'MainLayoutDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * The ordered template definitions available for this layout.
   *
   */
  templates: Array<AnyMainTemplateDefinition>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type MainLayoutInstance = LayoutInstance & Node & Renderable & Sluggable & {
  __typename?: 'MainLayoutInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * The layout definition for this type.
   *
   */
  layoutDefinition: MainLayoutDefinition;
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * The ordered template instances available for this layout.
   *
   */
  templates: Array<AnyMainTemplateInstance>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type MarkdownProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'MarkdownProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  content?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * Use full-text search on `path` to match `value`.
 *
 * As with top-level query searches, basic quoting and similar features are supported. See
 * [websearch_to_tsquery](https://www.postgresql.org/docs/13/textsearch-controls.html) for
 * more information.
 *
 */
export type MatchesOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type MetadataBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

export type MetadataLayoutDefinition = LayoutDefinition & Node & Sluggable & {
  __typename?: 'MetadataLayoutDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<MetadataTemplateDefinition>;
  /**
   * The ordered template definitions available for this layout.
   *
   */
  templates: Array<AnyMetadataTemplateDefinition>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type MetadataLayoutInstance = LayoutInstance & Node & Renderable & Sluggable & {
  __typename?: 'MetadataLayoutInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * The layout definition for this type.
   *
   */
  layoutDefinition: MetadataLayoutDefinition;
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<MetadataTemplateInstance>;
  /**
   * The ordered template instances available for this layout.
   *
   */
  templates: Array<AnyMetadataTemplateInstance>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type MetadataTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'MetadataTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<MetadataBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * Slot definitions for this template.
   *
   */
  slots: MetadataTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type MetadataTemplateDefinitionSlots = {
  __typename?: 'MetadataTemplateDefinitionSlots';
  header?: Maybe<TemplateSlotInlineDefinition>;
};

export type MetadataTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'MetadataTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: MetadataTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: MetadataTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type MetadataTemplateInstanceSlots = {
  __typename?: 'MetadataTemplateInstanceSlots';
  header?: Maybe<TemplateSlotInlineInstance>;
};

export type MultiselectProperty = OptionableProperty & ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'MultiselectProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  defaultSelections?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  options: Array<SelectOption>;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  selections?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type Mutation = {
  __typename?: 'Mutation';
  /** Change a schema version for an entity. */
  alterSchemaVersion?: Maybe<AlterSchemaVersionPayload>;
  applySchemaProperties?: Maybe<ApplySchemaPropertiesPayload>;
  /**
   * Clear any previously manually-set initial orderings for the entity.
   *
   * This mutation is safe to call if none have been set previously,
   * it will just be a no-op in that case.
   *
   */
  clearInitialOrdering?: Maybe<ClearInitialOrderingPayload>;
  /**
   * Destroy a single `ControlledVocabulary` record.
   *
   */
  controlledVocabularyDestroy?: Maybe<ControlledVocabularyDestroyPayload>;
  /**
   * Update a single `ControlledVocabularySource`'s provider.
   *
   */
  controlledVocabularySourceUpdate?: Maybe<ControlledVocabularySourceUpdatePayload>;
  /**
   * Upsert a controlled vocabulary based on definition.
   *
   */
  controlledVocabularyUpsert?: Maybe<ControlledVocabularyUpsertPayload>;
  /**
   * Create an announcement on an entity.
   *
   */
  createAnnouncement?: Maybe<CreateAnnouncementPayload>;
  /**
   * Associate an uploaded asset (already present in the Tus cache store) with an entity.
   *
   */
  createAsset?: Maybe<CreateAssetPayload>;
  createCollection?: Maybe<CreateCollectionPayload>;
  /** Create a community */
  createCommunity?: Maybe<CreateCommunityPayload>;
  /** Create an item */
  createItem?: Maybe<CreateItemPayload>;
  /** Create an ordering for an entity */
  createOrdering?: Maybe<CreateOrderingPayload>;
  /** Create an organization contributor */
  createOrganizationContributor?: Maybe<CreateOrganizationContributorPayload>;
  /**
   * Create a page on an entity.
   *
   */
  createPage?: Maybe<CreatePagePayload>;
  /** Create a contributor */
  createPersonContributor?: Maybe<CreatePersonContributorPayload>;
  /**
   * Create a global role, with a set of permissions, that can be used to grant access to various parts of the hierarchy
   * in a granular fashion.
   *
   */
  createRole?: Maybe<CreateRolePayload>;
  /**
   * Destroy a announcement by ID.
   *
   */
  destroyAnnouncement?: Maybe<DestroyAnnouncementPayload>;
  /**
   * Destroy an asset by ID.
   *
   */
  destroyAsset?: Maybe<DestroyAssetPayload>;
  /**
   * Destroy a collection by ID.
   *
   */
  destroyCollection?: Maybe<DestroyCollectionPayload>;
  /**
   * Destroy a community by ID.
   *
   */
  destroyCommunity?: Maybe<DestroyCommunityPayload>;
  /**
   * Destroy a Contribution by ID.
   *
   */
  destroyContribution?: Maybe<DestroyContributionPayload>;
  /**
   * Destroy a contributor by ID.
   *
   */
  destroyContributor?: Maybe<DestroyContributorPayload>;
  /**
   * Destroy an EntityLink by ID.
   *
   */
  destroyEntityLink?: Maybe<DestroyEntityLinkPayload>;
  /**
   * Destroy an item by ID.
   *
   */
  destroyItem?: Maybe<DestroyItemPayload>;
  /**
   * Destroy (or disable a schema-inherited) ordering.
   *
   */
  destroyOrdering?: Maybe<DestroyOrderingPayload>;
  /**
   * Destroy a page by ID.
   *
   */
  destroyPage?: Maybe<DestroyPagePayload>;
  /** Grant access to a specific hierarchical entity */
  grantAccess?: Maybe<GrantAccessPayload>;
  /** Link two entities together */
  linkEntity?: Maybe<LinkEntityPayload>;
  /**
   * A polymorphic mutation to reassign an entity to another point in the hierarchy.
   *
   * It performs validations to make sure that the parent entity can accept the child.
   *
   */
  reparentEntity?: Maybe<ReparentEntityPayload>;
  /**
   * Reset an ordering to "factory" settings. For schema-inherited orderings,
   * this will reload its definition from the schema definition. For custom
   * orderings, this will load minimal defaults.
   *
   */
  resetOrdering?: Maybe<ResetOrderingPayload>;
  /** Revoke access from a specific hierarchical entity */
  revokeAccess?: Maybe<RevokeAccessPayload>;
  /**
   * Specify the initial ordering for a specific entity, rather than falling back
   * to the default derivation.
   *
   */
  selectInitialOrdering?: Maybe<SelectInitialOrderingPayload>;
  /**
   * Update an announcement by its ID.
   *
   */
  updateAnnouncement?: Maybe<UpdateAnnouncementPayload>;
  /**
   * Update an asset by ID.
   *
   */
  updateAsset?: Maybe<UpdateAssetPayload>;
  /**
   * Update an asset's attachment by ID.
   *
   * This mutation is for updating **only** an asset's attachment,
   * as opposed to the rest of its attributes (handled in `updateAsset`).
   *
   */
  updateAssetAttachment?: Maybe<UpdateAssetAttachmentPayload>;
  /** Update a collection */
  updateCollection?: Maybe<UpdateCollectionPayload>;
  /** Update a community */
  updateCommunity?: Maybe<UpdateCommunityPayload>;
  /**
   * Update a Contribution by ID.
   *
   */
  updateContribution?: Maybe<UpdateContributionPayload>;
  /**
   * Update the global configuration for this site.
   *
   */
  updateGlobalConfiguration?: Maybe<UpdateGlobalConfigurationPayload>;
  /** Update an item */
  updateItem?: Maybe<UpdateItemPayload>;
  /** Update an ordering by ID */
  updateOrdering?: Maybe<UpdateOrderingPayload>;
  /** Update an organization contributor */
  updateOrganizationContributor?: Maybe<UpdateOrganizationContributorPayload>;
  /**
   * Update a page.
   *
   */
  updatePage?: Maybe<UpdatePagePayload>;
  /** Update a person contributor */
  updatePersonContributor?: Maybe<UpdatePersonContributorPayload>;
  /**
   * Update the name or permissions for a given role.
   *
   */
  updateRole?: Maybe<UpdateRolePayload>;
  /**
   * Update a user.
   *
   */
  updateUser?: Maybe<UpdateUserPayload>;
  /**
   * Update the current viewer (i.e. you).
   *
   */
  updateViewerSettings?: Maybe<UpdateViewerSettingsPayload>;
  /**
   * Upsert a Contribution by contributable & contributor ID. It will override any
   * existing contributions for the same contributor on the same entity.
   *
   */
  upsertContribution?: Maybe<UpsertContributionPayload>;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationAlterSchemaVersionArgs = {
  input: AlterSchemaVersionInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationApplySchemaPropertiesArgs = {
  input: ApplySchemaPropertiesInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationClearInitialOrderingArgs = {
  input: ClearInitialOrderingInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationControlledVocabularyDestroyArgs = {
  input: ControlledVocabularyDestroyInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationControlledVocabularySourceUpdateArgs = {
  input: ControlledVocabularySourceUpdateInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationControlledVocabularyUpsertArgs = {
  input: ControlledVocabularyUpsertInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateAnnouncementArgs = {
  input: CreateAnnouncementInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateOrderingArgs = {
  input: CreateOrderingInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateOrganizationContributorArgs = {
  input: CreateOrganizationContributorInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreatePageArgs = {
  input: CreatePageInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreatePersonContributorArgs = {
  input: CreatePersonContributorInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyAnnouncementArgs = {
  input: DestroyAnnouncementInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyAssetArgs = {
  input: DestroyAssetInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyCollectionArgs = {
  input: DestroyCollectionInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyCommunityArgs = {
  input: DestroyCommunityInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyContributionArgs = {
  input: DestroyContributionInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyContributorArgs = {
  input: DestroyContributorInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyEntityLinkArgs = {
  input: DestroyEntityLinkInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyItemArgs = {
  input: DestroyItemInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyOrderingArgs = {
  input: DestroyOrderingInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationDestroyPageArgs = {
  input: DestroyPageInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationGrantAccessArgs = {
  input: GrantAccessInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationLinkEntityArgs = {
  input: LinkEntityInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationReparentEntityArgs = {
  input: ReparentEntityInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationResetOrderingArgs = {
  input: ResetOrderingInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationRevokeAccessArgs = {
  input: RevokeAccessInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationSelectInitialOrderingArgs = {
  input: SelectInitialOrderingInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateAnnouncementArgs = {
  input: UpdateAnnouncementInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateAssetAttachmentArgs = {
  input: UpdateAssetAttachmentInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateCommunityArgs = {
  input: UpdateCommunityInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateContributionArgs = {
  input: UpdateContributionInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateGlobalConfigurationArgs = {
  input: UpdateGlobalConfigurationInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateOrderingArgs = {
  input: UpdateOrderingInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateOrganizationContributorArgs = {
  input: UpdateOrganizationContributorInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdatePersonContributorArgs = {
  input: UpdatePersonContributorInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpdateViewerSettingsArgs = {
  input: UpdateViewerSettingsInput;
};


/**
 * The entry point for making changes to the data within the WDP API.
 *
 */
export type MutationUpsertContributionArgs = {
  input: UpsertContributionInput;
};

/** An error for a specific attribute in a mutation—intended for use with react-hook-form and similarly shaped structures */
export type MutationAttributeError = {
  __typename?: 'MutationAttributeError';
  /** The accumulated messages for this combination of path and type */
  messages: Array<Scalars['String']['output']>;
  /** The attribute that should have the error */
  path: Scalars['String']['output'];
  /** A grouping type for the attribute */
  type: Scalars['String']['output'];
};

export type MutationErrorScope =
  | 'ATTRIBUTE'
  | 'GLOBAL'
  | '%future added value';

/** An error that encapsulates the entire mutation input and is not tied to a specific input field. */
export type MutationGlobalError = {
  __typename?: 'MutationGlobalError';
  /** The actual message */
  message: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/**
 * Entity schemas can define named ancestors, which allows UI developers to refer
 * authoritatively to significant relatives in an entity's ancestor. This object
 * represents the connection between an originating entity and its ancestors,
 * should any be defined for the schema.
 *
 */
export type NamedAncestor = {
  __typename?: 'NamedAncestor';
  /** The actual ancestor */
  ancestor: AnyEntity;
  /** The depth of the ancestor in the hierarchy */
  ancestorDepth: Scalars['Int']['output'];
  /** The name of the ancestor. Guaranteed to be unique for this specific entity. */
  name: Scalars['String']['output'];
  /** The relative depth of the originating entity */
  originDepth: Scalars['Int']['output'];
  /**
   * The relative depth from the source entity to its ancestor. In other words, `(origin_depth - ancestor_depth)`.
   * Used for sorting ancestors deterministically.
   *
   */
  relativeDepth: Scalars['Int']['output'];
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type NavigationBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

export type NavigationLayoutDefinition = LayoutDefinition & Node & Sluggable & {
  __typename?: 'NavigationLayoutDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<NavigationTemplateDefinition>;
  /**
   * The ordered template definitions available for this layout.
   *
   */
  templates: Array<AnyNavigationTemplateDefinition>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type NavigationLayoutInstance = LayoutInstance & Node & Renderable & Sluggable & {
  __typename?: 'NavigationLayoutInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * The layout definition for this type.
   *
   */
  layoutDefinition: NavigationLayoutDefinition;
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<NavigationTemplateInstance>;
  /**
   * The ordered template instances available for this layout.
   *
   */
  templates: Array<AnyNavigationTemplateInstance>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type NavigationTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'NavigationTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<NavigationBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * Slot definitions for this template.
   *
   */
  slots: NavigationTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type NavigationTemplateDefinitionSlots = {
  __typename?: 'NavigationTemplateDefinitionSlots';
  entityLabel?: Maybe<TemplateSlotInlineDefinition>;
};

export type NavigationTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'NavigationTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: NavigationTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: NavigationTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type NavigationTemplateInstanceSlots = {
  __typename?: 'NavigationTemplateInstanceSlots';
  entityLabel?: Maybe<TemplateSlotInlineInstance>;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

/** The priority for NULL values when sorting */
export type NullOrderPriority =
  | 'FIRST'
  | 'LAST'
  | '%future added value';

/**
 * Require that `path ≥ value` while enforcing that value is numeric.
 *
 * Note: this will also work for integer paths. Coercion is handled
 * transparently by the API.
 *
 */
export type NumericGteOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

/**
 * Require that `path ≤ value` while enforcing that value is numeric.
 *
 * Note: this will also work for integer paths. Coercion is handled
 * transparently by the API.
 *
 */
export type NumericLteOperatorInput = {
  path: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type OptionableProperty = {
  options: Array<SelectOption>;
};

/**
 * The boolean result of evaluating the left and right predicates. At least one must be true.
 *
 * While this is implemented, it is not likely that the first version of the search
 * UI will utilize it. It is intended for advanced searching.
 *
 */
export type OrOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};

/** Ordering for a specific column */
export type OrderDefinition = {
  __typename?: 'OrderDefinition';
  direction: Direction;
  nulls: NullOrderPriority;
  path: Scalars['String']['output'];
};

/** Ordering for a specific column */
export type OrderDefinitionInput = {
  direction?: InputMaybe<Direction>;
  nulls?: InputMaybe<NullOrderPriority>;
  path: Scalars['String']['input'];
};

/** An ordering that belongs to an entity and arranges its children in a pre-configured way */
export type Ordering = Node & Sluggable & {
  __typename?: 'Ordering';
  children: OrderingEntryConnection;
  /** A constant ordering should be treated as not being able to invert itself. */
  constant: Scalars['Boolean']['output'];
  /** The number of entries currently visible within the ordering */
  count: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Whether the ordering has been disabled—orderings inherited from schemas will be disabled if deleted. */
  disabled: Scalars['Boolean']['output'];
  /** The time the ordering was disabled, if applicable */
  disabledAt?: Maybe<Scalars['ISO8601Date']['output']>;
  /** The entity that owns the ordering */
  entity: AnyEntity;
  filter: OrderingFilterDefinition;
  /** Optional markdown content to render after the children */
  footer?: Maybe<Scalars['String']['output']>;
  /** Optional markdown content to render before the children */
  header?: Maybe<Scalars['String']['output']>;
  /**
   * A hidden ordering represents an ordering that should not be shown in the frontend,
   * when iterating over an entity's available orderings. It does not affect access, as
   * hidden orderings may still serve a functional purpose for their schema.
   *
   */
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** A unique identifier for the ordering within the context of its parent entity. */
  identifier: Scalars['String']['output'];
  /** Whether the ordering was inherited from its entity's schema definition */
  inheritedFromSchema: Scalars['Boolean']['output'];
  /** Whether this ordering serves as the initial ordering for its parent entity */
  initial: Scalars['Boolean']['output'];
  /** An optional, human-readable name for the ordering */
  name?: Maybe<Scalars['String']['output']>;
  order: Array<OrderDefinition>;
  /**
   * For orderings that are `inheritedFromSchema`, this tracks whether or not the
   * entity has been modified from the schema's definition. It is always false
   * for custom, user-created orderings.
   *
   */
  pristine: Scalars['Boolean']['output'];
  /**
   * Configuration for how to render an ordering and its entries.
   *
   */
  render: OrderingRenderDefinition;
  select: OrderingSelectDefinition;
  slug: Scalars['Slug']['output'];
  /**
   * A tree ordering has some special handling to return entities
   * in deterministic order based on their hierarchical position
   * and relation to other entities in the same ordering.
   *
   * This is effectively a shortcut for `Ordering.render.mode === "TREE"`.
   *
   */
  tree: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/** An ordering that belongs to an entity and arranges its children in a pre-configured way */
export type OrderingChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderingEntrySortMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * An ordering's availability refers to it being enabled or disabled.
 *
 */
export type OrderingAvailabilityFilter =
  /** Do not filter orderings by whether they are enabled or disabled. */
  | 'ALL'
  /** Fetch only *disabled* orderings. */
  | 'DISABLED'
  /** Fetch only *enabled* orderings. */
  | 'ENABLED'
  | '%future added value';

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type OrderingBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

/** The connection type for Ordering. */
export type OrderingConnection = Paginated & {
  __typename?: 'OrderingConnection';
  /** A list of edges. */
  edges: Array<OrderingEdge>;
  /** A list of nodes. */
  nodes: Array<Ordering>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * A definition for an ordering (may be dynamic).
 *
 */
export type OrderingDefinition = {
  __typename?: 'OrderingDefinition';
  /** A constant ordering should be treated as not being able to invert itself. */
  constant: Scalars['Boolean']['output'];
  filter: OrderingFilterDefinition;
  /**
   * A hidden ordering represents an ordering that should not be shown in the frontend,
   * when iterating over an entity's available orderings. It does not affect access, as
   * hidden orderings may still serve a functional purpose for their schema.
   *
   */
  hidden: Scalars['Boolean']['output'];
  /** A unique identifier for the ordering within the context of its parent entity. */
  identifier: Scalars['String']['output'];
  /** An optional, human-readable name for the ordering */
  name?: Maybe<Scalars['String']['output']>;
  order: Array<OrderDefinition>;
  /**
   * Configuration for how to render an ordering and its entries.
   *
   */
  render: OrderingRenderDefinition;
  select: OrderingSelectDefinition;
  /**
   * A tree ordering has some special handling to return entities
   * in deterministic order based on their hierarchical position
   * and relation to other entities in the same ordering.
   *
   * This is effectively a shortcut for `Ordering.render.mode === "TREE"`.
   *
   */
  tree: Scalars['Boolean']['output'];
};

export type OrderingDirectSelection =
  | 'CHILDREN'
  | 'DESCENDANTS'
  | 'NONE'
  | '%future added value';

/** An edge in a connection. */
export type OrderingEdge = {
  __typename?: 'OrderingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Ordering;
};

/** An entry within an ordering, it can refer to an entity or an entity link */
export type OrderingEntry = Node & Sluggable & {
  __typename?: 'OrderingEntry';
  /**
   * When the associated `Ordering` is a `TREE`, and the current entry is a leaf, this array can be used
   * to get the associated ancestors within the entry that
   *
   */
  ancestors: Array<OrderingEntry>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The actual element being ordered. At present, this will only be a `Community`, `Collection`, or `Item`,
   * but future implementations of orderings may include other content, such as presentation elements.
   *
   */
  entry: AnyOrderingEntry;
  /**
   * The delegated `slug` from the associated `entry`.
   *
   * This can be null because future entries may not implement it.
   *
   */
  entrySlug?: Maybe<Scalars['Slug']['output']>;
  /**
   * The delegated `title` from the associated `entry`.
   *
   * This can be null because future entries may not implement it.
   *
   */
  entryTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /**
   * The next entry in the current ordering, if one exists. This will be null if this entry is the last.
   *
   */
  nextSibling?: Maybe<OrderingEntry>;
  /** The parent ordering */
  ordering: Ordering;
  /**
   * The 1-based position of this entry.
   *
   */
  position?: Maybe<Scalars['Int']['output']>;
  /**
   * The previous entry in the current ordering, if one exists. This will be null if this entry is the first.
   *
   */
  prevSibling?: Maybe<OrderingEntry>;
  /**
   * A calculation of the depth of an entry in the hierarchy, relative to the ordering's owning entity.
   *
   */
  relativeDepth: Scalars['Int']['output'];
  slug: Scalars['Slug']['output'];
  /**
   * When an ordering's render mode is set to TREE, its entries will have this set.
   * It is a normalized depth based on what other entities were accepted into the ordering.
   *
   */
  treeDepth?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for OrderingEntry. */
export type OrderingEntryConnection = Paginated & {
  __typename?: 'OrderingEntryConnection';
  /** A list of edges. */
  edges: Array<OrderingEntryEdge>;
  /** A list of nodes. */
  nodes: Array<OrderingEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrderingEntryEdge = {
  __typename?: 'OrderingEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderingEntry;
};

/** When fetching entries from an ordering, you can swap between the default or a special 'inverted' mode */
export type OrderingEntrySortMode =
  /** Retrieve the ordering entries as defined by default */
  | 'DEFAULT'
  /** Retrieve the ordering entries in an inverted order, accounting for paths */
  | 'INVERSE'
  | '%future added value';

/**
 * A collection of settings for filtering what appears what entities
 * may populate an ordering. At present, this only supports schemas.
 *
 */
export type OrderingFilterDefinition = {
  __typename?: 'OrderingFilterDefinition';
  /**
   * If set, any child or descendant that matches one of these schemas will
   * be availabel to be included in the ordering.
   *
   */
  schemas: Array<OrderingSchemaFilter>;
};

/**
 * A collection of settings for filtering what appears what entities
 * may populate an ordering. At present, this only supports schemas.
 *
 */
export type OrderingFilterDefinitionInput = {
  /**
   * If set, any child or descendant that matches one of these schemas will
   * be availabel to be included in the ordering.
   *
   */
  schemas?: InputMaybe<Array<OrderingSchemaFilterInput>>;
};

/** An enum used to order `Ordering`s. It uses `DETERMINISTIC` by default to ensure a consistent rendering experience. */
export type OrderingOrder =
  /** Sort orderings by their static position of the ordering, falling back to the name if unset. */
  | 'DETERMINISTIC'
  /** Sort orderings by oldest created date */
  | 'OLDEST'
  /** Sort orderings by newest created date */
  | 'RECENT'
  | '%future added value';

/**
 * This represents a valid path that can be used for orderings.
 *
 */
export type OrderingPath = {
  /** A helpful description of the path */
  description?: Maybe<Scalars['String']['output']>;
  /** A logical grouping for ordering paths */
  grouping: OrderingPathGrouping;
  /** A human-readable label for the path */
  label: Scalars['String']['output'];
  /**
   * Some paths may have a prefix. For instance, schema properties will have the name of the schema.
   *
   */
  labelPrefix?: Maybe<Scalars['String']['output']>;
  /** The exact path that should be provided to mutation inputs. */
  path: Scalars['String']['output'];
  /** The schema property type */
  type: SchemaPropertyType;
};

/** A logical grouping for ordering paths. */
export type OrderingPathGrouping =
  /**
   * Static properties that are directly on an entity.
   *
   */
  | 'ENTITY'
  /**
   * Static properties that are derived from a link.
   *
   */
  | 'LINK'
  /**
   * Paths under this type come from a schema. Not every entity is guaranteed
   * to have one, and in orderings with mixed entities, missing props will be
   * treated as null.
   *
   */
  | 'PROPS'
  /**
   * Static properties that are derived from a schema.
   *
   */
  | 'SCHEMA'
  | '%future added value';

/**
 * Configuration for controlling how an ordering renders itself and its entries.
 *
 */
export type OrderingRenderDefinition = {
  __typename?: 'OrderingRenderDefinition';
  /** How to render entries within */
  mode: OrderingRenderMode;
};

/**
 * Describe how an ordering should render its entries.
 *
 */
export type OrderingRenderDefinitionInput = {
  mode?: InputMaybe<OrderingRenderMode>;
};

/**
 * How entries in an ordering should be rendered.
 *
 */
export type OrderingRenderMode =
  /**
   * The default for most orderings. Every ordering is considered to be on
   * the same level of the hierarchy, and positions are calculated based
   * solely on the paths.
   *
   */
  | 'FLAT'
  /**
   * A special mode for handling orderings that should operate like a tree. In this setting,
   * entries will be calculated first as though they were flat, then analyzed in order to
   * adjust the positioning to account for the entry's ancestors and position relative to
   * other entries in the ordering.
   *
   */
  | 'TREE'
  | '%future added value';

/** This defines a specific schema that an ordering can filter its entries by */
export type OrderingSchemaFilter = {
  __typename?: 'OrderingSchemaFilter';
  /**
   * The identifier within the namespace for the schema.
   *
   */
  identifier: Scalars['String']['output'];
  /**
   * The namespace the schema occupies.
   *
   */
  namespace: Scalars['String']['output'];
  /**
   * An optional version requirement for the associated schema.
   *
   */
  version?: Maybe<Scalars['VersionRequirement']['output']>;
};

/** This defines a specific schema that an ordering can filter its entries by */
export type OrderingSchemaFilterInput = {
  /**
   * The identifier within the namespace for the schema.
   *
   */
  identifier: Scalars['String']['input'];
  /**
   * The namespace the schema occupies.
   *
   */
  namespace: Scalars['String']['input'];
  /**
   * An optional version requirement for this ordering. It supports
   * Ruby's version declaration syntax, so you can provide a value
   * like `">= 1.2"` to match against semantically-versioned schemas.
   *
   */
  version?: InputMaybe<Scalars['VersionRequirement']['input']>;
};

/**
 * Defines how an ordering should select its entries.
 *
 */
export type OrderingSelectDefinition = {
  __typename?: 'OrderingSelectDefinition';
  direct: OrderingDirectSelection;
  links: OrderingSelectLinkDefinition;
};

/**
 * Define how an ordering should select its entries
 *
 */
export type OrderingSelectDefinitionInput = {
  direct?: InputMaybe<OrderingDirectSelection>;
  links?: InputMaybe<OrderingSelectLinkDefinitionInput>;
};

/**
 * Describes how an ordering should select its links.
 *
 */
export type OrderingSelectLinkDefinition = {
  __typename?: 'OrderingSelectLinkDefinition';
  contains: Scalars['Boolean']['output'];
  references: Scalars['Boolean']['output'];
};

/**
 * Describe how an ordering should select its links.
 *
 */
export type OrderingSelectLinkDefinitionInput = {
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  references?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderingTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'OrderingTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<OrderingBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * The identifier for the ordering to derive next/prev siblings from.
   *
   * Refer to `orderingSource` and `selectionSource` for more details.
   *
   */
  orderingIdentifier?: Maybe<Scalars['SchemaComponent']['output']>;
  /**
   * A reference to the entity that contains an ordering identified by `orderingIdentifier`.
   * It operates exactly like `selectionSource`. See that property for more documentation.
   *
   * **Note**: While `self` is allowed here, it only makes sense if the rendering entity
   * is contained in one of its own orderings, which doesn't happen normally. The template
   * will still render, but it likely won't find siblings.
   *
   */
  orderingSource?: Maybe<Scalars['TemplateSelectionSource']['output']>;
  orderingSourceAncestorName?: Maybe<Scalars['SchemaComponent']['output']>;
  orderingSourceMode?: Maybe<SelectionSourceMode>;
  /**
   * What entity to use for detecting the positional prev/next siblings.
   *
   * By default, it is `self`. However, it can be overridden for creating templates that
   * navigate through parent issues, volumes, journals, etc. For instance, an article could
   * create an `<ordering />` template that has the following properties set:
   *
   * * `selectionSource`: `"ancestors.issue"`
   * * `orderingSource`: `"ancestors.journal"`
   * * `orderingIdentifier`: `"issues"`
   *
   * This would use the _journal's_ `issues` ordering to navigate through the article's
   * associated `issues`, and provide a quick way to navigate through varying levels of
   * the upper hierarchy from lower points in the tree.
   *
   */
  selectionSource?: Maybe<Scalars['TemplateSelectionSource']['output']>;
  selectionSourceAncestorName?: Maybe<Scalars['SchemaComponent']['output']>;
  /**
   * An enum representing what mode `selectionSource` is in. Not directly set,
   * it is used internally for lookups.
   *
   */
  selectionSourceMode?: Maybe<SelectionSourceMode>;
  /**
   * Slot definitions for this template.
   *
   */
  slots: OrderingTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type OrderingTemplateDefinitionSlots = {
  __typename?: 'OrderingTemplateDefinitionSlots';
  nextLabel?: Maybe<TemplateSlotInlineDefinition>;
  previousLabel?: Maybe<TemplateSlotInlineDefinition>;
};

export type OrderingTemplateInstance = Node & Renderable & Sluggable & TemplateHasOrderingPair & TemplateInstance & {
  __typename?: 'OrderingTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: OrderingTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Access the prev/next siblings within the template's specified ordering.
   *
   */
  orderingPair: TemplateOrderingPair;
  /**
   * Rendered slots for this template.
   *
   */
  slots: OrderingTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type OrderingTemplateInstanceSlots = {
  __typename?: 'OrderingTemplateInstanceSlots';
  nextLabel?: Maybe<TemplateSlotInlineInstance>;
  previousLabel?: Maybe<TemplateSlotInlineInstance>;
};

export type OrderingVisibilityFilter =
  /** Do not filter orderings by their visibility. */
  | 'ALL'
  /** Fetch only *hidden* orderings. */
  | 'HIDDEN'
  /** Fetch only *visible* orderings. This has no bearing on the ordering's *availability*. */
  | 'VISIBLE'
  | '%future added value';

/** An organization that has made contributions */
export type OrganizationContributor = Contributor & Node & Sluggable & {
  __typename?: 'OrganizationContributor';
  bio?: Maybe<Scalars['String']['output']>;
  /** The total number of collection contributions from this contributor */
  collectionContributionCount: Scalars['Int']['output'];
  collectionContributions: CollectionContributionConnection;
  /** The total number of contributions (item + collection) from this contributor */
  contributionCount: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  /** An optional image associated with the contributor. */
  image: ImageAttachment;
  /** Configurable metadata for the image attachment */
  imageMetadata?: Maybe<ImageMetadata>;
  /** The total number of item contributions from this contributor */
  itemContributionCount: Scalars['Int']['output'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  legalName?: Maybe<Scalars['String']['output']>;
  links: Array<ContributorLink>;
  location?: Maybe<Scalars['String']['output']>;
  /** A display name, independent of the type of contributor */
  name: Scalars['String']['output'];
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  slug: Scalars['Slug']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** An organization that has made contributions */
export type OrganizationContributorCollectionContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** An organization that has made contributions */
export type OrganizationContributorItemContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** A page of arbitrary content for an entity */
export type Page = Node & {
  __typename?: 'Page';
  body: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  entity: AnyEntity;
  /** The hero image for a page */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  id: Scalars['ID']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Page. */
export type PageConnection = Paginated & {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** A list of nodes. */
  nodes: Array<Page>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Determines the direction that page-number based pagination should flow */
export type PageDirection =
  | 'BACKWARDS'
  | 'FORWARDS'
  | '%future added value';

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** The page (if page-based pagination is supported and one was provided, does not introspect a value with cursor-based pagination) */
  page?: Maybe<Scalars['Int']['output']>;
  /** The total number of pages available to the connection (if page-based pagination supported and a page was provided) */
  pageCount?: Maybe<Scalars['Int']['output']>;
  /** The number of edges/nodes per page (if page-based pagination supported and a page was provided) */
  perPage?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** The total number of nodes available to this connection, constrained by applied filters (if any) */
  totalCount: Scalars['Int']['output'];
  /** The total number of nodes available to this connection, independent of any filters */
  totalUnfilteredCount: Scalars['Int']['output'];
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type PageListBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

export type PageListTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'PageListTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<PageListBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * Slot definitions for this template.
   *
   */
  slots: PageListTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type PageListTemplateDefinitionSlots = {
  __typename?: 'PageListTemplateDefinitionSlots';
  header?: Maybe<TemplateSlotInlineDefinition>;
};

export type PageListTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'PageListTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: PageListTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: PageListTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type PageListTemplateInstanceSlots = {
  __typename?: 'PageListTemplateInstanceSlots';
  header?: Maybe<TemplateSlotInlineInstance>;
};

/** Connections can be paginated by cursor or number. */
export type Paginated = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A grant of a specific permission within a specific scope. */
export type PermissionGrant = {
  __typename?: 'PermissionGrant';
  /** Whether this permission has been granted in the current context. */
  allowed: Scalars['Boolean']['output'];
  /** The unqualified, single name for this permission. */
  name: Scalars['String']['output'];
  /** The fully-qualified path for this permission (composed of scope + name). */
  path: Scalars['String']['output'];
  /** The scope (or namespace) for this permission. */
  scope?: Maybe<Scalars['String']['output']>;
};

/** A mapping of permissions specific to a certain scope */
export type PermissionGrid = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

/** A person that has made contributions */
export type PersonContributor = Contributor & Node & Sluggable & {
  __typename?: 'PersonContributor';
  affiliation?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  /** The total number of collection contributions from this contributor */
  collectionContributionCount: Scalars['Int']['output'];
  collectionContributions: CollectionContributionConnection;
  /** The total number of contributions (item + collection) from this contributor */
  contributionCount: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  /** An optional image associated with the contributor. */
  image: ImageAttachment;
  /** Configurable metadata for the image attachment */
  imageMetadata?: Maybe<ImageMetadata>;
  /** The total number of item contributions from this contributor */
  itemContributionCount: Scalars['Int']['output'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  links: Array<ContributorLink>;
  /** A display name, independent of the type of contributor */
  name: Scalars['String']['output'];
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  slug: Scalars['Slug']['output'];
  suffix?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** A person that has made contributions */
export type PersonContributorCollectionContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A person that has made contributions */
export type PersonContributorItemContributionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** When altering a schema version for an entity, there are various strategies that can be used to determine how to handle the provided properties. */
export type PropertyApplicationStrategy =
  /** If set to this value, property values will be validated and applied */
  | 'APPLY'
  /** If set to this value, property values will not be applied, and the entity will likely exist in an invalid state. */
  | 'SKIP'
  | '%future added value';

/**
 * An interface for querying `ControlledVocabulary` records.
 *
 */
export type QueriesControlledVocabulary = {
  controlledVocabularies: ControlledVocabularyConnection;
  /**
   * Retrieve a single `ControlledVocabulary` by slug.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
};


/**
 * An interface for querying `ControlledVocabulary` records.
 *
 */
export type QueriesControlledVocabularyControlledVocabulariesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ControlledVocabularyFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orFilters?: InputMaybe<Array<ControlledVocabularyFilterInput>>;
  order?: InputMaybe<ControlledVocabularyOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * An interface for querying `ControlledVocabulary` records.
 *
 */
export type QueriesControlledVocabularyControlledVocabularyArgs = {
  slug: Scalars['Slug']['input'];
};

/**
 * An interface for querying `ControlledVocabularySource` records.
 *
 */
export type QueriesControlledVocabularySource = {
  /**
   * Retrieve a single `ControlledVocabularySource` by slug.
   *
   */
  controlledVocabularySource?: Maybe<ControlledVocabularySource>;
  controlledVocabularySources: ControlledVocabularySourceConnection;
};


/**
 * An interface for querying `ControlledVocabularySource` records.
 *
 */
export type QueriesControlledVocabularySourceControlledVocabularySourceArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * An interface for querying `ControlledVocabularySource` records.
 *
 */
export type QueriesControlledVocabularySourceControlledVocabularySourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ControlledVocabularySourceFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orFilters?: InputMaybe<Array<ControlledVocabularySourceFilterInput>>;
  order?: InputMaybe<ControlledVocabularySourceOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type Query = QueriesControlledVocabulary & QueriesControlledVocabularySource & Searchable & {
  __typename?: 'Query';
  /** Retrieve all access grants */
  accessGrants: AnyAccessGrantConnection;
  /** Access top-level analytics. */
  analytics: Analytics;
  /** Look up an asset by slug */
  asset?: Maybe<AnyAsset>;
  /** Look up a collection by slug */
  collection?: Maybe<Collection>;
  /** Look up a collection contribution by slug */
  collectionContribution?: Maybe<CollectionContribution>;
  /** List all communities */
  communities: CommunityConnection;
  /** Look up a community by slug */
  community?: Maybe<Community>;
  /** Look up a community by its title */
  communityByTitle?: Maybe<Community>;
  /** Look up a contributor by slug */
  contributor?: Maybe<AnyContributor>;
  /**
   * Look up a contributor `by` a certain `value`.
   *
   */
  contributorLookup?: Maybe<AnyContributor>;
  /** A list of all contributors in the system */
  contributors: AnyContributorConnection;
  controlledVocabularies: ControlledVocabularyConnection;
  /**
   * Retrieve a single `ControlledVocabulary` by slug.
   *
   */
  controlledVocabulary?: Maybe<ControlledVocabulary>;
  /**
   * Retrieve a single `ControlledVocabularySource` by slug.
   *
   */
  controlledVocabularySource?: Maybe<ControlledVocabularySource>;
  controlledVocabularySources: ControlledVocabularySourceConnection;
  /** Fetch the global configuration for this installation */
  globalConfiguration: GlobalConfiguration;
  /** Look up an item by slug */
  item?: Maybe<Item>;
  /** Look up an item contribution by slug */
  itemContribution?: Maybe<ItemContribution>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** A list of ordering paths for creating and updating orderings. */
  orderingPaths: Array<AnyOrderingPath>;
  /** List all roles */
  roles: RoleConnection;
  /** Look up a schema definition by slug */
  schemaDefinition?: Maybe<SchemaDefinition>;
  /** List all schema definitions */
  schemaDefinitions: SchemaDefinitionConnection;
  /** Look up a schema version by slug */
  schemaVersion?: Maybe<SchemaVersion>;
  /** List all options for schema versions */
  schemaVersionOptions: Array<SchemaVersionOption>;
  /** List all schema versions */
  schemaVersions: SchemaVersionConnection;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A helper field that is used to look up various details about the WDP-API ecosystem. */
  systemInfo: SystemInfo;
  /** Look up a user by slug */
  user?: Maybe<User>;
  /** A list of all users in the system */
  users: UserConnection;
  /** The currently authenticated user. AKA: you */
  viewer: User;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<AccessGrantEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<AccessGrantSubjectFilter>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryAssetArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryCollectionArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryCollectionContributionArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryCommunitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryCommunityArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryCommunityByTitleArgs = {
  title: Scalars['String']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryContributorArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryContributorLookupArgs = {
  by: ContributorLookupField;
  order?: SimpleOrder;
  value: Scalars['String']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryContributorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<ContributorFilterKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributorOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryControlledVocabulariesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ControlledVocabularyFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orFilters?: InputMaybe<Array<ControlledVocabularyFilterInput>>;
  order?: InputMaybe<ControlledVocabularyOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryControlledVocabularyArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryControlledVocabularySourceArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryControlledVocabularySourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ControlledVocabularySourceFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orFilters?: InputMaybe<Array<ControlledVocabularySourceFilterInput>>;
  order?: InputMaybe<ControlledVocabularySourceOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryItemArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryItemContributionArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryOrderingPathsArgs = {
  schemas?: InputMaybe<Array<OrderingSchemaFilterInput>>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RoleOrder>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QuerySchemaDefinitionArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QuerySchemaDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QuerySchemaVersionArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QuerySchemaVersionOptionsArgs = {
  kind?: InputMaybe<SchemaKind>;
  namespace?: InputMaybe<Scalars['String']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QuerySchemaVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SchemaVersionOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QuerySearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryUserArgs = {
  slug: Scalars['Slug']['input'];
};


/**
 * The entry point for retrieving data from within the Meru API.
 *
 */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};

/**
 * An entity which can be limited in its visibility, based on some configured attributes.
 *
 */
export type ReferencesEntityVisibility = {
  /**
   * Whether the entity is _currently_ hidden, based on the server's time zone.
   *
   */
  currentlyHidden: Scalars['Boolean']['output'];
  /**
   * Whether the entity is _currently_ visible, based on the server's time zone.
   *
   */
  currentlyVisible: Scalars['Boolean']['output'];
  /**
   * Whether the entity's visibility is set to `HIDDEN`
   *
   */
  hidden: Scalars['Boolean']['output'];
  /**
   * Specify a time to check to see if the entity will be hidden.
   *
   */
  hiddenAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /**
   * Whether the entity's visibility is set to `VISIBLE`.
   *
   */
  visible: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * Specify a time to check to see if the entity will be visible.
   *
   */
  visibleAsOf: Scalars['Boolean']['output'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};


/**
 * An entity which can be limited in its visibility, based on some configured attributes.
 *
 */
export type ReferencesEntityVisibilityHiddenAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


/**
 * An entity which can be limited in its visibility, based on some configured attributes.
 *
 */
export type ReferencesEntityVisibilityVisibleAsOfArgs = {
  time?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/**
 * An interface for retrieving certain shared, common variable-precision dates
 * that are associated with events in the publication, collection, and release
 * of an entity.
 *
 */
export type ReferencesGlobalEntityDates = {
  /** The date this entity was published */
  published: VariablePrecisionDate;
};

/**
 * An interface describing an instance type that can be rendered for a given entity.
 *
 */
export type Renderable = {
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** Autogenerated input type of ReparentEntity */
export type ReparentEntityInput = {
  /**
   * The collection in need of a new parent
   *
   */
  childId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID for the new parent entity. For children of the collection type, this
   * must be a community or another collection. For children of the item type,
   * this must be a collection or another item.
   *
   */
  parentId: Scalars['ID']['input'];
};

/** Autogenerated return type of ReparentEntity. */
export type ReparentEntityPayload = StandardMutationPayload & {
  __typename?: 'ReparentEntityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** If the child was successfully reparented, this field will be populated */
  child?: Maybe<AnyChildEntity>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of ResetOrdering */
export type ResetOrderingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderingId: Scalars['ID']['input'];
};

/** Autogenerated return type of ResetOrdering. */
export type ResetOrderingPayload = StandardMutationPayload & {
  __typename?: 'ResetOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  ordering?: Maybe<Ordering>;
};

/** Autogenerated input type of RevokeAccess */
export type RevokeAccessInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['ID']['input'];
  roleId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated return type of RevokeAccess. */
export type RevokeAccessPayload = StandardMutationPayload & {
  __typename?: 'RevokeAccessPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  /** Whether or not access was revoked */
  revoked?: Maybe<Scalars['Boolean']['output']>;
};

/** A named role in the WDP API */
export type Role = ExposesEffectiveAccess & Node & Sluggable & {
  __typename?: 'Role';
  /** The access control list for this specific role */
  accessControlList: AccessControlList;
  /** A list of action names that have been granted to this role */
  allowedActions: Array<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Only relevant for `custom` roles, this affects sorting. */
  customPriority?: Maybe<Scalars['Int']['output']>;
  /**
   * User-specific access permissions for this object.
   *
   */
  effectiveAccess: EffectiveAccess;
  /**
   * The global access control list that this assigned role implies, based on its sort order.
   *
   */
  globalAccessControlList: GlobalAccessControlList;
  /**
   * A list of global action names that this role implies, based on its sort order.
   *
   */
  globalAllowedActions: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /**
   * For `system` roles, this will be populated with the unique identifier
   * that marks this as a system role.
   *
   */
  identifier?: Maybe<RoleSystemIdentifier>;
  /**
   * The specific kind of role this is, based on how it entered the WDP-API.
   *
   */
  kind: RoleKind;
  /** The human readable name of the role within the system */
  name: Scalars['String']['output'];
  /**
   * Surfaced from the accessControlList for convenience, these are returned as
   * an array that allows a user to check for the state of all possible roles
   * without having to specify them explicitly in the GraphQL request
   *
   */
  permissions: Array<PermissionGrant>;
  /**
   * Used internally to sort roles and ensure certain role types are above
   * and below others, irrespective of priority.
   *
   */
  primacy: RolePrimacy;
  /**
   * The calculated sort priority for this role.
   *
   * * For `custom` roles, it is based on `custom_priority`.
   * * For `system` roles, it is based on hard-coded values within the system
   *   and cannot be modified.
   *
   */
  priority: Scalars['Int']['output'];
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Role. */
export type RoleConnection = Paginated & {
  __typename?: 'RoleConnection';
  /** A list of edges. */
  edges: Array<RoleEdge>;
  /** A list of nodes. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Role;
};

/**
 * A categorization of a `Role` based on how it gets into the WDP-API.
 *
 */
export type RoleKind =
  /**
   * Custom roles are created and managed through the `createRole`, `updateRole`, and `destroyRole` mutations.
   *
   */
  | 'CUSTOM'
  /**
   * System roles are shipped by default with WDP-API and cannot be modified.
   *
   */
  | 'SYSTEM'
  | '%future added value';

/** Sort roles by a specific property and order */
export type RoleOrder =
  /** Sort roles by default priority within the system */
  | 'DEFAULT'
  /** Sort roles by their name A-Z */
  | 'NAME_ASCENDING'
  /** Sort roles by their name Z-A */
  | 'NAME_DESCENDING'
  /** Sort roles by oldest created date */
  | 'OLDEST'
  /** Sort roles by newest created date */
  | 'RECENT'
  | '%future added value';

/**
 * The level of importance any given role has when it comes to determing what a user's "primary" role is.
 *
 */
export type RolePrimacy =
  /** Values with this primacy level are the default. Any custom roles will be in this scope. */
  | 'DEFAULT'
  /** Values with this primacy level take priority over all others. They cannot be directly assigned through the API. */
  | 'HIGH'
  /** Values with this primacy level are always sorted after every other role. */
  | 'LOW'
  | '%future added value';

/**
 * This will identify _which_ `system` role this is, if applicable. See `RoleKind` for more information.
 *
 */
export type RoleSystemIdentifier =
  /**
   * A global administrator. This role cannot be directly assigned.
   *
   */
  | 'ADMIN'
  /**
   * An editor has basic update permissions for a specific point in the hierarchy.
   *
   */
  | 'EDITOR'
  /**
   * A manager can be assigned to handle most `Community` and other entity management concerns.
   *
   * They can also appoint other roles (except for other managers) to any entity they manage.
   *
   */
  | 'MANAGER'
  /**
   * A reader is anyone who has been given explicit read-access to an entity.
   * This role is primarily used by the administration UI.
   *
   * **Note**: Anonymous users can still view public entities in the frontend.
   *
   */
  | 'READER'
  | '%future added value';

/**
 * A property on a `SchemaInstance`.
 *
 */
export type ScalarProperty = {
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * Configuration for controlling how instances handle specific optional core properties.
 *
 */
export type SchemaCoreDefinition = {
  __typename?: 'SchemaCoreDefinition';
  /** Whether to expose or hide an entity's DOI */
  doi: Scalars['Boolean']['output'];
  /** Whether to expose or hide an entity's ISSN */
  issn: Scalars['Boolean']['output'];
  /** Whether to expose or hide an entity's subtitle */
  subtitle: Scalars['Boolean']['output'];
};

/**
 * A schema definition is a logical grouping of `SchemaVersion`s that identifies
 * only the shared kind, namespace, and identifier. The name is also most likely
 * shared, although it can change between schema versions, and the value on the
 * definition will default to whatever the most recent version uses.
 *
 */
export type SchemaDefinition = DescribesSchema & Node & Sluggable & {
  __typename?: 'SchemaDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String']['output'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String']['output'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String']['output'];
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for SchemaDefinition. */
export type SchemaDefinitionConnection = Paginated & {
  __typename?: 'SchemaDefinitionConnection';
  /** A list of edges. */
  edges: Array<SchemaDefinitionEdge>;
  /** A list of nodes. */
  nodes: Array<SchemaDefinition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SchemaDefinitionEdge = {
  __typename?: 'SchemaDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SchemaDefinition;
};

/**
 * Being an instance that implements a schema version with strongly-typed properties.
 * Overlaps with Entity, but intended for focused access to just the properties
 * and the necessary context.
 *
 */
export type SchemaInstance = {
  /**
   * Expose all available entities for this schema property.
   *
   */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /**
   * Read a single schema property by its full path.
   *
   */
  schemaProperty?: Maybe<AnySchemaProperty>;
};


/**
 * Being an instance that implements a schema version with strongly-typed properties.
 * Overlaps with Entity, but intended for focused access to just the properties
 * and the necessary context.
 *
 */
export type SchemaInstanceAvailableEntitiesForArgs = {
  fullPath: Scalars['String']['input'];
};


/**
 * Being an instance that implements a schema version with strongly-typed properties.
 * Overlaps with Entity, but intended for focused access to just the properties
 * and the necessary context.
 *
 */
export type SchemaInstanceSchemaPropertyArgs = {
  fullPath: Scalars['String']['input'];
};

/** A context that describes the current state of the form */
export type SchemaInstanceContext = {
  __typename?: 'SchemaInstanceContext';
  assets: Array<AssetSelectOption>;
  contributors: Array<ContributorSelectOption>;
  /** Not yet populated. May be used in the future. */
  defaultValues: Scalars['JSON']['output'];
  /** The entity ID for this schema instance. */
  entityId: Scalars['ID']['output'];
  /** The values for the schema form on this instance */
  fieldValues: Scalars['JSON']['output'];
  /** The slug for the current schema version */
  schemaVersionSlug: Scalars['String']['output'];
  /** Information about the validity of the schema instance */
  validity?: Maybe<SchemaInstanceValidation>;
};

export type SchemaInstanceValidation = {
  __typename?: 'SchemaInstanceValidation';
  errors: Array<SchemaValueError>;
  valid: Scalars['Boolean']['output'];
  validatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The kind of entity a schema applies to */
export type SchemaKind =
  | 'COLLECTION'
  | 'COMMUNITY'
  | 'ITEM'
  | '%future added value';

/**
 * This ordering path represents a schema property and is variably
 * available based on whether matched entities' schemas implement it.
 *
 */
export type SchemaOrderingPath = OrderingPath & {
  __typename?: 'SchemaOrderingPath';
  /** A helpful description of the path */
  description?: Maybe<Scalars['String']['output']>;
  /** A logical grouping for ordering paths */
  grouping: OrderingPathGrouping;
  /** A human-readable label for the path */
  label: Scalars['String']['output'];
  /**
   * Some paths may have a prefix. For instance, schema properties will have the name of the schema.
   *
   */
  labelPrefix?: Maybe<Scalars['String']['output']>;
  /** The exact path that should be provided to mutation inputs. */
  path: Scalars['String']['output'];
  schemaVersion: SchemaVersion;
  /** The schema property type */
  type: SchemaPropertyType;
};

/**
 * A property on a `SchemaInstance`.
 *
 */
export type SchemaProperty = {
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** Schema properties can serve various functions. This helps communicate the purpose of them, for building UIs, and general introspection. */
export type SchemaPropertyFunction =
  /**
   * This property acts as data inherently representative of the entity. Full text of an article, titling, and other such purposes.
   *
   */
  | 'CONTENT'
  /**
   * This property is intended to offer further information about the content, but not necessarily the content itself.
   * Most metadata should be things that are filterable or searchable to help users find and learn more about related
   * content.
   *
   */
  | 'METADATA'
  /**
   * This property is used for presenting information *about* the content, or how it should be formatted, but is less reflective
   * of the content itself. An option for changing a specific render style, an additional image to display, etc.
   *
   */
  | 'PRESENTATION'
  /**
   * This property is only used when ordering this entity by ancestors. It should not generally be visible in the frontend, but
   * remain editable by admins to adjust ordering.
   *
   */
  | 'SORTING'
  /**
   * This property's purpose remains unspecified and is likely the mark of a schema still in development. It should not generally
   * be in a finished schema, as it is important to help communicate the intent of a property for those building a UI.
   *
   */
  | 'UNSPECIFIED'
  | '%future added value';

/**
 * The _kind_ of a data type for a schema property. Mostly informational
 * in the API, this value represents the underlying structure of the data type.
 *
 */
export type SchemaPropertyKind =
  /**
   * A complex data type that is composed of multiple subproperties
   * or requires other processing. Their values cannot be easily
   * mapped to GraphQL / JavaScript primitives.
   *
   * See `VariableDateProperty`, `FullTextProperty` for examples.
   *
   */
  | 'COMPLEX'
  /** A composite of other properties. See `GroupProperty` */
  | 'GROUP'
  /**
   * A reference (or references) to other models in the system.
   *
   * See `AssetProperty`, `ContributorsProperty` for examples
   *
   */
  | 'REFERENCE'
  /**
   * The most common type of property, and what most values are likely to be. Strings,
   * integers, floats, booleans, and so on.
   *
   */
  | 'SIMPLE'
  | '%future added value';

/** The data type for a schema property. */
export type SchemaPropertyType =
  /** A reference to a single asset owned by the schema instance. See `AssetProperty` */
  | 'ASSET'
  /** A reference to multiple assets owned by the schema instance. See `AssetsProperty` */
  | 'ASSETS'
  /** True or false, yes or no, a checkbox. See `BooleanProperty` */
  | 'BOOLEAN'
  /** A reference to a single contributor in the system. See `ContributorProperty` */
  | 'CONTRIBUTOR'
  /** A reference to multiple contributors in the system. See `ContributorsProperty` */
  | 'CONTRIBUTORS'
  | 'CONTROLLED_VOCABULARIES'
  | 'CONTROLLED_VOCABULARY'
  /** An ISO8601-formatted date. See `DateProperty` */
  | 'DATE'
  /** An email address. See `EmailProperty` */
  | 'EMAIL'
  /** A reference to multiple entities. See `EntitiesProperty` */
  | 'ENTITIES'
  /** A reference to a single entity. See `EntityProperty` */
  | 'ENTITY'
  /** A decimal / floating-point number. See `FloatProperty` */
  | 'FLOAT'
  /** A complex type representing textual content. See `FullTextProperty` */
  | 'FULL_TEXT'
  /** A type composed of other properties. See `GroupProperty` */
  | 'GROUP'
  /** A whole number. See `IntegerProperty` */
  | 'INTEGER'
  /** Markdown-formatted text. See `MarkdownProperty` */
  | 'MARKDOWN'
  /** A dropdown that supports selecting multiple values. See `MultiselectProperty` */
  | 'MULTISELECT'
  /** A dropdown that can select only one value. See `SelectProperty` */
  | 'SELECT'
  /** Simple text values. See `StringProperty` */
  | 'STRING'
  /** An array of tags that can be introspected. See `TagsProperty` */
  | 'TAGS'
  /** An ISO8601-formatted timestamp. See `TimestampProperty` */
  | 'TIMESTAMP'
  /** A fallback type for invalid schemas. See `UnknownProperty` */
  | 'UNKNOWN'
  /** A complex type representing a URL, with metadata. See `URLProperty` */
  | 'URL'
  /** A complex type representing a date that cannot be expressed exactly. See `VariableDateProperty` */
  | 'VARIABLE_DATE'
  | '%future added value';

/**
 * Configuration for controlling how instances of a schema render outside of orderings.
 *
 */
export type SchemaRenderDefinition = {
  __typename?: 'SchemaRenderDefinition';
  /** How to render a list */
  listMode: SchemaRenderListMode;
};

/**
 * How instances that implement a certain schema should be rendered outside of an ordering,
 * when rendering only entities for the same type of schema.
 *
 * This value is currently only intended to be used by the frontend. It enforces no special
 * handling within the API itself, unlike an `OrderingRenderModeType`.
 *
 */
export type SchemaRenderListMode =
  | 'GRID'
  | 'TABLE'
  | 'TREE'
  | '%future added value';

/** An error that stems from trying to apply an invalid schema value. */
export type SchemaValueError = {
  __typename?: 'SchemaValueError';
  /**
   * An error with the entire set of values
   * @deprecated Not presently used: see globalErrors
   */
  base: Scalars['Boolean']['output'];
  /** Whether this is a hint */
  hint: Scalars['Boolean']['output'];
  /** A human-readable description of the error */
  message: Scalars['String']['output'];
  /** Additional metadata attached to the error */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** Which input value this error came from */
  path: Scalars['String']['output'];
};

/**
 * A specific version of a `SchemaDefinition`.
 *
 */
export type SchemaVersion = DescribesSchema & HasSchemaProperties & Node & Searchable & Sluggable & {
  __typename?: 'SchemaVersion';
  /** Configuration for controlling how instances of a schema handle certain optional core properties. */
  core: SchemaCoreDefinition;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Declarations / slugs for `enforcedChildVersions`.
   *
   */
  enforcedChildDeclarations: Array<Scalars['Slug']['output']>;
  /**
   * The versions that this schema accepts as a child.
   *
   * If there are no schemas, then this schema does not enforce its children.
   *
   */
  enforcedChildVersions: Array<SchemaVersion>;
  /**
   * Declarations / slugs for `enforcedParentVersions`.
   *
   */
  enforcedParentDeclarations: Array<Scalars['Slug']['output']>;
  /**
   * The versions that are allowed to parent this schema.
   *
   * If there are no schemas, then this schema does not enforce its parentage.
   *
   */
  enforcedParentVersions: Array<SchemaVersion>;
  /** A boolean for the logic on `enforcedChildVersions`. */
  enforcesChildren: Scalars['Boolean']['output'];
  /** A boolean for the logic on `enforcedParentVersions`. */
  enforcesParent: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String']['output'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String']['output'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String']['output'];
  /** A semantic version for the schema */
  number: Scalars['String']['output'];
  /** Configuration for rendering schema instances outside of orderings */
  render: SchemaRenderDefinition;
  /** The shared schema definition for all versions of this namespace and identifier */
  schemaDefinition: SchemaDefinition;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A subset of properties that can be searched for this schema. */
  searchableProperties: Array<AnySearchableProperty>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/**
 * A specific version of a `SchemaDefinition`.
 *
 */
export type SchemaVersionSearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};

/** The connection type for SchemaVersion. */
export type SchemaVersionConnection = Paginated & {
  __typename?: 'SchemaVersionConnection';
  /** A list of edges. */
  edges: Array<SchemaVersionEdge>;
  /** A list of nodes. */
  nodes: Array<SchemaVersion>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SchemaVersionEdge = {
  __typename?: 'SchemaVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SchemaVersion;
};

export type SchemaVersionOption = {
  __typename?: 'SchemaVersionOption';
  identifier: Scalars['String']['output'];
  kind: SchemaKind;
  /** The label to display in a select box */
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
  schemaDefinition: SchemaDefinition;
  schemaVersion: SchemaVersion;
  /** The value to use in a select box */
  value: Scalars['String']['output'];
};

/** Order schema versions by various factors */
export type SchemaVersionOrder =
  /** Order with newest versions at the top */
  | 'LATEST'
  /** Order with oldest versions at the top */
  | 'OLDEST'
  | '%future added value';

/**
 * These operators serve as keys for `SearchPredicateInput`.
 *
 */
export type SearchOperator =
  /** See `AndOperatorInput` */
  | 'and'
  /** See `DateEqualsOperatorInput` */
  | 'dateEquals'
  /** See `DateGTEOperatorInput` */
  | 'dateGTE'
  /** See `DateLTEOperatorInput` */
  | 'dateLTE'
  /** See `EqualsOperatorInput` */
  | 'equals'
  /** See `InAnyOperatorInput` */
  | 'inAny'
  /** See `MatchesOperatorInput` */
  | 'matches'
  /** See `NumericGTEOperatorInput` */
  | 'numericGTE'
  /** See `NumericLTEOperatorInput` */
  | 'numericLTE'
  /** See `OrOperatorInput` */
  | 'or'
  | '%future added value';

/**
 * The type of origin for this search scope.
 *
 */
export type SearchOriginType =
  | 'ENTITY'
  | 'GLOBAL'
  | 'SCHEMA'
  | '%future added value';

/**
 * A predicate clause for searching entities.
 *
 * Each key corresponds to a `SearchOperator`, and multiple keys combined
 * in the same predicate will be implicitly `AND`ed together.
 *
 */
export type SearchPredicateInput = {
  /** See `AndOperatorInput` */
  and?: InputMaybe<AndOperatorInput>;
  /** See `DateEqualsOperatorInput` */
  dateEquals?: InputMaybe<DateEqualsOperatorInput>;
  /** See `DateGTEOperatorInput` */
  dateGTE?: InputMaybe<DateGteOperatorInput>;
  /** See `DateLTEOperatorInput` */
  dateLTE?: InputMaybe<DateLteOperatorInput>;
  /** See `EqualsOperatorInput` */
  equals?: InputMaybe<EqualsOperatorInput>;
  /** See `InAnyOperatorInput` */
  inAny?: InputMaybe<InAnyOperatorInput>;
  /** See `MatchesOperatorInput` */
  matches?: InputMaybe<MatchesOperatorInput>;
  /** See `NumericGTEOperatorInput` */
  numericGTE?: InputMaybe<NumericGteOperatorInput>;
  /** See `NumericLTEOperatorInput` */
  numericLTE?: InputMaybe<NumericLteOperatorInput>;
  /** See `OrOperatorInput` */
  or?: InputMaybe<OrOperatorInput>;
};

/**
 * An entity that's the result of a search.
 *
 */
export type SearchResult = {
  __typename?: 'SearchResult';
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  kind: EntityKind;
  schemaVersion: SchemaVersion;
  slug: Scalars['Slug']['output'];
  title: Scalars['String']['output'];
};

/** The connection type for SearchResult. */
export type SearchResultConnection = Paginated & {
  __typename?: 'SearchResultConnection';
  /** A list of edges. */
  edges: Array<SearchResultEdge>;
  /** A list of nodes. */
  nodes: Array<SearchResult>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SearchResultEdge = {
  __typename?: 'SearchResultEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SearchResult;
};

export type SearchScope = {
  __typename?: 'SearchScope';
  /**
   * The available schema versions underneath this search scope.
   *
   */
  availableSchemaVersions: Array<SchemaVersion>;
  coreProperties: Array<SearchableCoreProperty>;
  originType: SearchOriginType;
  /**
   * The results of a search.
   *
   * You must specify one of the following options in order to activate a search:
   *
   * * `predicates`
   * * `prefix`
   * * `query`
   * * `schema`
   *
   * If _none_ of these are set, the search will be considered empty, and return 0 results.
   *
   */
  results: SearchResultConnection;
  visibility: EntityVisibilityFilter;
};


export type SearchScopeResultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  predicates?: InputMaybe<Array<SearchPredicateInput>>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
  scope?: InputMaybe<EntityDescendantScopeFilter>;
};

export type Searchable = {
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
};


export type SearchableSearchArgs = {
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<EntityVisibilityFilter>;
};

export type SearchableCoreProperty = SearchableProperty & {
  __typename?: 'SearchableCoreProperty';
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
};

export type SearchableProperty = {
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
};

/** Autogenerated input type of SelectInitialOrdering */
export type SelectInitialOrderingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['ID']['input'];
  orderingId: Scalars['ID']['input'];
};

/** Autogenerated return type of SelectInitialOrdering. */
export type SelectInitialOrderingPayload = StandardMutationPayload & {
  __typename?: 'SelectInitialOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  ordering?: Maybe<Ordering>;
};

export type SelectOption = {
  __typename?: 'SelectOption';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SelectProperty = OptionableProperty & ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'SelectProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  defaultSelection?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  options: Array<SelectOption>;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  selection?: Maybe<Scalars['String']['output']>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type SelectionSourceMode =
  | 'ANCESTOR'
  | 'SELF'
  | '%future added value';

/** A generic enum for sorting models that don't have anything more specific implemented */
export type SimpleOrder =
  /** Sort models by oldest created date */
  | 'OLDEST'
  /** Sort models by newest created date */
  | 'RECENT'
  | '%future added value';

/** A value for updating the site's configuration */
export type SiteFooter = {
  __typename?: 'SiteFooter';
  /** A copyright statement that lives in the site's footer. */
  copyrightStatement: Scalars['String']['output'];
  /** A description that lives in the site's footer. */
  description: Scalars['String']['output'];
};

/** A value for updating the site's configuration */
export type SiteFooterInput = {
  /** A copyright statement that lives in the site's footer. */
  copyrightStatement?: InputMaybe<Scalars['String']['input']>;
  /** A description that lives in the site's footer. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** An interface for accessing derivatives of the site logo (if present). */
export type SiteLogoAttachment = HasAttachmentStorage & ImageIdentification & {
  __typename?: 'SiteLogoAttachment';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']['output']>;
  /** Configurable metadata for the image. */
  metadata?: Maybe<ImageMetadata>;
  /** The original source for the image */
  original: ImageOriginal;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   *
   */
  originalFilename?: Maybe<Scalars['String']['output']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   *
   */
  purpose: ImagePurpose;
  /** A logo intended to be used when the site title is hidden, constrained to 80px high with no width limit. */
  sansText: ImageSize;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   *
   */
  storage?: Maybe<AttachmentStorage>;
  /** A logo intended to be used when the site title is visible, constrained to 80px wide by 80px high. */
  withText: ImageSize;
};

/** An option that determines how the site logo should be rendered */
export type SiteLogoMode =
  /** The site logo is unavailable. */
  | 'NONE'
  /** The site logo should be displayed with the site title _hidden_. */
  | 'SANS_TEXT'
  /** The site logo should be displayed with the site title _visible_. */
  | 'WITH_TEXT'
  | '%future added value';

/** Configuration settings for information about this installation. */
export type SiteSettings = {
  __typename?: 'SiteSettings';
  /** Settings related to the site's footer */
  footer: SiteFooter;
  /** The text that appears on the root page of the frontend. Supports basic markdown. */
  installationHomePageCopy: Scalars['String']['output'];
  /** The name of the installation. */
  installationName: Scalars['String']['output'];
  /** How the logo should be rendered */
  logoMode: SiteLogoMode;
  /** The name of the provider supporting and maintaining this installation. */
  providerName: Scalars['String']['output'];
};

/** A value for updating the site's configuration */
export type SiteSettingsInput = {
  /** Settings for the site's footer */
  footer?: InputMaybe<SiteFooterInput>;
  /** The text that appears on the root page of the frontend. Supports basic markdown. */
  installationHomePageCopy?: InputMaybe<Scalars['String']['input']>;
  /** The name of the installation. */
  installationName?: InputMaybe<Scalars['String']['input']>;
  /** How the logo should be rendered */
  logoMode?: InputMaybe<SiteLogoMode>;
  /** The name of the provider supporting and maintaining this installation. */
  providerName?: InputMaybe<Scalars['String']['input']>;
};

/** Objects have a serialized slug for looking them up in the system and generating links without UUIDs */
export type Sluggable = {
  slug: Scalars['Slug']['output'];
};

/** Most mutations implement this interface in their payload in order to offer a standardize response value */
export type StandardMutationPayload = {
  attributeErrors: Array<MutationAttributeError>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/**
 * This property is static and is always available on an
 * entity, irrespective of its schema.
 *
 */
export type StaticOrderingPath = OrderingPath & {
  __typename?: 'StaticOrderingPath';
  /** A helpful description of the path */
  description?: Maybe<Scalars['String']['output']>;
  /** A logical grouping for ordering paths */
  grouping: OrderingPathGrouping;
  /** A human-readable label for the path */
  label: Scalars['String']['output'];
  /**
   * Some paths may have a prefix. For instance, schema properties will have the name of the schema.
   *
   */
  labelPrefix?: Maybe<Scalars['String']['output']>;
  /** The exact path that should be provided to mutation inputs. */
  path: Scalars['String']['output'];
  /** The schema property type */
  type: SchemaPropertyType;
};

export type StringProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'StringProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  content?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** When retrieving subtypes of a specific entity, you can distinguish between grabbing its children (default) or all of its descendants. */
export type SubtreeNodeFilter =
  /** Fetch only the first level of the same type of entity (Item, Collection) */
  | 'CHILDREN'
  /** Fetch all descendant entities of the same base type (Item, Collection) */
  | 'DESCENDANTS'
  | '%future added value';

/**
 * An enumerated value associated with the templating subsystem.
 *
 */
export type SupplementaryBackground =
  /**
   * A dark gradient is applied to the background of this template.
   *
   */
  | 'DARK'
  /**
   * A light gradient is applied to the background of this template.
   *
   */
  | 'LIGHT'
  /**
   * No background is applied to this template.
   *
   */
  | 'NONE'
  | '%future added value';

export type SupplementaryLayoutDefinition = LayoutDefinition & Node & Sluggable & {
  __typename?: 'SupplementaryLayoutDefinition';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<SupplementaryTemplateDefinition>;
  /**
   * The ordered template definitions available for this layout.
   *
   */
  templates: Array<AnySupplementaryTemplateDefinition>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SupplementaryLayoutInstance = LayoutInstance & Node & Renderable & Sluggable & {
  __typename?: 'SupplementaryLayoutInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * The associated entity for this layout instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * The layout definition for this type.
   *
   */
  layoutDefinition: SupplementaryLayoutDefinition;
  layoutKind: LayoutKind;
  slug: Scalars['Slug']['output'];
  /**
   * This layout will only ever have one template, so it can be fetched directly without needing the union.
   *
   */
  template?: Maybe<SupplementaryTemplateInstance>;
  /**
   * The ordered template instances available for this layout.
   *
   */
  templates: Array<AnySupplementaryTemplateInstance>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SupplementaryTemplateDefinition = Node & Sluggable & TemplateDefinition & {
  __typename?: 'SupplementaryTemplateDefinition';
  /**
   * The background gradient to use for this template. Affects presentation.
   *
   */
  background?: Maybe<SupplementaryBackground>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  layoutKind: LayoutKind;
  /**
   * Slot definitions for this template.
   *
   */
  slots: SupplementaryTemplateDefinitionSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Slot definitions for the associated template.
 *
 */
export type SupplementaryTemplateDefinitionSlots = {
  __typename?: 'SupplementaryTemplateDefinitionSlots';
  contributorsLabel?: Maybe<TemplateSlotInlineDefinition>;
  metricsLabel?: Maybe<TemplateSlotInlineDefinition>;
};

export type SupplementaryTemplateInstance = Node & Renderable & Sluggable & TemplateInstance & {
  __typename?: 'SupplementaryTemplateInstance';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /**
   * Load the associated definition for this template.
   *
   */
  definition: SupplementaryTemplateDefinition;
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  /**
   * Rendered slots for this template.
   *
   */
  slots: SupplementaryTemplateInstanceSlots;
  slug: Scalars['Slug']['output'];
  templateKind: TemplateKind;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/**
 * Rendered slots for the associated template.
 *
 */
export type SupplementaryTemplateInstanceSlots = {
  __typename?: 'SupplementaryTemplateInstanceSlots';
  contributorsLabel?: Maybe<TemplateSlotInlineInstance>;
  metricsLabel?: Maybe<TemplateSlotInlineInstance>;
};

/**
 * A helper field that can look up various information about the WDP-API Ecosystem.
 *
 */
export type SystemInfo = {
  __typename?: 'SystemInfo';
  /**
   * Check to see if an entity of a given `descendant` type exists with a given `ancestor` type.
   *
   */
  entityHierarchyExists: Scalars['Boolean']['output'];
};


/**
 * A helper field that can look up various information about the WDP-API Ecosystem.
 *
 */
export type SystemInfoEntityHierarchyExistsArgs = {
  ancestor: Scalars['Slug']['input'];
  descendant: Scalars['Slug']['input'];
};

export type TagsProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'TagsProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  tags: Array<Scalars['String']['output']>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * Entities within the system have templates associated with schema-specific layouts,
 * that can be overridden within the hierarchy for more custom approaches.
 *
 * This interface defines the *definition* for one such template and `layoutDefinition`,
 * which controls how associated `TemplateInstance`s are rendered.
 *
 */
export type TemplateDefinition = {
  layoutKind: LayoutKind;
  templateKind: TemplateKind;
};

/**
 * Some template instances return an ordered list of entities to render
 * within as part of their content.
 *
 * This provides access to that list, as well as a shortcut to each entity's
 * associated `ListItemLayoutInstance`.
 *
 * **note** It's possible that entities could match the parameters of the list
 * but be skipped because they have no layouts (yet). This is intentional behavior,
 * and subsequent fetches should see the list populated as soon as the descendant
 * entities layouts have rendered.
 *
 */
export type TemplateEntityList = {
  __typename?: 'TemplateEntityList';
  /**
   * The size of the list.
   *
   */
  count: Scalars['Int']['output'];
  /**
   * Whether the list is empty, provided for easier filtering and render-skipping.
   *
   */
  empty: Scalars['Boolean']['output'];
  /**
   * The actual entity records within this list.
   *
   * The order is deterministic.
   *
   */
  entities: Array<AnyEntity>;
  /**
   * A shortcut to access the list item layouts for each entity in `entities`.
   *
   * The order is deterministic.
   *
   * See `ListItemLayoutInstance`.
   *
   */
  listItemLayouts: Array<ListItemLayoutInstance>;
};

/**
 * An interface for a template instance that has a `TemplateEntityList`.
 *
 */
export type TemplateHasEntityList = {
  /**
   * The list of entities to render as part of this template's content.
   *
   */
  entityList: TemplateEntityList;
};

/**
 * An interface that implements the `prev` / `next` siblings
 * for navigating through orderings.
 *
 */
export type TemplateHasOrderingPair = {
  /**
   * Access the prev/next siblings within the template's specified ordering.
   *
   */
  orderingPair: TemplateOrderingPair;
};

/**
 * An interface describing an instance type that can be rendered for a given entity.
 *
 */
export type TemplateInstance = {
  /**
   * The associated entity for this template instance.
   *
   */
  entity: AnyEntity;
  /**
   * The time this object was last rendered.
   *
   */
  lastRenderedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  layoutKind: LayoutKind;
  templateKind: TemplateKind;
};

/**
 * Discriminator for the various types of templates available to an entity,
 * based on its schema.
 *
 */
export type TemplateKind =
  /**
   * A template for listing contributors of note on the main layout of an entity.
   *
   * Contained within the `MAIN` layout.
   *
   */
  | 'CONTRIBUTOR_LIST'
  /**
   * A template for rendering descendants of an entity on its main layout,
   * e.g. a journal listing some recent issues or a series listing featured papers.
   *
   * Contained within the `MAIN` layout.
   *
   */
  | 'DESCENDANT_LIST'
  /**
   * Describes details about an entity, its summary, etc.
   *
   * Contained within the `MAIN` layout.
   *
   */
  | 'DETAIL'
  /**
   * A template for describing how an entity's header / hero should look.
   *
   */
  | 'HERO'
  /**
   * A template for listing entity links on the main layout of an entity.
   *
   * Contained within the `MAIN` layout.
   *
   */
  | 'LINK_LIST'
  /**
   * A template for describing how an entity should appear when rendered in a list.
   *
   * Contained within the `LIST_ITEM` layout.
   *
   */
  | 'LIST_ITEM'
  /**
   * A template for describing how an entity's metadata should be displayed.
   *
   * Contained within the `METADATA` layout.
   *
   */
  | 'METADATA'
  /**
   * This controls the various tabs available to an entity when rendering
   * its `MAIN`, `METADATA`, `SUPPLEMENTARY` routes.
   *
   * Contained within the `NAVIGATION` layout.
   *
   */
  | 'NAVIGATION'
  /**
   * For applicable entities, allows navigating through specific orderings,
   * e.g. going back and forth between articles in a specific issue.
   *
   * Contained within the `MAIN` layout.
   *
   */
  | 'ORDERING'
  /**
   * A template for listing pages on the main layout of an entity.
   *
   * Contained within the `MAIN` layout.
   *
   */
  | 'PAGE_LIST'
  /**
   * A template for describing how an entity's supplementary pages (contributors, metrics)
   * should render.
   *
   * Contained within the `SUPPLEMENTARY` layout.
   *
   */
  | 'SUPPLEMENTARY'
  | '%future added value';

/**
 * An object that provides a next/prev pair for navigating through ordering siblings
 * within a template.
 *
 */
export type TemplateOrderingPair = {
  __typename?: 'TemplateOrderingPair';
  /**
   * The number of entries in the ordering (`null` if no match).
   *
   */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * Whether or not the ordering / entry actually exists—can be used to skip rendering.
   *
   */
  exists: Scalars['Boolean']['output'];
  /**
   * Whether the source entity is the _first_ entity in the ordering.
   *
   */
  first: Scalars['Boolean']['output'];
  /**
   * Whether the source entity is the _last_ entity in the ordering.
   *
   */
  last: Scalars['Boolean']['output'];
  /**
   * The next entry in the current ordering, if one exists. This will be null if this entry is the last.
   *
   */
  nextSibling?: Maybe<OrderingEntry>;
  /**
   * The source entity's (1-based) position in the ordering.
   *
   */
  position?: Maybe<Scalars['Int']['output']>;
  /**
   * The previous entry in the current ordering, if one exists. This will be null if this entry is the first.
   *
   */
  prevSibling?: Maybe<OrderingEntry>;
};

/**
 * A definition for a block-type template slot.
 *
 * Its `kind` will always be `BLOCK`.
 *
 */
export type TemplateSlotBlockDefinition = TemplateSlotDefinition & {
  __typename?: 'TemplateSlotBlockDefinition';
  /**
   * The kind of slot instance this is.
   *
   */
  kind: TemplateSlotKind;
  /**
   * The liquid template to render.
   *
   */
  rawTemplate?: Maybe<Scalars['String']['output']>;
};

/**
 * A block template slot that has been rendered.
 *
 * Its `kind` will always be `BLOCK`.
 *
 */
export type TemplateSlotBlockInstance = TemplateSlotInstance & {
  __typename?: 'TemplateSlotBlockInstance';
  /**
   * The actual rendered content for the template (if available).
   *
   */
  content?: Maybe<Scalars['String']['output']>;
  /**
   * Any errors for this slot that occurred during rendering, if applicable.
   *
   */
  errors?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * The kind of slot instance this is.
   *
   */
  kind: TemplateSlotKind;
  /**
   * Whether this slot rendered successfully (i.e. had no errors).
   *
   */
  valid: Scalars['Boolean']['output'];
};

/**
 * A slot definition describes how the slot should be rendered with a template.
 *
 */
export type TemplateSlotDefinition = {
  /**
   * The kind of slot instance this is.
   *
   */
  kind: TemplateSlotKind;
  /**
   * The liquid template to render.
   *
   */
  rawTemplate?: Maybe<Scalars['String']['output']>;
};

/**
 * A definition for an inline-type template slot.
 *
 * Its `kind` will always be `INLINE`.
 *
 */
export type TemplateSlotInlineDefinition = TemplateSlotDefinition & {
  __typename?: 'TemplateSlotInlineDefinition';
  /**
   * The kind of slot instance this is.
   *
   */
  kind: TemplateSlotKind;
  /**
   * The liquid template to render.
   *
   */
  rawTemplate?: Maybe<Scalars['String']['output']>;
};

/**
 * An inline template slot that has been rendered.
 *
 * Its `kind` will always be `INLINE`.
 *
 */
export type TemplateSlotInlineInstance = TemplateSlotInstance & {
  __typename?: 'TemplateSlotInlineInstance';
  /**
   * The actual rendered content for the template (if available).
   *
   */
  content?: Maybe<Scalars['String']['output']>;
  /**
   * Any errors for this slot that occurred during rendering, if applicable.
   *
   */
  errors?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * The kind of slot instance this is.
   *
   */
  kind: TemplateSlotKind;
  /**
   * Whether this slot rendered successfully (i.e. had no errors).
   *
   */
  valid: Scalars['Boolean']['output'];
};

/**
 * A slot instance is an actual rendered
 * property that may appear in a template.
 *
 */
export type TemplateSlotInstance = {
  /**
   * The actual rendered content for the template (if available).
   *
   */
  content?: Maybe<Scalars['String']['output']>;
  /**
   * Any errors for this slot that occurred during rendering, if applicable.
   *
   */
  errors?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * The kind of slot instance this is.
   *
   */
  kind: TemplateSlotKind;
  /**
   * Whether this slot rendered successfully (i.e. had no errors).
   *
   */
  valid: Scalars['Boolean']['output'];
};

/**
 * An enum discriminating between different types of content.
 *
 */
export type TemplateSlotKind =
  /**
   * A template slot containing lengthier content that may wrap, contain semantic newlines / paragraphs, etc.
   *
   */
  | 'BLOCK'
  /**
   * A template slot containing only inline information. It should contain no block level tags.
   *
   * It is intended for use in header, list item, and generally any other short-form spans of content.
   *
   */
  | 'INLINE'
  | '%future added value';

/** Configuration settings for the theme of the WDP frontend. */
export type ThemeSettings = {
  __typename?: 'ThemeSettings';
  color: Scalars['String']['output'];
  font: Scalars['String']['output'];
};

/** A value for updating the theme */
export type ThemeSettingsInput = {
  color: Scalars['String']['input'];
  font: Scalars['String']['input'];
};

export type TimestampProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'TimestampProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  default?: Maybe<Scalars['ISO8601DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/** When retrieving a paginated connection of tree-like entities, this enum is used to delineate which class of nodes to retrieve. Usually, you only want roots, but two other possibilities are exposed. */
export type TreeNodeFilter =
  /** Fetch only nodes that are "leaves"; nodes that have a parent of the same type */
  | 'LEAVES_ONLY'
  /** Fetch all nodes that match other filters passed to the resolver */
  | 'ROOTS_AND_LEAVES'
  /** Fetch only nodes that are "roots": nodes that do not have a parent of the same type */
  | 'ROOTS_ONLY'
  | '%future added value';

/** A schematic reference to a URL, with href, label, and optional title */
export type UrlProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'URLProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
  url?: Maybe<UrlReference>;
};

/** A representation of a URL suitable for creating anchor tags */
export type UrlReference = {
  __typename?: 'URLReference';
  /** The actual URL */
  href?: Maybe<Scalars['String']['output']>;
  /** A label to display within the text content of the anchor tag */
  label?: Maybe<Scalars['String']['output']>;
  /** A title to display when mousing over the URL */
  title?: Maybe<Scalars['String']['output']>;
};

export type UnknownProperty = ScalarProperty & SchemaProperty & {
  __typename?: 'UnknownProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  default?: Maybe<Scalars['JSON']['output']>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  /**
   * A human-readable label for the schema property.
   *
   */
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
  unknownValue?: Maybe<Scalars['JSON']['output']>;
};

/** Autogenerated input type of UpdateAnnouncement */
export type UpdateAnnouncementInput = {
  /** The ID for the announcement to update. */
  announcementId: Scalars['ID']['input'];
  /** A body for the announcement */
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A header value for the announcement */
  header: Scalars['String']['input'];
  /** The date of the announcement. */
  publishedOn: Scalars['ISO8601Date']['input'];
  /** A teaser for the announcement */
  teaser: Scalars['String']['input'];
};

/** Autogenerated return type of UpdateAnnouncement. */
export type UpdateAnnouncementPayload = StandardMutationPayload & {
  __typename?: 'UpdateAnnouncementPayload';
  announcement?: Maybe<Announcement>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateAssetAttachment */
export type UpdateAssetAttachmentInput = {
  /** The ID for the asset to update */
  assetId: Scalars['ID']['input'];
  /**
   * A reference to an upload in Tus.
   *
   */
  attachment: UploadedFileInput;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateAssetAttachment. */
export type UpdateAssetAttachmentPayload = StandardMutationPayload & {
  __typename?: 'UpdateAssetAttachmentPayload';
  asset?: Maybe<AnyAsset>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateAsset */
export type UpdateAssetInput = {
  /** Alt text to display for the asset (if applicable) */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** The ID for the asset to update */
  assetId: Scalars['ID']['input'];
  /**
   * An optional reference to an upload in Tus. It will replace the current file if provided.
   * Note: Unlike other attachments in the API, there is no way to clear an attachment from
   * an existing asset. If you wish to do that, simply call destroyAsset.
   *
   */
  attachment?: InputMaybe<UploadedFileInput>;
  /** A caption to display below the asset (if applicable) */
  caption?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A human readable name for the asset */
  name: Scalars['String']['input'];
  /** The position the asset occupies amongst siblings */
  position?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of UpdateAsset. */
export type UpdateAssetPayload = StandardMutationPayload & {
  __typename?: 'UpdateAssetPayload';
  asset?: Maybe<AnyAsset>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateCollection */
export type UpdateCollectionInput = {
  /**
   * If set to true, this will clear the attachment hero_image on this model.
   *
   */
  clearHeroImage?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If set to true, this will clear the attachment thumbnail on this model.
   *
   */
  clearThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  collectionId: Scalars['ID']['input'];
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: InputMaybe<Scalars['String']['input']>;
  /** The date this entity was published */
  published?: InputMaybe<VariablePrecisionDateInput>;
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   *
   */
  schemaProperties?: InputMaybe<Scalars['JSON']['input']>;
  /** Human-readable subtitle for the entity */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A brief description of the entity's contents. */
  summary?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  thumbnail?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  thumbnailMetadata?: InputMaybe<ImageMetadataInput>;
  /** Human-readable title for the entity */
  title: Scalars['String']['input'];
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** Autogenerated return type of UpdateCollection. */
export type UpdateCollectionPayload = StandardMutationPayload & {
  __typename?: 'UpdateCollectionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A new representation of the collection, on a successful update */
  collection?: Maybe<Collection>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  schemaErrors: Array<SchemaValueError>;
};

/** Autogenerated input type of UpdateCommunity */
export type UpdateCommunityInput = {
  /**
   * If set to true, this will clear the attachment hero_image on this model.
   *
   */
  clearHeroImage?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If set to true, this will clear the attachment logo on this model.
   *
   */
  clearLogo?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If set to true, this will clear the attachment thumbnail on this model.
   *
   */
  clearThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  communityId: Scalars['ID']['input'];
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  heroImageLayout: HeroImageLayout;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  logo?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  logoMetadata?: InputMaybe<ImageMetadataInput>;
  /** The position the community occupies in the list */
  position?: InputMaybe<Scalars['Int']['input']>;
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   *
   */
  schemaProperties?: InputMaybe<Scalars['JSON']['input']>;
  /** Human-readable subtitle for the entity */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A brief description of the entity's contents. */
  summary?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  thumbnail?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  thumbnailMetadata?: InputMaybe<ImageMetadataInput>;
  /** Human-readable title for the entity */
  title: Scalars['String']['input'];
};

/** Autogenerated return type of UpdateCommunity. */
export type UpdateCommunityPayload = StandardMutationPayload & {
  __typename?: 'UpdateCommunityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A new representation of the community, on a succesful update */
  community?: Maybe<Community>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  schemaErrors: Array<SchemaValueError>;
};

/** Autogenerated input type of UpdateContribution */
export type UpdateContributionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contributionId: Scalars['ID']['input'];
  metadata?: InputMaybe<ContributionMetadataInput>;
  /** An arbitrary text value that describes the kind of contribution */
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateContribution. */
export type UpdateContributionPayload = StandardMutationPayload & {
  __typename?: 'UpdateContributionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contribution?: Maybe<AnyContribution>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateGlobalConfiguration */
export type UpdateGlobalConfigurationInput = {
  /**
   * If set to true, this will clear the attachment logo on this model.
   *
   */
  clearLogo?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Possible new settings for entity behavior */
  entities?: InputMaybe<EntitiesSettingsInput>;
  /** Possible new settings for the institution */
  institution?: InputMaybe<InstitutionSettingsInput>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  logo?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  logoMetadata?: InputMaybe<ImageMetadataInput>;
  /** Possible new settings for the site */
  site?: InputMaybe<SiteSettingsInput>;
  /** Possible new settings for the theme */
  theme?: InputMaybe<ThemeSettingsInput>;
};

/** Autogenerated return type of UpdateGlobalConfiguration. */
export type UpdateGlobalConfigurationPayload = StandardMutationPayload & {
  __typename?: 'UpdateGlobalConfigurationPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  /** Though a global configuration always exists, this will be null if it fails to apply for some reason. */
  globalConfiguration?: Maybe<GlobalConfiguration>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateItem */
export type UpdateItemInput = {
  /**
   * If set to true, this will clear the attachment hero_image on this model.
   *
   */
  clearHeroImage?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If set to true, this will clear the attachment thumbnail on this model.
   *
   */
  clearThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: InputMaybe<Scalars['String']['input']>;
  /** The item to update */
  itemId: Scalars['ID']['input'];
  /** The date this entity was published */
  published?: InputMaybe<VariablePrecisionDateInput>;
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   *
   */
  schemaProperties?: InputMaybe<Scalars['JSON']['input']>;
  /** Human-readable subtitle for the entity */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** A brief description of the entity's contents. */
  summary?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  thumbnail?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  thumbnailMetadata?: InputMaybe<ImageMetadataInput>;
  /** Human-readable title for the entity */
  title: Scalars['String']['input'];
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

/** Autogenerated return type of UpdateItem. */
export type UpdateItemPayload = StandardMutationPayload & {
  __typename?: 'UpdateItemPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  /** A new representation of the item, on a succesful update */
  item?: Maybe<Item>;
  schemaErrors: Array<SchemaValueError>;
};

/** Autogenerated input type of UpdateOrdering */
export type UpdateOrderingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderingFilterDefinitionInput>;
  /** Optional markdown content to display after the ordering's children */
  footer?: InputMaybe<Scalars['String']['input']>;
  /** Optional markdown content to display before the ordering's children */
  header?: InputMaybe<Scalars['String']['input']>;
  /** A human readable label for the ordering */
  name?: InputMaybe<Scalars['String']['input']>;
  order: Array<OrderDefinitionInput>;
  /**
   * The ID for the ordering to update
   *
   */
  orderingId: Scalars['ID']['input'];
  render?: InputMaybe<OrderingRenderDefinitionInput>;
  select?: InputMaybe<OrderingSelectDefinitionInput>;
};

/** Autogenerated return type of UpdateOrdering. */
export type UpdateOrderingPayload = StandardMutationPayload & {
  __typename?: 'UpdateOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  /** The updated ordering */
  ordering?: Maybe<Ordering>;
};

/** Autogenerated input type of UpdateOrganizationContributor */
export type UpdateOrganizationContributorInput = {
  /** A summary of the contributor */
  bio?: InputMaybe<Scalars['String']['input']>;
  /**
   * If set to true, this will clear the attachment image on this model.
   *
   */
  clearImage?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contributorId: Scalars['ID']['input'];
  /** An email associated with the contributor */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  image?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  imageMetadata?: InputMaybe<ImageMetadataInput>;
  /** The legal name of the organization */
  legalName?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<ContributorLinkInput>>;
  /** Where the organization is located (if applicable) */
  location?: InputMaybe<Scalars['String']['input']>;
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: InputMaybe<Scalars['String']['input']>;
  /** A url associated with the contributor */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateOrganizationContributor. */
export type UpdateOrganizationContributorPayload = StandardMutationPayload & {
  __typename?: 'UpdateOrganizationContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The updated organization */
  contributor?: Maybe<OrganizationContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdatePage */
export type UpdatePageInput = {
  body: Scalars['String']['input'];
  /**
   * If set to true, this will clear the attachment hero_image on this model.
   *
   */
  clearHeroImage?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  heroImage?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  heroImageMetadata?: InputMaybe<ImageMetadataInput>;
  pageId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

/** Autogenerated return type of UpdatePage. */
export type UpdatePagePayload = StandardMutationPayload & {
  __typename?: 'UpdatePagePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Page>;
};

/** Autogenerated input type of UpdatePersonContributor */
export type UpdatePersonContributorInput = {
  affiliation?: InputMaybe<Scalars['String']['input']>;
  /** A summary of the contributor */
  bio?: InputMaybe<Scalars['String']['input']>;
  /**
   * If set to true, this will clear the attachment image on this model.
   *
   */
  clearImage?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contributorId: Scalars['ID']['input'];
  /** An email associated with the contributor */
  email?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  image?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  imageMetadata?: InputMaybe<ImageMetadataInput>;
  links?: InputMaybe<Array<ContributorLinkInput>>;
  /**
   * An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor.
   *
   */
  orcid?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** A url associated with the contributor */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdatePersonContributor. */
export type UpdatePersonContributorPayload = StandardMutationPayload & {
  __typename?: 'UpdatePersonContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The created person */
  contributor?: Maybe<PersonContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateRole */
export type UpdateRoleInput = {
  accessControlList: Scalars['JSON']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roleId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateRole. */
export type UpdateRolePayload = StandardMutationPayload & {
  __typename?: 'UpdateRolePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  avatar?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  avatarMetadata?: InputMaybe<ImageMetadataInput>;
  /**
   * If set to true, this will clear the attachment avatar on this model.
   *
   */
  clearAvatar?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Attributes for the user that correspond to attributes in Keycloak.
   *
   */
  profile: UserProfileInput;
  userId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateUser. */
export type UpdateUserPayload = StandardMutationPayload & {
  __typename?: 'UpdateUserPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Autogenerated input type of UpdateViewerSettings */
export type UpdateViewerSettingsInput = {
  /**
   * A reference to an uploaded image in Tus.
   *
   */
  avatar?: InputMaybe<UploadedFileInput>;
  /**
   * Metadata for an image attachment.
   *
   */
  avatarMetadata?: InputMaybe<ImageMetadataInput>;
  /**
   * If set to true, this will clear the attachment avatar on this model.
   *
   */
  clearAvatar?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Attributes for the user that correspond to attributes in Keycloak.
   *
   */
  profile: UserProfileInput;
};

/** Autogenerated return type of UpdateViewerSettings. */
export type UpdateViewerSettingsPayload = StandardMutationPayload & {
  __typename?: 'UpdateViewerSettingsPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** The name of a storage that can contain user uploads. There's only one option at present. */
export type UploadStorage =
  /**
   * Temporary storage. Cleaned on a regular basis if uploads are not attached anywhere.
   *
   */
  | 'CACHE'
  | '%future added value';

/** A definition for a file upload */
export type UploadedFileInput = {
  id: Scalars['UploadID']['input'];
  /** Metadata to associate with the upload */
  metadata?: InputMaybe<UploadedFileMetadataInput>;
  /** The storage that contains the input. */
  storage?: InputMaybe<UploadStorage>;
};

/** File metadata to attach to the upload. */
export type UploadedFileMetadataInput = {
  /** Alt text for the upload (not always applicable) */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** The original filename, since Tus mangles them. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /**
   * The original content type. WDP will detect a real content type, so this can't be spoofed, but it can be helpful with generating
   * an initial asset with the correct kind.
   *
   */
  mimeType?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of UpsertContribution */
export type UpsertContributionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contributableId: Scalars['ID']['input'];
  contributorId: Scalars['ID']['input'];
  metadata?: InputMaybe<ContributionMetadataInput>;
  /** An arbitrary text value that describes the kind of contribution */
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpsertContribution. */
export type UpsertContributionPayload = StandardMutationPayload & {
  __typename?: 'UpsertContributionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contribution?: Maybe<AnyContribution>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']['output']>;
};

/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type User = AccessGrantSubject & ExposesPermissions & Node & Sluggable & {
  __typename?: 'User';
  /** All access grants for this user */
  accessGrants: AnyUserAccessGrantConnection;
  /** A polymorphic connection for access grants from a subject */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']['output']>;
  /** Is this an anonymous / unauthenticated user? */
  anonymous: Scalars['Boolean']['output'];
  /**
   * The roles this user has access to assign based on their `primaryRole`,
   * outside of any hierarchical context.
   *
   * When actually assigning roles for an entity, you should use `Entity.assignableRoles`,
   * because it will ensure that the user sufficient permissions at that level.
   *
   */
  assignableRoles: Array<Role>;
  /** A user's avatar */
  avatar: ImageAttachment;
  /** Configurable metadata for the avatar attachment */
  avatarMetadata?: Maybe<ImageMetadata>;
  /** All access grants for this user on a collection */
  collectionAccessGrants: UserCollectionAccessGrantConnection;
  /** Query the collections this user has access to */
  collections: CollectionConnection;
  /** Query the communities this user has access to */
  communities: CommunityConnection;
  /** All access grants for this user on a community */
  communityAccessGrants: UserCommunityAccessGrantConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** A user's email. Depending on the upstream provider, this may not be set. */
  email?: Maybe<Scalars['String']['output']>;
  /** Has this user's email been verified to work through Keycloak? */
  emailVerified: Scalars['Boolean']['output'];
  /** The user's family (last) name. Depending on the upstream provider, this may not be set. */
  familyName?: Maybe<Scalars['String']['output']>;
  /** The user's given (first) name. Depending on the upstream provider, this may not be set. */
  givenName?: Maybe<Scalars['String']['output']>;
  /** Does this user have access to administer the entire instance? */
  globalAdmin: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** All access grants for this user on an item */
  itemAccessGrants: UserItemAccessGrantConnection;
  /** Query the items this user has access to */
  items: ItemConnection;
  /** The user's full provided name. Depending on the upstream provider, this may not be set. */
  name?: Maybe<Scalars['String']['output']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The primary role associated with this subject. */
  primaryRole?: Maybe<Role>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Can this user upload anything at all? */
  uploadAccess: Scalars['Boolean']['output'];
  /** If a user has any upload access, this token will allow them to do so. */
  uploadToken?: Maybe<Scalars['String']['output']>;
  /** A unique username for the user. Depending on the upstream provider, this may not be set. */
  username?: Maybe<Scalars['String']['output']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<AccessGrantEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<AccessGrantEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCollectionAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCollectionsArgs = {
  access?: InputMaybe<EntityPermissionFilter>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<TreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCommunitiesArgs = {
  access?: InputMaybe<EntityPermissionFilter>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<TreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCommunityAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserItemAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserItemsArgs = {
  access?: InputMaybe<EntityPermissionFilter>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nodeFilter?: InputMaybe<TreeNodeFilter>;
  order?: InputMaybe<EntityOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  schema?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** An access grant for a user */
export type UserAccessGrant = {
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  /** The role the subject has been assigned */
  role: Role;
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  /** The user which has been granted access */
  user: User;
};

/**
 * An access grant for a user to a collection.
 *
 */
export type UserCollectionAccessGrant = AccessGrant & Node & Sluggable & UserAccessGrant & {
  __typename?: 'UserCollectionAccessGrant';
  /** The collection to which a user has been granted access */
  collection: Collection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug']['output'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** The user which has been granted access */
  user: User;
};

/** The connection type for UserCollectionAccessGrant. */
export type UserCollectionAccessGrantConnection = Paginated & {
  __typename?: 'UserCollectionAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserCollectionAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserCollectionAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserCollectionAccessGrantEdge = {
  __typename?: 'UserCollectionAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserCollectionAccessGrant;
};

/**
 * An access grant for a user to a community.
 *
 */
export type UserCommunityAccessGrant = AccessGrant & Node & Sluggable & UserAccessGrant & {
  __typename?: 'UserCommunityAccessGrant';
  /** The community to which a user has been granted access */
  community: Community;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug']['output'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** The user which has been granted access */
  user: User;
};

/** The connection type for UserCommunityAccessGrant. */
export type UserCommunityAccessGrantConnection = Paginated & {
  __typename?: 'UserCommunityAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserCommunityAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserCommunityAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserCommunityAccessGrantEdge = {
  __typename?: 'UserCommunityAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserCommunityAccessGrant;
};

/** The connection type for User. */
export type UserConnection = Paginated & {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** A user-readable error. Somewhat deprecated now, but may be repurposed */
export type UserError = {
  __typename?: 'UserError';
  /** The attribute path to this error, if applicable */
  attributePath?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  /** A description of the error */
  message: Scalars['String']['output'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']['output']>>;
  /** Whether this error applies to a single attribute, or globally to the entire form */
  scope: MutationErrorScope;
};

/**
 * Not presently exposed through the API.
 *
 */
export type UserGroup = AccessGrantSubject & Node & Sluggable & {
  __typename?: 'UserGroup';
  /** All access grants for this group */
  accessGrants: AnyUserGroupAccessGrantConnection;
  /** A polymorphic connection for access grants from a subject */
  allAccessGrants: AnyAccessGrantConnection;
  /**
   * The roles this user has access to assign based on their `primaryRole`,
   * outside of any hierarchical context.
   *
   * When actually assigning roles for an entity, you should use `Entity.assignableRoles`,
   * because it will ensure that the user sufficient permissions at that level.
   *
   */
  assignableRoles: Array<Role>;
  /** All access grants for this group on a collection */
  collectionAccessGrants: UserGroupCollectionAccessGrantConnection;
  /** All access grants for this group on a community */
  communityAccessGrants: UserGroupCommunityAccessGrantConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** All access grants for this group on an item */
  itemAccessGrants: UserGroupItemAccessGrantConnection;
  name: Scalars['String']['output'];
  /** The primary role associated with this subject. */
  primaryRole?: Maybe<Role>;
  slug: Scalars['Slug']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  users: UserConnection;
};


/**
 * Not presently exposed through the API.
 *
 */
export type UserGroupAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<AccessGrantEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Not presently exposed through the API.
 *
 */
export type UserGroupAllAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<AccessGrantEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Not presently exposed through the API.
 *
 */
export type UserGroupCollectionAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Not presently exposed through the API.
 *
 */
export type UserGroupCommunityAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Not presently exposed through the API.
 *
 */
export type UserGroupItemAccessGrantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SimpleOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Not presently exposed through the API.
 *
 */
export type UserGroupUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageDirection?: InputMaybe<PageDirection>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** An access grant for a user group */
export type UserGroupAccessGrant = {
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  /** The role the subject has been assigned */
  role: Role;
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/**
 * An access grant for a group to a collection.
 *
 */
export type UserGroupCollectionAccessGrant = AccessGrant & Node & Sluggable & UserGroupAccessGrant & {
  __typename?: 'UserGroupCollectionAccessGrant';
  /** The collection to which a group has been granted access */
  collection: Collection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug']['output'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** The connection type for UserGroupCollectionAccessGrant. */
export type UserGroupCollectionAccessGrantConnection = Paginated & {
  __typename?: 'UserGroupCollectionAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserGroupCollectionAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserGroupCollectionAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserGroupCollectionAccessGrantEdge = {
  __typename?: 'UserGroupCollectionAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserGroupCollectionAccessGrant;
};

/**
 * An access grant for a group to a community.
 *
 */
export type UserGroupCommunityAccessGrant = AccessGrant & Node & Sluggable & UserGroupAccessGrant & {
  __typename?: 'UserGroupCommunityAccessGrant';
  /** The community to which a group has been granted access */
  community: Community;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug']['output'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** The connection type for UserGroupCommunityAccessGrant. */
export type UserGroupCommunityAccessGrantConnection = Paginated & {
  __typename?: 'UserGroupCommunityAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserGroupCommunityAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserGroupCommunityAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserGroupCommunityAccessGrantEdge = {
  __typename?: 'UserGroupCommunityAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserGroupCommunityAccessGrant;
};

/**
 * An access grant for a group to a item.
 *
 */
export type UserGroupItemAccessGrant = AccessGrant & Node & Sluggable & UserGroupAccessGrant & {
  __typename?: 'UserGroupItemAccessGrant';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /** The item to which a group has been granted access */
  item: Item;
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug']['output'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** The connection type for UserGroupItemAccessGrant. */
export type UserGroupItemAccessGrantConnection = Paginated & {
  __typename?: 'UserGroupItemAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserGroupItemAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserGroupItemAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserGroupItemAccessGrantEdge = {
  __typename?: 'UserGroupItemAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserGroupItemAccessGrant;
};

/**
 * An access grant for a user to a collection.
 *
 */
export type UserItemAccessGrant = AccessGrant & Node & Sluggable & UserAccessGrant & {
  __typename?: 'UserItemAccessGrant';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID']['output'];
  /** The item to which a user has been granted access */
  item: Item;
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug']['output'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** The user which has been granted access */
  user: User;
};

/** The connection type for UserItemAccessGrant. */
export type UserItemAccessGrantConnection = Paginated & {
  __typename?: 'UserItemAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserItemAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserItemAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserItemAccessGrantEdge = {
  __typename?: 'UserItemAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserItemAccessGrant;
};

/** Sort users by a specific property and order */
export type UserOrder =
  /** Sort users with admins pushed to the top, followed by name A-Z */
  | 'ADMINS_FIRST'
  /** Sort users with admins pushed to the bottom, followed by name Z-A */
  | 'ADMINS_LAST'
  /** Sort users with admins pushed to the bottom, followed by `OLDEST` */
  | 'ADMINS_OLDEST'
  /** Sort users with admins pushed to the top, followed by recent */
  | 'ADMINS_RECENT'
  /** Sort users by their email A-Z */
  | 'EMAIL_ASCENDING'
  /** Sort users by their email Z-A */
  | 'EMAIL_DESCENDING'
  /** Sort users by their name A-Z */
  | 'NAME_ASCENDING'
  /** Sort users by their name Z-A */
  | 'NAME_DESCENDING'
  /** Sort users by oldest created date */
  | 'OLDEST'
  /** Sort users by newest created date */
  | 'RECENT'
  | '%future added value';

/**
 * A mapping of attributes for a user to update in the authentication provider.
 *
 */
export type UserProfileInput = {
  email: Scalars['String']['input'];
  familyName: Scalars['String']['input'];
  givenName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type VariableDateProperty = ScalarProperty & SchemaProperty & SearchableProperty & {
  __typename?: 'VariableDateProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   *
   */
  array: Scalars['Boolean']['output'];
  dateWithPrecision?: Maybe<VariablePrecisionDate>;
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   *
   */
  fullPath: Scalars['String']['output'];
  /**
   * The purpose or intent of this property relative to its entity, parents, and others.
   *
   */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   *
   */
  isWide: Scalars['Boolean']['output'];
  /**
   * Provided for introspection. This describes the underlying structure of the data type.
   *
   */
  kind: SchemaPropertyKind;
  label: Scalars['String']['output'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   *
   */
  orderable: Scalars['Boolean']['output'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   *
   */
  path: Scalars['String']['output'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole—the required trait only determines whether a value
   * **must** be set.
   *
   */
  required: Scalars['Boolean']['output'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String']['output'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   *
   */
  type: SchemaPropertyType;
};

/**
 * A wrapper around a date that allows us to describe a level of precision to apply to it,
 * which can be used in the frontend to affect its display.
 *
 */
export type VariablePrecisionDate = {
  __typename?: 'VariablePrecisionDate';
  /** The level of precision: the frontend can make decisions about how to format the associated value based on this */
  precision: DatePrecision;
  /** The actual date, encoded in ISO8601 format (if available) */
  value?: Maybe<Scalars['ISO8601Date']['output']>;
};

/**
 * A corresponding input type for VariablePrecisionDate.
 *
 */
export type VariablePrecisionDateInput = {
  /** The level of precision: the frontend can make decisions about how to format the associated value based on this */
  precision: DatePrecision;
  /** The actual date, encoded in ISO8601 format (if available) */
  value?: InputMaybe<Scalars['ISO8601Date']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  AnyAccessGrant: ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyAsset: ( Omit<AssetAudio, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetDocument, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetImage, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetPdf, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetUnknown, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetVideo, 'attachable'> & { attachable: RefType['AnyAttachable'] } );
  AnyAttachable: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  AnyChildEntity: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  AnyCollectionAccessGrant: ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyCommunityAccessGrant: ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyContribution: ( Omit<CollectionContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } ) | ( Omit<ItemContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } );
  AnyContributor: ( OrganizationContributor ) | ( PersonContributor );
  AnyEntity: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  AnyHeroTemplateDefinition: ( HeroTemplateDefinition );
  AnyHeroTemplateInstance: ( Omit<HeroTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyLinkTarget: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  AnyListItemTemplateDefinition: ( ListItemTemplateDefinition );
  AnyListItemTemplateInstance: ( Omit<ListItemTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyMainTemplateDefinition: ( ContributorListTemplateDefinition ) | ( DescendantListTemplateDefinition ) | ( DetailTemplateDefinition ) | ( LinkListTemplateDefinition ) | ( OrderingTemplateDefinition ) | ( PageListTemplateDefinition );
  AnyMainTemplateInstance: ( Omit<ContributorListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<DescendantListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<DetailTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<LinkListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<OrderingTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<PageListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyMetadataTemplateDefinition: ( MetadataTemplateDefinition );
  AnyMetadataTemplateInstance: ( Omit<MetadataTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyNavigationTemplateDefinition: ( NavigationTemplateDefinition );
  AnyNavigationTemplateInstance: ( Omit<NavigationTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyOrderingEntry: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<EntityLink, 'source' | 'target'> & { source: RefType['AnyEntity'], target: RefType['AnyEntity'] } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  AnyOrderingPath: ( SchemaOrderingPath ) | ( StaticOrderingPath );
  AnyScalarProperty: ( Omit<AssetProperty, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( Omit<AssetsProperty, 'assets'> & { assets: Array<RefType['AnyAsset']> } ) | ( BooleanProperty ) | ( Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<RefType['AnyContributor']> } ) | ( Omit<ContributorsProperty, 'contributors'> & { contributors: Array<RefType['AnyContributor']> } ) | ( ControlledVocabulariesProperty ) | ( ControlledVocabularyProperty ) | ( DateProperty ) | ( EmailProperty ) | ( Omit<EntitiesProperty, 'entities'> & { entities: Array<RefType['AnyEntity']> } ) | ( Omit<EntityProperty, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( FloatProperty ) | ( FullTextProperty ) | ( IntegerProperty ) | ( MarkdownProperty ) | ( MultiselectProperty ) | ( SelectProperty ) | ( StringProperty ) | ( TagsProperty ) | ( TimestampProperty ) | ( UrlProperty ) | ( UnknownProperty ) | ( VariableDateProperty );
  AnySchemaProperty: ( Omit<AssetProperty, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( Omit<AssetsProperty, 'assets'> & { assets: Array<RefType['AnyAsset']> } ) | ( BooleanProperty ) | ( Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<RefType['AnyContributor']> } ) | ( Omit<ContributorsProperty, 'contributors'> & { contributors: Array<RefType['AnyContributor']> } ) | ( ControlledVocabulariesProperty ) | ( ControlledVocabularyProperty ) | ( DateProperty ) | ( EmailProperty ) | ( Omit<EntitiesProperty, 'entities'> & { entities: Array<RefType['AnyEntity']> } ) | ( Omit<EntityProperty, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( FloatProperty ) | ( FullTextProperty ) | ( Omit<GroupProperty, 'properties'> & { properties: Array<RefType['AnyScalarProperty']> } ) | ( IntegerProperty ) | ( MarkdownProperty ) | ( MultiselectProperty ) | ( SelectProperty ) | ( StringProperty ) | ( TagsProperty ) | ( TimestampProperty ) | ( UrlProperty ) | ( UnknownProperty ) | ( VariableDateProperty );
  AnySearchableProperty: ( BooleanProperty ) | ( DateProperty ) | ( FloatProperty ) | ( FullTextProperty ) | ( IntegerProperty ) | ( MarkdownProperty ) | ( MultiselectProperty ) | ( SelectProperty ) | ( StringProperty ) | ( TimestampProperty ) | ( VariableDateProperty );
  AnySupplementaryTemplateDefinition: ( SupplementaryTemplateDefinition );
  AnySupplementaryTemplateInstance: ( Omit<SupplementaryTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyUserAccessGrant: ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  AnyUserGroupAccessGrant: ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  CollectionParent: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  ItemParent: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  AccessGrant: ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  AccessGrantSubject: ( User ) | ( UserGroup );
  Accessible: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  Asset: ( Omit<AssetAudio, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetDocument, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetImage, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetPdf, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetUnknown, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetVideo, 'attachable'> & { attachable: RefType['AnyAttachable'] } );
  Attachable: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  CRUDPermissionGrid: ( AssetPermissionGrid ) | ( EntityPermissionGrid );
  ChildEntity: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  Contributable: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  Contribution: ( Omit<CollectionContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } ) | ( Omit<ItemContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } );
  Contributor: ( OrganizationContributor ) | ( PersonContributor );
  DescribesSchema: ( HierarchicalSchemaRank ) | ( HierarchicalSchemaVersionRank ) | ( SchemaDefinition ) | ( Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, searchableProperties: Array<RefType['AnySearchableProperty']> } );
  DestroyMutationPayload: ( ControlledVocabularyDestroyPayload ) | ( DestroyAnnouncementPayload ) | ( DestroyAssetPayload ) | ( DestroyCollectionPayload ) | ( DestroyCommunityPayload ) | ( DestroyContributionPayload ) | ( DestroyContributorPayload ) | ( DestroyEntityLinkPayload ) | ( DestroyItemPayload ) | ( DestroyOrderingPayload ) | ( DestroyPagePayload );
  Entity: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  ExposesEffectiveAccess: ( Role );
  ExposesPermissions: ( AccessControlList ) | ( AssetPermissionGrid ) | ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<RefType['AnyUserAccessGrant']> } ) | ( EffectiveAccess ) | ( EntityPermissionGrid ) | ( GlobalAccessControlList ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( User );
  HasAttachmentStorage: ( ImageAttachment ) | ( ImageOriginal ) | ( SiteLogoAttachment );
  HasAvailableEntities: ( Omit<EntitiesProperty, 'entities'> & { entities: Array<RefType['AnyEntity']> } ) | ( Omit<EntityProperty, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } );
  HasControlledVocabulary: ( ControlledVocabulariesProperty ) | ( ControlledVocabularyProperty );
  HasDOI: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  HasDefaultTimestamps: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  HasEntityAnalytics: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  HasEntityBreadcrumbs: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<EntitySelectOption, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  HasISSN: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  HasSchemaProperties: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, searchableProperties: Array<RefType['AnySearchableProperty']> } );
  Image: ( ImageDerivative ) | ( ImageOriginal );
  ImageIdentification: ( ImageAttachment ) | ( ImageDerivative ) | ( ImageOriginal ) | ( ImageSize ) | ( SiteLogoAttachment );
  LayoutDefinition: ( Omit<HeroLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyHeroTemplateDefinition']> } ) | ( Omit<ListItemLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyListItemTemplateDefinition']> } ) | ( Omit<MainLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyMainTemplateDefinition']> } ) | ( Omit<MetadataLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyMetadataTemplateDefinition']> } ) | ( Omit<NavigationLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyNavigationTemplateDefinition']> } ) | ( Omit<SupplementaryLayoutDefinition, 'templates'> & { templates: Array<RefType['AnySupplementaryTemplateDefinition']> } );
  LayoutInstance: ( Omit<HeroLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyHeroTemplateInstance']> } ) | ( Omit<ListItemLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyListItemTemplateInstance']> } ) | ( Omit<MainLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMainTemplateInstance']> } ) | ( Omit<MetadataLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMetadataTemplateInstance']> } ) | ( Omit<NavigationLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyNavigationTemplateInstance']> } ) | ( Omit<SupplementaryLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnySupplementaryTemplateInstance']> } );
  Node: ( Omit<Announcement, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<AssetAudio, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetDocument, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetImage, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetPdf, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetUnknown, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetVideo, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<CollectionContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<RefType['AnyUserAccessGrant']> } ) | ( ContributorListTemplateDefinition ) | ( Omit<ContributorListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( ControlledVocabulary ) | ( ControlledVocabularyItem ) | ( ControlledVocabularySource ) | ( DescendantListTemplateDefinition ) | ( Omit<DescendantListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( DetailTemplateDefinition ) | ( Omit<DetailTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<EntityBreadcrumb, 'crumb'> & { crumb: RefType['AnyEntity'] } ) | ( Omit<EntityLink, 'source' | 'target'> & { source: RefType['AnyEntity'], target: RefType['AnyEntity'] } ) | ( GlobalConfiguration ) | ( Omit<HeroLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyHeroTemplateDefinition']> } ) | ( Omit<HeroLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyHeroTemplateInstance']> } ) | ( HeroTemplateDefinition ) | ( Omit<HeroTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( HierarchicalSchemaRank ) | ( HierarchicalSchemaVersionRank ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<ItemContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } ) | ( LinkListTemplateDefinition ) | ( Omit<LinkListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<LinkTargetCandidate, 'target'> & { target: RefType['AnyLinkTarget'] } ) | ( Omit<ListItemLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyListItemTemplateDefinition']> } ) | ( Omit<ListItemLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyListItemTemplateInstance']> } ) | ( ListItemTemplateDefinition ) | ( Omit<ListItemTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<MainLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyMainTemplateDefinition']> } ) | ( Omit<MainLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMainTemplateInstance']> } ) | ( Omit<MetadataLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyMetadataTemplateDefinition']> } ) | ( Omit<MetadataLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMetadataTemplateInstance']> } ) | ( MetadataTemplateDefinition ) | ( Omit<MetadataTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<NavigationLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyNavigationTemplateDefinition']> } ) | ( Omit<NavigationLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyNavigationTemplateInstance']> } ) | ( NavigationTemplateDefinition ) | ( Omit<NavigationTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<Ordering, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<OrderingEntry, 'entry'> & { entry: RefType['AnyOrderingEntry'] } ) | ( OrderingTemplateDefinition ) | ( Omit<OrderingTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( OrganizationContributor ) | ( Omit<Page, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( PageListTemplateDefinition ) | ( Omit<PageListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( PersonContributor ) | ( Role ) | ( SchemaDefinition ) | ( Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, searchableProperties: Array<RefType['AnySearchableProperty']> } ) | ( Omit<SupplementaryLayoutDefinition, 'templates'> & { templates: Array<RefType['AnySupplementaryTemplateDefinition']> } ) | ( Omit<SupplementaryLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnySupplementaryTemplateInstance']> } ) | ( SupplementaryTemplateDefinition ) | ( Omit<SupplementaryTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( User ) | ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( UserGroup ) | ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  OptionableProperty: ( MultiselectProperty ) | ( SelectProperty );
  OrderingPath: ( SchemaOrderingPath ) | ( StaticOrderingPath );
  Paginated: ( AnnouncementConnection ) | ( Omit<AnyAccessGrantConnection, 'nodes'> & { nodes: Array<RefType['AnyAccessGrant']> } ) | ( Omit<AnyAssetConnection, 'nodes'> & { nodes: Array<RefType['AnyAsset']> } ) | ( Omit<AnyCollectionAccessGrantConnection, 'nodes'> & { nodes: Array<RefType['AnyCollectionAccessGrant']> } ) | ( Omit<AnyCommunityAccessGrantConnection, 'nodes'> & { nodes: Array<RefType['AnyCommunityAccessGrant']> } ) | ( Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<RefType['AnyContributor']> } ) | ( Omit<AnyUserAccessGrantConnection, 'nodes'> & { nodes: Array<RefType['AnyUserAccessGrant']> } ) | ( Omit<AnyUserGroupAccessGrantConnection, 'nodes'> & { nodes: Array<RefType['AnyUserGroupAccessGrant']> } ) | ( CollectionConnection ) | ( CollectionContributionConnection ) | ( CommunityConnection ) | ( ContextualPermissionConnection ) | ( ControlledVocabularyConnection ) | ( ControlledVocabularySourceConnection ) | ( EntityDescendantConnection ) | ( EntityLinkConnection ) | ( ItemConnection ) | ( ItemContributionConnection ) | ( LinkTargetCandidateConnection ) | ( OrderingConnection ) | ( OrderingEntryConnection ) | ( PageConnection ) | ( RoleConnection ) | ( SchemaDefinitionConnection ) | ( SchemaVersionConnection ) | ( SearchResultConnection ) | ( UserCollectionAccessGrantConnection ) | ( UserCommunityAccessGrantConnection ) | ( UserConnection ) | ( UserGroupCollectionAccessGrantConnection ) | ( UserGroupCommunityAccessGrantConnection ) | ( UserGroupItemAccessGrantConnection ) | ( UserItemAccessGrantConnection );
  PermissionGrid: ( AssetPermissionGrid ) | ( EntityPermissionGrid );
  QueriesControlledVocabulary: ( Omit<Query, 'asset' | 'contributor' | 'contributorLookup' | 'orderingPaths'> & { asset?: Maybe<RefType['AnyAsset']>, contributor?: Maybe<RefType['AnyContributor']>, contributorLookup?: Maybe<RefType['AnyContributor']>, orderingPaths: Array<RefType['AnyOrderingPath']> } );
  QueriesControlledVocabularySource: ( Omit<Query, 'asset' | 'contributor' | 'contributorLookup' | 'orderingPaths'> & { asset?: Maybe<RefType['AnyAsset']>, contributor?: Maybe<RefType['AnyContributor']>, contributorLookup?: Maybe<RefType['AnyContributor']>, orderingPaths: Array<RefType['AnyOrderingPath']> } );
  ReferencesEntityVisibility: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  ReferencesGlobalEntityDates: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  Renderable: ( Omit<ContributorListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<DescendantListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<DetailTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<HeroLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyHeroTemplateInstance']> } ) | ( Omit<HeroTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<LinkListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<ListItemLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyListItemTemplateInstance']> } ) | ( Omit<ListItemTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<MainLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMainTemplateInstance']> } ) | ( Omit<MetadataLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMetadataTemplateInstance']> } ) | ( Omit<MetadataTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<NavigationLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyNavigationTemplateInstance']> } ) | ( Omit<NavigationTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<OrderingTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<PageListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<SupplementaryLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnySupplementaryTemplateInstance']> } ) | ( Omit<SupplementaryTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  ScalarProperty: ( Omit<AssetProperty, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( Omit<AssetsProperty, 'assets'> & { assets: Array<RefType['AnyAsset']> } ) | ( BooleanProperty ) | ( Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<RefType['AnyContributor']> } ) | ( Omit<ContributorsProperty, 'contributors'> & { contributors: Array<RefType['AnyContributor']> } ) | ( ControlledVocabulariesProperty ) | ( ControlledVocabularyProperty ) | ( DateProperty ) | ( EmailProperty ) | ( Omit<EntitiesProperty, 'entities'> & { entities: Array<RefType['AnyEntity']> } ) | ( Omit<EntityProperty, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( FloatProperty ) | ( FullTextProperty ) | ( IntegerProperty ) | ( MarkdownProperty ) | ( MultiselectProperty ) | ( SelectProperty ) | ( StringProperty ) | ( TagsProperty ) | ( TimestampProperty ) | ( UrlProperty ) | ( UnknownProperty ) | ( VariableDateProperty );
  SchemaInstance: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } );
  SchemaProperty: ( Omit<AssetProperty, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( Omit<AssetsProperty, 'assets'> & { assets: Array<RefType['AnyAsset']> } ) | ( BooleanProperty ) | ( Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<RefType['AnyContributor']> } ) | ( Omit<ContributorsProperty, 'contributors'> & { contributors: Array<RefType['AnyContributor']> } ) | ( ControlledVocabulariesProperty ) | ( ControlledVocabularyProperty ) | ( DateProperty ) | ( EmailProperty ) | ( Omit<EntitiesProperty, 'entities'> & { entities: Array<RefType['AnyEntity']> } ) | ( Omit<EntityProperty, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( FloatProperty ) | ( FullTextProperty ) | ( Omit<GroupProperty, 'properties'> & { properties: Array<RefType['AnyScalarProperty']> } ) | ( IntegerProperty ) | ( MarkdownProperty ) | ( MultiselectProperty ) | ( SelectProperty ) | ( StringProperty ) | ( TagsProperty ) | ( TimestampProperty ) | ( UrlProperty ) | ( UnknownProperty ) | ( VariableDateProperty );
  Searchable: ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<Query, 'asset' | 'contributor' | 'contributorLookup' | 'orderingPaths'> & { asset?: Maybe<RefType['AnyAsset']>, contributor?: Maybe<RefType['AnyContributor']>, contributorLookup?: Maybe<RefType['AnyContributor']>, orderingPaths: Array<RefType['AnyOrderingPath']> } ) | ( Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, searchableProperties: Array<RefType['AnySearchableProperty']> } );
  SearchableProperty: ( BooleanProperty ) | ( DateProperty ) | ( FloatProperty ) | ( FullTextProperty ) | ( IntegerProperty ) | ( MarkdownProperty ) | ( MultiselectProperty ) | ( SearchableCoreProperty ) | ( SelectProperty ) | ( StringProperty ) | ( TimestampProperty ) | ( VariableDateProperty );
  Sluggable: ( Omit<Announcement, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<AssetAudio, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetDocument, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetImage, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetPdf, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetUnknown, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<AssetVideo, 'attachable'> & { attachable: RefType['AnyAttachable'] } ) | ( Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['CollectionParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<CollectionContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } ) | ( Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<RefType['AnyUserAccessGrant']> } ) | ( ContributorListTemplateDefinition ) | ( Omit<ContributorListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( ControlledVocabulary ) | ( ControlledVocabularyItem ) | ( ControlledVocabularySource ) | ( DescendantListTemplateDefinition ) | ( Omit<DescendantListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( DetailTemplateDefinition ) | ( Omit<DetailTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<EntityLink, 'source' | 'target'> & { source: RefType['AnyEntity'], target: RefType['AnyEntity'] } ) | ( Omit<HeroLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyHeroTemplateDefinition']> } ) | ( Omit<HeroLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyHeroTemplateInstance']> } ) | ( HeroTemplateDefinition ) | ( Omit<HeroTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<RefType['AnyEntity']>, ancestorOfType?: Maybe<RefType['AnyEntity']>, parent?: Maybe<RefType['ItemParent']>, schemaProperties: Array<RefType['AnySchemaProperty']>, schemaProperty?: Maybe<RefType['AnySchemaProperty']> } ) | ( Omit<ItemContribution, 'contributor'> & { contributor: RefType['AnyContributor'] } ) | ( LinkListTemplateDefinition ) | ( Omit<LinkListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<ListItemLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyListItemTemplateDefinition']> } ) | ( Omit<ListItemLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyListItemTemplateInstance']> } ) | ( ListItemTemplateDefinition ) | ( Omit<ListItemTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<MainLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyMainTemplateDefinition']> } ) | ( Omit<MainLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMainTemplateInstance']> } ) | ( Omit<MetadataLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyMetadataTemplateDefinition']> } ) | ( Omit<MetadataLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyMetadataTemplateInstance']> } ) | ( MetadataTemplateDefinition ) | ( Omit<MetadataTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<NavigationLayoutDefinition, 'templates'> & { templates: Array<RefType['AnyNavigationTemplateDefinition']> } ) | ( Omit<NavigationLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnyNavigationTemplateInstance']> } ) | ( NavigationTemplateDefinition ) | ( Omit<NavigationTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<Ordering, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<OrderingEntry, 'entry'> & { entry: RefType['AnyOrderingEntry'] } ) | ( OrderingTemplateDefinition ) | ( Omit<OrderingTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( OrganizationContributor ) | ( PageListTemplateDefinition ) | ( Omit<PageListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( PersonContributor ) | ( Role ) | ( SchemaDefinition ) | ( Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<RefType['AnySchemaProperty']>, searchableProperties: Array<RefType['AnySearchableProperty']> } ) | ( Omit<SupplementaryLayoutDefinition, 'templates'> & { templates: Array<RefType['AnySupplementaryTemplateDefinition']> } ) | ( Omit<SupplementaryLayoutInstance, 'entity' | 'templates'> & { entity: RefType['AnyEntity'], templates: Array<RefType['AnySupplementaryTemplateInstance']> } ) | ( SupplementaryTemplateDefinition ) | ( Omit<SupplementaryTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( User ) | ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( UserGroup ) | ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  StandardMutationPayload: ( Omit<AlterSchemaVersionPayload, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( Omit<ApplySchemaPropertiesPayload, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( Omit<ClearInitialOrderingPayload, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( ControlledVocabularyDestroyPayload ) | ( ControlledVocabularySourceUpdatePayload ) | ( ControlledVocabularyUpsertPayload ) | ( CreateAnnouncementPayload ) | ( Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( CreateCollectionPayload ) | ( CreateCommunityPayload ) | ( CreateItemPayload ) | ( CreateOrderingPayload ) | ( CreateOrganizationContributorPayload ) | ( CreatePagePayload ) | ( CreatePersonContributorPayload ) | ( CreateRolePayload ) | ( DestroyAnnouncementPayload ) | ( DestroyAssetPayload ) | ( DestroyCollectionPayload ) | ( DestroyCommunityPayload ) | ( DestroyContributionPayload ) | ( DestroyContributorPayload ) | ( DestroyEntityLinkPayload ) | ( DestroyItemPayload ) | ( DestroyOrderingPayload ) | ( DestroyPagePayload ) | ( Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( LinkEntityPayload ) | ( Omit<ReparentEntityPayload, 'child'> & { child?: Maybe<RefType['AnyChildEntity']> } ) | ( ResetOrderingPayload ) | ( Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( Omit<SelectInitialOrderingPayload, 'entity'> & { entity?: Maybe<RefType['AnyEntity']> } ) | ( UpdateAnnouncementPayload ) | ( Omit<UpdateAssetAttachmentPayload, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( Omit<UpdateAssetPayload, 'asset'> & { asset?: Maybe<RefType['AnyAsset']> } ) | ( UpdateCollectionPayload ) | ( UpdateCommunityPayload ) | ( Omit<UpdateContributionPayload, 'contribution'> & { contribution?: Maybe<RefType['AnyContribution']> } ) | ( UpdateGlobalConfigurationPayload ) | ( UpdateItemPayload ) | ( UpdateOrderingPayload ) | ( UpdateOrganizationContributorPayload ) | ( UpdatePagePayload ) | ( UpdatePersonContributorPayload ) | ( UpdateRolePayload ) | ( UpdateUserPayload ) | ( UpdateViewerSettingsPayload ) | ( Omit<UpsertContributionPayload, 'contribution'> & { contribution?: Maybe<RefType['AnyContribution']> } );
  TemplateDefinition: ( ContributorListTemplateDefinition ) | ( DescendantListTemplateDefinition ) | ( DetailTemplateDefinition ) | ( HeroTemplateDefinition ) | ( LinkListTemplateDefinition ) | ( ListItemTemplateDefinition ) | ( MetadataTemplateDefinition ) | ( NavigationTemplateDefinition ) | ( OrderingTemplateDefinition ) | ( PageListTemplateDefinition ) | ( SupplementaryTemplateDefinition );
  TemplateHasEntityList: ( Omit<DescendantListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<LinkListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  TemplateHasOrderingPair: ( Omit<OrderingTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  TemplateInstance: ( Omit<ContributorListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<DescendantListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<DetailTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<HeroTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<LinkListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<ListItemTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<MetadataTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<NavigationTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<OrderingTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<PageListTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<SupplementaryTemplateInstance, 'entity'> & { entity: RefType['AnyEntity'] } );
  TemplateSlotDefinition: ( TemplateSlotBlockDefinition ) | ( TemplateSlotInlineDefinition );
  TemplateSlotInstance: ( TemplateSlotBlockInstance ) | ( TemplateSlotInlineInstance );
  UserAccessGrant: ( Omit<UserCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
  UserGroupAccessGrant: ( Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } ) | ( Omit<UserGroupItemAccessGrant, 'entity'> & { entity: RefType['AnyEntity'] } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessControlList: ResolverTypeWrapper<AccessControlList>;
  AccessGrant: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AccessGrant']>;
  AccessGrantEntityFilter: AccessGrantEntityFilter;
  AccessGrantSubject: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AccessGrantSubject']>;
  AccessGrantSubjectFilter: AccessGrantSubjectFilter;
  Accessible: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Accessible']>;
  AlterSchemaVersionInput: AlterSchemaVersionInput;
  AlterSchemaVersionPayload: ResolverTypeWrapper<Omit<AlterSchemaVersionPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Analytics: ResolverTypeWrapper<Analytics>;
  AnalyticsEventCountResult: ResolverTypeWrapper<AnalyticsEventCountResult>;
  AnalyticsEventCountSummary: ResolverTypeWrapper<AnalyticsEventCountSummary>;
  AnalyticsPrecision: AnalyticsPrecision;
  AnalyticsRegionCountResult: ResolverTypeWrapper<AnalyticsRegionCountResult>;
  AnalyticsRegionCountSummary: ResolverTypeWrapper<AnalyticsRegionCountSummary>;
  AndOperatorInput: AndOperatorInput;
  Announcement: ResolverTypeWrapper<Omit<Announcement, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  AnnouncementConnection: ResolverTypeWrapper<AnnouncementConnection>;
  AnnouncementEdge: ResolverTypeWrapper<AnnouncementEdge>;
  AnnouncementOrder: AnnouncementOrder;
  AnyAccessGrant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyAccessGrant']>;
  AnyAccessGrantConnection: ResolverTypeWrapper<Omit<AnyAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyAccessGrant']> }>;
  AnyAccessGrantEdge: ResolverTypeWrapper<Omit<AnyAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyAccessGrant'] }>;
  AnyAsset: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyAsset']>;
  AnyAssetConnection: ResolverTypeWrapper<Omit<AnyAssetConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyAsset']> }>;
  AnyAssetEdge: ResolverTypeWrapper<Omit<AnyAssetEdge, 'node'> & { node: ResolversTypes['AnyAsset'] }>;
  AnyAttachable: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyAttachable']>;
  AnyChildEntity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyChildEntity']>;
  AnyCollectionAccessGrant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyCollectionAccessGrant']>;
  AnyCollectionAccessGrantConnection: ResolverTypeWrapper<Omit<AnyCollectionAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyCollectionAccessGrant']> }>;
  AnyCollectionAccessGrantEdge: ResolverTypeWrapper<Omit<AnyCollectionAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyCollectionAccessGrant'] }>;
  AnyCommunityAccessGrant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyCommunityAccessGrant']>;
  AnyCommunityAccessGrantConnection: ResolverTypeWrapper<Omit<AnyCommunityAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyCommunityAccessGrant']> }>;
  AnyCommunityAccessGrantEdge: ResolverTypeWrapper<Omit<AnyCommunityAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyCommunityAccessGrant'] }>;
  AnyContribution: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyContribution']>;
  AnyContributor: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyContributor']>;
  AnyContributorConnection: ResolverTypeWrapper<Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyContributor']> }>;
  AnyContributorEdge: ResolverTypeWrapper<Omit<AnyContributorEdge, 'node'> & { node: ResolversTypes['AnyContributor'] }>;
  AnyEntity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyEntity']>;
  AnyHeroTemplateDefinition: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyHeroTemplateDefinition']>;
  AnyHeroTemplateInstance: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyHeroTemplateInstance']>;
  AnyLinkTarget: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyLinkTarget']>;
  AnyListItemTemplateDefinition: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyListItemTemplateDefinition']>;
  AnyListItemTemplateInstance: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyListItemTemplateInstance']>;
  AnyMainTemplateDefinition: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyMainTemplateDefinition']>;
  AnyMainTemplateInstance: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyMainTemplateInstance']>;
  AnyMetadataTemplateDefinition: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyMetadataTemplateDefinition']>;
  AnyMetadataTemplateInstance: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyMetadataTemplateInstance']>;
  AnyNavigationTemplateDefinition: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyNavigationTemplateDefinition']>;
  AnyNavigationTemplateInstance: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyNavigationTemplateInstance']>;
  AnyOrderingEntry: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyOrderingEntry']>;
  AnyOrderingPath: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyOrderingPath']>;
  AnyScalarProperty: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyScalarProperty']>;
  AnySchemaProperty: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnySchemaProperty']>;
  AnySearchableProperty: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnySearchableProperty']>;
  AnySupplementaryTemplateDefinition: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnySupplementaryTemplateDefinition']>;
  AnySupplementaryTemplateInstance: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnySupplementaryTemplateInstance']>;
  AnyUserAccessGrant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyUserAccessGrant']>;
  AnyUserAccessGrantConnection: ResolverTypeWrapper<Omit<AnyUserAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyUserAccessGrant']> }>;
  AnyUserAccessGrantEdge: ResolverTypeWrapper<Omit<AnyUserAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyUserAccessGrant'] }>;
  AnyUserGroupAccessGrant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyUserGroupAccessGrant']>;
  AnyUserGroupAccessGrantConnection: ResolverTypeWrapper<Omit<AnyUserGroupAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyUserGroupAccessGrant']> }>;
  AnyUserGroupAccessGrantEdge: ResolverTypeWrapper<Omit<AnyUserGroupAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyUserGroupAccessGrant'] }>;
  ApplySchemaPropertiesInput: ApplySchemaPropertiesInput;
  ApplySchemaPropertiesPayload: ResolverTypeWrapper<Omit<ApplySchemaPropertiesPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Asset: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Asset']>;
  AssetAudio: ResolverTypeWrapper<Omit<AssetAudio, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetDocument: ResolverTypeWrapper<Omit<AssetDocument, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetImage: ResolverTypeWrapper<Omit<AssetImage, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetKind: AssetKind;
  AssetKindFilter: AssetKindFilter;
  AssetPDF: ResolverTypeWrapper<Omit<AssetPdf, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetPermissionGrid: ResolverTypeWrapper<AssetPermissionGrid>;
  AssetProperty: ResolverTypeWrapper<Omit<AssetProperty, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  AssetSelectOption: ResolverTypeWrapper<AssetSelectOption>;
  AssetUnknown: ResolverTypeWrapper<Omit<AssetUnknown, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetVideo: ResolverTypeWrapper<Omit<AssetVideo, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetsProperty: ResolverTypeWrapper<Omit<AssetsProperty, 'assets'> & { assets: Array<ResolversTypes['AnyAsset']> }>;
  Attachable: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Attachable']>;
  AttachmentStorage: AttachmentStorage;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanProperty: ResolverTypeWrapper<BooleanProperty>;
  CRUDPermissionGrid: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CRUDPermissionGrid']>;
  ChildEntity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ChildEntity']>;
  ClearInitialOrderingInput: ClearInitialOrderingInput;
  ClearInitialOrderingPayload: ResolverTypeWrapper<Omit<ClearInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Collection: ResolverTypeWrapper<Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversTypes['AnyEntity']>, parent?: Maybe<ResolversTypes['CollectionParent']>, schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversTypes['AnySchemaProperty']> }>;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  CollectionContribution: ResolverTypeWrapper<Omit<CollectionContribution, 'contributor'> & { contributor: ResolversTypes['AnyContributor'] }>;
  CollectionContributionConnection: ResolverTypeWrapper<CollectionContributionConnection>;
  CollectionContributionEdge: ResolverTypeWrapper<CollectionContributionEdge>;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
  CollectionParent: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CollectionParent']>;
  Community: ResolverTypeWrapper<Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversTypes['AnySchemaProperty']> }>;
  CommunityConnection: ResolverTypeWrapper<CommunityConnection>;
  CommunityEdge: ResolverTypeWrapper<CommunityEdge>;
  ContextualPermission: ResolverTypeWrapper<Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<ResolversTypes['AnyUserAccessGrant']> }>;
  ContextualPermissionConnection: ResolverTypeWrapper<ContextualPermissionConnection>;
  ContextualPermissionEdge: ResolverTypeWrapper<ContextualPermissionEdge>;
  ContextualPermissionOrder: ContextualPermissionOrder;
  Contributable: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Contributable']>;
  Contribution: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Contribution']>;
  ContributionMetadata: ResolverTypeWrapper<ContributionMetadata>;
  ContributionMetadataInput: ContributionMetadataInput;
  ContributionOrder: ContributionOrder;
  Contributor: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Contributor']>;
  ContributorFilterKind: ContributorFilterKind;
  ContributorKind: ContributorKind;
  ContributorLink: ResolverTypeWrapper<ContributorLink>;
  ContributorLinkInput: ContributorLinkInput;
  ContributorListBackground: ContributorListBackground;
  ContributorListTemplateDefinition: ResolverTypeWrapper<ContributorListTemplateDefinition>;
  ContributorListTemplateDefinitionSlots: ResolverTypeWrapper<ContributorListTemplateDefinitionSlots>;
  ContributorListTemplateInstance: ResolverTypeWrapper<Omit<ContributorListTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  ContributorListTemplateInstanceSlots: ResolverTypeWrapper<ContributorListTemplateInstanceSlots>;
  ContributorLookupField: ContributorLookupField;
  ContributorOrder: ContributorOrder;
  ContributorProperty: ResolverTypeWrapper<Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<ResolversTypes['AnyContributor']> }>;
  ContributorSelectOption: ResolverTypeWrapper<ContributorSelectOption>;
  ContributorsProperty: ResolverTypeWrapper<Omit<ContributorsProperty, 'contributors'> & { contributors: Array<ResolversTypes['AnyContributor']> }>;
  ControlledVocabulariesProperty: ResolverTypeWrapper<ControlledVocabulariesProperty>;
  ControlledVocabulary: ResolverTypeWrapper<ControlledVocabulary>;
  ControlledVocabularyConnection: ResolverTypeWrapper<ControlledVocabularyConnection>;
  ControlledVocabularyDestroyInput: ControlledVocabularyDestroyInput;
  ControlledVocabularyDestroyPayload: ResolverTypeWrapper<ControlledVocabularyDestroyPayload>;
  ControlledVocabularyEdge: ResolverTypeWrapper<ControlledVocabularyEdge>;
  ControlledVocabularyFilterInput: ControlledVocabularyFilterInput;
  ControlledVocabularyItem: ResolverTypeWrapper<ControlledVocabularyItem>;
  ControlledVocabularyItemSet: ResolverTypeWrapper<Scalars['ControlledVocabularyItemSet']['output']>;
  ControlledVocabularyOrder: ControlledVocabularyOrder;
  ControlledVocabularyProperty: ResolverTypeWrapper<ControlledVocabularyProperty>;
  ControlledVocabularySource: ResolverTypeWrapper<ControlledVocabularySource>;
  ControlledVocabularySourceConnection: ResolverTypeWrapper<ControlledVocabularySourceConnection>;
  ControlledVocabularySourceEdge: ResolverTypeWrapper<ControlledVocabularySourceEdge>;
  ControlledVocabularySourceFilterInput: ControlledVocabularySourceFilterInput;
  ControlledVocabularySourceOrder: ControlledVocabularySourceOrder;
  ControlledVocabularySourceUpdateInput: ControlledVocabularySourceUpdateInput;
  ControlledVocabularySourceUpdatePayload: ResolverTypeWrapper<ControlledVocabularySourceUpdatePayload>;
  ControlledVocabularyUpsertInput: ControlledVocabularyUpsertInput;
  ControlledVocabularyUpsertPayload: ResolverTypeWrapper<ControlledVocabularyUpsertPayload>;
  CreateAnnouncementInput: CreateAnnouncementInput;
  CreateAnnouncementPayload: ResolverTypeWrapper<CreateAnnouncementPayload>;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: ResolverTypeWrapper<Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: ResolverTypeWrapper<CreateCollectionPayload>;
  CreateCommunityInput: CreateCommunityInput;
  CreateCommunityPayload: ResolverTypeWrapper<CreateCommunityPayload>;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: ResolverTypeWrapper<CreateItemPayload>;
  CreateOrderingInput: CreateOrderingInput;
  CreateOrderingPayload: ResolverTypeWrapper<CreateOrderingPayload>;
  CreateOrganizationContributorInput: CreateOrganizationContributorInput;
  CreateOrganizationContributorPayload: ResolverTypeWrapper<CreateOrganizationContributorPayload>;
  CreatePageInput: CreatePageInput;
  CreatePagePayload: ResolverTypeWrapper<CreatePagePayload>;
  CreatePersonContributorInput: CreatePersonContributorInput;
  CreatePersonContributorPayload: ResolverTypeWrapper<CreatePersonContributorPayload>;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: ResolverTypeWrapper<CreateRolePayload>;
  DateEqualsOperatorInput: DateEqualsOperatorInput;
  DateFilterInput: DateFilterInput;
  DateGTEOperatorInput: DateGteOperatorInput;
  DateLTEOperatorInput: DateLteOperatorInput;
  DatePrecision: DatePrecision;
  DateProperty: ResolverTypeWrapper<DateProperty>;
  DescendantListBackground: DescendantListBackground;
  DescendantListSelectionMode: DescendantListSelectionMode;
  DescendantListTemplateDefinition: ResolverTypeWrapper<DescendantListTemplateDefinition>;
  DescendantListTemplateDefinitionSlots: ResolverTypeWrapper<DescendantListTemplateDefinitionSlots>;
  DescendantListTemplateInstance: ResolverTypeWrapper<Omit<DescendantListTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  DescendantListTemplateInstanceSlots: ResolverTypeWrapper<DescendantListTemplateInstanceSlots>;
  DescendantListVariant: DescendantListVariant;
  DescribesSchema: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['DescribesSchema']>;
  DestroyAnnouncementInput: DestroyAnnouncementInput;
  DestroyAnnouncementPayload: ResolverTypeWrapper<DestroyAnnouncementPayload>;
  DestroyAssetInput: DestroyAssetInput;
  DestroyAssetPayload: ResolverTypeWrapper<DestroyAssetPayload>;
  DestroyCollectionInput: DestroyCollectionInput;
  DestroyCollectionPayload: ResolverTypeWrapper<DestroyCollectionPayload>;
  DestroyCommunityInput: DestroyCommunityInput;
  DestroyCommunityPayload: ResolverTypeWrapper<DestroyCommunityPayload>;
  DestroyContributionInput: DestroyContributionInput;
  DestroyContributionPayload: ResolverTypeWrapper<DestroyContributionPayload>;
  DestroyContributorInput: DestroyContributorInput;
  DestroyContributorPayload: ResolverTypeWrapper<DestroyContributorPayload>;
  DestroyEntityLinkInput: DestroyEntityLinkInput;
  DestroyEntityLinkPayload: ResolverTypeWrapper<DestroyEntityLinkPayload>;
  DestroyItemInput: DestroyItemInput;
  DestroyItemPayload: ResolverTypeWrapper<DestroyItemPayload>;
  DestroyMutationPayload: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['DestroyMutationPayload']>;
  DestroyOrderingInput: DestroyOrderingInput;
  DestroyOrderingPayload: ResolverTypeWrapper<DestroyOrderingPayload>;
  DestroyPageInput: DestroyPageInput;
  DestroyPagePayload: ResolverTypeWrapper<DestroyPagePayload>;
  DetailBackground: DetailBackground;
  DetailTemplateDefinition: ResolverTypeWrapper<DetailTemplateDefinition>;
  DetailTemplateDefinitionSlots: ResolverTypeWrapper<DetailTemplateDefinitionSlots>;
  DetailTemplateInstance: ResolverTypeWrapper<Omit<DetailTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  DetailTemplateInstanceSlots: ResolverTypeWrapper<DetailTemplateInstanceSlots>;
  DetailVariant: DetailVariant;
  Direction: Direction;
  EffectiveAccess: ResolverTypeWrapper<EffectiveAccess>;
  EmailProperty: ResolverTypeWrapper<EmailProperty>;
  EntitiesProperty: ResolverTypeWrapper<Omit<EntitiesProperty, 'entities'> & { entities: Array<ResolversTypes['AnyEntity']> }>;
  EntitiesSettings: ResolverTypeWrapper<EntitiesSettings>;
  EntitiesSettingsInput: EntitiesSettingsInput;
  Entity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entity']>;
  EntityBreadcrumb: ResolverTypeWrapper<Omit<EntityBreadcrumb, 'crumb'> & { crumb: ResolversTypes['AnyEntity'] }>;
  EntityDescendant: ResolverTypeWrapper<Omit<EntityDescendant, 'descendant'> & { descendant: ResolversTypes['AnyEntity'] }>;
  EntityDescendantConnection: ResolverTypeWrapper<EntityDescendantConnection>;
  EntityDescendantEdge: ResolverTypeWrapper<EntityDescendantEdge>;
  EntityDescendantOrder: EntityDescendantOrder;
  EntityDescendantScopeFilter: EntityDescendantScopeFilter;
  EntityKind: EntityKind;
  EntityLayouts: ResolverTypeWrapper<EntityLayouts>;
  EntityLink: ResolverTypeWrapper<Omit<EntityLink, 'source' | 'target'> & { source: ResolversTypes['AnyEntity'], target: ResolversTypes['AnyEntity'] }>;
  EntityLinkConnection: ResolverTypeWrapper<EntityLinkConnection>;
  EntityLinkEdge: ResolverTypeWrapper<EntityLinkEdge>;
  EntityLinkOperator: EntityLinkOperator;
  EntityLinkScope: EntityLinkScope;
  EntityOrder: EntityOrder;
  EntityPermissionFilter: EntityPermissionFilter;
  EntityPermissionGrid: ResolverTypeWrapper<EntityPermissionGrid>;
  EntityProperty: ResolverTypeWrapper<Omit<EntityProperty, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  EntityScope: EntityScope;
  EntitySelectOption: ResolverTypeWrapper<Omit<EntitySelectOption, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  EntityVisibility: EntityVisibility;
  EntityVisibilityFilter: EntityVisibilityFilter;
  EqualsOperatorInput: EqualsOperatorInput;
  ExposesEffectiveAccess: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ExposesEffectiveAccess']>;
  ExposesPermissions: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ExposesPermissions']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatProperty: ResolverTypeWrapper<FloatProperty>;
  FullText: ResolverTypeWrapper<FullText>;
  FullTextKind: FullTextKind;
  FullTextProperty: ResolverTypeWrapper<FullTextProperty>;
  GlobalAccessControlList: ResolverTypeWrapper<GlobalAccessControlList>;
  GlobalConfiguration: ResolverTypeWrapper<GlobalConfiguration>;
  GrantAccessInput: GrantAccessInput;
  GrantAccessPayload: ResolverTypeWrapper<Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  GroupProperty: ResolverTypeWrapper<Omit<GroupProperty, 'properties'> & { properties: Array<ResolversTypes['AnyScalarProperty']> }>;
  HasAttachmentStorage: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasAttachmentStorage']>;
  HasAvailableEntities: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasAvailableEntities']>;
  HasControlledVocabulary: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasControlledVocabulary']>;
  HasDOI: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasDOI']>;
  HasDefaultTimestamps: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasDefaultTimestamps']>;
  HasEntityAnalytics: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasEntityAnalytics']>;
  HasEntityBreadcrumbs: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasEntityBreadcrumbs']>;
  HasISSN: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasISSN']>;
  HasSchemaProperties: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HasSchemaProperties']>;
  HeroBackground: HeroBackground;
  HeroImageLayout: HeroImageLayout;
  HeroLayoutDefinition: ResolverTypeWrapper<Omit<HeroLayoutDefinition, 'templates'> & { templates: Array<ResolversTypes['AnyHeroTemplateDefinition']> }>;
  HeroLayoutInstance: ResolverTypeWrapper<Omit<HeroLayoutInstance, 'entity' | 'templates'> & { entity: ResolversTypes['AnyEntity'], templates: Array<ResolversTypes['AnyHeroTemplateInstance']> }>;
  HeroTemplateDefinition: ResolverTypeWrapper<HeroTemplateDefinition>;
  HeroTemplateDefinitionSlots: ResolverTypeWrapper<HeroTemplateDefinitionSlots>;
  HeroTemplateInstance: ResolverTypeWrapper<Omit<HeroTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  HeroTemplateInstanceSlots: ResolverTypeWrapper<HeroTemplateInstanceSlots>;
  HierarchicalSchemaRank: ResolverTypeWrapper<HierarchicalSchemaRank>;
  HierarchicalSchemaVersionRank: ResolverTypeWrapper<HierarchicalSchemaVersionRank>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ISO8601Date: ResolverTypeWrapper<Scalars['ISO8601Date']['output']>;
  ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']['output']>;
  Image: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Image']>;
  ImageAttachment: ResolverTypeWrapper<ImageAttachment>;
  ImageDerivative: ResolverTypeWrapper<ImageDerivative>;
  ImageDerivativeFormat: ImageDerivativeFormat;
  ImageDerivativeSize: ImageDerivativeSize;
  ImageIdentification: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ImageIdentification']>;
  ImageMetadata: ResolverTypeWrapper<ImageMetadata>;
  ImageMetadataInput: ImageMetadataInput;
  ImageOriginal: ResolverTypeWrapper<ImageOriginal>;
  ImagePurpose: ImagePurpose;
  ImageSize: ResolverTypeWrapper<ImageSize>;
  InAnyOperatorInput: InAnyOperatorInput;
  InstitutionSettings: ResolverTypeWrapper<InstitutionSettings>;
  InstitutionSettingsInput: InstitutionSettingsInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntegerProperty: ResolverTypeWrapper<IntegerProperty>;
  Item: ResolverTypeWrapper<Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversTypes['AnyEntity']>, parent?: Maybe<ResolversTypes['ItemParent']>, schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversTypes['AnySchemaProperty']> }>;
  ItemConnection: ResolverTypeWrapper<ItemConnection>;
  ItemContribution: ResolverTypeWrapper<Omit<ItemContribution, 'contributor'> & { contributor: ResolversTypes['AnyContributor'] }>;
  ItemContributionConnection: ResolverTypeWrapper<ItemContributionConnection>;
  ItemContributionEdge: ResolverTypeWrapper<ItemContributionEdge>;
  ItemEdge: ResolverTypeWrapper<ItemEdge>;
  ItemParent: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ItemParent']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  LayoutDefinition: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['LayoutDefinition']>;
  LayoutInstance: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['LayoutInstance']>;
  LayoutKind: LayoutKind;
  LinkEntityInput: LinkEntityInput;
  LinkEntityPayload: ResolverTypeWrapper<LinkEntityPayload>;
  LinkListBackground: LinkListBackground;
  LinkListSelectionMode: LinkListSelectionMode;
  LinkListTemplateDefinition: ResolverTypeWrapper<LinkListTemplateDefinition>;
  LinkListTemplateDefinitionSlots: ResolverTypeWrapper<LinkListTemplateDefinitionSlots>;
  LinkListTemplateInstance: ResolverTypeWrapper<Omit<LinkListTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  LinkListTemplateInstanceSlots: ResolverTypeWrapper<LinkListTemplateInstanceSlots>;
  LinkListVariant: LinkListVariant;
  LinkTargetCandidate: ResolverTypeWrapper<Omit<LinkTargetCandidate, 'target'> & { target: ResolversTypes['AnyLinkTarget'] }>;
  LinkTargetCandidateConnection: ResolverTypeWrapper<LinkTargetCandidateConnection>;
  LinkTargetCandidateEdge: ResolverTypeWrapper<LinkTargetCandidateEdge>;
  LinkTargetCandidateFilter: LinkTargetCandidateFilter;
  LinkTargetCandidateKind: LinkTargetCandidateKind;
  ListItemLayoutDefinition: ResolverTypeWrapper<Omit<ListItemLayoutDefinition, 'templates'> & { templates: Array<ResolversTypes['AnyListItemTemplateDefinition']> }>;
  ListItemLayoutInstance: ResolverTypeWrapper<Omit<ListItemLayoutInstance, 'entity' | 'templates'> & { entity: ResolversTypes['AnyEntity'], templates: Array<ResolversTypes['AnyListItemTemplateInstance']> }>;
  ListItemTemplateDefinition: ResolverTypeWrapper<ListItemTemplateDefinition>;
  ListItemTemplateDefinitionSlots: ResolverTypeWrapper<ListItemTemplateDefinitionSlots>;
  ListItemTemplateInstance: ResolverTypeWrapper<Omit<ListItemTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  ListItemTemplateInstanceSlots: ResolverTypeWrapper<ListItemTemplateInstanceSlots>;
  MainLayoutDefinition: ResolverTypeWrapper<Omit<MainLayoutDefinition, 'templates'> & { templates: Array<ResolversTypes['AnyMainTemplateDefinition']> }>;
  MainLayoutInstance: ResolverTypeWrapper<Omit<MainLayoutInstance, 'entity' | 'templates'> & { entity: ResolversTypes['AnyEntity'], templates: Array<ResolversTypes['AnyMainTemplateInstance']> }>;
  MarkdownProperty: ResolverTypeWrapper<MarkdownProperty>;
  MatchesOperatorInput: MatchesOperatorInput;
  MetadataBackground: MetadataBackground;
  MetadataLayoutDefinition: ResolverTypeWrapper<Omit<MetadataLayoutDefinition, 'templates'> & { templates: Array<ResolversTypes['AnyMetadataTemplateDefinition']> }>;
  MetadataLayoutInstance: ResolverTypeWrapper<Omit<MetadataLayoutInstance, 'entity' | 'templates'> & { entity: ResolversTypes['AnyEntity'], templates: Array<ResolversTypes['AnyMetadataTemplateInstance']> }>;
  MetadataTemplateDefinition: ResolverTypeWrapper<MetadataTemplateDefinition>;
  MetadataTemplateDefinitionSlots: ResolverTypeWrapper<MetadataTemplateDefinitionSlots>;
  MetadataTemplateInstance: ResolverTypeWrapper<Omit<MetadataTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  MetadataTemplateInstanceSlots: ResolverTypeWrapper<MetadataTemplateInstanceSlots>;
  MultiselectProperty: ResolverTypeWrapper<MultiselectProperty>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationAttributeError: ResolverTypeWrapper<MutationAttributeError>;
  MutationErrorScope: MutationErrorScope;
  MutationGlobalError: ResolverTypeWrapper<MutationGlobalError>;
  NamedAncestor: ResolverTypeWrapper<Omit<NamedAncestor, 'ancestor'> & { ancestor: ResolversTypes['AnyEntity'] }>;
  NavigationBackground: NavigationBackground;
  NavigationLayoutDefinition: ResolverTypeWrapper<Omit<NavigationLayoutDefinition, 'templates'> & { templates: Array<ResolversTypes['AnyNavigationTemplateDefinition']> }>;
  NavigationLayoutInstance: ResolverTypeWrapper<Omit<NavigationLayoutInstance, 'entity' | 'templates'> & { entity: ResolversTypes['AnyEntity'], templates: Array<ResolversTypes['AnyNavigationTemplateInstance']> }>;
  NavigationTemplateDefinition: ResolverTypeWrapper<NavigationTemplateDefinition>;
  NavigationTemplateDefinitionSlots: ResolverTypeWrapper<NavigationTemplateDefinitionSlots>;
  NavigationTemplateInstance: ResolverTypeWrapper<Omit<NavigationTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  NavigationTemplateInstanceSlots: ResolverTypeWrapper<NavigationTemplateInstanceSlots>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  NullOrderPriority: NullOrderPriority;
  NumericGTEOperatorInput: NumericGteOperatorInput;
  NumericLTEOperatorInput: NumericLteOperatorInput;
  OptionableProperty: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['OptionableProperty']>;
  OrOperatorInput: OrOperatorInput;
  OrderDefinition: ResolverTypeWrapper<OrderDefinition>;
  OrderDefinitionInput: OrderDefinitionInput;
  Ordering: ResolverTypeWrapper<Omit<Ordering, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  OrderingAvailabilityFilter: OrderingAvailabilityFilter;
  OrderingBackground: OrderingBackground;
  OrderingConnection: ResolverTypeWrapper<OrderingConnection>;
  OrderingDefinition: ResolverTypeWrapper<OrderingDefinition>;
  OrderingDirectSelection: OrderingDirectSelection;
  OrderingEdge: ResolverTypeWrapper<OrderingEdge>;
  OrderingEntry: ResolverTypeWrapper<Omit<OrderingEntry, 'entry'> & { entry: ResolversTypes['AnyOrderingEntry'] }>;
  OrderingEntryConnection: ResolverTypeWrapper<OrderingEntryConnection>;
  OrderingEntryEdge: ResolverTypeWrapper<OrderingEntryEdge>;
  OrderingEntrySortMode: OrderingEntrySortMode;
  OrderingFilterDefinition: ResolverTypeWrapper<OrderingFilterDefinition>;
  OrderingFilterDefinitionInput: OrderingFilterDefinitionInput;
  OrderingOrder: OrderingOrder;
  OrderingPath: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['OrderingPath']>;
  OrderingPathGrouping: OrderingPathGrouping;
  OrderingRenderDefinition: ResolverTypeWrapper<OrderingRenderDefinition>;
  OrderingRenderDefinitionInput: OrderingRenderDefinitionInput;
  OrderingRenderMode: OrderingRenderMode;
  OrderingSchemaFilter: ResolverTypeWrapper<OrderingSchemaFilter>;
  OrderingSchemaFilterInput: OrderingSchemaFilterInput;
  OrderingSelectDefinition: ResolverTypeWrapper<OrderingSelectDefinition>;
  OrderingSelectDefinitionInput: OrderingSelectDefinitionInput;
  OrderingSelectLinkDefinition: ResolverTypeWrapper<OrderingSelectLinkDefinition>;
  OrderingSelectLinkDefinitionInput: OrderingSelectLinkDefinitionInput;
  OrderingTemplateDefinition: ResolverTypeWrapper<OrderingTemplateDefinition>;
  OrderingTemplateDefinitionSlots: ResolverTypeWrapper<OrderingTemplateDefinitionSlots>;
  OrderingTemplateInstance: ResolverTypeWrapper<Omit<OrderingTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  OrderingTemplateInstanceSlots: ResolverTypeWrapper<OrderingTemplateInstanceSlots>;
  OrderingVisibilityFilter: OrderingVisibilityFilter;
  OrganizationContributor: ResolverTypeWrapper<OrganizationContributor>;
  Page: ResolverTypeWrapper<Omit<Page, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  PageConnection: ResolverTypeWrapper<PageConnection>;
  PageDirection: PageDirection;
  PageEdge: ResolverTypeWrapper<PageEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageListBackground: PageListBackground;
  PageListTemplateDefinition: ResolverTypeWrapper<PageListTemplateDefinition>;
  PageListTemplateDefinitionSlots: ResolverTypeWrapper<PageListTemplateDefinitionSlots>;
  PageListTemplateInstance: ResolverTypeWrapper<Omit<PageListTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  PageListTemplateInstanceSlots: ResolverTypeWrapper<PageListTemplateInstanceSlots>;
  Paginated: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Paginated']>;
  PermissionGrant: ResolverTypeWrapper<PermissionGrant>;
  PermissionGrid: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['PermissionGrid']>;
  PersonContributor: ResolverTypeWrapper<PersonContributor>;
  PropertyApplicationStrategy: PropertyApplicationStrategy;
  QueriesControlledVocabulary: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['QueriesControlledVocabulary']>;
  QueriesControlledVocabularySource: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['QueriesControlledVocabularySource']>;
  Query: ResolverTypeWrapper<{}>;
  ReferencesEntityVisibility: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ReferencesEntityVisibility']>;
  ReferencesGlobalEntityDates: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ReferencesGlobalEntityDates']>;
  Renderable: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Renderable']>;
  ReparentEntityInput: ReparentEntityInput;
  ReparentEntityPayload: ResolverTypeWrapper<Omit<ReparentEntityPayload, 'child'> & { child?: Maybe<ResolversTypes['AnyChildEntity']> }>;
  ResetOrderingInput: ResetOrderingInput;
  ResetOrderingPayload: ResolverTypeWrapper<ResetOrderingPayload>;
  RevokeAccessInput: RevokeAccessInput;
  RevokeAccessPayload: ResolverTypeWrapper<Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Role: ResolverTypeWrapper<Role>;
  RoleConnection: ResolverTypeWrapper<RoleConnection>;
  RoleEdge: ResolverTypeWrapper<RoleEdge>;
  RoleKind: RoleKind;
  RoleOrder: RoleOrder;
  RolePrimacy: RolePrimacy;
  RoleSystemIdentifier: RoleSystemIdentifier;
  ScalarProperty: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ScalarProperty']>;
  SchemaComponent: ResolverTypeWrapper<Scalars['SchemaComponent']['output']>;
  SchemaCoreDefinition: ResolverTypeWrapper<SchemaCoreDefinition>;
  SchemaDefinition: ResolverTypeWrapper<SchemaDefinition>;
  SchemaDefinitionConnection: ResolverTypeWrapper<SchemaDefinitionConnection>;
  SchemaDefinitionEdge: ResolverTypeWrapper<SchemaDefinitionEdge>;
  SchemaInstance: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SchemaInstance']>;
  SchemaInstanceContext: ResolverTypeWrapper<SchemaInstanceContext>;
  SchemaInstanceValidation: ResolverTypeWrapper<SchemaInstanceValidation>;
  SchemaKind: SchemaKind;
  SchemaOrderingPath: ResolverTypeWrapper<SchemaOrderingPath>;
  SchemaProperty: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SchemaProperty']>;
  SchemaPropertyFunction: SchemaPropertyFunction;
  SchemaPropertyKind: SchemaPropertyKind;
  SchemaPropertyPath: ResolverTypeWrapper<Scalars['SchemaPropertyPath']['output']>;
  SchemaPropertyType: SchemaPropertyType;
  SchemaRenderDefinition: ResolverTypeWrapper<SchemaRenderDefinition>;
  SchemaRenderListMode: SchemaRenderListMode;
  SchemaValueError: ResolverTypeWrapper<SchemaValueError>;
  SchemaVersion: ResolverTypeWrapper<Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, searchableProperties: Array<ResolversTypes['AnySearchableProperty']> }>;
  SchemaVersionConnection: ResolverTypeWrapper<SchemaVersionConnection>;
  SchemaVersionEdge: ResolverTypeWrapper<SchemaVersionEdge>;
  SchemaVersionOption: ResolverTypeWrapper<SchemaVersionOption>;
  SchemaVersionOrder: SchemaVersionOrder;
  SearchOperator: SearchOperator;
  SearchOriginType: SearchOriginType;
  SearchPredicateInput: SearchPredicateInput;
  SearchResult: ResolverTypeWrapper<Omit<SearchResult, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  SearchResultConnection: ResolverTypeWrapper<SearchResultConnection>;
  SearchResultEdge: ResolverTypeWrapper<SearchResultEdge>;
  SearchScope: ResolverTypeWrapper<SearchScope>;
  Searchable: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Searchable']>;
  SearchableCoreProperty: ResolverTypeWrapper<SearchableCoreProperty>;
  SearchableProperty: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SearchableProperty']>;
  SelectInitialOrderingInput: SelectInitialOrderingInput;
  SelectInitialOrderingPayload: ResolverTypeWrapper<Omit<SelectInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  SelectOption: ResolverTypeWrapper<SelectOption>;
  SelectProperty: ResolverTypeWrapper<SelectProperty>;
  SelectionSourceMode: SelectionSourceMode;
  SimpleOrder: SimpleOrder;
  SiteFooter: ResolverTypeWrapper<SiteFooter>;
  SiteFooterInput: SiteFooterInput;
  SiteLogoAttachment: ResolverTypeWrapper<SiteLogoAttachment>;
  SiteLogoMode: SiteLogoMode;
  SiteSettings: ResolverTypeWrapper<SiteSettings>;
  SiteSettingsInput: SiteSettingsInput;
  Slug: ResolverTypeWrapper<Scalars['Slug']['output']>;
  Sluggable: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Sluggable']>;
  StandardMutationPayload: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['StandardMutationPayload']>;
  StaticOrderingPath: ResolverTypeWrapper<StaticOrderingPath>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringProperty: ResolverTypeWrapper<StringProperty>;
  SubtreeNodeFilter: SubtreeNodeFilter;
  SupplementaryBackground: SupplementaryBackground;
  SupplementaryLayoutDefinition: ResolverTypeWrapper<Omit<SupplementaryLayoutDefinition, 'templates'> & { templates: Array<ResolversTypes['AnySupplementaryTemplateDefinition']> }>;
  SupplementaryLayoutInstance: ResolverTypeWrapper<Omit<SupplementaryLayoutInstance, 'entity' | 'templates'> & { entity: ResolversTypes['AnyEntity'], templates: Array<ResolversTypes['AnySupplementaryTemplateInstance']> }>;
  SupplementaryTemplateDefinition: ResolverTypeWrapper<SupplementaryTemplateDefinition>;
  SupplementaryTemplateDefinitionSlots: ResolverTypeWrapper<SupplementaryTemplateDefinitionSlots>;
  SupplementaryTemplateInstance: ResolverTypeWrapper<Omit<SupplementaryTemplateInstance, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  SupplementaryTemplateInstanceSlots: ResolverTypeWrapper<SupplementaryTemplateInstanceSlots>;
  SystemInfo: ResolverTypeWrapper<SystemInfo>;
  TagsProperty: ResolverTypeWrapper<TagsProperty>;
  TemplateDefinition: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TemplateDefinition']>;
  TemplateEntityList: ResolverTypeWrapper<Omit<TemplateEntityList, 'entities'> & { entities: Array<ResolversTypes['AnyEntity']> }>;
  TemplateHasEntityList: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TemplateHasEntityList']>;
  TemplateHasOrderingPair: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TemplateHasOrderingPair']>;
  TemplateInstance: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TemplateInstance']>;
  TemplateKind: TemplateKind;
  TemplateOrderingPair: ResolverTypeWrapper<TemplateOrderingPair>;
  TemplateSelectionSource: ResolverTypeWrapper<Scalars['TemplateSelectionSource']['output']>;
  TemplateSlotBlockDefinition: ResolverTypeWrapper<TemplateSlotBlockDefinition>;
  TemplateSlotBlockInstance: ResolverTypeWrapper<TemplateSlotBlockInstance>;
  TemplateSlotDefinition: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TemplateSlotDefinition']>;
  TemplateSlotInlineDefinition: ResolverTypeWrapper<TemplateSlotInlineDefinition>;
  TemplateSlotInlineInstance: ResolverTypeWrapper<TemplateSlotInlineInstance>;
  TemplateSlotInstance: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TemplateSlotInstance']>;
  TemplateSlotKind: TemplateSlotKind;
  ThemeSettings: ResolverTypeWrapper<ThemeSettings>;
  ThemeSettingsInput: ThemeSettingsInput;
  TimestampProperty: ResolverTypeWrapper<TimestampProperty>;
  TreeNodeFilter: TreeNodeFilter;
  URLProperty: ResolverTypeWrapper<UrlProperty>;
  URLReference: ResolverTypeWrapper<UrlReference>;
  UnknownProperty: ResolverTypeWrapper<UnknownProperty>;
  UpdateAnnouncementInput: UpdateAnnouncementInput;
  UpdateAnnouncementPayload: ResolverTypeWrapper<UpdateAnnouncementPayload>;
  UpdateAssetAttachmentInput: UpdateAssetAttachmentInput;
  UpdateAssetAttachmentPayload: ResolverTypeWrapper<Omit<UpdateAssetAttachmentPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  UpdateAssetInput: UpdateAssetInput;
  UpdateAssetPayload: ResolverTypeWrapper<Omit<UpdateAssetPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: ResolverTypeWrapper<UpdateCollectionPayload>;
  UpdateCommunityInput: UpdateCommunityInput;
  UpdateCommunityPayload: ResolverTypeWrapper<UpdateCommunityPayload>;
  UpdateContributionInput: UpdateContributionInput;
  UpdateContributionPayload: ResolverTypeWrapper<Omit<UpdateContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversTypes['AnyContribution']> }>;
  UpdateGlobalConfigurationInput: UpdateGlobalConfigurationInput;
  UpdateGlobalConfigurationPayload: ResolverTypeWrapper<UpdateGlobalConfigurationPayload>;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: ResolverTypeWrapper<UpdateItemPayload>;
  UpdateOrderingInput: UpdateOrderingInput;
  UpdateOrderingPayload: ResolverTypeWrapper<UpdateOrderingPayload>;
  UpdateOrganizationContributorInput: UpdateOrganizationContributorInput;
  UpdateOrganizationContributorPayload: ResolverTypeWrapper<UpdateOrganizationContributorPayload>;
  UpdatePageInput: UpdatePageInput;
  UpdatePagePayload: ResolverTypeWrapper<UpdatePagePayload>;
  UpdatePersonContributorInput: UpdatePersonContributorInput;
  UpdatePersonContributorPayload: ResolverTypeWrapper<UpdatePersonContributorPayload>;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: ResolverTypeWrapper<UpdateRolePayload>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  UpdateViewerSettingsInput: UpdateViewerSettingsInput;
  UpdateViewerSettingsPayload: ResolverTypeWrapper<UpdateViewerSettingsPayload>;
  UploadID: ResolverTypeWrapper<Scalars['UploadID']['output']>;
  UploadStorage: UploadStorage;
  UploadedFileInput: UploadedFileInput;
  UploadedFileMetadataInput: UploadedFileMetadataInput;
  UpsertContributionInput: UpsertContributionInput;
  UpsertContributionPayload: ResolverTypeWrapper<Omit<UpsertContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversTypes['AnyContribution']> }>;
  User: ResolverTypeWrapper<User>;
  UserAccessGrant: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['UserAccessGrant']>;
  UserCollectionAccessGrant: ResolverTypeWrapper<Omit<UserCollectionAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserCollectionAccessGrantConnection: ResolverTypeWrapper<UserCollectionAccessGrantConnection>;
  UserCollectionAccessGrantEdge: ResolverTypeWrapper<UserCollectionAccessGrantEdge>;
  UserCommunityAccessGrant: ResolverTypeWrapper<Omit<UserCommunityAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserCommunityAccessGrantConnection: ResolverTypeWrapper<UserCommunityAccessGrantConnection>;
  UserCommunityAccessGrantEdge: ResolverTypeWrapper<UserCommunityAccessGrantEdge>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserError: ResolverTypeWrapper<UserError>;
  UserGroup: ResolverTypeWrapper<UserGroup>;
  UserGroupAccessGrant: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['UserGroupAccessGrant']>;
  UserGroupCollectionAccessGrant: ResolverTypeWrapper<Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserGroupCollectionAccessGrantConnection: ResolverTypeWrapper<UserGroupCollectionAccessGrantConnection>;
  UserGroupCollectionAccessGrantEdge: ResolverTypeWrapper<UserGroupCollectionAccessGrantEdge>;
  UserGroupCommunityAccessGrant: ResolverTypeWrapper<Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserGroupCommunityAccessGrantConnection: ResolverTypeWrapper<UserGroupCommunityAccessGrantConnection>;
  UserGroupCommunityAccessGrantEdge: ResolverTypeWrapper<UserGroupCommunityAccessGrantEdge>;
  UserGroupItemAccessGrant: ResolverTypeWrapper<Omit<UserGroupItemAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserGroupItemAccessGrantConnection: ResolverTypeWrapper<UserGroupItemAccessGrantConnection>;
  UserGroupItemAccessGrantEdge: ResolverTypeWrapper<UserGroupItemAccessGrantEdge>;
  UserItemAccessGrant: ResolverTypeWrapper<Omit<UserItemAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserItemAccessGrantConnection: ResolverTypeWrapper<UserItemAccessGrantConnection>;
  UserItemAccessGrantEdge: ResolverTypeWrapper<UserItemAccessGrantEdge>;
  UserOrder: UserOrder;
  UserProfileInput: UserProfileInput;
  VariableDateProperty: ResolverTypeWrapper<VariableDateProperty>;
  VariablePrecisionDate: ResolverTypeWrapper<VariablePrecisionDate>;
  VariablePrecisionDateInput: VariablePrecisionDateInput;
  VersionRequirement: ResolverTypeWrapper<Scalars['VersionRequirement']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessControlList: AccessControlList;
  AccessGrant: ResolversInterfaceTypes<ResolversParentTypes>['AccessGrant'];
  AccessGrantSubject: ResolversInterfaceTypes<ResolversParentTypes>['AccessGrantSubject'];
  Accessible: ResolversInterfaceTypes<ResolversParentTypes>['Accessible'];
  AlterSchemaVersionInput: AlterSchemaVersionInput;
  AlterSchemaVersionPayload: Omit<AlterSchemaVersionPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Analytics: Analytics;
  AnalyticsEventCountResult: AnalyticsEventCountResult;
  AnalyticsEventCountSummary: AnalyticsEventCountSummary;
  AnalyticsRegionCountResult: AnalyticsRegionCountResult;
  AnalyticsRegionCountSummary: AnalyticsRegionCountSummary;
  AndOperatorInput: AndOperatorInput;
  Announcement: Omit<Announcement, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  AnnouncementConnection: AnnouncementConnection;
  AnnouncementEdge: AnnouncementEdge;
  AnyAccessGrant: ResolversUnionTypes<ResolversParentTypes>['AnyAccessGrant'];
  AnyAccessGrantConnection: Omit<AnyAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyAccessGrant']> };
  AnyAccessGrantEdge: Omit<AnyAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyAccessGrant'] };
  AnyAsset: ResolversUnionTypes<ResolversParentTypes>['AnyAsset'];
  AnyAssetConnection: Omit<AnyAssetConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyAsset']> };
  AnyAssetEdge: Omit<AnyAssetEdge, 'node'> & { node: ResolversParentTypes['AnyAsset'] };
  AnyAttachable: ResolversUnionTypes<ResolversParentTypes>['AnyAttachable'];
  AnyChildEntity: ResolversUnionTypes<ResolversParentTypes>['AnyChildEntity'];
  AnyCollectionAccessGrant: ResolversUnionTypes<ResolversParentTypes>['AnyCollectionAccessGrant'];
  AnyCollectionAccessGrantConnection: Omit<AnyCollectionAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyCollectionAccessGrant']> };
  AnyCollectionAccessGrantEdge: Omit<AnyCollectionAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyCollectionAccessGrant'] };
  AnyCommunityAccessGrant: ResolversUnionTypes<ResolversParentTypes>['AnyCommunityAccessGrant'];
  AnyCommunityAccessGrantConnection: Omit<AnyCommunityAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyCommunityAccessGrant']> };
  AnyCommunityAccessGrantEdge: Omit<AnyCommunityAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyCommunityAccessGrant'] };
  AnyContribution: ResolversUnionTypes<ResolversParentTypes>['AnyContribution'];
  AnyContributor: ResolversUnionTypes<ResolversParentTypes>['AnyContributor'];
  AnyContributorConnection: Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyContributor']> };
  AnyContributorEdge: Omit<AnyContributorEdge, 'node'> & { node: ResolversParentTypes['AnyContributor'] };
  AnyEntity: ResolversUnionTypes<ResolversParentTypes>['AnyEntity'];
  AnyHeroTemplateDefinition: ResolversUnionTypes<ResolversParentTypes>['AnyHeroTemplateDefinition'];
  AnyHeroTemplateInstance: ResolversUnionTypes<ResolversParentTypes>['AnyHeroTemplateInstance'];
  AnyLinkTarget: ResolversUnionTypes<ResolversParentTypes>['AnyLinkTarget'];
  AnyListItemTemplateDefinition: ResolversUnionTypes<ResolversParentTypes>['AnyListItemTemplateDefinition'];
  AnyListItemTemplateInstance: ResolversUnionTypes<ResolversParentTypes>['AnyListItemTemplateInstance'];
  AnyMainTemplateDefinition: ResolversUnionTypes<ResolversParentTypes>['AnyMainTemplateDefinition'];
  AnyMainTemplateInstance: ResolversUnionTypes<ResolversParentTypes>['AnyMainTemplateInstance'];
  AnyMetadataTemplateDefinition: ResolversUnionTypes<ResolversParentTypes>['AnyMetadataTemplateDefinition'];
  AnyMetadataTemplateInstance: ResolversUnionTypes<ResolversParentTypes>['AnyMetadataTemplateInstance'];
  AnyNavigationTemplateDefinition: ResolversUnionTypes<ResolversParentTypes>['AnyNavigationTemplateDefinition'];
  AnyNavigationTemplateInstance: ResolversUnionTypes<ResolversParentTypes>['AnyNavigationTemplateInstance'];
  AnyOrderingEntry: ResolversUnionTypes<ResolversParentTypes>['AnyOrderingEntry'];
  AnyOrderingPath: ResolversUnionTypes<ResolversParentTypes>['AnyOrderingPath'];
  AnyScalarProperty: ResolversUnionTypes<ResolversParentTypes>['AnyScalarProperty'];
  AnySchemaProperty: ResolversUnionTypes<ResolversParentTypes>['AnySchemaProperty'];
  AnySearchableProperty: ResolversUnionTypes<ResolversParentTypes>['AnySearchableProperty'];
  AnySupplementaryTemplateDefinition: ResolversUnionTypes<ResolversParentTypes>['AnySupplementaryTemplateDefinition'];
  AnySupplementaryTemplateInstance: ResolversUnionTypes<ResolversParentTypes>['AnySupplementaryTemplateInstance'];
  AnyUserAccessGrant: ResolversUnionTypes<ResolversParentTypes>['AnyUserAccessGrant'];
  AnyUserAccessGrantConnection: Omit<AnyUserAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyUserAccessGrant']> };
  AnyUserAccessGrantEdge: Omit<AnyUserAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyUserAccessGrant'] };
  AnyUserGroupAccessGrant: ResolversUnionTypes<ResolversParentTypes>['AnyUserGroupAccessGrant'];
  AnyUserGroupAccessGrantConnection: Omit<AnyUserGroupAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyUserGroupAccessGrant']> };
  AnyUserGroupAccessGrantEdge: Omit<AnyUserGroupAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyUserGroupAccessGrant'] };
  ApplySchemaPropertiesInput: ApplySchemaPropertiesInput;
  ApplySchemaPropertiesPayload: Omit<ApplySchemaPropertiesPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Asset: ResolversInterfaceTypes<ResolversParentTypes>['Asset'];
  AssetAudio: Omit<AssetAudio, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetDocument: Omit<AssetDocument, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetImage: Omit<AssetImage, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetPDF: Omit<AssetPdf, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetPermissionGrid: AssetPermissionGrid;
  AssetProperty: Omit<AssetProperty, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  AssetSelectOption: AssetSelectOption;
  AssetUnknown: Omit<AssetUnknown, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetVideo: Omit<AssetVideo, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetsProperty: Omit<AssetsProperty, 'assets'> & { assets: Array<ResolversParentTypes['AnyAsset']> };
  Attachable: ResolversInterfaceTypes<ResolversParentTypes>['Attachable'];
  Boolean: Scalars['Boolean']['output'];
  BooleanProperty: BooleanProperty;
  CRUDPermissionGrid: ResolversInterfaceTypes<ResolversParentTypes>['CRUDPermissionGrid'];
  ChildEntity: ResolversInterfaceTypes<ResolversParentTypes>['ChildEntity'];
  ClearInitialOrderingInput: ClearInitialOrderingInput;
  ClearInitialOrderingPayload: Omit<ClearInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Collection: Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversParentTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversParentTypes['AnyEntity']>, parent?: Maybe<ResolversParentTypes['CollectionParent']>, schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversParentTypes['AnySchemaProperty']> };
  CollectionConnection: CollectionConnection;
  CollectionContribution: Omit<CollectionContribution, 'contributor'> & { contributor: ResolversParentTypes['AnyContributor'] };
  CollectionContributionConnection: CollectionContributionConnection;
  CollectionContributionEdge: CollectionContributionEdge;
  CollectionEdge: CollectionEdge;
  CollectionParent: ResolversUnionTypes<ResolversParentTypes>['CollectionParent'];
  Community: Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversParentTypes['AnySchemaProperty']> };
  CommunityConnection: CommunityConnection;
  CommunityEdge: CommunityEdge;
  ContextualPermission: Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<ResolversParentTypes['AnyUserAccessGrant']> };
  ContextualPermissionConnection: ContextualPermissionConnection;
  ContextualPermissionEdge: ContextualPermissionEdge;
  Contributable: ResolversInterfaceTypes<ResolversParentTypes>['Contributable'];
  Contribution: ResolversInterfaceTypes<ResolversParentTypes>['Contribution'];
  ContributionMetadata: ContributionMetadata;
  ContributionMetadataInput: ContributionMetadataInput;
  Contributor: ResolversInterfaceTypes<ResolversParentTypes>['Contributor'];
  ContributorLink: ContributorLink;
  ContributorLinkInput: ContributorLinkInput;
  ContributorListTemplateDefinition: ContributorListTemplateDefinition;
  ContributorListTemplateDefinitionSlots: ContributorListTemplateDefinitionSlots;
  ContributorListTemplateInstance: Omit<ContributorListTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  ContributorListTemplateInstanceSlots: ContributorListTemplateInstanceSlots;
  ContributorProperty: Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<ResolversParentTypes['AnyContributor']> };
  ContributorSelectOption: ContributorSelectOption;
  ContributorsProperty: Omit<ContributorsProperty, 'contributors'> & { contributors: Array<ResolversParentTypes['AnyContributor']> };
  ControlledVocabulariesProperty: ControlledVocabulariesProperty;
  ControlledVocabulary: ControlledVocabulary;
  ControlledVocabularyConnection: ControlledVocabularyConnection;
  ControlledVocabularyDestroyInput: ControlledVocabularyDestroyInput;
  ControlledVocabularyDestroyPayload: ControlledVocabularyDestroyPayload;
  ControlledVocabularyEdge: ControlledVocabularyEdge;
  ControlledVocabularyFilterInput: ControlledVocabularyFilterInput;
  ControlledVocabularyItem: ControlledVocabularyItem;
  ControlledVocabularyItemSet: Scalars['ControlledVocabularyItemSet']['output'];
  ControlledVocabularyProperty: ControlledVocabularyProperty;
  ControlledVocabularySource: ControlledVocabularySource;
  ControlledVocabularySourceConnection: ControlledVocabularySourceConnection;
  ControlledVocabularySourceEdge: ControlledVocabularySourceEdge;
  ControlledVocabularySourceFilterInput: ControlledVocabularySourceFilterInput;
  ControlledVocabularySourceUpdateInput: ControlledVocabularySourceUpdateInput;
  ControlledVocabularySourceUpdatePayload: ControlledVocabularySourceUpdatePayload;
  ControlledVocabularyUpsertInput: ControlledVocabularyUpsertInput;
  ControlledVocabularyUpsertPayload: ControlledVocabularyUpsertPayload;
  CreateAnnouncementInput: CreateAnnouncementInput;
  CreateAnnouncementPayload: CreateAnnouncementPayload;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: CreateCollectionPayload;
  CreateCommunityInput: CreateCommunityInput;
  CreateCommunityPayload: CreateCommunityPayload;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: CreateItemPayload;
  CreateOrderingInput: CreateOrderingInput;
  CreateOrderingPayload: CreateOrderingPayload;
  CreateOrganizationContributorInput: CreateOrganizationContributorInput;
  CreateOrganizationContributorPayload: CreateOrganizationContributorPayload;
  CreatePageInput: CreatePageInput;
  CreatePagePayload: CreatePagePayload;
  CreatePersonContributorInput: CreatePersonContributorInput;
  CreatePersonContributorPayload: CreatePersonContributorPayload;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: CreateRolePayload;
  DateEqualsOperatorInput: DateEqualsOperatorInput;
  DateFilterInput: DateFilterInput;
  DateGTEOperatorInput: DateGteOperatorInput;
  DateLTEOperatorInput: DateLteOperatorInput;
  DateProperty: DateProperty;
  DescendantListTemplateDefinition: DescendantListTemplateDefinition;
  DescendantListTemplateDefinitionSlots: DescendantListTemplateDefinitionSlots;
  DescendantListTemplateInstance: Omit<DescendantListTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  DescendantListTemplateInstanceSlots: DescendantListTemplateInstanceSlots;
  DescribesSchema: ResolversInterfaceTypes<ResolversParentTypes>['DescribesSchema'];
  DestroyAnnouncementInput: DestroyAnnouncementInput;
  DestroyAnnouncementPayload: DestroyAnnouncementPayload;
  DestroyAssetInput: DestroyAssetInput;
  DestroyAssetPayload: DestroyAssetPayload;
  DestroyCollectionInput: DestroyCollectionInput;
  DestroyCollectionPayload: DestroyCollectionPayload;
  DestroyCommunityInput: DestroyCommunityInput;
  DestroyCommunityPayload: DestroyCommunityPayload;
  DestroyContributionInput: DestroyContributionInput;
  DestroyContributionPayload: DestroyContributionPayload;
  DestroyContributorInput: DestroyContributorInput;
  DestroyContributorPayload: DestroyContributorPayload;
  DestroyEntityLinkInput: DestroyEntityLinkInput;
  DestroyEntityLinkPayload: DestroyEntityLinkPayload;
  DestroyItemInput: DestroyItemInput;
  DestroyItemPayload: DestroyItemPayload;
  DestroyMutationPayload: ResolversInterfaceTypes<ResolversParentTypes>['DestroyMutationPayload'];
  DestroyOrderingInput: DestroyOrderingInput;
  DestroyOrderingPayload: DestroyOrderingPayload;
  DestroyPageInput: DestroyPageInput;
  DestroyPagePayload: DestroyPagePayload;
  DetailTemplateDefinition: DetailTemplateDefinition;
  DetailTemplateDefinitionSlots: DetailTemplateDefinitionSlots;
  DetailTemplateInstance: Omit<DetailTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  DetailTemplateInstanceSlots: DetailTemplateInstanceSlots;
  EffectiveAccess: EffectiveAccess;
  EmailProperty: EmailProperty;
  EntitiesProperty: Omit<EntitiesProperty, 'entities'> & { entities: Array<ResolversParentTypes['AnyEntity']> };
  EntitiesSettings: EntitiesSettings;
  EntitiesSettingsInput: EntitiesSettingsInput;
  Entity: ResolversInterfaceTypes<ResolversParentTypes>['Entity'];
  EntityBreadcrumb: Omit<EntityBreadcrumb, 'crumb'> & { crumb: ResolversParentTypes['AnyEntity'] };
  EntityDescendant: Omit<EntityDescendant, 'descendant'> & { descendant: ResolversParentTypes['AnyEntity'] };
  EntityDescendantConnection: EntityDescendantConnection;
  EntityDescendantEdge: EntityDescendantEdge;
  EntityLayouts: EntityLayouts;
  EntityLink: Omit<EntityLink, 'source' | 'target'> & { source: ResolversParentTypes['AnyEntity'], target: ResolversParentTypes['AnyEntity'] };
  EntityLinkConnection: EntityLinkConnection;
  EntityLinkEdge: EntityLinkEdge;
  EntityPermissionGrid: EntityPermissionGrid;
  EntityProperty: Omit<EntityProperty, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  EntitySelectOption: Omit<EntitySelectOption, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  EqualsOperatorInput: EqualsOperatorInput;
  ExposesEffectiveAccess: ResolversInterfaceTypes<ResolversParentTypes>['ExposesEffectiveAccess'];
  ExposesPermissions: ResolversInterfaceTypes<ResolversParentTypes>['ExposesPermissions'];
  Float: Scalars['Float']['output'];
  FloatProperty: FloatProperty;
  FullText: FullText;
  FullTextProperty: FullTextProperty;
  GlobalAccessControlList: GlobalAccessControlList;
  GlobalConfiguration: GlobalConfiguration;
  GrantAccessInput: GrantAccessInput;
  GrantAccessPayload: Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  GroupProperty: Omit<GroupProperty, 'properties'> & { properties: Array<ResolversParentTypes['AnyScalarProperty']> };
  HasAttachmentStorage: ResolversInterfaceTypes<ResolversParentTypes>['HasAttachmentStorage'];
  HasAvailableEntities: ResolversInterfaceTypes<ResolversParentTypes>['HasAvailableEntities'];
  HasControlledVocabulary: ResolversInterfaceTypes<ResolversParentTypes>['HasControlledVocabulary'];
  HasDOI: ResolversInterfaceTypes<ResolversParentTypes>['HasDOI'];
  HasDefaultTimestamps: ResolversInterfaceTypes<ResolversParentTypes>['HasDefaultTimestamps'];
  HasEntityAnalytics: ResolversInterfaceTypes<ResolversParentTypes>['HasEntityAnalytics'];
  HasEntityBreadcrumbs: ResolversInterfaceTypes<ResolversParentTypes>['HasEntityBreadcrumbs'];
  HasISSN: ResolversInterfaceTypes<ResolversParentTypes>['HasISSN'];
  HasSchemaProperties: ResolversInterfaceTypes<ResolversParentTypes>['HasSchemaProperties'];
  HeroLayoutDefinition: Omit<HeroLayoutDefinition, 'templates'> & { templates: Array<ResolversParentTypes['AnyHeroTemplateDefinition']> };
  HeroLayoutInstance: Omit<HeroLayoutInstance, 'entity' | 'templates'> & { entity: ResolversParentTypes['AnyEntity'], templates: Array<ResolversParentTypes['AnyHeroTemplateInstance']> };
  HeroTemplateDefinition: HeroTemplateDefinition;
  HeroTemplateDefinitionSlots: HeroTemplateDefinitionSlots;
  HeroTemplateInstance: Omit<HeroTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  HeroTemplateInstanceSlots: HeroTemplateInstanceSlots;
  HierarchicalSchemaRank: HierarchicalSchemaRank;
  HierarchicalSchemaVersionRank: HierarchicalSchemaVersionRank;
  ID: Scalars['ID']['output'];
  ISO8601Date: Scalars['ISO8601Date']['output'];
  ISO8601DateTime: Scalars['ISO8601DateTime']['output'];
  Image: ResolversInterfaceTypes<ResolversParentTypes>['Image'];
  ImageAttachment: ImageAttachment;
  ImageDerivative: ImageDerivative;
  ImageIdentification: ResolversInterfaceTypes<ResolversParentTypes>['ImageIdentification'];
  ImageMetadata: ImageMetadata;
  ImageMetadataInput: ImageMetadataInput;
  ImageOriginal: ImageOriginal;
  ImageSize: ImageSize;
  InAnyOperatorInput: InAnyOperatorInput;
  InstitutionSettings: InstitutionSettings;
  InstitutionSettingsInput: InstitutionSettingsInput;
  Int: Scalars['Int']['output'];
  IntegerProperty: IntegerProperty;
  Item: Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversParentTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversParentTypes['AnyEntity']>, parent?: Maybe<ResolversParentTypes['ItemParent']>, schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversParentTypes['AnySchemaProperty']> };
  ItemConnection: ItemConnection;
  ItemContribution: Omit<ItemContribution, 'contributor'> & { contributor: ResolversParentTypes['AnyContributor'] };
  ItemContributionConnection: ItemContributionConnection;
  ItemContributionEdge: ItemContributionEdge;
  ItemEdge: ItemEdge;
  ItemParent: ResolversUnionTypes<ResolversParentTypes>['ItemParent'];
  JSON: Scalars['JSON']['output'];
  LayoutDefinition: ResolversInterfaceTypes<ResolversParentTypes>['LayoutDefinition'];
  LayoutInstance: ResolversInterfaceTypes<ResolversParentTypes>['LayoutInstance'];
  LinkEntityInput: LinkEntityInput;
  LinkEntityPayload: LinkEntityPayload;
  LinkListTemplateDefinition: LinkListTemplateDefinition;
  LinkListTemplateDefinitionSlots: LinkListTemplateDefinitionSlots;
  LinkListTemplateInstance: Omit<LinkListTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  LinkListTemplateInstanceSlots: LinkListTemplateInstanceSlots;
  LinkTargetCandidate: Omit<LinkTargetCandidate, 'target'> & { target: ResolversParentTypes['AnyLinkTarget'] };
  LinkTargetCandidateConnection: LinkTargetCandidateConnection;
  LinkTargetCandidateEdge: LinkTargetCandidateEdge;
  ListItemLayoutDefinition: Omit<ListItemLayoutDefinition, 'templates'> & { templates: Array<ResolversParentTypes['AnyListItemTemplateDefinition']> };
  ListItemLayoutInstance: Omit<ListItemLayoutInstance, 'entity' | 'templates'> & { entity: ResolversParentTypes['AnyEntity'], templates: Array<ResolversParentTypes['AnyListItemTemplateInstance']> };
  ListItemTemplateDefinition: ListItemTemplateDefinition;
  ListItemTemplateDefinitionSlots: ListItemTemplateDefinitionSlots;
  ListItemTemplateInstance: Omit<ListItemTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  ListItemTemplateInstanceSlots: ListItemTemplateInstanceSlots;
  MainLayoutDefinition: Omit<MainLayoutDefinition, 'templates'> & { templates: Array<ResolversParentTypes['AnyMainTemplateDefinition']> };
  MainLayoutInstance: Omit<MainLayoutInstance, 'entity' | 'templates'> & { entity: ResolversParentTypes['AnyEntity'], templates: Array<ResolversParentTypes['AnyMainTemplateInstance']> };
  MarkdownProperty: MarkdownProperty;
  MatchesOperatorInput: MatchesOperatorInput;
  MetadataLayoutDefinition: Omit<MetadataLayoutDefinition, 'templates'> & { templates: Array<ResolversParentTypes['AnyMetadataTemplateDefinition']> };
  MetadataLayoutInstance: Omit<MetadataLayoutInstance, 'entity' | 'templates'> & { entity: ResolversParentTypes['AnyEntity'], templates: Array<ResolversParentTypes['AnyMetadataTemplateInstance']> };
  MetadataTemplateDefinition: MetadataTemplateDefinition;
  MetadataTemplateDefinitionSlots: MetadataTemplateDefinitionSlots;
  MetadataTemplateInstance: Omit<MetadataTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  MetadataTemplateInstanceSlots: MetadataTemplateInstanceSlots;
  MultiselectProperty: MultiselectProperty;
  Mutation: {};
  MutationAttributeError: MutationAttributeError;
  MutationGlobalError: MutationGlobalError;
  NamedAncestor: Omit<NamedAncestor, 'ancestor'> & { ancestor: ResolversParentTypes['AnyEntity'] };
  NavigationLayoutDefinition: Omit<NavigationLayoutDefinition, 'templates'> & { templates: Array<ResolversParentTypes['AnyNavigationTemplateDefinition']> };
  NavigationLayoutInstance: Omit<NavigationLayoutInstance, 'entity' | 'templates'> & { entity: ResolversParentTypes['AnyEntity'], templates: Array<ResolversParentTypes['AnyNavigationTemplateInstance']> };
  NavigationTemplateDefinition: NavigationTemplateDefinition;
  NavigationTemplateDefinitionSlots: NavigationTemplateDefinitionSlots;
  NavigationTemplateInstance: Omit<NavigationTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  NavigationTemplateInstanceSlots: NavigationTemplateInstanceSlots;
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  NumericGTEOperatorInput: NumericGteOperatorInput;
  NumericLTEOperatorInput: NumericLteOperatorInput;
  OptionableProperty: ResolversInterfaceTypes<ResolversParentTypes>['OptionableProperty'];
  OrOperatorInput: OrOperatorInput;
  OrderDefinition: OrderDefinition;
  OrderDefinitionInput: OrderDefinitionInput;
  Ordering: Omit<Ordering, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  OrderingConnection: OrderingConnection;
  OrderingDefinition: OrderingDefinition;
  OrderingEdge: OrderingEdge;
  OrderingEntry: Omit<OrderingEntry, 'entry'> & { entry: ResolversParentTypes['AnyOrderingEntry'] };
  OrderingEntryConnection: OrderingEntryConnection;
  OrderingEntryEdge: OrderingEntryEdge;
  OrderingFilterDefinition: OrderingFilterDefinition;
  OrderingFilterDefinitionInput: OrderingFilterDefinitionInput;
  OrderingPath: ResolversInterfaceTypes<ResolversParentTypes>['OrderingPath'];
  OrderingRenderDefinition: OrderingRenderDefinition;
  OrderingRenderDefinitionInput: OrderingRenderDefinitionInput;
  OrderingSchemaFilter: OrderingSchemaFilter;
  OrderingSchemaFilterInput: OrderingSchemaFilterInput;
  OrderingSelectDefinition: OrderingSelectDefinition;
  OrderingSelectDefinitionInput: OrderingSelectDefinitionInput;
  OrderingSelectLinkDefinition: OrderingSelectLinkDefinition;
  OrderingSelectLinkDefinitionInput: OrderingSelectLinkDefinitionInput;
  OrderingTemplateDefinition: OrderingTemplateDefinition;
  OrderingTemplateDefinitionSlots: OrderingTemplateDefinitionSlots;
  OrderingTemplateInstance: Omit<OrderingTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  OrderingTemplateInstanceSlots: OrderingTemplateInstanceSlots;
  OrganizationContributor: OrganizationContributor;
  Page: Omit<Page, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  PageConnection: PageConnection;
  PageEdge: PageEdge;
  PageInfo: PageInfo;
  PageListTemplateDefinition: PageListTemplateDefinition;
  PageListTemplateDefinitionSlots: PageListTemplateDefinitionSlots;
  PageListTemplateInstance: Omit<PageListTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  PageListTemplateInstanceSlots: PageListTemplateInstanceSlots;
  Paginated: ResolversInterfaceTypes<ResolversParentTypes>['Paginated'];
  PermissionGrant: PermissionGrant;
  PermissionGrid: ResolversInterfaceTypes<ResolversParentTypes>['PermissionGrid'];
  PersonContributor: PersonContributor;
  QueriesControlledVocabulary: ResolversInterfaceTypes<ResolversParentTypes>['QueriesControlledVocabulary'];
  QueriesControlledVocabularySource: ResolversInterfaceTypes<ResolversParentTypes>['QueriesControlledVocabularySource'];
  Query: {};
  ReferencesEntityVisibility: ResolversInterfaceTypes<ResolversParentTypes>['ReferencesEntityVisibility'];
  ReferencesGlobalEntityDates: ResolversInterfaceTypes<ResolversParentTypes>['ReferencesGlobalEntityDates'];
  Renderable: ResolversInterfaceTypes<ResolversParentTypes>['Renderable'];
  ReparentEntityInput: ReparentEntityInput;
  ReparentEntityPayload: Omit<ReparentEntityPayload, 'child'> & { child?: Maybe<ResolversParentTypes['AnyChildEntity']> };
  ResetOrderingInput: ResetOrderingInput;
  ResetOrderingPayload: ResetOrderingPayload;
  RevokeAccessInput: RevokeAccessInput;
  RevokeAccessPayload: Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Role: Role;
  RoleConnection: RoleConnection;
  RoleEdge: RoleEdge;
  ScalarProperty: ResolversInterfaceTypes<ResolversParentTypes>['ScalarProperty'];
  SchemaComponent: Scalars['SchemaComponent']['output'];
  SchemaCoreDefinition: SchemaCoreDefinition;
  SchemaDefinition: SchemaDefinition;
  SchemaDefinitionConnection: SchemaDefinitionConnection;
  SchemaDefinitionEdge: SchemaDefinitionEdge;
  SchemaInstance: ResolversInterfaceTypes<ResolversParentTypes>['SchemaInstance'];
  SchemaInstanceContext: SchemaInstanceContext;
  SchemaInstanceValidation: SchemaInstanceValidation;
  SchemaOrderingPath: SchemaOrderingPath;
  SchemaProperty: ResolversInterfaceTypes<ResolversParentTypes>['SchemaProperty'];
  SchemaPropertyPath: Scalars['SchemaPropertyPath']['output'];
  SchemaRenderDefinition: SchemaRenderDefinition;
  SchemaValueError: SchemaValueError;
  SchemaVersion: Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, searchableProperties: Array<ResolversParentTypes['AnySearchableProperty']> };
  SchemaVersionConnection: SchemaVersionConnection;
  SchemaVersionEdge: SchemaVersionEdge;
  SchemaVersionOption: SchemaVersionOption;
  SearchPredicateInput: SearchPredicateInput;
  SearchResult: Omit<SearchResult, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  SearchResultConnection: SearchResultConnection;
  SearchResultEdge: SearchResultEdge;
  SearchScope: SearchScope;
  Searchable: ResolversInterfaceTypes<ResolversParentTypes>['Searchable'];
  SearchableCoreProperty: SearchableCoreProperty;
  SearchableProperty: ResolversInterfaceTypes<ResolversParentTypes>['SearchableProperty'];
  SelectInitialOrderingInput: SelectInitialOrderingInput;
  SelectInitialOrderingPayload: Omit<SelectInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  SelectOption: SelectOption;
  SelectProperty: SelectProperty;
  SiteFooter: SiteFooter;
  SiteFooterInput: SiteFooterInput;
  SiteLogoAttachment: SiteLogoAttachment;
  SiteSettings: SiteSettings;
  SiteSettingsInput: SiteSettingsInput;
  Slug: Scalars['Slug']['output'];
  Sluggable: ResolversInterfaceTypes<ResolversParentTypes>['Sluggable'];
  StandardMutationPayload: ResolversInterfaceTypes<ResolversParentTypes>['StandardMutationPayload'];
  StaticOrderingPath: StaticOrderingPath;
  String: Scalars['String']['output'];
  StringProperty: StringProperty;
  SupplementaryLayoutDefinition: Omit<SupplementaryLayoutDefinition, 'templates'> & { templates: Array<ResolversParentTypes['AnySupplementaryTemplateDefinition']> };
  SupplementaryLayoutInstance: Omit<SupplementaryLayoutInstance, 'entity' | 'templates'> & { entity: ResolversParentTypes['AnyEntity'], templates: Array<ResolversParentTypes['AnySupplementaryTemplateInstance']> };
  SupplementaryTemplateDefinition: SupplementaryTemplateDefinition;
  SupplementaryTemplateDefinitionSlots: SupplementaryTemplateDefinitionSlots;
  SupplementaryTemplateInstance: Omit<SupplementaryTemplateInstance, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  SupplementaryTemplateInstanceSlots: SupplementaryTemplateInstanceSlots;
  SystemInfo: SystemInfo;
  TagsProperty: TagsProperty;
  TemplateDefinition: ResolversInterfaceTypes<ResolversParentTypes>['TemplateDefinition'];
  TemplateEntityList: Omit<TemplateEntityList, 'entities'> & { entities: Array<ResolversParentTypes['AnyEntity']> };
  TemplateHasEntityList: ResolversInterfaceTypes<ResolversParentTypes>['TemplateHasEntityList'];
  TemplateHasOrderingPair: ResolversInterfaceTypes<ResolversParentTypes>['TemplateHasOrderingPair'];
  TemplateInstance: ResolversInterfaceTypes<ResolversParentTypes>['TemplateInstance'];
  TemplateOrderingPair: TemplateOrderingPair;
  TemplateSelectionSource: Scalars['TemplateSelectionSource']['output'];
  TemplateSlotBlockDefinition: TemplateSlotBlockDefinition;
  TemplateSlotBlockInstance: TemplateSlotBlockInstance;
  TemplateSlotDefinition: ResolversInterfaceTypes<ResolversParentTypes>['TemplateSlotDefinition'];
  TemplateSlotInlineDefinition: TemplateSlotInlineDefinition;
  TemplateSlotInlineInstance: TemplateSlotInlineInstance;
  TemplateSlotInstance: ResolversInterfaceTypes<ResolversParentTypes>['TemplateSlotInstance'];
  ThemeSettings: ThemeSettings;
  ThemeSettingsInput: ThemeSettingsInput;
  TimestampProperty: TimestampProperty;
  URLProperty: UrlProperty;
  URLReference: UrlReference;
  UnknownProperty: UnknownProperty;
  UpdateAnnouncementInput: UpdateAnnouncementInput;
  UpdateAnnouncementPayload: UpdateAnnouncementPayload;
  UpdateAssetAttachmentInput: UpdateAssetAttachmentInput;
  UpdateAssetAttachmentPayload: Omit<UpdateAssetAttachmentPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  UpdateAssetInput: UpdateAssetInput;
  UpdateAssetPayload: Omit<UpdateAssetPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: UpdateCollectionPayload;
  UpdateCommunityInput: UpdateCommunityInput;
  UpdateCommunityPayload: UpdateCommunityPayload;
  UpdateContributionInput: UpdateContributionInput;
  UpdateContributionPayload: Omit<UpdateContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversParentTypes['AnyContribution']> };
  UpdateGlobalConfigurationInput: UpdateGlobalConfigurationInput;
  UpdateGlobalConfigurationPayload: UpdateGlobalConfigurationPayload;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: UpdateItemPayload;
  UpdateOrderingInput: UpdateOrderingInput;
  UpdateOrderingPayload: UpdateOrderingPayload;
  UpdateOrganizationContributorInput: UpdateOrganizationContributorInput;
  UpdateOrganizationContributorPayload: UpdateOrganizationContributorPayload;
  UpdatePageInput: UpdatePageInput;
  UpdatePagePayload: UpdatePagePayload;
  UpdatePersonContributorInput: UpdatePersonContributorInput;
  UpdatePersonContributorPayload: UpdatePersonContributorPayload;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: UpdateRolePayload;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: UpdateUserPayload;
  UpdateViewerSettingsInput: UpdateViewerSettingsInput;
  UpdateViewerSettingsPayload: UpdateViewerSettingsPayload;
  UploadID: Scalars['UploadID']['output'];
  UploadedFileInput: UploadedFileInput;
  UploadedFileMetadataInput: UploadedFileMetadataInput;
  UpsertContributionInput: UpsertContributionInput;
  UpsertContributionPayload: Omit<UpsertContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversParentTypes['AnyContribution']> };
  User: User;
  UserAccessGrant: ResolversInterfaceTypes<ResolversParentTypes>['UserAccessGrant'];
  UserCollectionAccessGrant: Omit<UserCollectionAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserCollectionAccessGrantConnection: UserCollectionAccessGrantConnection;
  UserCollectionAccessGrantEdge: UserCollectionAccessGrantEdge;
  UserCommunityAccessGrant: Omit<UserCommunityAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserCommunityAccessGrantConnection: UserCommunityAccessGrantConnection;
  UserCommunityAccessGrantEdge: UserCommunityAccessGrantEdge;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  UserError: UserError;
  UserGroup: UserGroup;
  UserGroupAccessGrant: ResolversInterfaceTypes<ResolversParentTypes>['UserGroupAccessGrant'];
  UserGroupCollectionAccessGrant: Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserGroupCollectionAccessGrantConnection: UserGroupCollectionAccessGrantConnection;
  UserGroupCollectionAccessGrantEdge: UserGroupCollectionAccessGrantEdge;
  UserGroupCommunityAccessGrant: Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserGroupCommunityAccessGrantConnection: UserGroupCommunityAccessGrantConnection;
  UserGroupCommunityAccessGrantEdge: UserGroupCommunityAccessGrantEdge;
  UserGroupItemAccessGrant: Omit<UserGroupItemAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserGroupItemAccessGrantConnection: UserGroupItemAccessGrantConnection;
  UserGroupItemAccessGrantEdge: UserGroupItemAccessGrantEdge;
  UserItemAccessGrant: Omit<UserItemAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserItemAccessGrantConnection: UserItemAccessGrantConnection;
  UserItemAccessGrantEdge: UserItemAccessGrantEdge;
  UserProfileInput: UserProfileInput;
  VariableDateProperty: VariableDateProperty;
  VariablePrecisionDate: VariablePrecisionDate;
  VariablePrecisionDateInput: VariablePrecisionDateInput;
  VersionRequirement: Scalars['VersionRequirement']['output'];
};

export type OneOfDirectiveArgs = { };

export type OneOfDirectiveResolver<Result, Parent, ContextType = any, Args = OneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccessControlListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessControlList'] = ResolversParentTypes['AccessControlList']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['EntityPermissionGrid'], ParentType, ContextType>;
  items?: Resolver<ResolversTypes['EntityPermissionGrid'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  self?: Resolver<ResolversTypes['EntityPermissionGrid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessGrant'] = ResolversParentTypes['AccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
};

export type AccessGrantSubjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessGrantSubject'] = ResolversParentTypes['AccessGrantSubject']> = {
  __resolveType: TypeResolveFn<'User' | 'UserGroup', ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<AccessGrantSubjectAllAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  primaryRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
};

export type AccessibleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Accessible'] = ResolversParentTypes['Accessible']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<AccessibleAllAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
};

export type AlterSchemaVersionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlterSchemaVersionPayload'] = ResolversParentTypes['AlterSchemaVersionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Analytics'] = ResolversParentTypes['Analytics']> = {
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AnalyticsAssetDownloadsArgs, 'dateFilter' | 'entityIds' | 'precision' | 'subjectIds'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AnalyticsAssetDownloadsByRegionArgs, 'dateFilter' | 'entityIds' | 'subjectIds' | 'usOnly'>>;
  entityViews?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AnalyticsEntityViewsArgs, 'dateFilter' | 'entityIds' | 'precision'>>;
  entityViewsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AnalyticsEntityViewsByRegionArgs, 'dateFilter' | 'entityIds' | 'usOnly'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsEventCountResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsEventCountResult'] = ResolversParentTypes['AnalyticsEventCountResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['ISO8601Date'], ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsEventCountSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsEventCountSummary'] = ResolversParentTypes['AnalyticsEventCountSummary']> = {
  maxDate?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  minDate?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  precision?: Resolver<ResolversTypes['AnalyticsPrecision'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['AnalyticsEventCountResult']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unfilteredTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsRegionCountResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsRegionCountResult'] = ResolversParentTypes['AnalyticsRegionCountResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsRegionCountSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsRegionCountSummary'] = ResolversParentTypes['AnalyticsRegionCountSummary']> = {
  results?: Resolver<Array<ResolversTypes['AnalyticsRegionCountResult']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unfilteredTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnouncementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Announcement'] = ResolversParentTypes['Announcement']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedOn?: Resolver<ResolversTypes['ISO8601Date'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  teaser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnouncementConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnouncementConnection'] = ResolversParentTypes['AnnouncementConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnnouncementEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Announcement']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnouncementEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnouncementEdge'] = ResolversParentTypes['AnnouncementEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Announcement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAccessGrant'] = ResolversParentTypes['AnyAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
};

export type AnyAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAccessGrantConnection'] = ResolversParentTypes['AnyAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAccessGrantEdge'] = ResolversParentTypes['AnyAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAsset'] = ResolversParentTypes['AnyAsset']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo', ParentType, ContextType>;
};

export type AnyAssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAssetConnection'] = ResolversParentTypes['AnyAssetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyAssetEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAssetEdge'] = ResolversParentTypes['AnyAssetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyAsset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAttachableResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAttachable'] = ResolversParentTypes['AnyAttachable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
};

export type AnyChildEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyChildEntity'] = ResolversParentTypes['AnyChildEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export type AnyCollectionAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCollectionAccessGrant'] = ResolversParentTypes['AnyCollectionAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserGroupCollectionAccessGrant', ParentType, ContextType>;
};

export type AnyCollectionAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCollectionAccessGrantConnection'] = ResolversParentTypes['AnyCollectionAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyCollectionAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyCollectionAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyCollectionAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCollectionAccessGrantEdge'] = ResolversParentTypes['AnyCollectionAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyCollectionAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyCommunityAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCommunityAccessGrant'] = ResolversParentTypes['AnyCommunityAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCommunityAccessGrant' | 'UserGroupCommunityAccessGrant', ParentType, ContextType>;
};

export type AnyCommunityAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCommunityAccessGrantConnection'] = ResolversParentTypes['AnyCommunityAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyCommunityAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyCommunityAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyCommunityAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCommunityAccessGrantEdge'] = ResolversParentTypes['AnyCommunityAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyCommunityAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContribution'] = ResolversParentTypes['AnyContribution']> = {
  __resolveType: TypeResolveFn<'CollectionContribution' | 'ItemContribution', ParentType, ContextType>;
};

export type AnyContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributor'] = ResolversParentTypes['AnyContributor']> = {
  __resolveType: TypeResolveFn<'OrganizationContributor' | 'PersonContributor', ParentType, ContextType>;
};

export type AnyContributorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributorConnection'] = ResolversParentTypes['AnyContributorConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyContributorEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyContributorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributorEdge'] = ResolversParentTypes['AnyContributorEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyEntity'] = ResolversParentTypes['AnyEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
};

export type AnyHeroTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyHeroTemplateDefinition'] = ResolversParentTypes['AnyHeroTemplateDefinition']> = {
  __resolveType: TypeResolveFn<'HeroTemplateDefinition', ParentType, ContextType>;
};

export type AnyHeroTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyHeroTemplateInstance'] = ResolversParentTypes['AnyHeroTemplateInstance']> = {
  __resolveType: TypeResolveFn<'HeroTemplateInstance', ParentType, ContextType>;
};

export type AnyLinkTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyLinkTarget'] = ResolversParentTypes['AnyLinkTarget']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export type AnyListItemTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyListItemTemplateDefinition'] = ResolversParentTypes['AnyListItemTemplateDefinition']> = {
  __resolveType: TypeResolveFn<'ListItemTemplateDefinition', ParentType, ContextType>;
};

export type AnyListItemTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyListItemTemplateInstance'] = ResolversParentTypes['AnyListItemTemplateInstance']> = {
  __resolveType: TypeResolveFn<'ListItemTemplateInstance', ParentType, ContextType>;
};

export type AnyMainTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyMainTemplateDefinition'] = ResolversParentTypes['AnyMainTemplateDefinition']> = {
  __resolveType: TypeResolveFn<'ContributorListTemplateDefinition' | 'DescendantListTemplateDefinition' | 'DetailTemplateDefinition' | 'LinkListTemplateDefinition' | 'OrderingTemplateDefinition' | 'PageListTemplateDefinition', ParentType, ContextType>;
};

export type AnyMainTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyMainTemplateInstance'] = ResolversParentTypes['AnyMainTemplateInstance']> = {
  __resolveType: TypeResolveFn<'ContributorListTemplateInstance' | 'DescendantListTemplateInstance' | 'DetailTemplateInstance' | 'LinkListTemplateInstance' | 'OrderingTemplateInstance' | 'PageListTemplateInstance', ParentType, ContextType>;
};

export type AnyMetadataTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyMetadataTemplateDefinition'] = ResolversParentTypes['AnyMetadataTemplateDefinition']> = {
  __resolveType: TypeResolveFn<'MetadataTemplateDefinition', ParentType, ContextType>;
};

export type AnyMetadataTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyMetadataTemplateInstance'] = ResolversParentTypes['AnyMetadataTemplateInstance']> = {
  __resolveType: TypeResolveFn<'MetadataTemplateInstance', ParentType, ContextType>;
};

export type AnyNavigationTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyNavigationTemplateDefinition'] = ResolversParentTypes['AnyNavigationTemplateDefinition']> = {
  __resolveType: TypeResolveFn<'NavigationTemplateDefinition', ParentType, ContextType>;
};

export type AnyNavigationTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyNavigationTemplateInstance'] = ResolversParentTypes['AnyNavigationTemplateInstance']> = {
  __resolveType: TypeResolveFn<'NavigationTemplateInstance', ParentType, ContextType>;
};

export type AnyOrderingEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyOrderingEntry'] = ResolversParentTypes['AnyOrderingEntry']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'EntityLink' | 'Item', ParentType, ContextType>;
};

export type AnyOrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyOrderingPath'] = ResolversParentTypes['AnyOrderingPath']> = {
  __resolveType: TypeResolveFn<'SchemaOrderingPath' | 'StaticOrderingPath', ParentType, ContextType>;
};

export type AnyScalarPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyScalarProperty'] = ResolversParentTypes['AnyScalarProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'ControlledVocabulariesProperty' | 'ControlledVocabularyProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
};

export type AnySchemaPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnySchemaProperty'] = ResolversParentTypes['AnySchemaProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'ControlledVocabulariesProperty' | 'ControlledVocabularyProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'GroupProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
};

export type AnySearchablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnySearchableProperty'] = ResolversParentTypes['AnySearchableProperty']> = {
  __resolveType: TypeResolveFn<'BooleanProperty' | 'DateProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TimestampProperty' | 'VariableDateProperty', ParentType, ContextType>;
};

export type AnySupplementaryTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnySupplementaryTemplateDefinition'] = ResolversParentTypes['AnySupplementaryTemplateDefinition']> = {
  __resolveType: TypeResolveFn<'SupplementaryTemplateDefinition', ParentType, ContextType>;
};

export type AnySupplementaryTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnySupplementaryTemplateInstance'] = ResolversParentTypes['AnySupplementaryTemplateInstance']> = {
  __resolveType: TypeResolveFn<'SupplementaryTemplateInstance', ParentType, ContextType>;
};

export type AnyUserAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserAccessGrant'] = ResolversParentTypes['AnyUserAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
};

export type AnyUserAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserAccessGrantConnection'] = ResolversParentTypes['AnyUserAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyUserAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyUserAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyUserAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserAccessGrantEdge'] = ResolversParentTypes['AnyUserAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyUserAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyUserGroupAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserGroupAccessGrant'] = ResolversParentTypes['AnyUserGroupAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant', ParentType, ContextType>;
};

export type AnyUserGroupAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserGroupAccessGrantConnection'] = ResolversParentTypes['AnyUserGroupAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyUserGroupAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyUserGroupAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyUserGroupAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserGroupAccessGrantEdge'] = ResolversParentTypes['AnyUserGroupAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyUserGroupAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplySchemaPropertiesPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplySchemaPropertiesPayload'] = ResolversParentTypes['ApplySchemaPropertiesPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo', ParentType, ContextType>;
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
};

export type AssetAudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetAudio'] = ResolversParentTypes['AssetAudio']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetAudioAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetAudioAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetDocument'] = ResolversParentTypes['AssetDocument']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetDocumentAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetDocumentAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetImage'] = ResolversParentTypes['AssetImage']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetImageAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetImageAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPdfResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPDF'] = ResolversParentTypes['AssetPDF']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetPdfAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetPdfAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPermissionGrid'] = ResolversParentTypes['AssetPermissionGrid']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  create?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  update?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetProperty'] = ResolversParentTypes['AssetProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetSelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetSelectOption'] = ResolversParentTypes['AssetSelectOption']> = {
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetUnknownResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetUnknown'] = ResolversParentTypes['AssetUnknown']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetUnknownAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetUnknownAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetVideo'] = ResolversParentTypes['AssetVideo']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<AssetVideoAssetDownloadsArgs, 'dateFilter' | 'precision'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<AssetVideoAssetDownloadsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetsPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetsProperty'] = ResolversParentTypes['AssetsProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  assets?: Resolver<Array<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttachableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attachable'] = ResolversParentTypes['Attachable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<AttachableAssetsArgs, 'kind' | 'order' | 'pageDirection'>>;
};

export type BooleanPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['BooleanProperty'] = ResolversParentTypes['BooleanProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  checked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkedByDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrudPermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['CRUDPermissionGrid'] = ResolversParentTypes['CRUDPermissionGrid']> = {
  __resolveType: TypeResolveFn<'AssetPermissionGrid' | 'EntityPermissionGrid', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  create?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  update?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type ChildEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChildEntity'] = ResolversParentTypes['ChildEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<ChildEntityAllAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestorByName?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ChildEntityAncestorByNameArgs, 'name'>>;
  ancestorOfType?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ChildEntityAncestorOfTypeArgs, 'schema'>>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<ChildEntityAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<ChildEntityAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<ChildEntityAssignedUsersArgs, 'order' | 'pageDirection'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<ChildEntityDescendantsArgs, 'order' | 'pageDirection' | 'scope'>>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<ChildEntityHiddenAsOfArgs>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCommunityOrdering?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType, RequireFields<ChildEntityInCommunityOrderingArgs, 'identifier'>>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layouts?: Resolver<ResolversTypes['EntityLayouts'], ParentType, ContextType>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<ChildEntityLinkTargetCandidatesArgs, 'kind' | 'pageDirection' | 'title'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<ChildEntityLinksArgs, 'order' | 'pageDirection'>>;
  namedAncestors?: Resolver<Array<ResolversTypes['NamedAncestor']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ChildEntityOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ChildEntityOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<ChildEntityOrderingsArgs, 'availability' | 'order' | 'pageDirection' | 'visibility'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<ChildEntityPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<ChildEntityPagesArgs, 'pageDirection'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<ChildEntitySearchArgs, 'visibility'>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<ChildEntityVisibleAsOfArgs>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
};

export type ClearInitialOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClearInitialOrderingPayload'] = ResolversParentTypes['ClearInitialOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<ResolversTypes['AnyCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionAllAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestorByName?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<CollectionAncestorByNameArgs, 'name'>>;
  ancestorOfType?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<CollectionAncestorOfTypeArgs, 'schema'>>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<CollectionAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<CollectionAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<CollectionAssetDownloadsArgs, 'dateFilter' | 'precision' | 'subjectIds'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<CollectionAssetDownloadsByRegionArgs, 'dateFilter' | 'subjectIds' | 'usOnly'>>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<CollectionAssetsArgs, 'kind' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<CollectionAssignedUsersArgs, 'order' | 'pageDirection'>>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<CollectionAvailableEntitiesForArgs, 'fullPath'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, Partial<CollectionChildrenArgs>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionCollectionsArgs, 'nodeFilter' | 'order' | 'pageDirection'>>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  contributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<CollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<CollectionContributorsArgs, 'kind' | 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<CollectionDescendantsArgs, 'order' | 'pageDirection' | 'scope'>>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityViews?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<CollectionEntityViewsArgs, 'dateFilter' | 'precision'>>;
  entityViewsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<CollectionEntityViewsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  firstCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<CollectionFirstCollectionArgs, 'nodeFilter' | 'order'>>;
  firstItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<CollectionFirstItemArgs, 'nodeFilter' | 'order'>>;
  hasCollections?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasItems?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<CollectionHiddenAsOfArgs>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCommunityOrdering?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType, RequireFields<CollectionInCommunityOrderingArgs, 'identifier'>>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<CollectionItemsArgs, 'nodeFilter' | 'order' | 'pageDirection'>>;
  layouts?: Resolver<ResolversTypes['EntityLayouts'], ParentType, ContextType>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<CollectionLinkTargetCandidatesArgs, 'kind' | 'pageDirection' | 'title'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<CollectionLinksArgs, 'order' | 'pageDirection'>>;
  namedAncestors?: Resolver<Array<ResolversTypes['NamedAncestor']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CollectionOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CollectionOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<CollectionOrderingsArgs, 'availability' | 'order' | 'pageDirection' | 'visibility'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<CollectionPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<CollectionPagesArgs, 'pageDirection'>>;
  parent?: Resolver<Maybe<ResolversTypes['CollectionParent']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
  relatedCollections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionRelatedCollectionsArgs, 'order' | 'pageDirection'>>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<CollectionSchemaPropertyArgs, 'fullPath'>>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<CollectionSearchArgs, 'visibility'>>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userAccessGrants?: Resolver<ResolversTypes['UserCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionUserAccessGrantsArgs, 'order' | 'pageDirection'>>;
  userGroupAccessGrants?: Resolver<ResolversTypes['UserGroupCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionUserGroupAccessGrantsArgs, 'order' | 'pageDirection'>>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<CollectionVisibleAsOfArgs>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContribution'] = ResolversParentTypes['CollectionContribution']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  contributorKind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ContributionMetadata'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContributionConnection'] = ResolversParentTypes['CollectionContributionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionContributionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['CollectionContribution']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContributionEdge'] = ResolversParentTypes['CollectionContributionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionContribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParent'] = ResolversParentTypes['CollectionParent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community', ParentType, ContextType>;
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<ResolversTypes['AnyCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityAllAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<CommunityAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<CommunityAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<CommunityAssetDownloadsArgs, 'dateFilter' | 'precision' | 'subjectIds'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<CommunityAssetDownloadsByRegionArgs, 'dateFilter' | 'subjectIds' | 'usOnly'>>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<CommunityAssetsArgs, 'kind' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<CommunityAssignedUsersArgs, 'order' | 'pageDirection'>>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<CommunityAvailableEntitiesForArgs, 'fullPath'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CommunityCollectionsArgs, 'nodeFilter' | 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<CommunityDescendantsArgs, 'order' | 'pageDirection' | 'scope'>>;
  entityViews?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<CommunityEntityViewsArgs, 'dateFilter' | 'precision'>>;
  entityViewsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<CommunityEntityViewsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  firstCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<CommunityFirstCollectionArgs, 'nodeFilter' | 'order'>>;
  firstItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<CommunityFirstItemArgs, 'nodeFilter' | 'order'>>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageLayout?: Resolver<ResolversTypes['HeroImageLayout'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  layouts?: Resolver<ResolversTypes['EntityLayouts'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<CommunityLinkTargetCandidatesArgs, 'kind' | 'pageDirection' | 'title'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<CommunityLinksArgs, 'order' | 'pageDirection'>>;
  logo?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  logoMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CommunityOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CommunityOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<CommunityOrderingsArgs, 'availability' | 'order' | 'pageDirection' | 'visibility'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<CommunityPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<CommunityPagesArgs, 'pageDirection'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<CommunitySchemaPropertyArgs, 'fullPath'>>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<CommunitySearchArgs, 'visibility'>>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userAccessGrants?: Resolver<ResolversTypes['UserCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityUserAccessGrantsArgs, 'order' | 'pageDirection'>>;
  userGroupAccessGrants?: Resolver<ResolversTypes['UserGroupCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityUserGroupAccessGrantsArgs, 'order' | 'pageDirection'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityConnection'] = ResolversParentTypes['CommunityConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CommunityEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityEdge'] = ResolversParentTypes['CommunityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextualPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContextualPermission'] = ResolversParentTypes['ContextualPermission']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<Array<ResolversTypes['AnyUserAccessGrant']>, ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextualPermissionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContextualPermissionConnection'] = ResolversParentTypes['ContextualPermissionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ContextualPermissionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ContextualPermission']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextualPermissionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContextualPermissionEdge'] = ResolversParentTypes['ContextualPermissionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContextualPermission'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributable'] = ResolversParentTypes['Contributable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<ContributableContributorsArgs, 'kind' | 'order' | 'pageDirection'>>;
};

export type ContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contribution'] = ResolversParentTypes['Contribution']> = {
  __resolveType: TypeResolveFn<'CollectionContribution' | 'ItemContribution', ParentType, ContextType>;
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  contributorKind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ContributionMetadata'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ContributionMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionMetadata'] = ResolversParentTypes['ContributionMetadata']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = {
  __resolveType: TypeResolveFn<'OrganizationContributor' | 'PersonContributor', ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<ContributorCollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  imageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  itemContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<ContributorItemContributionsArgs, 'order' | 'pageDirection'>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ContributorLink']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orcid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ContributorLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorLink'] = ResolversParentTypes['ContributorLink']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorListTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorListTemplateDefinition'] = ResolversParentTypes['ContributorListTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['ContributorListBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['ContributorListTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorListTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorListTemplateDefinitionSlots'] = ResolversParentTypes['ContributorListTemplateDefinitionSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorListTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorListTemplateInstance'] = ResolversParentTypes['ContributorListTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['ContributorListTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['ContributorListTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorListTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorListTemplateInstanceSlots'] = ResolversParentTypes['ContributorListTemplateInstanceSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorProperty'] = ResolversParentTypes['ContributorProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorSelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorSelectOption'] = ResolversParentTypes['ContributorSelectOption']> = {
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorsPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorsProperty'] = ResolversParentTypes['ContributorsProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contributors?: Resolver<Array<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabulariesPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabulariesProperty'] = ResolversParentTypes['ControlledVocabulariesProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType>;
  controlledVocabularyItems?: Resolver<Array<ResolversTypes['ControlledVocabularyItem']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  wants?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabulary'] = ResolversParentTypes['ControlledVocabulary']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemSet?: Resolver<ResolversTypes['ControlledVocabularyItemSet'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['ControlledVocabularyItem']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provides?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularyConnection'] = ResolversParentTypes['ControlledVocabularyConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ControlledVocabularyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularyDestroyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularyDestroyPayload'] = ResolversParentTypes['ControlledVocabularyDestroyPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularyEdge'] = ResolversParentTypes['ControlledVocabularyEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ControlledVocabulary'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularyItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularyItem'] = ResolversParentTypes['ControlledVocabularyItem']> = {
  children?: Resolver<Array<ResolversTypes['ControlledVocabularyItem']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  unselectable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ControlledVocabularyItemSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ControlledVocabularyItemSet'], any> {
  name: 'ControlledVocabularyItemSet';
}

export type ControlledVocabularyPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularyProperty'] = ResolversParentTypes['ControlledVocabularyProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType>;
  controlledVocabularyItem?: Resolver<Maybe<ResolversTypes['ControlledVocabularyItem']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  wants?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularySourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularySource'] = ResolversParentTypes['ControlledVocabularySource']> = {
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  provides?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularySourceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularySourceConnection'] = ResolversParentTypes['ControlledVocabularySourceConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ControlledVocabularySourceEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ControlledVocabularySource']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularySourceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularySourceEdge'] = ResolversParentTypes['ControlledVocabularySourceEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ControlledVocabularySource'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularySourceUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularySourceUpdatePayload'] = ResolversParentTypes['ControlledVocabularySourceUpdatePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  controlledVocabularySource?: Resolver<Maybe<ResolversTypes['ControlledVocabularySource']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ControlledVocabularyUpsertPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ControlledVocabularyUpsertPayload'] = ResolversParentTypes['ControlledVocabularyUpsertPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAnnouncementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAnnouncementPayload'] = ResolversParentTypes['CreateAnnouncementPayload']> = {
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAssetPayload'] = ResolversParentTypes['CreateAssetPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionPayload'] = ResolversParentTypes['CreateCollectionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCommunityPayload'] = ResolversParentTypes['CreateCommunityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateItemPayload'] = ResolversParentTypes['CreateItemPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrderingPayload'] = ResolversParentTypes['CreateOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganizationContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrganizationContributorPayload'] = ResolversParentTypes['CreateOrganizationContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['OrganizationContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePagePayload'] = ResolversParentTypes['CreatePagePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePersonContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePersonContributorPayload'] = ResolversParentTypes['CreatePersonContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['PersonContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRolePayload'] = ResolversParentTypes['CreateRolePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateProperty'] = ResolversParentTypes['DateProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescendantListTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescendantListTemplateDefinition'] = ResolversParentTypes['DescendantListTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['DescendantListBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  dynamicOrderingDefinition?: Resolver<Maybe<ResolversTypes['OrderingDefinition']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  manualListName?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  orderingIdentifier?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  seeAllButtonLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selectionLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selectionMode?: Resolver<Maybe<ResolversTypes['DescendantListSelectionMode']>, ParentType, ContextType>;
  selectionPropertyPath?: Resolver<Maybe<ResolversTypes['SchemaPropertyPath']>, ParentType, ContextType>;
  selectionSource?: Resolver<Maybe<ResolversTypes['TemplateSelectionSource']>, ParentType, ContextType>;
  selectionSourceAncestorName?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  selectionSourceMode?: Resolver<Maybe<ResolversTypes['SelectionSourceMode']>, ParentType, ContextType>;
  showEntityContext?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showSeeAllButton?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['DescendantListTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['DescendantListVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescendantListTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescendantListTemplateDefinitionSlots'] = ResolversParentTypes['DescendantListTemplateDefinitionSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  headerAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescendantListTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescendantListTemplateInstance'] = ResolversParentTypes['DescendantListTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['DescendantListTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  entityList?: Resolver<ResolversTypes['TemplateEntityList'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['DescendantListTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescendantListTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescendantListTemplateInstanceSlots'] = ResolversParentTypes['DescendantListTemplateInstanceSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  headerAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescribesSchemaResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescribesSchema'] = ResolversParentTypes['DescribesSchema']> = {
  __resolveType: TypeResolveFn<'HierarchicalSchemaRank' | 'HierarchicalSchemaVersionRank' | 'SchemaDefinition' | 'SchemaVersion', ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type DestroyAnnouncementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyAnnouncementPayload'] = ResolversParentTypes['DestroyAnnouncementPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyAssetPayload'] = ResolversParentTypes['DestroyAssetPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyCollectionPayload'] = ResolversParentTypes['DestroyCollectionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyCommunityPayload'] = ResolversParentTypes['DestroyCommunityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyContributionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyContributionPayload'] = ResolversParentTypes['DestroyContributionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyContributorPayload'] = ResolversParentTypes['DestroyContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyEntityLinkPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyEntityLinkPayload'] = ResolversParentTypes['DestroyEntityLinkPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyItemPayload'] = ResolversParentTypes['DestroyItemPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyMutationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyMutationPayload'] = ResolversParentTypes['DestroyMutationPayload']> = {
  __resolveType: TypeResolveFn<'ControlledVocabularyDestroyPayload' | 'DestroyAnnouncementPayload' | 'DestroyAssetPayload' | 'DestroyCollectionPayload' | 'DestroyCommunityPayload' | 'DestroyContributionPayload' | 'DestroyContributorPayload' | 'DestroyEntityLinkPayload' | 'DestroyItemPayload' | 'DestroyOrderingPayload' | 'DestroyPagePayload', ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type DestroyOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyOrderingPayload'] = ResolversParentTypes['DestroyOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyPagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyPagePayload'] = ResolversParentTypes['DestroyPagePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DetailTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetailTemplateDefinition'] = ResolversParentTypes['DetailTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['DetailBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  showAnnouncements?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showHeroImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['DetailTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['DetailVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DetailTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetailTemplateDefinitionSlots'] = ResolversParentTypes['DetailTemplateDefinitionSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  subheader?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DetailTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetailTemplateInstance'] = ResolversParentTypes['DetailTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['DetailTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['DetailTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DetailTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetailTemplateInstanceSlots'] = ResolversParentTypes['DetailTemplateInstanceSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  subheader?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EffectiveAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EffectiveAccess'] = ResolversParentTypes['EffectiveAccess']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  availableActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailProperty'] = ResolversParentTypes['EmailProperty']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitiesPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitiesProperty'] = ResolversParentTypes['EntitiesProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  availableEntities?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entities?: Resolver<Array<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitiesSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitiesSettings'] = ResolversParentTypes['EntitiesSettings']> = {
  suppressExternalLinks?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<EntityAllAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<EntityAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<EntityAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<EntityAssignedUsersArgs, 'order' | 'pageDirection'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<EntityDescendantsArgs, 'order' | 'pageDirection' | 'scope'>>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  layouts?: Resolver<ResolversTypes['EntityLayouts'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<EntityLinkTargetCandidatesArgs, 'kind' | 'pageDirection' | 'title'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<EntityLinksArgs, 'order' | 'pageDirection'>>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<EntityOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<EntityOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<EntityOrderingsArgs, 'availability' | 'order' | 'pageDirection' | 'visibility'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<EntityPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<EntityPagesArgs, 'pageDirection'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<EntitySearchArgs, 'visibility'>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EntityBreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityBreadcrumb'] = ResolversParentTypes['EntityBreadcrumb']> = {
  crumb?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityDescendantResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityDescendant'] = ResolversParentTypes['EntityDescendant']> = {
  descendant?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  relativeDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['EntityScope'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityDescendantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityDescendantConnection'] = ResolversParentTypes['EntityDescendantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EntityDescendantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['EntityDescendant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityDescendantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityDescendantEdge'] = ResolversParentTypes['EntityDescendantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EntityDescendant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLayoutsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLayouts'] = ResolversParentTypes['EntityLayouts']> = {
  hero?: Resolver<Maybe<ResolversTypes['HeroLayoutInstance']>, ParentType, ContextType>;
  listItem?: Resolver<Maybe<ResolversTypes['ListItemLayoutInstance']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['MainLayoutInstance']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MetadataLayoutInstance']>, ParentType, ContextType>;
  navigation?: Resolver<Maybe<ResolversTypes['NavigationLayoutInstance']>, ParentType, ContextType>;
  supplementary?: Resolver<Maybe<ResolversTypes['SupplementaryLayoutInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLink'] = ResolversParentTypes['EntityLink']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['EntityLinkOperator'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['EntityLinkScope'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  sourceCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  sourceCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  sourceItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  target?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  targetCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  targetCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  targetItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLinkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLinkConnection'] = ResolversParentTypes['EntityLinkConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EntityLinkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['EntityLink']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLinkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLinkEdge'] = ResolversParentTypes['EntityLinkEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EntityLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityPermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityPermissionGrid'] = ResolversParentTypes['EntityPermissionGrid']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AssetPermissionGrid'], ParentType, ContextType>;
  create?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  manageAccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  update?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityProperty'] = ResolversParentTypes['EntityProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  availableEntities?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitySelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitySelectOption'] = ResolversParentTypes['EntitySelectOption']> = {
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExposesEffectiveAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExposesEffectiveAccess'] = ResolversParentTypes['ExposesEffectiveAccess']> = {
  __resolveType: TypeResolveFn<'Role', ParentType, ContextType>;
  effectiveAccess?: Resolver<ResolversTypes['EffectiveAccess'], ParentType, ContextType>;
};

export type ExposesPermissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExposesPermissions'] = ResolversParentTypes['ExposesPermissions']> = {
  __resolveType: TypeResolveFn<'AccessControlList' | 'AssetPermissionGrid' | 'Collection' | 'Community' | 'ContextualPermission' | 'EffectiveAccess' | 'EntityPermissionGrid' | 'GlobalAccessControlList' | 'Item' | 'User', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
};

export type FloatPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatProperty'] = ResolversParentTypes['FloatProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultFloat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  floatValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FullTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FullText'] = ResolversParentTypes['FullText']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['FullTextKind']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FullTextPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FullTextProperty'] = ResolversParentTypes['FullTextProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullText?: Resolver<Maybe<ResolversTypes['FullText']>, ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalAccessControlListResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalAccessControlList'] = ResolversParentTypes['GlobalAccessControlList']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalConfiguration'] = ResolversParentTypes['GlobalConfiguration']> = {
  entities?: Resolver<ResolversTypes['EntitiesSettings'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  institution?: Resolver<ResolversTypes['InstitutionSettings'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['SiteLogoAttachment'], ParentType, ContextType>;
  logoMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  site?: Resolver<ResolversTypes['SiteSettings'], ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['ThemeSettings'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantAccessPayload'] = ResolversParentTypes['GrantAccessPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  granted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupProperty'] = ResolversParentTypes['GroupProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  legend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  properties?: Resolver<Array<ResolversTypes['AnyScalarProperty']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HasAttachmentStorageResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasAttachmentStorage'] = ResolversParentTypes['HasAttachmentStorage']> = {
  __resolveType: TypeResolveFn<'ImageAttachment' | 'ImageOriginal' | 'SiteLogoAttachment', ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
};

export type HasAvailableEntitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasAvailableEntities'] = ResolversParentTypes['HasAvailableEntities']> = {
  __resolveType: TypeResolveFn<'EntitiesProperty' | 'EntityProperty', ParentType, ContextType>;
  availableEntities?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType>;
};

export type HasControlledVocabularyResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasControlledVocabulary'] = ResolversParentTypes['HasControlledVocabulary']> = {
  __resolveType: TypeResolveFn<'ControlledVocabulariesProperty' | 'ControlledVocabularyProperty', ParentType, ContextType>;
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType>;
  wants?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HasDoiResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasDOI'] = ResolversParentTypes['HasDOI']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HasDefaultTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasDefaultTimestamps'] = ResolversParentTypes['HasDefaultTimestamps']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
};

export type HasEntityAnalyticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasEntityAnalytics'] = ResolversParentTypes['HasEntityAnalytics']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<HasEntityAnalyticsAssetDownloadsArgs, 'dateFilter' | 'precision' | 'subjectIds'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<HasEntityAnalyticsAssetDownloadsByRegionArgs, 'dateFilter' | 'subjectIds' | 'usOnly'>>;
  entityViews?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<HasEntityAnalyticsEntityViewsArgs, 'dateFilter' | 'precision'>>;
  entityViewsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<HasEntityAnalyticsEntityViewsByRegionArgs, 'dateFilter' | 'usOnly'>>;
};

export type HasEntityBreadcrumbsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasEntityBreadcrumbs'] = ResolversParentTypes['HasEntityBreadcrumbs']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'EntitySelectOption' | 'Item', ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
};

export type HasIssnResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasISSN'] = ResolversParentTypes['HasISSN']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HasSchemaPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasSchemaProperties'] = ResolversParentTypes['HasSchemaProperties']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item' | 'SchemaVersion', ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
};

export type HeroLayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroLayoutDefinition'] = ResolversParentTypes['HeroLayoutDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['HeroTemplateDefinition']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyHeroTemplateDefinition']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroLayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroLayoutInstance'] = ResolversParentTypes['HeroLayoutInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutDefinition?: Resolver<ResolversTypes['HeroLayoutDefinition'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['HeroTemplateInstance']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyHeroTemplateInstance']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroTemplateDefinition'] = ResolversParentTypes['HeroTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['HeroBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  descendantSearchPrompt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableDescendantBrowsing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enableDescendantSearch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  listContributors?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showBasicViewMetrics?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showBigSearchPrompt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showBreadcrumbs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showDOI?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showHeroImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showISSN?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showSharingLink?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showSplitDisplay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showThumbnailImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['HeroTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroTemplateDefinitionSlots'] = ResolversParentTypes['HeroTemplateDefinitionSlots']> = {
  callToAction?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  headerAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  headerSidebar?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  headerSummary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  sidebar?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  subheader?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  subheaderAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  subheaderSummary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroTemplateInstance'] = ResolversParentTypes['HeroTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['HeroTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['HeroTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroTemplateInstanceSlots'] = ResolversParentTypes['HeroTemplateInstanceSlots']> = {
  callToAction?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  headerAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  headerSidebar?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  headerSummary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  sidebar?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  subheader?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  subheaderAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  subheaderSummary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HierarchicalSchemaRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['HierarchicalSchemaRank'] = ResolversParentTypes['HierarchicalSchemaRank']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  distinctVersionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versionRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaVersionRank']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HierarchicalSchemaVersionRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['HierarchicalSchemaVersionRank'] = ResolversParentTypes['HierarchicalSchemaVersionRank']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versionNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Iso8601DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Date'], any> {
  name: 'ISO8601Date';
}

export interface Iso8601DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
  name: 'ISO8601DateTime';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  __resolveType: TypeResolveFn<'ImageDerivative' | 'ImageOriginal', ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type ImageAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageAttachment'] = ResolversParentTypes['ImageAttachment']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hero?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  large?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  original?: Resolver<ResolversTypes['ImageOriginal'], ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  small?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  thumb?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageDerivativeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageDerivative'] = ResolversParentTypes['ImageDerivative']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  format?: Resolver<ResolversTypes['ImageDerivativeFormat'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageDerivativeSize'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageIdentificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageIdentification'] = ResolversParentTypes['ImageIdentification']> = {
  __resolveType: TypeResolveFn<'ImageAttachment' | 'ImageDerivative' | 'ImageOriginal' | 'ImageSize' | 'SiteLogoAttachment', ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
};

export type ImageMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageMetadata'] = ResolversParentTypes['ImageMetadata']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageOriginalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageOriginal'] = ResolversParentTypes['ImageOriginal']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSize'] = ResolversParentTypes['ImageSize']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<ResolversTypes['ImageDerivative'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageDerivativeSize'], ParentType, ContextType>;
  webp?: Resolver<ResolversTypes['ImageDerivative'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstitutionSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['InstitutionSettings'] = ResolversParentTypes['InstitutionSettings']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntegerPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntegerProperty'] = ResolversParentTypes['IntegerProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultInteger?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  integerValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<ResolversTypes['AnyCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemAllAccessGrantsArgs, 'order' | 'pageDirection' | 'subject'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestorByName?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ItemAncestorByNameArgs, 'name'>>;
  ancestorOfType?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ItemAncestorOfTypeArgs, 'schema'>>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<ItemAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<ItemAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assetDownloads?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<ItemAssetDownloadsArgs, 'dateFilter' | 'precision' | 'subjectIds'>>;
  assetDownloadsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<ItemAssetDownloadsByRegionArgs, 'dateFilter' | 'subjectIds' | 'usOnly'>>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<ItemAssetsArgs, 'kind' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<ItemAssignedUsersArgs, 'order' | 'pageDirection'>>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<ItemAvailableEntitiesForArgs, 'fullPath'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, Partial<ItemChildrenArgs>>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  contributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<ItemContributionsArgs, 'order' | 'pageDirection'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<ItemContributorsArgs, 'kind' | 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<ItemDescendantsArgs, 'order' | 'pageDirection' | 'scope'>>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityViews?: Resolver<ResolversTypes['AnalyticsEventCountSummary'], ParentType, ContextType, RequireFields<ItemEntityViewsArgs, 'dateFilter' | 'precision'>>;
  entityViewsByRegion?: Resolver<ResolversTypes['AnalyticsRegionCountSummary'], ParentType, ContextType, RequireFields<ItemEntityViewsByRegionArgs, 'dateFilter' | 'usOnly'>>;
  firstItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<ItemFirstItemArgs, 'nodeFilter' | 'order'>>;
  hasItems?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<ItemHiddenAsOfArgs>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCommunityOrdering?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType, RequireFields<ItemInCommunityOrderingArgs, 'identifier'>>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemItemsArgs, 'nodeFilter' | 'order' | 'pageDirection'>>;
  layouts?: Resolver<ResolversTypes['EntityLayouts'], ParentType, ContextType>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<ItemLinkTargetCandidatesArgs, 'kind' | 'pageDirection' | 'title'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<ItemLinksArgs, 'order' | 'pageDirection'>>;
  namedAncestors?: Resolver<Array<ResolversTypes['NamedAncestor']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ItemOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ItemOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<ItemOrderingsArgs, 'availability' | 'order' | 'pageDirection' | 'visibility'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<ItemPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<ItemPagesArgs, 'pageDirection'>>;
  parent?: Resolver<Maybe<ResolversTypes['ItemParent']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
  relatedItems?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemRelatedItemsArgs, 'order' | 'pageDirection'>>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<ItemSchemaPropertyArgs, 'fullPath'>>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<ItemSearchArgs, 'visibility'>>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userAccessGrants?: Resolver<ResolversTypes['UserCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemUserAccessGrantsArgs, 'order' | 'pageDirection'>>;
  userGroupAccessGrants?: Resolver<ResolversTypes['UserGroupCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemUserGroupAccessGrantsArgs, 'order' | 'pageDirection'>>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<ItemVisibleAsOfArgs>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContribution'] = ResolversParentTypes['ItemContribution']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  contributorKind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ContributionMetadata'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContributionConnection'] = ResolversParentTypes['ItemContributionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemContributionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ItemContribution']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContributionEdge'] = ResolversParentTypes['ItemContributionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ItemContribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemParent'] = ResolversParentTypes['ItemParent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LayoutDefinition'] = ResolversParentTypes['LayoutDefinition']> = {
  __resolveType: TypeResolveFn<'HeroLayoutDefinition' | 'ListItemLayoutDefinition' | 'MainLayoutDefinition' | 'MetadataLayoutDefinition' | 'NavigationLayoutDefinition' | 'SupplementaryLayoutDefinition', ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
};

export type LayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['LayoutInstance'] = ResolversParentTypes['LayoutInstance']> = {
  __resolveType: TypeResolveFn<'HeroLayoutInstance' | 'ListItemLayoutInstance' | 'MainLayoutInstance' | 'MetadataLayoutInstance' | 'NavigationLayoutInstance' | 'SupplementaryLayoutInstance', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
};

export type LinkEntityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkEntityPayload'] = ResolversParentTypes['LinkEntityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['EntityLink']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkListTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkListTemplateDefinition'] = ResolversParentTypes['LinkListTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['LinkListBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  dynamicOrderingDefinition?: Resolver<Maybe<ResolversTypes['OrderingDefinition']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  manualListName?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  seeAllButtonLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selectionLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selectionMode?: Resolver<Maybe<ResolversTypes['LinkListSelectionMode']>, ParentType, ContextType>;
  selectionSource?: Resolver<Maybe<ResolversTypes['TemplateSelectionSource']>, ParentType, ContextType>;
  selectionSourceAncestorName?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  selectionSourceMode?: Resolver<Maybe<ResolversTypes['SelectionSourceMode']>, ParentType, ContextType>;
  showEntityContext?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showSeeAllButton?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['LinkListTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['LinkListVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkListTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkListTemplateDefinitionSlots'] = ResolversParentTypes['LinkListTemplateDefinitionSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  headerAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkListTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkListTemplateInstance'] = ResolversParentTypes['LinkListTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['LinkListTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  entityList?: Resolver<ResolversTypes['TemplateEntityList'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['LinkListTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkListTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkListTemplateInstanceSlots'] = ResolversParentTypes['LinkListTemplateInstanceSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  headerAside?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkTargetCandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkTargetCandidate'] = ResolversParentTypes['LinkTargetCandidate']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['LinkTargetCandidateKind'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['AnyLinkTarget'], ParentType, ContextType>;
  targetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkTargetCandidateConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkTargetCandidateConnection'] = ResolversParentTypes['LinkTargetCandidateConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LinkTargetCandidateEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['LinkTargetCandidate']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkTargetCandidateEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkTargetCandidateEdge'] = ResolversParentTypes['LinkTargetCandidateEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LinkTargetCandidate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListItemLayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListItemLayoutDefinition'] = ResolversParentTypes['ListItemLayoutDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['ListItemTemplateDefinition']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyListItemTemplateDefinition']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListItemLayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListItemLayoutInstance'] = ResolversParentTypes['ListItemLayoutInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutDefinition?: Resolver<ResolversTypes['ListItemLayoutDefinition'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['ListItemTemplateInstance']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyListItemTemplateInstance']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListItemTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListItemTemplateDefinition'] = ResolversParentTypes['ListItemTemplateDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['ListItemTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListItemTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListItemTemplateDefinitionSlots'] = ResolversParentTypes['ListItemTemplateDefinitionSlots']> = {
  contextA?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  contextB?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  contextC?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockDefinition']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  metaA?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  metaB?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  subheader?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListItemTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListItemTemplateInstance'] = ResolversParentTypes['ListItemTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['ListItemTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['ListItemTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListItemTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListItemTemplateInstanceSlots'] = ResolversParentTypes['ListItemTemplateInstanceSlots']> = {
  contextA?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  contextB?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  contextC?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['TemplateSlotBlockInstance']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  metaA?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  metaB?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  subheader?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainLayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainLayoutDefinition'] = ResolversParentTypes['MainLayoutDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyMainTemplateDefinition']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainLayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainLayoutInstance'] = ResolversParentTypes['MainLayoutInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutDefinition?: Resolver<ResolversTypes['MainLayoutDefinition'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyMainTemplateInstance']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownProperty'] = ResolversParentTypes['MarkdownProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataLayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataLayoutDefinition'] = ResolversParentTypes['MetadataLayoutDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['MetadataTemplateDefinition']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyMetadataTemplateDefinition']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataLayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataLayoutInstance'] = ResolversParentTypes['MetadataLayoutInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutDefinition?: Resolver<ResolversTypes['MetadataLayoutDefinition'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['MetadataTemplateInstance']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyMetadataTemplateInstance']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataTemplateDefinition'] = ResolversParentTypes['MetadataTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['MetadataBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['MetadataTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataTemplateDefinitionSlots'] = ResolversParentTypes['MetadataTemplateDefinitionSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataTemplateInstance'] = ResolversParentTypes['MetadataTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['MetadataTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['MetadataTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataTemplateInstanceSlots'] = ResolversParentTypes['MetadataTemplateInstanceSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiselectPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiselectProperty'] = ResolversParentTypes['MultiselectProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultSelections?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SelectOption']>, ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selections?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  alterSchemaVersion?: Resolver<Maybe<ResolversTypes['AlterSchemaVersionPayload']>, ParentType, ContextType, RequireFields<MutationAlterSchemaVersionArgs, 'input'>>;
  applySchemaProperties?: Resolver<Maybe<ResolversTypes['ApplySchemaPropertiesPayload']>, ParentType, ContextType, RequireFields<MutationApplySchemaPropertiesArgs, 'input'>>;
  clearInitialOrdering?: Resolver<Maybe<ResolversTypes['ClearInitialOrderingPayload']>, ParentType, ContextType, RequireFields<MutationClearInitialOrderingArgs, 'input'>>;
  controlledVocabularyDestroy?: Resolver<Maybe<ResolversTypes['ControlledVocabularyDestroyPayload']>, ParentType, ContextType, RequireFields<MutationControlledVocabularyDestroyArgs, 'input'>>;
  controlledVocabularySourceUpdate?: Resolver<Maybe<ResolversTypes['ControlledVocabularySourceUpdatePayload']>, ParentType, ContextType, RequireFields<MutationControlledVocabularySourceUpdateArgs, 'input'>>;
  controlledVocabularyUpsert?: Resolver<Maybe<ResolversTypes['ControlledVocabularyUpsertPayload']>, ParentType, ContextType, RequireFields<MutationControlledVocabularyUpsertArgs, 'input'>>;
  createAnnouncement?: Resolver<Maybe<ResolversTypes['CreateAnnouncementPayload']>, ParentType, ContextType, RequireFields<MutationCreateAnnouncementArgs, 'input'>>;
  createAsset?: Resolver<Maybe<ResolversTypes['CreateAssetPayload']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'input'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['CreateCollectionPayload']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'input'>>;
  createCommunity?: Resolver<Maybe<ResolversTypes['CreateCommunityPayload']>, ParentType, ContextType, RequireFields<MutationCreateCommunityArgs, 'input'>>;
  createItem?: Resolver<Maybe<ResolversTypes['CreateItemPayload']>, ParentType, ContextType, RequireFields<MutationCreateItemArgs, 'input'>>;
  createOrdering?: Resolver<Maybe<ResolversTypes['CreateOrderingPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrderingArgs, 'input'>>;
  createOrganizationContributor?: Resolver<Maybe<ResolversTypes['CreateOrganizationContributorPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationContributorArgs, 'input'>>;
  createPage?: Resolver<Maybe<ResolversTypes['CreatePagePayload']>, ParentType, ContextType, RequireFields<MutationCreatePageArgs, 'input'>>;
  createPersonContributor?: Resolver<Maybe<ResolversTypes['CreatePersonContributorPayload']>, ParentType, ContextType, RequireFields<MutationCreatePersonContributorArgs, 'input'>>;
  createRole?: Resolver<Maybe<ResolversTypes['CreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'input'>>;
  destroyAnnouncement?: Resolver<Maybe<ResolversTypes['DestroyAnnouncementPayload']>, ParentType, ContextType, RequireFields<MutationDestroyAnnouncementArgs, 'input'>>;
  destroyAsset?: Resolver<Maybe<ResolversTypes['DestroyAssetPayload']>, ParentType, ContextType, RequireFields<MutationDestroyAssetArgs, 'input'>>;
  destroyCollection?: Resolver<Maybe<ResolversTypes['DestroyCollectionPayload']>, ParentType, ContextType, RequireFields<MutationDestroyCollectionArgs, 'input'>>;
  destroyCommunity?: Resolver<Maybe<ResolversTypes['DestroyCommunityPayload']>, ParentType, ContextType, RequireFields<MutationDestroyCommunityArgs, 'input'>>;
  destroyContribution?: Resolver<Maybe<ResolversTypes['DestroyContributionPayload']>, ParentType, ContextType, RequireFields<MutationDestroyContributionArgs, 'input'>>;
  destroyContributor?: Resolver<Maybe<ResolversTypes['DestroyContributorPayload']>, ParentType, ContextType, RequireFields<MutationDestroyContributorArgs, 'input'>>;
  destroyEntityLink?: Resolver<Maybe<ResolversTypes['DestroyEntityLinkPayload']>, ParentType, ContextType, RequireFields<MutationDestroyEntityLinkArgs, 'input'>>;
  destroyItem?: Resolver<Maybe<ResolversTypes['DestroyItemPayload']>, ParentType, ContextType, RequireFields<MutationDestroyItemArgs, 'input'>>;
  destroyOrdering?: Resolver<Maybe<ResolversTypes['DestroyOrderingPayload']>, ParentType, ContextType, RequireFields<MutationDestroyOrderingArgs, 'input'>>;
  destroyPage?: Resolver<Maybe<ResolversTypes['DestroyPagePayload']>, ParentType, ContextType, RequireFields<MutationDestroyPageArgs, 'input'>>;
  grantAccess?: Resolver<Maybe<ResolversTypes['GrantAccessPayload']>, ParentType, ContextType, RequireFields<MutationGrantAccessArgs, 'input'>>;
  linkEntity?: Resolver<Maybe<ResolversTypes['LinkEntityPayload']>, ParentType, ContextType, RequireFields<MutationLinkEntityArgs, 'input'>>;
  reparentEntity?: Resolver<Maybe<ResolversTypes['ReparentEntityPayload']>, ParentType, ContextType, RequireFields<MutationReparentEntityArgs, 'input'>>;
  resetOrdering?: Resolver<Maybe<ResolversTypes['ResetOrderingPayload']>, ParentType, ContextType, RequireFields<MutationResetOrderingArgs, 'input'>>;
  revokeAccess?: Resolver<Maybe<ResolversTypes['RevokeAccessPayload']>, ParentType, ContextType, RequireFields<MutationRevokeAccessArgs, 'input'>>;
  selectInitialOrdering?: Resolver<Maybe<ResolversTypes['SelectInitialOrderingPayload']>, ParentType, ContextType, RequireFields<MutationSelectInitialOrderingArgs, 'input'>>;
  updateAnnouncement?: Resolver<Maybe<ResolversTypes['UpdateAnnouncementPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAnnouncementArgs, 'input'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['UpdateAssetPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'input'>>;
  updateAssetAttachment?: Resolver<Maybe<ResolversTypes['UpdateAssetAttachmentPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAssetAttachmentArgs, 'input'>>;
  updateCollection?: Resolver<Maybe<ResolversTypes['UpdateCollectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'input'>>;
  updateCommunity?: Resolver<Maybe<ResolversTypes['UpdateCommunityPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCommunityArgs, 'input'>>;
  updateContribution?: Resolver<Maybe<ResolversTypes['UpdateContributionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateContributionArgs, 'input'>>;
  updateGlobalConfiguration?: Resolver<Maybe<ResolversTypes['UpdateGlobalConfigurationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateGlobalConfigurationArgs, 'input'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['UpdateItemPayload']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input'>>;
  updateOrdering?: Resolver<Maybe<ResolversTypes['UpdateOrderingPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrderingArgs, 'input'>>;
  updateOrganizationContributor?: Resolver<Maybe<ResolversTypes['UpdateOrganizationContributorPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationContributorArgs, 'input'>>;
  updatePage?: Resolver<Maybe<ResolversTypes['UpdatePagePayload']>, ParentType, ContextType, RequireFields<MutationUpdatePageArgs, 'input'>>;
  updatePersonContributor?: Resolver<Maybe<ResolversTypes['UpdatePersonContributorPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePersonContributorArgs, 'input'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['UpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateViewerSettings?: Resolver<Maybe<ResolversTypes['UpdateViewerSettingsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateViewerSettingsArgs, 'input'>>;
  upsertContribution?: Resolver<Maybe<ResolversTypes['UpsertContributionPayload']>, ParentType, ContextType, RequireFields<MutationUpsertContributionArgs, 'input'>>;
};

export type MutationAttributeErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationAttributeError'] = ResolversParentTypes['MutationAttributeError']> = {
  messages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationGlobalErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationGlobalError'] = ResolversParentTypes['MutationGlobalError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NamedAncestorResolvers<ContextType = any, ParentType extends ResolversParentTypes['NamedAncestor'] = ResolversParentTypes['NamedAncestor']> = {
  ancestor?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  ancestorDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relativeDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationLayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationLayoutDefinition'] = ResolversParentTypes['NavigationLayoutDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['NavigationTemplateDefinition']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyNavigationTemplateDefinition']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationLayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationLayoutInstance'] = ResolversParentTypes['NavigationLayoutInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutDefinition?: Resolver<ResolversTypes['NavigationLayoutDefinition'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['NavigationTemplateInstance']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnyNavigationTemplateInstance']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationTemplateDefinition'] = ResolversParentTypes['NavigationTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['NavigationBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['NavigationTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationTemplateDefinitionSlots'] = ResolversParentTypes['NavigationTemplateDefinitionSlots']> = {
  entityLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationTemplateInstance'] = ResolversParentTypes['NavigationTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['NavigationTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['NavigationTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NavigationTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavigationTemplateInstanceSlots'] = ResolversParentTypes['NavigationTemplateInstanceSlots']> = {
  entityLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Announcement' | 'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo' | 'Collection' | 'CollectionContribution' | 'Community' | 'ContextualPermission' | 'ContributorListTemplateDefinition' | 'ContributorListTemplateInstance' | 'ControlledVocabulary' | 'ControlledVocabularyItem' | 'ControlledVocabularySource' | 'DescendantListTemplateDefinition' | 'DescendantListTemplateInstance' | 'DetailTemplateDefinition' | 'DetailTemplateInstance' | 'EntityBreadcrumb' | 'EntityLink' | 'GlobalConfiguration' | 'HeroLayoutDefinition' | 'HeroLayoutInstance' | 'HeroTemplateDefinition' | 'HeroTemplateInstance' | 'HierarchicalSchemaRank' | 'HierarchicalSchemaVersionRank' | 'Item' | 'ItemContribution' | 'LinkListTemplateDefinition' | 'LinkListTemplateInstance' | 'LinkTargetCandidate' | 'ListItemLayoutDefinition' | 'ListItemLayoutInstance' | 'ListItemTemplateDefinition' | 'ListItemTemplateInstance' | 'MainLayoutDefinition' | 'MainLayoutInstance' | 'MetadataLayoutDefinition' | 'MetadataLayoutInstance' | 'MetadataTemplateDefinition' | 'MetadataTemplateInstance' | 'NavigationLayoutDefinition' | 'NavigationLayoutInstance' | 'NavigationTemplateDefinition' | 'NavigationTemplateInstance' | 'Ordering' | 'OrderingEntry' | 'OrderingTemplateDefinition' | 'OrderingTemplateInstance' | 'OrganizationContributor' | 'Page' | 'PageListTemplateDefinition' | 'PageListTemplateInstance' | 'PersonContributor' | 'Role' | 'SchemaDefinition' | 'SchemaVersion' | 'SupplementaryLayoutDefinition' | 'SupplementaryLayoutInstance' | 'SupplementaryTemplateDefinition' | 'SupplementaryTemplateInstance' | 'User' | 'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroup' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OptionablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['OptionableProperty'] = ResolversParentTypes['OptionableProperty']> = {
  __resolveType: TypeResolveFn<'MultiselectProperty' | 'SelectProperty', ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SelectOption']>, ParentType, ContextType>;
};

export type OrderDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDefinition'] = ResolversParentTypes['OrderDefinition']> = {
  direction?: Resolver<ResolversTypes['Direction'], ParentType, ContextType>;
  nulls?: Resolver<ResolversTypes['NullOrderPriority'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ordering'] = ResolversParentTypes['Ordering']> = {
  children?: Resolver<ResolversTypes['OrderingEntryConnection'], ParentType, ContextType, RequireFields<OrderingChildrenArgs, 'order' | 'pageDirection'>>;
  constant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  disabledAt?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  filter?: Resolver<ResolversTypes['OrderingFilterDefinition'], ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inheritedFromSchema?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initial?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Array<ResolversTypes['OrderDefinition']>, ParentType, ContextType>;
  pristine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  render?: Resolver<ResolversTypes['OrderingRenderDefinition'], ParentType, ContextType>;
  select?: Resolver<ResolversTypes['OrderingSelectDefinition'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingConnection'] = ResolversParentTypes['OrderingConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderingEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Ordering']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingDefinition'] = ResolversParentTypes['OrderingDefinition']> = {
  constant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  filter?: Resolver<ResolversTypes['OrderingFilterDefinition'], ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Array<ResolversTypes['OrderDefinition']>, ParentType, ContextType>;
  render?: Resolver<ResolversTypes['OrderingRenderDefinition'], ParentType, ContextType>;
  select?: Resolver<ResolversTypes['OrderingSelectDefinition'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEdge'] = ResolversParentTypes['OrderingEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Ordering'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEntry'] = ResolversParentTypes['OrderingEntry']> = {
  ancestors?: Resolver<Array<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entry?: Resolver<ResolversTypes['AnyOrderingEntry'], ParentType, ContextType>;
  entrySlug?: Resolver<Maybe<ResolversTypes['Slug']>, ParentType, ContextType>;
  entryTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nextSibling?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  ordering?: Resolver<ResolversTypes['Ordering'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prevSibling?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  relativeDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  treeDepth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEntryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEntryConnection'] = ResolversParentTypes['OrderingEntryConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderingEntryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEntryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEntryEdge'] = ResolversParentTypes['OrderingEntryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrderingEntry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingFilterDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingFilterDefinition'] = ResolversParentTypes['OrderingFilterDefinition']> = {
  schemas?: Resolver<Array<ResolversTypes['OrderingSchemaFilter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingPath'] = ResolversParentTypes['OrderingPath']> = {
  __resolveType: TypeResolveFn<'SchemaOrderingPath' | 'StaticOrderingPath', ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grouping?: Resolver<ResolversTypes['OrderingPathGrouping'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
};

export type OrderingRenderDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingRenderDefinition'] = ResolversParentTypes['OrderingRenderDefinition']> = {
  mode?: Resolver<ResolversTypes['OrderingRenderMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingSchemaFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingSchemaFilter'] = ResolversParentTypes['OrderingSchemaFilter']> = {
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['VersionRequirement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingSelectDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingSelectDefinition'] = ResolversParentTypes['OrderingSelectDefinition']> = {
  direct?: Resolver<ResolversTypes['OrderingDirectSelection'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['OrderingSelectLinkDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingSelectLinkDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingSelectLinkDefinition'] = ResolversParentTypes['OrderingSelectLinkDefinition']> = {
  contains?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  references?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingTemplateDefinition'] = ResolversParentTypes['OrderingTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['OrderingBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  orderingIdentifier?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  orderingSource?: Resolver<Maybe<ResolversTypes['TemplateSelectionSource']>, ParentType, ContextType>;
  orderingSourceAncestorName?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  orderingSourceMode?: Resolver<Maybe<ResolversTypes['SelectionSourceMode']>, ParentType, ContextType>;
  selectionSource?: Resolver<Maybe<ResolversTypes['TemplateSelectionSource']>, ParentType, ContextType>;
  selectionSourceAncestorName?: Resolver<Maybe<ResolversTypes['SchemaComponent']>, ParentType, ContextType>;
  selectionSourceMode?: Resolver<Maybe<ResolversTypes['SelectionSourceMode']>, ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['OrderingTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingTemplateDefinitionSlots'] = ResolversParentTypes['OrderingTemplateDefinitionSlots']> = {
  nextLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  previousLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingTemplateInstance'] = ResolversParentTypes['OrderingTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['OrderingTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  orderingPair?: Resolver<ResolversTypes['TemplateOrderingPair'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['OrderingTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingTemplateInstanceSlots'] = ResolversParentTypes['OrderingTemplateInstanceSlots']> = {
  nextLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  previousLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationContributor'] = ResolversParentTypes['OrganizationContributor']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<OrganizationContributorCollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  imageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  itemContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<OrganizationContributorItemContributionsArgs, 'order' | 'pageDirection'>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  legalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ContributorLink']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orcid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageConnection'] = ResolversParentTypes['PageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageEdge'] = ResolversParentTypes['PageEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnfilteredCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageListTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageListTemplateDefinition'] = ResolversParentTypes['PageListTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['PageListBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['PageListTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageListTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageListTemplateDefinitionSlots'] = ResolversParentTypes['PageListTemplateDefinitionSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageListTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageListTemplateInstance'] = ResolversParentTypes['PageListTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['PageListTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['PageListTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageListTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageListTemplateInstanceSlots'] = ResolversParentTypes['PageListTemplateInstanceSlots']> = {
  header?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paginated'] = ResolversParentTypes['Paginated']> = {
  __resolveType: TypeResolveFn<'AnnouncementConnection' | 'AnyAccessGrantConnection' | 'AnyAssetConnection' | 'AnyCollectionAccessGrantConnection' | 'AnyCommunityAccessGrantConnection' | 'AnyContributorConnection' | 'AnyUserAccessGrantConnection' | 'AnyUserGroupAccessGrantConnection' | 'CollectionConnection' | 'CollectionContributionConnection' | 'CommunityConnection' | 'ContextualPermissionConnection' | 'ControlledVocabularyConnection' | 'ControlledVocabularySourceConnection' | 'EntityDescendantConnection' | 'EntityLinkConnection' | 'ItemConnection' | 'ItemContributionConnection' | 'LinkTargetCandidateConnection' | 'OrderingConnection' | 'OrderingEntryConnection' | 'PageConnection' | 'RoleConnection' | 'SchemaDefinitionConnection' | 'SchemaVersionConnection' | 'SearchResultConnection' | 'UserCollectionAccessGrantConnection' | 'UserCommunityAccessGrantConnection' | 'UserConnection' | 'UserGroupCollectionAccessGrantConnection' | 'UserGroupCommunityAccessGrantConnection' | 'UserGroupItemAccessGrantConnection' | 'UserItemAccessGrantConnection', ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PermissionGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionGrant'] = ResolversParentTypes['PermissionGrant']> = {
  allowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionGrid'] = ResolversParentTypes['PermissionGrid']> = {
  __resolveType: TypeResolveFn<'AssetPermissionGrid' | 'EntityPermissionGrid', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
};

export type PersonContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonContributor'] = ResolversParentTypes['PersonContributor']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<PersonContributorCollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  imageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  itemContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<PersonContributorItemContributionsArgs, 'order' | 'pageDirection'>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ContributorLink']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orcid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueriesControlledVocabularyResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueriesControlledVocabulary'] = ResolversParentTypes['QueriesControlledVocabulary']> = {
  __resolveType: TypeResolveFn<'Query', ParentType, ContextType>;
  controlledVocabularies?: Resolver<ResolversTypes['ControlledVocabularyConnection'], ParentType, ContextType, RequireFields<QueriesControlledVocabularyControlledVocabulariesArgs, 'filters' | 'orFilters' | 'order' | 'pageDirection'>>;
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType, RequireFields<QueriesControlledVocabularyControlledVocabularyArgs, 'slug'>>;
};

export type QueriesControlledVocabularySourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueriesControlledVocabularySource'] = ResolversParentTypes['QueriesControlledVocabularySource']> = {
  __resolveType: TypeResolveFn<'Query', ParentType, ContextType>;
  controlledVocabularySource?: Resolver<Maybe<ResolversTypes['ControlledVocabularySource']>, ParentType, ContextType, RequireFields<QueriesControlledVocabularySourceControlledVocabularySourceArgs, 'slug'>>;
  controlledVocabularySources?: Resolver<ResolversTypes['ControlledVocabularySourceConnection'], ParentType, ContextType, RequireFields<QueriesControlledVocabularySourceControlledVocabularySourcesArgs, 'filters' | 'orFilters' | 'order' | 'pageDirection'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  accessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<QueryAccessGrantsArgs, 'entity' | 'order' | 'pageDirection' | 'subject'>>;
  analytics?: Resolver<ResolversTypes['Analytics'], ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'slug'>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionArgs, 'slug'>>;
  collectionContribution?: Resolver<Maybe<ResolversTypes['CollectionContribution']>, ParentType, ContextType, RequireFields<QueryCollectionContributionArgs, 'slug'>>;
  communities?: Resolver<ResolversTypes['CommunityConnection'], ParentType, ContextType, RequireFields<QueryCommunitiesArgs, 'order' | 'pageDirection'>>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QueryCommunityArgs, 'slug'>>;
  communityByTitle?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QueryCommunityByTitleArgs, 'title'>>;
  contributor?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType, RequireFields<QueryContributorArgs, 'slug'>>;
  contributorLookup?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType, RequireFields<QueryContributorLookupArgs, 'by' | 'order' | 'value'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<QueryContributorsArgs, 'kind' | 'order' | 'pageDirection'>>;
  controlledVocabularies?: Resolver<ResolversTypes['ControlledVocabularyConnection'], ParentType, ContextType, RequireFields<QueryControlledVocabulariesArgs, 'filters' | 'orFilters' | 'order' | 'pageDirection'>>;
  controlledVocabulary?: Resolver<Maybe<ResolversTypes['ControlledVocabulary']>, ParentType, ContextType, RequireFields<QueryControlledVocabularyArgs, 'slug'>>;
  controlledVocabularySource?: Resolver<Maybe<ResolversTypes['ControlledVocabularySource']>, ParentType, ContextType, RequireFields<QueryControlledVocabularySourceArgs, 'slug'>>;
  controlledVocabularySources?: Resolver<ResolversTypes['ControlledVocabularySourceConnection'], ParentType, ContextType, RequireFields<QueryControlledVocabularySourcesArgs, 'filters' | 'orFilters' | 'order' | 'pageDirection'>>;
  globalConfiguration?: Resolver<ResolversTypes['GlobalConfiguration'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'slug'>>;
  itemContribution?: Resolver<Maybe<ResolversTypes['ItemContribution']>, ParentType, ContextType, RequireFields<QueryItemContributionArgs, 'slug'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryNodesArgs, 'ids'>>;
  orderingPaths?: Resolver<Array<ResolversTypes['AnyOrderingPath']>, ParentType, ContextType, Partial<QueryOrderingPathsArgs>>;
  roles?: Resolver<ResolversTypes['RoleConnection'], ParentType, ContextType, RequireFields<QueryRolesArgs, 'order'>>;
  schemaDefinition?: Resolver<Maybe<ResolversTypes['SchemaDefinition']>, ParentType, ContextType, RequireFields<QuerySchemaDefinitionArgs, 'slug'>>;
  schemaDefinitions?: Resolver<ResolversTypes['SchemaDefinitionConnection'], ParentType, ContextType, RequireFields<QuerySchemaDefinitionsArgs, 'order' | 'pageDirection'>>;
  schemaVersion?: Resolver<Maybe<ResolversTypes['SchemaVersion']>, ParentType, ContextType, RequireFields<QuerySchemaVersionArgs, 'slug'>>;
  schemaVersionOptions?: Resolver<Array<ResolversTypes['SchemaVersionOption']>, ParentType, ContextType, RequireFields<QuerySchemaVersionOptionsArgs, 'kind'>>;
  schemaVersions?: Resolver<ResolversTypes['SchemaVersionConnection'], ParentType, ContextType, RequireFields<QuerySchemaVersionsArgs, 'order' | 'pageDirection'>>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'visibility'>>;
  systemInfo?: Resolver<ResolversTypes['SystemInfo'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'slug'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'order' | 'pageDirection'>>;
  viewer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type ReferencesEntityVisibilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferencesEntityVisibility'] = ResolversParentTypes['ReferencesEntityVisibility']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<ReferencesEntityVisibilityHiddenAsOfArgs>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<ReferencesEntityVisibilityVisibleAsOfArgs>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
};

export type ReferencesGlobalEntityDatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferencesGlobalEntityDates'] = ResolversParentTypes['ReferencesGlobalEntityDates']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
};

export type RenderableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Renderable'] = ResolversParentTypes['Renderable']> = {
  __resolveType: TypeResolveFn<'ContributorListTemplateInstance' | 'DescendantListTemplateInstance' | 'DetailTemplateInstance' | 'HeroLayoutInstance' | 'HeroTemplateInstance' | 'LinkListTemplateInstance' | 'ListItemLayoutInstance' | 'ListItemTemplateInstance' | 'MainLayoutInstance' | 'MetadataLayoutInstance' | 'MetadataTemplateInstance' | 'NavigationLayoutInstance' | 'NavigationTemplateInstance' | 'OrderingTemplateInstance' | 'PageListTemplateInstance' | 'SupplementaryLayoutInstance' | 'SupplementaryTemplateInstance', ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
};

export type ReparentEntityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReparentEntityPayload'] = ResolversParentTypes['ReparentEntityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  child?: Resolver<Maybe<ResolversTypes['AnyChildEntity']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResetOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetOrderingPayload'] = ResolversParentTypes['ResetOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevokeAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevokeAccessPayload'] = ResolversParentTypes['RevokeAccessPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revoked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  accessControlList?: Resolver<ResolversTypes['AccessControlList'], ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  customPriority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  effectiveAccess?: Resolver<ResolversTypes['EffectiveAccess'], ParentType, ContextType>;
  globalAccessControlList?: Resolver<ResolversTypes['GlobalAccessControlList'], ParentType, ContextType>;
  globalAllowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['RoleSystemIdentifier']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['RoleKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  primacy?: Resolver<ResolversTypes['RolePrimacy'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleConnection'] = ResolversParentTypes['RoleConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RoleEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleEdge'] = ResolversParentTypes['RoleEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScalarPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScalarProperty'] = ResolversParentTypes['ScalarProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'ControlledVocabulariesProperty' | 'ControlledVocabularyProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
};

export interface SchemaComponentScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SchemaComponent'], any> {
  name: 'SchemaComponent';
}

export type SchemaCoreDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaCoreDefinition'] = ResolversParentTypes['SchemaCoreDefinition']> = {
  doi?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  issn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaDefinition'] = ResolversParentTypes['SchemaDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaDefinitionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaDefinitionConnection'] = ResolversParentTypes['SchemaDefinitionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SchemaDefinitionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SchemaDefinition']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaDefinitionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaDefinitionEdge'] = ResolversParentTypes['SchemaDefinitionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInstance'] = ResolversParentTypes['SchemaInstance']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<SchemaInstanceAvailableEntitiesForArgs, 'fullPath'>>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<SchemaInstanceSchemaPropertyArgs, 'fullPath'>>;
};

export type SchemaInstanceContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInstanceContext'] = ResolversParentTypes['SchemaInstanceContext']> = {
  assets?: Resolver<Array<ResolversTypes['AssetSelectOption']>, ParentType, ContextType>;
  contributors?: Resolver<Array<ResolversTypes['ContributorSelectOption']>, ParentType, ContextType>;
  defaultValues?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fieldValues?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  schemaVersionSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validity?: Resolver<Maybe<ResolversTypes['SchemaInstanceValidation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaInstanceValidationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInstanceValidation'] = ResolversParentTypes['SchemaInstanceValidation']> = {
  errors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  validatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaOrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaOrderingPath'] = ResolversParentTypes['SchemaOrderingPath']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grouping?: Resolver<ResolversTypes['OrderingPathGrouping'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaProperty'] = ResolversParentTypes['SchemaProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'ControlledVocabulariesProperty' | 'ControlledVocabularyProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'GroupProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
};

export interface SchemaPropertyPathScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SchemaPropertyPath'], any> {
  name: 'SchemaPropertyPath';
}

export type SchemaRenderDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaRenderDefinition'] = ResolversParentTypes['SchemaRenderDefinition']> = {
  listMode?: Resolver<ResolversTypes['SchemaRenderListMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaValueErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaValueError'] = ResolversParentTypes['SchemaValueError']> = {
  base?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hint?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersion'] = ResolversParentTypes['SchemaVersion']> = {
  core?: Resolver<ResolversTypes['SchemaCoreDefinition'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  enforcedChildDeclarations?: Resolver<Array<ResolversTypes['Slug']>, ParentType, ContextType>;
  enforcedChildVersions?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  enforcedParentDeclarations?: Resolver<Array<ResolversTypes['Slug']>, ParentType, ContextType>;
  enforcedParentVersions?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  enforcesChildren?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enforcesParent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  render?: Resolver<ResolversTypes['SchemaRenderDefinition'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<SchemaVersionSearchArgs, 'visibility'>>;
  searchableProperties?: Resolver<Array<ResolversTypes['AnySearchableProperty']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersionConnection'] = ResolversParentTypes['SchemaVersionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SchemaVersionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersionEdge'] = ResolversParentTypes['SchemaVersionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersionOption'] = ResolversParentTypes['SchemaVersionOption']> = {
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultConnection'] = ResolversParentTypes['SearchResultConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SearchResultEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultEdge'] = ResolversParentTypes['SearchResultEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchScopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchScope'] = ResolversParentTypes['SearchScope']> = {
  availableSchemaVersions?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  coreProperties?: Resolver<Array<ResolversTypes['SearchableCoreProperty']>, ParentType, ContextType>;
  originType?: Resolver<ResolversTypes['SearchOriginType'], ParentType, ContextType>;
  results?: Resolver<ResolversTypes['SearchResultConnection'], ParentType, ContextType, RequireFields<SearchScopeResultsArgs, 'order' | 'pageDirection' | 'predicates' | 'scope'>>;
  visibility?: Resolver<ResolversTypes['EntityVisibilityFilter'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Searchable'] = ResolversParentTypes['Searchable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item' | 'Query' | 'SchemaVersion', ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<SearchableSearchArgs, 'visibility'>>;
};

export type SearchableCorePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchableCoreProperty'] = ResolversParentTypes['SearchableCoreProperty']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchableProperty'] = ResolversParentTypes['SearchableProperty']> = {
  __resolveType: TypeResolveFn<'BooleanProperty' | 'DateProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SearchableCoreProperty' | 'SelectProperty' | 'StringProperty' | 'TimestampProperty' | 'VariableDateProperty', ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type SelectInitialOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectInitialOrderingPayload'] = ResolversParentTypes['SelectInitialOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectOption'] = ResolversParentTypes['SelectOption']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectProperty'] = ResolversParentTypes['SelectProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultSelection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SelectOption']>, ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFooter'] = ResolversParentTypes['SiteFooter']> = {
  copyrightStatement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteLogoAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteLogoAttachment'] = ResolversParentTypes['SiteLogoAttachment']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  original?: Resolver<ResolversTypes['ImageOriginal'], ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  sansText?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  withText?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteSettings'] = ResolversParentTypes['SiteSettings']> = {
  footer?: Resolver<ResolversTypes['SiteFooter'], ParentType, ContextType>;
  installationHomePageCopy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  installationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logoMode?: Resolver<ResolversTypes['SiteLogoMode'], ParentType, ContextType>;
  providerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SlugScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Slug'], any> {
  name: 'Slug';
}

export type SluggableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sluggable'] = ResolversParentTypes['Sluggable']> = {
  __resolveType: TypeResolveFn<'Announcement' | 'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo' | 'Collection' | 'CollectionContribution' | 'Community' | 'ContextualPermission' | 'ContributorListTemplateDefinition' | 'ContributorListTemplateInstance' | 'ControlledVocabulary' | 'ControlledVocabularyItem' | 'ControlledVocabularySource' | 'DescendantListTemplateDefinition' | 'DescendantListTemplateInstance' | 'DetailTemplateDefinition' | 'DetailTemplateInstance' | 'EntityLink' | 'HeroLayoutDefinition' | 'HeroLayoutInstance' | 'HeroTemplateDefinition' | 'HeroTemplateInstance' | 'Item' | 'ItemContribution' | 'LinkListTemplateDefinition' | 'LinkListTemplateInstance' | 'ListItemLayoutDefinition' | 'ListItemLayoutInstance' | 'ListItemTemplateDefinition' | 'ListItemTemplateInstance' | 'MainLayoutDefinition' | 'MainLayoutInstance' | 'MetadataLayoutDefinition' | 'MetadataLayoutInstance' | 'MetadataTemplateDefinition' | 'MetadataTemplateInstance' | 'NavigationLayoutDefinition' | 'NavigationLayoutInstance' | 'NavigationTemplateDefinition' | 'NavigationTemplateInstance' | 'Ordering' | 'OrderingEntry' | 'OrderingTemplateDefinition' | 'OrderingTemplateInstance' | 'OrganizationContributor' | 'PageListTemplateDefinition' | 'PageListTemplateInstance' | 'PersonContributor' | 'Role' | 'SchemaDefinition' | 'SchemaVersion' | 'SupplementaryLayoutDefinition' | 'SupplementaryLayoutInstance' | 'SupplementaryTemplateDefinition' | 'SupplementaryTemplateInstance' | 'User' | 'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroup' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
};

export type StandardMutationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardMutationPayload'] = ResolversParentTypes['StandardMutationPayload']> = {
  __resolveType: TypeResolveFn<'AlterSchemaVersionPayload' | 'ApplySchemaPropertiesPayload' | 'ClearInitialOrderingPayload' | 'ControlledVocabularyDestroyPayload' | 'ControlledVocabularySourceUpdatePayload' | 'ControlledVocabularyUpsertPayload' | 'CreateAnnouncementPayload' | 'CreateAssetPayload' | 'CreateCollectionPayload' | 'CreateCommunityPayload' | 'CreateItemPayload' | 'CreateOrderingPayload' | 'CreateOrganizationContributorPayload' | 'CreatePagePayload' | 'CreatePersonContributorPayload' | 'CreateRolePayload' | 'DestroyAnnouncementPayload' | 'DestroyAssetPayload' | 'DestroyCollectionPayload' | 'DestroyCommunityPayload' | 'DestroyContributionPayload' | 'DestroyContributorPayload' | 'DestroyEntityLinkPayload' | 'DestroyItemPayload' | 'DestroyOrderingPayload' | 'DestroyPagePayload' | 'GrantAccessPayload' | 'LinkEntityPayload' | 'ReparentEntityPayload' | 'ResetOrderingPayload' | 'RevokeAccessPayload' | 'SelectInitialOrderingPayload' | 'UpdateAnnouncementPayload' | 'UpdateAssetAttachmentPayload' | 'UpdateAssetPayload' | 'UpdateCollectionPayload' | 'UpdateCommunityPayload' | 'UpdateContributionPayload' | 'UpdateGlobalConfigurationPayload' | 'UpdateItemPayload' | 'UpdateOrderingPayload' | 'UpdateOrganizationContributorPayload' | 'UpdatePagePayload' | 'UpdatePersonContributorPayload' | 'UpdateRolePayload' | 'UpdateUserPayload' | 'UpdateViewerSettingsPayload' | 'UpsertContributionPayload', ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type StaticOrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaticOrderingPath'] = ResolversParentTypes['StaticOrderingPath']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grouping?: Resolver<ResolversTypes['OrderingPathGrouping'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringProperty'] = ResolversParentTypes['StringProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplementaryLayoutDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupplementaryLayoutDefinition'] = ResolversParentTypes['SupplementaryLayoutDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['SupplementaryTemplateDefinition']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnySupplementaryTemplateDefinition']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplementaryLayoutInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupplementaryLayoutInstance'] = ResolversParentTypes['SupplementaryLayoutInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutDefinition?: Resolver<ResolversTypes['SupplementaryLayoutDefinition'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['SupplementaryTemplateInstance']>, ParentType, ContextType>;
  templates?: Resolver<Array<ResolversTypes['AnySupplementaryTemplateInstance']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplementaryTemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupplementaryTemplateDefinition'] = ResolversParentTypes['SupplementaryTemplateDefinition']> = {
  background?: Resolver<Maybe<ResolversTypes['SupplementaryBackground']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['SupplementaryTemplateDefinitionSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplementaryTemplateDefinitionSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupplementaryTemplateDefinitionSlots'] = ResolversParentTypes['SupplementaryTemplateDefinitionSlots']> = {
  contributorsLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  metricsLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineDefinition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplementaryTemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupplementaryTemplateInstance'] = ResolversParentTypes['SupplementaryTemplateInstance']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['SupplementaryTemplateDefinition'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  slots?: Resolver<ResolversTypes['SupplementaryTemplateInstanceSlots'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplementaryTemplateInstanceSlotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupplementaryTemplateInstanceSlots'] = ResolversParentTypes['SupplementaryTemplateInstanceSlots']> = {
  contributorsLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  metricsLabel?: Resolver<Maybe<ResolversTypes['TemplateSlotInlineInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SystemInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemInfo'] = ResolversParentTypes['SystemInfo']> = {
  entityHierarchyExists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<SystemInfoEntityHierarchyExistsArgs, 'ancestor' | 'descendant'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsProperty'] = ResolversParentTypes['TagsProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateDefinition'] = ResolversParentTypes['TemplateDefinition']> = {
  __resolveType: TypeResolveFn<'ContributorListTemplateDefinition' | 'DescendantListTemplateDefinition' | 'DetailTemplateDefinition' | 'HeroTemplateDefinition' | 'LinkListTemplateDefinition' | 'ListItemTemplateDefinition' | 'MetadataTemplateDefinition' | 'NavigationTemplateDefinition' | 'OrderingTemplateDefinition' | 'PageListTemplateDefinition' | 'SupplementaryTemplateDefinition', ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
};

export type TemplateEntityListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateEntityList'] = ResolversParentTypes['TemplateEntityList']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  empty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  entities?: Resolver<Array<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  listItemLayouts?: Resolver<Array<ResolversTypes['ListItemLayoutInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateHasEntityListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateHasEntityList'] = ResolversParentTypes['TemplateHasEntityList']> = {
  __resolveType: TypeResolveFn<'DescendantListTemplateInstance' | 'LinkListTemplateInstance', ParentType, ContextType>;
  entityList?: Resolver<ResolversTypes['TemplateEntityList'], ParentType, ContextType>;
};

export type TemplateHasOrderingPairResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateHasOrderingPair'] = ResolversParentTypes['TemplateHasOrderingPair']> = {
  __resolveType: TypeResolveFn<'OrderingTemplateInstance', ParentType, ContextType>;
  orderingPair?: Resolver<ResolversTypes['TemplateOrderingPair'], ParentType, ContextType>;
};

export type TemplateInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateInstance'] = ResolversParentTypes['TemplateInstance']> = {
  __resolveType: TypeResolveFn<'ContributorListTemplateInstance' | 'DescendantListTemplateInstance' | 'DetailTemplateInstance' | 'HeroTemplateInstance' | 'LinkListTemplateInstance' | 'ListItemTemplateInstance' | 'MetadataTemplateInstance' | 'NavigationTemplateInstance' | 'OrderingTemplateInstance' | 'PageListTemplateInstance' | 'SupplementaryTemplateInstance', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  lastRenderedAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  layoutKind?: Resolver<ResolversTypes['LayoutKind'], ParentType, ContextType>;
  templateKind?: Resolver<ResolversTypes['TemplateKind'], ParentType, ContextType>;
};

export type TemplateOrderingPairResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateOrderingPair'] = ResolversParentTypes['TemplateOrderingPair']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  first?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextSibling?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prevSibling?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TemplateSelectionSourceScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TemplateSelectionSource'], any> {
  name: 'TemplateSelectionSource';
}

export type TemplateSlotBlockDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSlotBlockDefinition'] = ResolversParentTypes['TemplateSlotBlockDefinition']> = {
  kind?: Resolver<ResolversTypes['TemplateSlotKind'], ParentType, ContextType>;
  rawTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSlotBlockInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSlotBlockInstance'] = ResolversParentTypes['TemplateSlotBlockInstance']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['TemplateSlotKind'], ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSlotDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSlotDefinition'] = ResolversParentTypes['TemplateSlotDefinition']> = {
  __resolveType: TypeResolveFn<'TemplateSlotBlockDefinition' | 'TemplateSlotInlineDefinition', ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['TemplateSlotKind'], ParentType, ContextType>;
  rawTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type TemplateSlotInlineDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSlotInlineDefinition'] = ResolversParentTypes['TemplateSlotInlineDefinition']> = {
  kind?: Resolver<ResolversTypes['TemplateSlotKind'], ParentType, ContextType>;
  rawTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSlotInlineInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSlotInlineInstance'] = ResolversParentTypes['TemplateSlotInlineInstance']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['TemplateSlotKind'], ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSlotInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSlotInstance'] = ResolversParentTypes['TemplateSlotInstance']> = {
  __resolveType: TypeResolveFn<'TemplateSlotBlockInstance' | 'TemplateSlotInlineInstance', ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['TemplateSlotKind'], ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type ThemeSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThemeSettings'] = ResolversParentTypes['ThemeSettings']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  font?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimestampPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimestampProperty'] = ResolversParentTypes['TimestampProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UrlPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['URLProperty'] = ResolversParentTypes['URLProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URLReference']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UrlReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['URLReference'] = ResolversParentTypes['URLReference']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnknownPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnknownProperty'] = ResolversParentTypes['UnknownProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  unknownValue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAnnouncementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAnnouncementPayload'] = ResolversParentTypes['UpdateAnnouncementPayload']> = {
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAssetAttachmentPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAssetAttachmentPayload'] = ResolversParentTypes['UpdateAssetAttachmentPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAssetPayload'] = ResolversParentTypes['UpdateAssetPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionPayload'] = ResolversParentTypes['UpdateCollectionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCommunityPayload'] = ResolversParentTypes['UpdateCommunityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateContributionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateContributionPayload'] = ResolversParentTypes['UpdateContributionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contribution?: Resolver<Maybe<ResolversTypes['AnyContribution']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGlobalConfigurationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateGlobalConfigurationPayload'] = ResolversParentTypes['UpdateGlobalConfigurationPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalConfiguration?: Resolver<Maybe<ResolversTypes['GlobalConfiguration']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateItemPayload'] = ResolversParentTypes['UpdateItemPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrderingPayload'] = ResolversParentTypes['UpdateOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrganizationContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrganizationContributorPayload'] = ResolversParentTypes['UpdateOrganizationContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['OrganizationContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePagePayload'] = ResolversParentTypes['UpdatePagePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePersonContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePersonContributorPayload'] = ResolversParentTypes['UpdatePersonContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['PersonContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateRolePayload'] = ResolversParentTypes['UpdateRolePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateViewerSettingsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateViewerSettingsPayload'] = ResolversParentTypes['UpdateViewerSettingsPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UploadID'], any> {
  name: 'UploadID';
}

export type UpsertContributionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpsertContributionPayload'] = ResolversParentTypes['UpsertContributionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contribution?: Resolver<Maybe<ResolversTypes['AnyContribution']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accessGrants?: Resolver<ResolversTypes['AnyUserAccessGrantConnection'], ParentType, ContextType, RequireFields<UserAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<UserAllAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  anonymous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  avatarMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  collectionAccessGrants?: Resolver<ResolversTypes['UserCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<UserCollectionAccessGrantsArgs, 'order' | 'pageDirection'>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<UserCollectionsArgs, 'access' | 'nodeFilter' | 'order' | 'pageDirection'>>;
  communities?: Resolver<ResolversTypes['CommunityConnection'], ParentType, ContextType, RequireFields<UserCommunitiesArgs, 'access' | 'nodeFilter' | 'order' | 'pageDirection'>>;
  communityAccessGrants?: Resolver<ResolversTypes['UserCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<UserCommunityAccessGrantsArgs, 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  globalAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemAccessGrants?: Resolver<ResolversTypes['UserItemAccessGrantConnection'], ParentType, ContextType, RequireFields<UserItemAccessGrantsArgs, 'order' | 'pageDirection'>>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<UserItemsArgs, 'access' | 'nodeFilter' | 'order' | 'pageDirection'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  primaryRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  uploadAccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uploadToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccessGrant'] = ResolversParentTypes['UserAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type UserCollectionAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCollectionAccessGrant'] = ResolversParentTypes['UserCollectionAccessGrant']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCollectionAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCollectionAccessGrantConnection'] = ResolversParentTypes['UserCollectionAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserCollectionAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserCollectionAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCollectionAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCollectionAccessGrantEdge'] = ResolversParentTypes['UserCollectionAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserCollectionAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommunityAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCommunityAccessGrant'] = ResolversParentTypes['UserCommunityAccessGrant']> = {
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommunityAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCommunityAccessGrantConnection'] = ResolversParentTypes['UserCommunityAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserCommunityAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserCommunityAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommunityAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCommunityAccessGrantEdge'] = ResolversParentTypes['UserCommunityAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserCommunityAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  attributePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['MutationErrorScope'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroup'] = ResolversParentTypes['UserGroup']> = {
  accessGrants?: Resolver<ResolversTypes['AnyUserGroupAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupAllAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  collectionAccessGrants?: Resolver<ResolversTypes['UserGroupCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupCollectionAccessGrantsArgs, 'order' | 'pageDirection'>>;
  communityAccessGrants?: Resolver<ResolversTypes['UserGroupCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupCommunityAccessGrantsArgs, 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemAccessGrants?: Resolver<ResolversTypes['UserGroupItemAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupItemAccessGrantsArgs, 'order' | 'pageDirection'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<UserGroupUsersArgs, 'order' | 'pageDirection'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupAccessGrant'] = ResolversParentTypes['UserGroupAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
};

export type UserGroupCollectionAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCollectionAccessGrant'] = ResolversParentTypes['UserGroupCollectionAccessGrant']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCollectionAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCollectionAccessGrantConnection'] = ResolversParentTypes['UserGroupCollectionAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserGroupCollectionAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserGroupCollectionAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCollectionAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCollectionAccessGrantEdge'] = ResolversParentTypes['UserGroupCollectionAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserGroupCollectionAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCommunityAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCommunityAccessGrant'] = ResolversParentTypes['UserGroupCommunityAccessGrant']> = {
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCommunityAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCommunityAccessGrantConnection'] = ResolversParentTypes['UserGroupCommunityAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserGroupCommunityAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserGroupCommunityAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCommunityAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCommunityAccessGrantEdge'] = ResolversParentTypes['UserGroupCommunityAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserGroupCommunityAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupItemAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupItemAccessGrant'] = ResolversParentTypes['UserGroupItemAccessGrant']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupItemAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupItemAccessGrantConnection'] = ResolversParentTypes['UserGroupItemAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserGroupItemAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserGroupItemAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupItemAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupItemAccessGrantEdge'] = ResolversParentTypes['UserGroupItemAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserGroupItemAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserItemAccessGrant'] = ResolversParentTypes['UserItemAccessGrant']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserItemAccessGrantConnection'] = ResolversParentTypes['UserItemAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserItemAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserItemAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserItemAccessGrantEdge'] = ResolversParentTypes['UserItemAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserItemAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariableDatePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariableDateProperty'] = ResolversParentTypes['VariableDateProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateWithPrecision?: Resolver<Maybe<ResolversTypes['VariablePrecisionDate']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariablePrecisionDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariablePrecisionDate'] = ResolversParentTypes['VariablePrecisionDate']> = {
  precision?: Resolver<ResolversTypes['DatePrecision'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VersionRequirementScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['VersionRequirement'], any> {
  name: 'VersionRequirement';
}

export type Resolvers<ContextType = any> = {
  AccessControlList?: AccessControlListResolvers<ContextType>;
  AccessGrant?: AccessGrantResolvers<ContextType>;
  AccessGrantSubject?: AccessGrantSubjectResolvers<ContextType>;
  Accessible?: AccessibleResolvers<ContextType>;
  AlterSchemaVersionPayload?: AlterSchemaVersionPayloadResolvers<ContextType>;
  Analytics?: AnalyticsResolvers<ContextType>;
  AnalyticsEventCountResult?: AnalyticsEventCountResultResolvers<ContextType>;
  AnalyticsEventCountSummary?: AnalyticsEventCountSummaryResolvers<ContextType>;
  AnalyticsRegionCountResult?: AnalyticsRegionCountResultResolvers<ContextType>;
  AnalyticsRegionCountSummary?: AnalyticsRegionCountSummaryResolvers<ContextType>;
  Announcement?: AnnouncementResolvers<ContextType>;
  AnnouncementConnection?: AnnouncementConnectionResolvers<ContextType>;
  AnnouncementEdge?: AnnouncementEdgeResolvers<ContextType>;
  AnyAccessGrant?: AnyAccessGrantResolvers<ContextType>;
  AnyAccessGrantConnection?: AnyAccessGrantConnectionResolvers<ContextType>;
  AnyAccessGrantEdge?: AnyAccessGrantEdgeResolvers<ContextType>;
  AnyAsset?: AnyAssetResolvers<ContextType>;
  AnyAssetConnection?: AnyAssetConnectionResolvers<ContextType>;
  AnyAssetEdge?: AnyAssetEdgeResolvers<ContextType>;
  AnyAttachable?: AnyAttachableResolvers<ContextType>;
  AnyChildEntity?: AnyChildEntityResolvers<ContextType>;
  AnyCollectionAccessGrant?: AnyCollectionAccessGrantResolvers<ContextType>;
  AnyCollectionAccessGrantConnection?: AnyCollectionAccessGrantConnectionResolvers<ContextType>;
  AnyCollectionAccessGrantEdge?: AnyCollectionAccessGrantEdgeResolvers<ContextType>;
  AnyCommunityAccessGrant?: AnyCommunityAccessGrantResolvers<ContextType>;
  AnyCommunityAccessGrantConnection?: AnyCommunityAccessGrantConnectionResolvers<ContextType>;
  AnyCommunityAccessGrantEdge?: AnyCommunityAccessGrantEdgeResolvers<ContextType>;
  AnyContribution?: AnyContributionResolvers<ContextType>;
  AnyContributor?: AnyContributorResolvers<ContextType>;
  AnyContributorConnection?: AnyContributorConnectionResolvers<ContextType>;
  AnyContributorEdge?: AnyContributorEdgeResolvers<ContextType>;
  AnyEntity?: AnyEntityResolvers<ContextType>;
  AnyHeroTemplateDefinition?: AnyHeroTemplateDefinitionResolvers<ContextType>;
  AnyHeroTemplateInstance?: AnyHeroTemplateInstanceResolvers<ContextType>;
  AnyLinkTarget?: AnyLinkTargetResolvers<ContextType>;
  AnyListItemTemplateDefinition?: AnyListItemTemplateDefinitionResolvers<ContextType>;
  AnyListItemTemplateInstance?: AnyListItemTemplateInstanceResolvers<ContextType>;
  AnyMainTemplateDefinition?: AnyMainTemplateDefinitionResolvers<ContextType>;
  AnyMainTemplateInstance?: AnyMainTemplateInstanceResolvers<ContextType>;
  AnyMetadataTemplateDefinition?: AnyMetadataTemplateDefinitionResolvers<ContextType>;
  AnyMetadataTemplateInstance?: AnyMetadataTemplateInstanceResolvers<ContextType>;
  AnyNavigationTemplateDefinition?: AnyNavigationTemplateDefinitionResolvers<ContextType>;
  AnyNavigationTemplateInstance?: AnyNavigationTemplateInstanceResolvers<ContextType>;
  AnyOrderingEntry?: AnyOrderingEntryResolvers<ContextType>;
  AnyOrderingPath?: AnyOrderingPathResolvers<ContextType>;
  AnyScalarProperty?: AnyScalarPropertyResolvers<ContextType>;
  AnySchemaProperty?: AnySchemaPropertyResolvers<ContextType>;
  AnySearchableProperty?: AnySearchablePropertyResolvers<ContextType>;
  AnySupplementaryTemplateDefinition?: AnySupplementaryTemplateDefinitionResolvers<ContextType>;
  AnySupplementaryTemplateInstance?: AnySupplementaryTemplateInstanceResolvers<ContextType>;
  AnyUserAccessGrant?: AnyUserAccessGrantResolvers<ContextType>;
  AnyUserAccessGrantConnection?: AnyUserAccessGrantConnectionResolvers<ContextType>;
  AnyUserAccessGrantEdge?: AnyUserAccessGrantEdgeResolvers<ContextType>;
  AnyUserGroupAccessGrant?: AnyUserGroupAccessGrantResolvers<ContextType>;
  AnyUserGroupAccessGrantConnection?: AnyUserGroupAccessGrantConnectionResolvers<ContextType>;
  AnyUserGroupAccessGrantEdge?: AnyUserGroupAccessGrantEdgeResolvers<ContextType>;
  ApplySchemaPropertiesPayload?: ApplySchemaPropertiesPayloadResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetAudio?: AssetAudioResolvers<ContextType>;
  AssetDocument?: AssetDocumentResolvers<ContextType>;
  AssetImage?: AssetImageResolvers<ContextType>;
  AssetPDF?: AssetPdfResolvers<ContextType>;
  AssetPermissionGrid?: AssetPermissionGridResolvers<ContextType>;
  AssetProperty?: AssetPropertyResolvers<ContextType>;
  AssetSelectOption?: AssetSelectOptionResolvers<ContextType>;
  AssetUnknown?: AssetUnknownResolvers<ContextType>;
  AssetVideo?: AssetVideoResolvers<ContextType>;
  AssetsProperty?: AssetsPropertyResolvers<ContextType>;
  Attachable?: AttachableResolvers<ContextType>;
  BooleanProperty?: BooleanPropertyResolvers<ContextType>;
  CRUDPermissionGrid?: CrudPermissionGridResolvers<ContextType>;
  ChildEntity?: ChildEntityResolvers<ContextType>;
  ClearInitialOrderingPayload?: ClearInitialOrderingPayloadResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  CollectionContribution?: CollectionContributionResolvers<ContextType>;
  CollectionContributionConnection?: CollectionContributionConnectionResolvers<ContextType>;
  CollectionContributionEdge?: CollectionContributionEdgeResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  CollectionParent?: CollectionParentResolvers<ContextType>;
  Community?: CommunityResolvers<ContextType>;
  CommunityConnection?: CommunityConnectionResolvers<ContextType>;
  CommunityEdge?: CommunityEdgeResolvers<ContextType>;
  ContextualPermission?: ContextualPermissionResolvers<ContextType>;
  ContextualPermissionConnection?: ContextualPermissionConnectionResolvers<ContextType>;
  ContextualPermissionEdge?: ContextualPermissionEdgeResolvers<ContextType>;
  Contributable?: ContributableResolvers<ContextType>;
  Contribution?: ContributionResolvers<ContextType>;
  ContributionMetadata?: ContributionMetadataResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  ContributorLink?: ContributorLinkResolvers<ContextType>;
  ContributorListTemplateDefinition?: ContributorListTemplateDefinitionResolvers<ContextType>;
  ContributorListTemplateDefinitionSlots?: ContributorListTemplateDefinitionSlotsResolvers<ContextType>;
  ContributorListTemplateInstance?: ContributorListTemplateInstanceResolvers<ContextType>;
  ContributorListTemplateInstanceSlots?: ContributorListTemplateInstanceSlotsResolvers<ContextType>;
  ContributorProperty?: ContributorPropertyResolvers<ContextType>;
  ContributorSelectOption?: ContributorSelectOptionResolvers<ContextType>;
  ContributorsProperty?: ContributorsPropertyResolvers<ContextType>;
  ControlledVocabulariesProperty?: ControlledVocabulariesPropertyResolvers<ContextType>;
  ControlledVocabulary?: ControlledVocabularyResolvers<ContextType>;
  ControlledVocabularyConnection?: ControlledVocabularyConnectionResolvers<ContextType>;
  ControlledVocabularyDestroyPayload?: ControlledVocabularyDestroyPayloadResolvers<ContextType>;
  ControlledVocabularyEdge?: ControlledVocabularyEdgeResolvers<ContextType>;
  ControlledVocabularyItem?: ControlledVocabularyItemResolvers<ContextType>;
  ControlledVocabularyItemSet?: GraphQLScalarType;
  ControlledVocabularyProperty?: ControlledVocabularyPropertyResolvers<ContextType>;
  ControlledVocabularySource?: ControlledVocabularySourceResolvers<ContextType>;
  ControlledVocabularySourceConnection?: ControlledVocabularySourceConnectionResolvers<ContextType>;
  ControlledVocabularySourceEdge?: ControlledVocabularySourceEdgeResolvers<ContextType>;
  ControlledVocabularySourceUpdatePayload?: ControlledVocabularySourceUpdatePayloadResolvers<ContextType>;
  ControlledVocabularyUpsertPayload?: ControlledVocabularyUpsertPayloadResolvers<ContextType>;
  CreateAnnouncementPayload?: CreateAnnouncementPayloadResolvers<ContextType>;
  CreateAssetPayload?: CreateAssetPayloadResolvers<ContextType>;
  CreateCollectionPayload?: CreateCollectionPayloadResolvers<ContextType>;
  CreateCommunityPayload?: CreateCommunityPayloadResolvers<ContextType>;
  CreateItemPayload?: CreateItemPayloadResolvers<ContextType>;
  CreateOrderingPayload?: CreateOrderingPayloadResolvers<ContextType>;
  CreateOrganizationContributorPayload?: CreateOrganizationContributorPayloadResolvers<ContextType>;
  CreatePagePayload?: CreatePagePayloadResolvers<ContextType>;
  CreatePersonContributorPayload?: CreatePersonContributorPayloadResolvers<ContextType>;
  CreateRolePayload?: CreateRolePayloadResolvers<ContextType>;
  DateProperty?: DatePropertyResolvers<ContextType>;
  DescendantListTemplateDefinition?: DescendantListTemplateDefinitionResolvers<ContextType>;
  DescendantListTemplateDefinitionSlots?: DescendantListTemplateDefinitionSlotsResolvers<ContextType>;
  DescendantListTemplateInstance?: DescendantListTemplateInstanceResolvers<ContextType>;
  DescendantListTemplateInstanceSlots?: DescendantListTemplateInstanceSlotsResolvers<ContextType>;
  DescribesSchema?: DescribesSchemaResolvers<ContextType>;
  DestroyAnnouncementPayload?: DestroyAnnouncementPayloadResolvers<ContextType>;
  DestroyAssetPayload?: DestroyAssetPayloadResolvers<ContextType>;
  DestroyCollectionPayload?: DestroyCollectionPayloadResolvers<ContextType>;
  DestroyCommunityPayload?: DestroyCommunityPayloadResolvers<ContextType>;
  DestroyContributionPayload?: DestroyContributionPayloadResolvers<ContextType>;
  DestroyContributorPayload?: DestroyContributorPayloadResolvers<ContextType>;
  DestroyEntityLinkPayload?: DestroyEntityLinkPayloadResolvers<ContextType>;
  DestroyItemPayload?: DestroyItemPayloadResolvers<ContextType>;
  DestroyMutationPayload?: DestroyMutationPayloadResolvers<ContextType>;
  DestroyOrderingPayload?: DestroyOrderingPayloadResolvers<ContextType>;
  DestroyPagePayload?: DestroyPagePayloadResolvers<ContextType>;
  DetailTemplateDefinition?: DetailTemplateDefinitionResolvers<ContextType>;
  DetailTemplateDefinitionSlots?: DetailTemplateDefinitionSlotsResolvers<ContextType>;
  DetailTemplateInstance?: DetailTemplateInstanceResolvers<ContextType>;
  DetailTemplateInstanceSlots?: DetailTemplateInstanceSlotsResolvers<ContextType>;
  EffectiveAccess?: EffectiveAccessResolvers<ContextType>;
  EmailProperty?: EmailPropertyResolvers<ContextType>;
  EntitiesProperty?: EntitiesPropertyResolvers<ContextType>;
  EntitiesSettings?: EntitiesSettingsResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  EntityBreadcrumb?: EntityBreadcrumbResolvers<ContextType>;
  EntityDescendant?: EntityDescendantResolvers<ContextType>;
  EntityDescendantConnection?: EntityDescendantConnectionResolvers<ContextType>;
  EntityDescendantEdge?: EntityDescendantEdgeResolvers<ContextType>;
  EntityLayouts?: EntityLayoutsResolvers<ContextType>;
  EntityLink?: EntityLinkResolvers<ContextType>;
  EntityLinkConnection?: EntityLinkConnectionResolvers<ContextType>;
  EntityLinkEdge?: EntityLinkEdgeResolvers<ContextType>;
  EntityPermissionGrid?: EntityPermissionGridResolvers<ContextType>;
  EntityProperty?: EntityPropertyResolvers<ContextType>;
  EntitySelectOption?: EntitySelectOptionResolvers<ContextType>;
  ExposesEffectiveAccess?: ExposesEffectiveAccessResolvers<ContextType>;
  ExposesPermissions?: ExposesPermissionsResolvers<ContextType>;
  FloatProperty?: FloatPropertyResolvers<ContextType>;
  FullText?: FullTextResolvers<ContextType>;
  FullTextProperty?: FullTextPropertyResolvers<ContextType>;
  GlobalAccessControlList?: GlobalAccessControlListResolvers<ContextType>;
  GlobalConfiguration?: GlobalConfigurationResolvers<ContextType>;
  GrantAccessPayload?: GrantAccessPayloadResolvers<ContextType>;
  GroupProperty?: GroupPropertyResolvers<ContextType>;
  HasAttachmentStorage?: HasAttachmentStorageResolvers<ContextType>;
  HasAvailableEntities?: HasAvailableEntitiesResolvers<ContextType>;
  HasControlledVocabulary?: HasControlledVocabularyResolvers<ContextType>;
  HasDOI?: HasDoiResolvers<ContextType>;
  HasDefaultTimestamps?: HasDefaultTimestampsResolvers<ContextType>;
  HasEntityAnalytics?: HasEntityAnalyticsResolvers<ContextType>;
  HasEntityBreadcrumbs?: HasEntityBreadcrumbsResolvers<ContextType>;
  HasISSN?: HasIssnResolvers<ContextType>;
  HasSchemaProperties?: HasSchemaPropertiesResolvers<ContextType>;
  HeroLayoutDefinition?: HeroLayoutDefinitionResolvers<ContextType>;
  HeroLayoutInstance?: HeroLayoutInstanceResolvers<ContextType>;
  HeroTemplateDefinition?: HeroTemplateDefinitionResolvers<ContextType>;
  HeroTemplateDefinitionSlots?: HeroTemplateDefinitionSlotsResolvers<ContextType>;
  HeroTemplateInstance?: HeroTemplateInstanceResolvers<ContextType>;
  HeroTemplateInstanceSlots?: HeroTemplateInstanceSlotsResolvers<ContextType>;
  HierarchicalSchemaRank?: HierarchicalSchemaRankResolvers<ContextType>;
  HierarchicalSchemaVersionRank?: HierarchicalSchemaVersionRankResolvers<ContextType>;
  ISO8601Date?: GraphQLScalarType;
  ISO8601DateTime?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  ImageAttachment?: ImageAttachmentResolvers<ContextType>;
  ImageDerivative?: ImageDerivativeResolvers<ContextType>;
  ImageIdentification?: ImageIdentificationResolvers<ContextType>;
  ImageMetadata?: ImageMetadataResolvers<ContextType>;
  ImageOriginal?: ImageOriginalResolvers<ContextType>;
  ImageSize?: ImageSizeResolvers<ContextType>;
  InstitutionSettings?: InstitutionSettingsResolvers<ContextType>;
  IntegerProperty?: IntegerPropertyResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  ItemContribution?: ItemContributionResolvers<ContextType>;
  ItemContributionConnection?: ItemContributionConnectionResolvers<ContextType>;
  ItemContributionEdge?: ItemContributionEdgeResolvers<ContextType>;
  ItemEdge?: ItemEdgeResolvers<ContextType>;
  ItemParent?: ItemParentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LayoutDefinition?: LayoutDefinitionResolvers<ContextType>;
  LayoutInstance?: LayoutInstanceResolvers<ContextType>;
  LinkEntityPayload?: LinkEntityPayloadResolvers<ContextType>;
  LinkListTemplateDefinition?: LinkListTemplateDefinitionResolvers<ContextType>;
  LinkListTemplateDefinitionSlots?: LinkListTemplateDefinitionSlotsResolvers<ContextType>;
  LinkListTemplateInstance?: LinkListTemplateInstanceResolvers<ContextType>;
  LinkListTemplateInstanceSlots?: LinkListTemplateInstanceSlotsResolvers<ContextType>;
  LinkTargetCandidate?: LinkTargetCandidateResolvers<ContextType>;
  LinkTargetCandidateConnection?: LinkTargetCandidateConnectionResolvers<ContextType>;
  LinkTargetCandidateEdge?: LinkTargetCandidateEdgeResolvers<ContextType>;
  ListItemLayoutDefinition?: ListItemLayoutDefinitionResolvers<ContextType>;
  ListItemLayoutInstance?: ListItemLayoutInstanceResolvers<ContextType>;
  ListItemTemplateDefinition?: ListItemTemplateDefinitionResolvers<ContextType>;
  ListItemTemplateDefinitionSlots?: ListItemTemplateDefinitionSlotsResolvers<ContextType>;
  ListItemTemplateInstance?: ListItemTemplateInstanceResolvers<ContextType>;
  ListItemTemplateInstanceSlots?: ListItemTemplateInstanceSlotsResolvers<ContextType>;
  MainLayoutDefinition?: MainLayoutDefinitionResolvers<ContextType>;
  MainLayoutInstance?: MainLayoutInstanceResolvers<ContextType>;
  MarkdownProperty?: MarkdownPropertyResolvers<ContextType>;
  MetadataLayoutDefinition?: MetadataLayoutDefinitionResolvers<ContextType>;
  MetadataLayoutInstance?: MetadataLayoutInstanceResolvers<ContextType>;
  MetadataTemplateDefinition?: MetadataTemplateDefinitionResolvers<ContextType>;
  MetadataTemplateDefinitionSlots?: MetadataTemplateDefinitionSlotsResolvers<ContextType>;
  MetadataTemplateInstance?: MetadataTemplateInstanceResolvers<ContextType>;
  MetadataTemplateInstanceSlots?: MetadataTemplateInstanceSlotsResolvers<ContextType>;
  MultiselectProperty?: MultiselectPropertyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationAttributeError?: MutationAttributeErrorResolvers<ContextType>;
  MutationGlobalError?: MutationGlobalErrorResolvers<ContextType>;
  NamedAncestor?: NamedAncestorResolvers<ContextType>;
  NavigationLayoutDefinition?: NavigationLayoutDefinitionResolvers<ContextType>;
  NavigationLayoutInstance?: NavigationLayoutInstanceResolvers<ContextType>;
  NavigationTemplateDefinition?: NavigationTemplateDefinitionResolvers<ContextType>;
  NavigationTemplateDefinitionSlots?: NavigationTemplateDefinitionSlotsResolvers<ContextType>;
  NavigationTemplateInstance?: NavigationTemplateInstanceResolvers<ContextType>;
  NavigationTemplateInstanceSlots?: NavigationTemplateInstanceSlotsResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OptionableProperty?: OptionablePropertyResolvers<ContextType>;
  OrderDefinition?: OrderDefinitionResolvers<ContextType>;
  Ordering?: OrderingResolvers<ContextType>;
  OrderingConnection?: OrderingConnectionResolvers<ContextType>;
  OrderingDefinition?: OrderingDefinitionResolvers<ContextType>;
  OrderingEdge?: OrderingEdgeResolvers<ContextType>;
  OrderingEntry?: OrderingEntryResolvers<ContextType>;
  OrderingEntryConnection?: OrderingEntryConnectionResolvers<ContextType>;
  OrderingEntryEdge?: OrderingEntryEdgeResolvers<ContextType>;
  OrderingFilterDefinition?: OrderingFilterDefinitionResolvers<ContextType>;
  OrderingPath?: OrderingPathResolvers<ContextType>;
  OrderingRenderDefinition?: OrderingRenderDefinitionResolvers<ContextType>;
  OrderingSchemaFilter?: OrderingSchemaFilterResolvers<ContextType>;
  OrderingSelectDefinition?: OrderingSelectDefinitionResolvers<ContextType>;
  OrderingSelectLinkDefinition?: OrderingSelectLinkDefinitionResolvers<ContextType>;
  OrderingTemplateDefinition?: OrderingTemplateDefinitionResolvers<ContextType>;
  OrderingTemplateDefinitionSlots?: OrderingTemplateDefinitionSlotsResolvers<ContextType>;
  OrderingTemplateInstance?: OrderingTemplateInstanceResolvers<ContextType>;
  OrderingTemplateInstanceSlots?: OrderingTemplateInstanceSlotsResolvers<ContextType>;
  OrganizationContributor?: OrganizationContributorResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageConnection?: PageConnectionResolvers<ContextType>;
  PageEdge?: PageEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PageListTemplateDefinition?: PageListTemplateDefinitionResolvers<ContextType>;
  PageListTemplateDefinitionSlots?: PageListTemplateDefinitionSlotsResolvers<ContextType>;
  PageListTemplateInstance?: PageListTemplateInstanceResolvers<ContextType>;
  PageListTemplateInstanceSlots?: PageListTemplateInstanceSlotsResolvers<ContextType>;
  Paginated?: PaginatedResolvers<ContextType>;
  PermissionGrant?: PermissionGrantResolvers<ContextType>;
  PermissionGrid?: PermissionGridResolvers<ContextType>;
  PersonContributor?: PersonContributorResolvers<ContextType>;
  QueriesControlledVocabulary?: QueriesControlledVocabularyResolvers<ContextType>;
  QueriesControlledVocabularySource?: QueriesControlledVocabularySourceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReferencesEntityVisibility?: ReferencesEntityVisibilityResolvers<ContextType>;
  ReferencesGlobalEntityDates?: ReferencesGlobalEntityDatesResolvers<ContextType>;
  Renderable?: RenderableResolvers<ContextType>;
  ReparentEntityPayload?: ReparentEntityPayloadResolvers<ContextType>;
  ResetOrderingPayload?: ResetOrderingPayloadResolvers<ContextType>;
  RevokeAccessPayload?: RevokeAccessPayloadResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleConnection?: RoleConnectionResolvers<ContextType>;
  RoleEdge?: RoleEdgeResolvers<ContextType>;
  ScalarProperty?: ScalarPropertyResolvers<ContextType>;
  SchemaComponent?: GraphQLScalarType;
  SchemaCoreDefinition?: SchemaCoreDefinitionResolvers<ContextType>;
  SchemaDefinition?: SchemaDefinitionResolvers<ContextType>;
  SchemaDefinitionConnection?: SchemaDefinitionConnectionResolvers<ContextType>;
  SchemaDefinitionEdge?: SchemaDefinitionEdgeResolvers<ContextType>;
  SchemaInstance?: SchemaInstanceResolvers<ContextType>;
  SchemaInstanceContext?: SchemaInstanceContextResolvers<ContextType>;
  SchemaInstanceValidation?: SchemaInstanceValidationResolvers<ContextType>;
  SchemaOrderingPath?: SchemaOrderingPathResolvers<ContextType>;
  SchemaProperty?: SchemaPropertyResolvers<ContextType>;
  SchemaPropertyPath?: GraphQLScalarType;
  SchemaRenderDefinition?: SchemaRenderDefinitionResolvers<ContextType>;
  SchemaValueError?: SchemaValueErrorResolvers<ContextType>;
  SchemaVersion?: SchemaVersionResolvers<ContextType>;
  SchemaVersionConnection?: SchemaVersionConnectionResolvers<ContextType>;
  SchemaVersionEdge?: SchemaVersionEdgeResolvers<ContextType>;
  SchemaVersionOption?: SchemaVersionOptionResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultConnection?: SearchResultConnectionResolvers<ContextType>;
  SearchResultEdge?: SearchResultEdgeResolvers<ContextType>;
  SearchScope?: SearchScopeResolvers<ContextType>;
  Searchable?: SearchableResolvers<ContextType>;
  SearchableCoreProperty?: SearchableCorePropertyResolvers<ContextType>;
  SearchableProperty?: SearchablePropertyResolvers<ContextType>;
  SelectInitialOrderingPayload?: SelectInitialOrderingPayloadResolvers<ContextType>;
  SelectOption?: SelectOptionResolvers<ContextType>;
  SelectProperty?: SelectPropertyResolvers<ContextType>;
  SiteFooter?: SiteFooterResolvers<ContextType>;
  SiteLogoAttachment?: SiteLogoAttachmentResolvers<ContextType>;
  SiteSettings?: SiteSettingsResolvers<ContextType>;
  Slug?: GraphQLScalarType;
  Sluggable?: SluggableResolvers<ContextType>;
  StandardMutationPayload?: StandardMutationPayloadResolvers<ContextType>;
  StaticOrderingPath?: StaticOrderingPathResolvers<ContextType>;
  StringProperty?: StringPropertyResolvers<ContextType>;
  SupplementaryLayoutDefinition?: SupplementaryLayoutDefinitionResolvers<ContextType>;
  SupplementaryLayoutInstance?: SupplementaryLayoutInstanceResolvers<ContextType>;
  SupplementaryTemplateDefinition?: SupplementaryTemplateDefinitionResolvers<ContextType>;
  SupplementaryTemplateDefinitionSlots?: SupplementaryTemplateDefinitionSlotsResolvers<ContextType>;
  SupplementaryTemplateInstance?: SupplementaryTemplateInstanceResolvers<ContextType>;
  SupplementaryTemplateInstanceSlots?: SupplementaryTemplateInstanceSlotsResolvers<ContextType>;
  SystemInfo?: SystemInfoResolvers<ContextType>;
  TagsProperty?: TagsPropertyResolvers<ContextType>;
  TemplateDefinition?: TemplateDefinitionResolvers<ContextType>;
  TemplateEntityList?: TemplateEntityListResolvers<ContextType>;
  TemplateHasEntityList?: TemplateHasEntityListResolvers<ContextType>;
  TemplateHasOrderingPair?: TemplateHasOrderingPairResolvers<ContextType>;
  TemplateInstance?: TemplateInstanceResolvers<ContextType>;
  TemplateOrderingPair?: TemplateOrderingPairResolvers<ContextType>;
  TemplateSelectionSource?: GraphQLScalarType;
  TemplateSlotBlockDefinition?: TemplateSlotBlockDefinitionResolvers<ContextType>;
  TemplateSlotBlockInstance?: TemplateSlotBlockInstanceResolvers<ContextType>;
  TemplateSlotDefinition?: TemplateSlotDefinitionResolvers<ContextType>;
  TemplateSlotInlineDefinition?: TemplateSlotInlineDefinitionResolvers<ContextType>;
  TemplateSlotInlineInstance?: TemplateSlotInlineInstanceResolvers<ContextType>;
  TemplateSlotInstance?: TemplateSlotInstanceResolvers<ContextType>;
  ThemeSettings?: ThemeSettingsResolvers<ContextType>;
  TimestampProperty?: TimestampPropertyResolvers<ContextType>;
  URLProperty?: UrlPropertyResolvers<ContextType>;
  URLReference?: UrlReferenceResolvers<ContextType>;
  UnknownProperty?: UnknownPropertyResolvers<ContextType>;
  UpdateAnnouncementPayload?: UpdateAnnouncementPayloadResolvers<ContextType>;
  UpdateAssetAttachmentPayload?: UpdateAssetAttachmentPayloadResolvers<ContextType>;
  UpdateAssetPayload?: UpdateAssetPayloadResolvers<ContextType>;
  UpdateCollectionPayload?: UpdateCollectionPayloadResolvers<ContextType>;
  UpdateCommunityPayload?: UpdateCommunityPayloadResolvers<ContextType>;
  UpdateContributionPayload?: UpdateContributionPayloadResolvers<ContextType>;
  UpdateGlobalConfigurationPayload?: UpdateGlobalConfigurationPayloadResolvers<ContextType>;
  UpdateItemPayload?: UpdateItemPayloadResolvers<ContextType>;
  UpdateOrderingPayload?: UpdateOrderingPayloadResolvers<ContextType>;
  UpdateOrganizationContributorPayload?: UpdateOrganizationContributorPayloadResolvers<ContextType>;
  UpdatePagePayload?: UpdatePagePayloadResolvers<ContextType>;
  UpdatePersonContributorPayload?: UpdatePersonContributorPayloadResolvers<ContextType>;
  UpdateRolePayload?: UpdateRolePayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  UpdateViewerSettingsPayload?: UpdateViewerSettingsPayloadResolvers<ContextType>;
  UploadID?: GraphQLScalarType;
  UpsertContributionPayload?: UpsertContributionPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAccessGrant?: UserAccessGrantResolvers<ContextType>;
  UserCollectionAccessGrant?: UserCollectionAccessGrantResolvers<ContextType>;
  UserCollectionAccessGrantConnection?: UserCollectionAccessGrantConnectionResolvers<ContextType>;
  UserCollectionAccessGrantEdge?: UserCollectionAccessGrantEdgeResolvers<ContextType>;
  UserCommunityAccessGrant?: UserCommunityAccessGrantResolvers<ContextType>;
  UserCommunityAccessGrantConnection?: UserCommunityAccessGrantConnectionResolvers<ContextType>;
  UserCommunityAccessGrantEdge?: UserCommunityAccessGrantEdgeResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  UserGroup?: UserGroupResolvers<ContextType>;
  UserGroupAccessGrant?: UserGroupAccessGrantResolvers<ContextType>;
  UserGroupCollectionAccessGrant?: UserGroupCollectionAccessGrantResolvers<ContextType>;
  UserGroupCollectionAccessGrantConnection?: UserGroupCollectionAccessGrantConnectionResolvers<ContextType>;
  UserGroupCollectionAccessGrantEdge?: UserGroupCollectionAccessGrantEdgeResolvers<ContextType>;
  UserGroupCommunityAccessGrant?: UserGroupCommunityAccessGrantResolvers<ContextType>;
  UserGroupCommunityAccessGrantConnection?: UserGroupCommunityAccessGrantConnectionResolvers<ContextType>;
  UserGroupCommunityAccessGrantEdge?: UserGroupCommunityAccessGrantEdgeResolvers<ContextType>;
  UserGroupItemAccessGrant?: UserGroupItemAccessGrantResolvers<ContextType>;
  UserGroupItemAccessGrantConnection?: UserGroupItemAccessGrantConnectionResolvers<ContextType>;
  UserGroupItemAccessGrantEdge?: UserGroupItemAccessGrantEdgeResolvers<ContextType>;
  UserItemAccessGrant?: UserItemAccessGrantResolvers<ContextType>;
  UserItemAccessGrantConnection?: UserItemAccessGrantConnectionResolvers<ContextType>;
  UserItemAccessGrantEdge?: UserItemAccessGrantEdgeResolvers<ContextType>;
  VariableDateProperty?: VariableDatePropertyResolvers<ContextType>;
  VariablePrecisionDate?: VariablePrecisionDateResolvers<ContextType>;
  VersionRequirement?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  oneOf?: OneOfDirectiveResolver<any, any, ContextType>;
};
