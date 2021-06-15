import React from "react";
import { useSetLocale } from "hooks/useSetLocale";
import {
  useSetActiveEntity,
  useSetActiveId,
  useSetActiveView,
} from "hooks/useGlobalData";
import CollectionDetailView from "components/views/collections/CollectionDetail";
import CommunityDetailView from "components/views/communities/CommunityDetail";
import ItemDetailView from "components/views/items/ItemDetail";
import UserDetailView from "components/views/users/UserDetail";
import PageNotFoundView from "components/views/PageNotFound";

export default function EntityDetailPage({ ...pageProps }) {
  useSetLocale("en");
  const entity = useSetActiveEntity();
  useSetActiveId();
  useSetActiveView();

  const viewMap: MapOver = {
    collections: CollectionDetailView,
    communities: CommunityDetailView,
    items: ItemDetailView,
    users: UserDetailView,
  };

  const Template = viewMap[entity] || PageNotFoundView;

  return <Template {...pageProps} />;
}
