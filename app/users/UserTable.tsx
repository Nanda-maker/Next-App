import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // no cache for this request
    //next: { revalidate: 10 }, //revalidate after 10 seconds
  });
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
