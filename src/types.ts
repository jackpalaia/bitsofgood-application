export type Item = {
  title: string;
  tags: string[];
  dueDate: string;
  isCompleted: boolean;
};

// Prop types
export type CreateItemProps = {
  handleCreateItem: (item: Item) => void;
  allTags: string[];
  setAllTags: (tags: string[]) => void;
};

export type ViewAndSortItemsProps = {
  items: Item[];
  setItems: (items: Item[]) => void;
  allTags: string[];
};

export type RemoveableTagProps = {
  tag: string;
};

export type TagProps = {
  tag: string;
};
