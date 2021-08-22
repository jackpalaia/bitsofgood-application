import React, { useState } from "react";

import AddTag from "./AddTag";
import Tags from "./Tags";

const AddAndViewTags: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tagContent: string) => {
    setTags([...tags, tagContent]);
  };

  return (
    <div>
      <AddTag handleCreateTag={handleAddTag} />
      <Tags tags={tags} />
    </div>
  );
};

export default AddAndViewTags;
