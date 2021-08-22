import React, { useState } from "react";

const AddTag: React.FC<AddTagsProps> = ({ handleCreateTag }: AddTagsProps) => {
  const [tagContent, setTagContent] = useState("");

  const createTag = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateTag(tagContent);
  };

  return (
    <div>
      <form onSubmit={createTag}>
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          value={tagContent}
          onChange={({ target }) => setTagContent(target.value)}
        />
        <button type="submit">Create new tag</button>
      </form>
    </div>
  );
};

type AddTagsProps = {
  handleCreateTag: (tagContent: string) => void;
};

export default AddTag;
