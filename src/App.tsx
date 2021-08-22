import React from "react";

import CreateItem from "./components/CreateItem";
import FilterItems from "./components/FilterItems";
import Items from "./components/Items";

const App: React.FC = () => {
  return (
    <>
      <CreateItem />
      <FilterItems />
      <Items />
    </>
  );
};

export default App;
