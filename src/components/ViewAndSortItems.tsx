import React, { useState } from "react";
import styled from "styled-components";
import { Item, ViewAndSortItemsProps } from "../types";
import Tag from "./Tag";

const ViewAndSortItems: React.FC<ViewAndSortItemsProps> = ({
  items,
  setItems,
  allTags,
}: ViewAndSortItemsProps) => {
  const [isSortedCompletion, setIsSortedCompletion] = useState<boolean>(false);
  const [isSortedDate, setIsSortedDate] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSortCompletion = () => {
    setIsSortedCompletion(!isSortedCompletion);
  };

  const handleSortDate = () => {
    setIsSortedDate(!isSortedDate);
  };

  const getSortedAndFilteredItems = () => {
    let newItems = [...items];
    if (isSortedDate) {
      newItems.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    }
    if (isSortedCompletion) {
      newItems.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    }
    if (selectedTags.length !== 0) {
      newItems = [...newItems].filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }
    return newItems;
  };

  return (
    <>
      <SortItemsContainer>
        <div>
          <input type="checkbox" onClick={handleSortCompletion} /> sort by
          completion
        </div>
        <div>
          <input type="checkbox" onClick={handleSortDate} /> sort by date
        </div>
        <FlexContainer>
          filter by tag
          <Select multiple value={selectedTags}>
            {allTags.map((tag) => (
              <option
                value={tag}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags([...selectedTags].filter((t) => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
              >
                {tag}
              </option>
            ))}
          </Select>
        </FlexContainer>
      </SortItemsContainer>
      <ViewItemsContainer>
        {getSortedAndFilteredItems().map((item) => (
          <ItemContainer>
            <FirstRow>
              <input
                type="checkbox"
                onClick={() => {
                  const newItems: Item[] = [...items];
                  const newItem: Item = { ...items[items.indexOf(item)] };
                  newItem.isCompleted = !item.isCompleted;
                  newItems[items.indexOf(item)] = newItem;
                  setItems(newItems);
                }}
                checked={item.isCompleted}
              />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDueDate>due by: {item.dueDate}</ItemDueDate>
            </FirstRow>
            <TagContainer>
              {item.tags.map((tag) => (
                <Tag tag={tag} />
              ))}
            </TagContainer>
          </ItemContainer>
        ))}
      </ViewItemsContainer>
    </>
  );
};

const ViewItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemTitle = styled.h3`
  margin: 0 0 0 1em;
`;

const ItemDueDate = styled.p`
  margin: 0 0 0 auto;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
`;

const SortItemsContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  width: 40%;
`;

export default ViewAndSortItems;
