import React from "react";
import styled from "styled-components";

const Tags: React.FC<TagsProps> = ({ tags }: TagsProps) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
};

const Tag = styled.div`
  border: 2px solid black;
`;

type TagsProps = {
  tags: string[];
};

export default Tags;
