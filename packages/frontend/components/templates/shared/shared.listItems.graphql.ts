import { graphql, useFragment } from "react-relay";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import { sharedListItemsTemplateFragment$key } from "@/relay/sharedListItemsTemplateFragment.graphql";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "./shared.slots.graphql";

export const listItemsTemplateFragment = graphql`
  fragment sharedListItemsTemplateFragment on TemplateEntityList {
    empty
    count
    listItemLayouts {
      template {
        ...sharedListItemTemplateFragment
        entityList {
          empty
          count
          listItemLayouts {
            template {
              ...sharedListItemTemplateFragment
            }
          }
        }
      }
    }
  }
`;

export const useSharedListItemsTemplateFragment = (
  data?: sharedListItemsTemplateFragment$key | null,
) => {
  const list = useFragment(listItemsTemplateFragment, data);
  const { listItemLayouts, empty, count } = list ?? {};
  return { listItemLayouts, empty, count };
};

export const listItemTemplateFragment = graphql`
  fragment sharedListItemTemplateFragment on ListItemTemplateInstance {
    entity {
      ... on Collection {
        __typename
        id
        slug
        title
        thumbnail {
          image: large {
            webp {
              url
            }
          }
          ...CoverImageFragment
        }
        contributors {
          pageInfo {
            totalCount
          }
        }
        ...ContributorsListFragment
        heroImage {
          image: large {
            webp {
              alt
              url
            }
          }
        }
      }
      ... on Item {
        __typename
        id
        slug
        title
        thumbnail {
          image: large {
            webp {
              url
            }
          }
          ...CoverImageFragment
        }
        contributors {
          pageInfo {
            totalCount
          }
        }
        ...ContributorsListFragment
        heroImage {
          image: large {
            webp {
              alt
              url
            }
          }
        }
      }
    }
    slots {
      contextFull {
        ...sharedInlineSlotFragment
      }
      contextAbbr {
        ...sharedInlineSlotFragment
      }
      contextC {
        ...sharedInlineSlotFragment
      }
      description {
        ...sharedBlockSlotFragment
      }
      header {
        ...sharedInlineSlotFragment
      }
      metaA {
        ...sharedInlineSlotFragment
      }
      metaB {
        ...sharedInlineSlotFragment
      }
      subheader {
        ...sharedInlineSlotFragment
      }
    }
  }
`;

export const useSharedListItemTemplateFragment = (
  data?: sharedListItemTemplateFragment$key | null,
) => {
  const template = useFragment(listItemTemplateFragment, data);
  const { slots, entity } = template ?? {};
  const contextAbbr = useSharedInlineFragment(slots?.contextAbbr);
  const contextFull = useSharedInlineFragment(slots?.contextFull);
  const description = useSharedBlockFragment(slots?.description);
  const header = useSharedInlineFragment(slots?.header);
  const metaA = useSharedInlineFragment(slots?.metaA);
  const metaB = useSharedInlineFragment(slots?.metaB);
  const subheader = useSharedInlineFragment(slots?.subheader);

  return {
    entity,
    slots: {
      contextAbbr,
      contextFull,
      description,
      header,
      metaA,
      metaB,
      subheader,
    },
  };
};
