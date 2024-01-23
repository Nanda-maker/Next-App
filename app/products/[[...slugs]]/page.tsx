import React from "react";

interface Props {
  params: {
    slugs: string[];
  };
  searchParams: { sortOrder: string };
}
const ProductPage = ({
  params: { slugs },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slugs} {sortOrder}
    </div>
  );
};

export default ProductPage;
