import React, { useState } from "react";

import CreateItem from "./components/CreateItem";
import ViewAndFilterItems from "./components/ViewAndFilterItems";
import { Item } from "./types";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleCreateItem = (item: Item) => {
    setItems([...items, item]);
  };

  return (
    <>
      <CreateItem handleCreateItem={handleCreateItem} />
      <ViewAndFilterItems items={items} />
    </>
  );
};

export default App;
