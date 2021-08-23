import React from "react";
import styled from "styled-components";
import { TagProps } from "../types";

const Tag: React.FC<TagProps> = ({ tag }: TagProps) => {
  return <TagContainer>{tag}</TagContainer>;
};

const TagContainer = styled.div`
  border: 2px solid black;
  margin: 0 0.5em 0 0;
  border-radius: 4px;
`;

export default Tag;
