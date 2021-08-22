import React from "react";

import AddTitle from "./AddTitle";
import AddAndViewTags from "./AddAndViewTags";
import AddDueDate from "./AddDueDate";

const CreateItem: React.FC = () => {
  return (
    <div>
      <h2>Add todo item:</h2>
      <AddTitle />
      <AddAndViewTags />
      <AddDueDate />
      <button type="button">Add todo item</button>
    </div>
  );
};

export default CreateItem;
