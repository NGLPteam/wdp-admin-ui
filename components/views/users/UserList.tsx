import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";

export default function UserList() {
  return (
    <section>
      <PageHeader title="Users" />
      <ul>
        <li>
          <Link href={`/users/1`}>
            <a>User number 1</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
