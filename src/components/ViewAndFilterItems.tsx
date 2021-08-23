import React from "react";
import { ViewAndFilterItemsProps } from "../types";

const ViewAndFilterItems: React.FC<ViewAndFilterItemsProps> = ({
  items,
}: ViewAndFilterItemsProps) => {
  return (
    <div>
      {items.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default ViewAndFilterItems;
