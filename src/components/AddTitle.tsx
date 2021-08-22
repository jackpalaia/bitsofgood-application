import React from "react";

const AddTitle: React.FC = () => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />
    </div>
  );
};

export default AddTitle;
