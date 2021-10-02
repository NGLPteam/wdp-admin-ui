import type { BaseRoute } from "./NextNamedRoutes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "collections",
    path: "/collections",
    label: "glossary.collection.label_plural",
    routes: [
      {
        name: "collection",
        path: "/collections/[slug]",
        redirect: "/collections/[slug]/collections",
        label: "glossary.collection.label",
        routes: [
          {
            name: "collection.child.collections",
            path: "/collections/[slug]/collections",
            label: "glossary.collection.label_plural",
          },
          {
            name: "collection.child.items",
            path: "/collections/[slug]/items",
            label: "glossary.item.label_plural",
          },
          {
            name: "collection.manage",
            path: "/collections/[slug]/manage",
            redirect: "/collections/[slug]/manage/details",
            label: "manage",
            routes: [
              {
                name: "collection.manage.details",
                path: "/collections/[slug]/manage/details",
                label: "navLabels.details",
              },
              {
                name: "collection.manage.order",
                path: "/collections/[slug]/manage/order",
                label: "navLabels.order",
              },
              {
                name: "collection.manage.links",
                path: "/collections/[slug]/manage/links",
                label: "navLabels.links",
              },
              {
                name: "collection.manage.access",
                path: "/collections/[slug]/manage/access",
                label: "navLabels.access",
              },
              {
                name: "collection.manage.pages",
                path: "/collections/[slug]/manage/pages",
                label: "navLabels.pages",
              },
              {
                name: "collection.manage.contributions",
                path: "/collections/[slug]/manage/contributions",
                label: "navLabels.contributions",
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
    label: "glossary.item.label_plural",
    routes: [
      {
        name: "item",
        path: "/items/[slug]",
        redirect: "/items/[slug]/items",
        label: "glossary.item.label_plural",
        routes: [
          {
            name: "item.child.items",
            path: "/items/[slug]/items",
            label: "glossary.item.label_plural",
          },
          {
            name: "item.manage",
            path: "/items/[slug]/manage",
            redirect: "/items/[slug]/manage/details",
            label: "manage",

            routes: [
              {
                name: "item.manage.details",
                path: "/items/[slug]/manage/details",
                label: "navLabels.details",
              },
              {
                name: "item.manage.order",
                path: "/items/[slug]/manage/order",
                label: "navLabels.order",
              },
              {
                name: "item.manage.rules",
                path: "/items/[slug]/manage/rules",
                label: "navLabels.rules",
              },
              {
                name: "item.manage.links",
                path: "/items/[slug]/manage/links",
                label: "navLabels.links",
              },
              {
                name: "item.manage.pages",
                path: "/items/[slug]/manage/pages",
                label: "navLabels.pages",
              },
              {
                name: "item.manage.contributions",
                path: "/items/[slug]/manage/contributions",
                label: "navLabels.contributions",
              },
              {
                name: "item.manage.files",
                path: "/items/[slug]/manage/files",
                label: "navLabels.files",
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
    label: "glossary.community.label_plural",
    routes: [
      {
        name: "community",
        path: "/communities/[slug]",
        redirect: "/communities/[slug]/collections",
        label: "glossary.community.label_plural",
        routes: [
          {
            name: "community.child.collections",
            path: "/communities/[slug]/collections",
            label: "glossary.collection.label_plural",
          },
          {
            name: "community.manage",
            path: "/communities/[slug]/manage",
            redirect: "/communities/[slug]/manage/details",
            label: "manage",

            routes: [
              {
                name: "community.manage.details",
                path: "/communities/[slug]/manage/details",
                label: "navLabels.details",
              },
              {
                name: "community.manage.members",
                path: "/communities/[slug]/manage/members",
                label: "navLabels.members",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "users",
    path: "/users",
    label: "glossary.user.label_plural",
    routes: [
      {
        name: "user",
        path: "/users/[slug]",
        redirect: "/users/[slug]/details",
        label: "glossary.user.label_plural",
        routes: [
          {
            name: "user.details",
            path: "/users/[slug]/details",
            label: "navLabels.details",
          },
          {
            name: "user.permissions",
            path: "/users/[slug]/permissions",
            label: "navLabels.permissions",
          },
          {
            name: "user.collections",
            path: "/users/[slug]/collections",
            label: "navLabels.collections",
          },
          {
            name: "user.items",
            path: "/users/[slug]/items",
            label: "navLabels.items",
          },
        ],
      },
    ],
  },
  {
    name: "contributors",
    path: "/contributors",
    label: "glossary.contributor.label_plural",
    routes: [
      {
        name: "contributor",
        path: "/contributors/[slug]",
        redirect: "/contributors/[slug]/details",
        label: "glossary.contributor.label_plural",
        routes: [
          {
            name: "contributor.details",
            path: "/contributors/[slug]/details",
            label: "navLabels.details",
          },
          {
            name: "contributor.collections",
            path: "/contributors/[slug]/collections",
            label: "navLabels.collectionContributions",
          },
          {
            name: "contributor.items",
            path: "/contributors/[slug]/items",
            label: "navLabels.itemContributions",
          },
        ],
      },
    ],
  },
];
