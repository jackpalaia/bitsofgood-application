import React, { useState } from "react";
import styled from "styled-components";
import { CreateItemProps } from "../types";

const CreateItem: React.FC<CreateItemProps> = ({
  handleCreateItem,
  allTags,
  setAllTags,
}: CreateItemProps) => {
  const [title, setTitle] = useState<string>("");
  const [tagText, setTagText] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const createTag = () => {
    setTags([...tags, tagText]);
    if (!allTags.includes(tagText)) {
      setAllTags([...allTags, tagText]);
    }
    setTagText("");
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
    <CreateItemForm onSubmit={createItem}>
      <FormInput>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </FormInput>
      <FormInput>
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
      </FormInput>

      <TagContainer>
        {tags.map((tag) => (
          <TagBorder
            onClick={() => {
              setTags(tags.filter((t) => t !== tag));
              setAllTags(allTags.filter((t) => t !== tag));
            }}
          >
            <b>&nbsp;x</b> {tag}
          </TagBorder>
        ))}
      </TagContainer>

      <FormInput>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          required
        />
      </FormInput>
      <SubmitButton type="submit">Create</SubmitButton>
    </CreateItemForm>
  );
};

const CreateItemForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormInput = styled.div`
  margin: 0 0 1em 0;
  display: flex;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SubmitButton = styled.button`
  margin: 0 0 1em 0;
`;

const TagBorder = styled.div`
  border: 2px solid black;
  margin: 0 0.5em 0 0;
  border-radius: 5px;
  cursor: pointer;
`;

export default CreateItem;
