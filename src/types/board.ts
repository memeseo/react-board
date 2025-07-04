export interface Column {
  id: "id" | "title" | "body" | "views";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface Posts {
  id: number;
  title: string;
  views: number;
  body : string;
}

export interface Props {
  posts: Posts[];
}

export interface PaginationProps {
  page: number;
  rowsPerPage: number;
  totalCount: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (rows: number) => void;
}

export interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
