import React from "react";

interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // no cache for this request
    //next: { revalidate: 10 }, //revalidate after 10 seconds
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>User</h1>
      {/* // this time changes only at development mode  */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
