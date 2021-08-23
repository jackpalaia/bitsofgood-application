import React, { useState } from "react";
import { CreateItemProps } from "../types";

const CreateItem: React.FC<CreateItemProps> = ({
  handleCreateItem,
}: CreateItemProps) => {
  const [title, setTitle] = useState<string>("");
  const [tagText, setTagText] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const createTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTags([...tags, tagText]);
  };

  const createItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateItem({
      title,
      tags,
      dueDate,
      isCompleted: false,
    });
    setTitle("");
    setTagText("");
    setDueDate("");
    setTags([]);
  };

  return (
    <div>
      <h2>Add todo item:</h2>
      <form onSubmit={createItem}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          value={tagText}
          onChange={(event) => setTagText(event.target.value)}
        />
        <button type="button" onClick={createTag}>
          Create new tag
        </button>
        {tags.map((tag) => (
          <div>{tag}</div>
        ))}
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateItem;
