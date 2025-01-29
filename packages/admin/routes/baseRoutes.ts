import type { BaseRoute } from "@wdp/lib/routes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "search",
    path: "/search",
  },
  {
    name: "collections",
    path: "/collections",
    label: "glossary.collection_other",
    routes: [
      {
        name: "collection",
        path: "/collections/[slug]",
        label: "glossary.collection",
        routes: [
          {
            name: "collection.child.collections",
            path: "/collections/[slug]/collections",
            label: "glossary.collection_other",
          },
          {
            name: "collection.child.items",
            path: "/collections/[slug]/items",
            label: "glossary.item_other",
          },
          {
            name: "collection.manage",
            path: "/collections/[slug]/manage",
            redirect: "/collections/[slug]/manage/details",
            label: "manage",
            actions: ["self.update"],
            routes: [
              {
                name: "collection.manage.details",
                path: "/collections/[slug]/manage/details",
                label: "nav.details",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.order",
                path: "/collections/[slug]/manage/order",
                label: "nav.order",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.links",
                path: "/collections/[slug]/manage/links",
                label: "nav.links",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.access",
                path: "/collections/[slug]/manage/access",
                label: "nav.access",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.pages",
                path: "/collections/[slug]/manage/pages",
                label: "nav.pages",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.announcements",
                path: "/collections/[slug]/manage/announcements",
                label: "nav.announcements",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.contributions",
                path: "/collections/[slug]/manage/contributions",
                label: "glossary.contribution_other",
                actions: ["self.update"],
              },
              {
                name: "collection.manage.files",
                path: "/collections/[slug]/manage/files",
                label: "nav.files",
                actions: ["self.update"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "items",
    path: "/items",
    label: "glossary.item_other",
    routes: [
      {
        name: "item",
        path: "/items/[slug]",
        label: "glossary.item_other",
        routes: [
          {
            name: "item.child.items",
            path: "/items/[slug]/items",
            label: "glossary.item_other",
          },
          {
            name: "item.manage",
            path: "/items/[slug]/manage",
            redirect: "/items/[slug]/manage/details",
            label: "nav.manage",
            actions: ["self.update"],
            routes: [
              {
                name: "item.manage.details",
                path: "/items/[slug]/manage/details",
                label: "nav.details",
                actions: ["self.update"],
              },
              {
                name: "item.manage.order",
                path: "/items/[slug]/manage/order",
                label: "nav.order",
                actions: ["self.update"],
              },
              {
                name: "item.manage.links",
                path: "/items/[slug]/manage/links",
                label: "nav.links",
                actions: ["self.update"],
              },
              {
                name: "item.manage.access",
                path: "/items/[slug]/manage/access",
                label: "nav.access",
                actions: ["self.update"],
              },
              {
                name: "item.manage.pages",
                path: "/items/[slug]/manage/pages",
                label: "nav.pages",
                actions: ["self.update"],
              },
              {
                name: "item.manage.announcements",
                path: "/items/[slug]/manage/announcements",
                label: "nav.announcements",
                actions: ["self.update"],
              },
              {
                name: "item.manage.contributions",
                path: "/items/[slug]/manage/contributions",
                label: "glossary.contribution_other",
                actions: ["self.update"],
              },
              {
                name: "item.manage.files",
                path: "/items/[slug]/manage/files",
                label: "nav.files",
                actions: ["self.update"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "communities",
    path: "/communities",
    label: "glossary.community_other",
    routes: [
      {
        name: "community",
        path: "/communities/[slug]",
        redirect: "/communities/[slug]/collections",
        label: "glossary.community_other",
        routes: [
          {
            name: "community.child.collections",
            path: "/communities/[slug]/collections",
            label: "glossary.collection_other",
          },
          {
            name: "community.manage",
            path: "/communities/[slug]/manage",
            redirect: "/communities/[slug]/manage/details",
            label: "nav.manage",
            actions: ["self.update"],
            routes: [
              {
                name: "community.manage.details",
                path: "/communities/[slug]/manage/details",
                label: "nav.details",
                actions: ["self.update"],
              },
              {
                name: "community.manage.members",
                path: "/communities/[slug]/manage/members",
                label: "nav.members",
                actions: ["self.update"],
              },
              {
                name: "community.manage.pages",
                path: "/communities/[slug]/manage/pages",
                label: "nav.pages",
                actions: ["self.update"],
              },
              {
                name: "community.manage.announcements",
                path: "/communities/[slug]/manage/announcements",
                label: "nav.announcements",
                actions: ["self.update"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "communities.search",
    path: "/communities/search",
    label: "Search Communities",
  },
  {
    name: "users",
    path: "/users",
    label: "glossary.user_other",
    routes: [
      {
        name: "user",
        path: "/users/[slug]",
        redirect: "/users/[slug]/details",
        label: "glossary.user_other",
        routes: [
          {
            name: "user.details",
            path: "/users/[slug]/details",
            label: "nav.details",
          },
          {
            name: "user.communities",
            path: "/users/[slug]/communities",
            label: "glossary.community_other",
          },
          {
            name: "user.collections",
            path: "/users/[slug]/collections",
            label: "glossary.collection_other",
          },
          {
            name: "user.items",
            path: "/users/[slug]/items",
            label: "glossary.item_other",
          },
        ],
      },
    ],
  },
  {
    name: "contributors",
    path: "/contributors",
    label: "glossary.contributor_other",
    routes: [
      {
        name: "contributor",
        path: "/contributors/[slug]",
        redirect: "/contributors/[slug]/details",
        label: "glossary.contributor_other",
        routes: [
          {
            name: "contributor.details",
            path: "/contributors/[slug]/details",
            label: "nav.details",
          },
          {
            name: "contributor.collections",
            path: "/contributors/[slug]/collections",
            label: "nav.collection_contributions",
          },
          {
            name: "contributor.items",
            path: "/contributors/[slug]/items",
            label: "nav.item_contributions",
          },
        ],
      },
    ],
  },
];
