import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>User</h1>
      {/* // this time changes only at development mode  */}
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <Link href="/users/new" className="btn">
        New user
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
