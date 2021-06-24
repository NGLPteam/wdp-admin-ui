import React from "react";
import Link from "next/link";
import { SubitemList, Manage } from "components/views/entities";
import { useGlobalData } from "hooks/useGlobalData";
import { TabNav } from "components/atomic";
import { PageHeader } from "components/layout";

export default function UserDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  // TODO: Dynamic breadcrumbs
  const breadcrumbs = {
    data: [
      {
        label: "Users",
        href: "/Users",
      },
      {
        label: `User: ${id}`,
        href: "#",
      },
    ],
  };

  return (
    <section>
      <PageHeader title={`User: ${id}`} breadcrumbsProps={breadcrumbs}>
        <TabNav>
          <Link href={`/users/${id}`} passHref>
            <TabNav.Tab active={view === "main"}>Main</TabNav.Tab>
          </Link>
          <Link href={`/users/${id}/manage`} passHref>
            <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "Users" && <SubitemList />}
      {view === "manage" && <Manage />}
    </section>
  );
}
