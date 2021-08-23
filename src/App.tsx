import React, { useState } from "react";
import styled from "styled-components";

import CreateItem from "./components/CreateItem";
import ViewAndSortItems from "./components/ViewAndSortItems";
import { Item } from "./types";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  const handleCreateItem = (item: Item) => {
    setItems([...items, item]);
  };

  return (
    <Main>
      <Container>
        <h1>Todo list</h1>
        <CreateItem
          handleCreateItem={handleCreateItem}
          allTags={allTags}
          setAllTags={setAllTags}
        />
        <ViewAndSortItems items={items} setItems={setItems} allTags={allTags} />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  border-radius: 1em;
  background-color: #ffffff;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
