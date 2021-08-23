export type Item = {
  title: string;
  tags: string[];
  dueDate: string;
  isCompleted: boolean;
};

// Prop types
export type CreateItemProps = {
  handleCreateItem: (item: Item) => void;
};

export type ViewAndFilterItemsProps = {
  items: Item[];
};
