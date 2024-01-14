import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
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
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
