import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}
const userDetailpage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>userDetailpage {id}</div>;
};

export default userDetailpage;
