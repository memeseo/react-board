import type { User } from "firebase/auth";

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

export type UserRole = "admin" | "user" | "guest";

export interface UserInfo {
  email: string;
  password : string;
  role: UserRole;
}

export interface AuthUserContextType {
  user: User | null;
  loading: boolean;
}

export interface SideToolbarProps {
  postLength: number;
  selected: number[];
}

export type ModalType = "login" | "signup" | null;

export interface AuthModalContextType {
  openModal: ModalType;
  openLogin: () => void;
  openSignup: () => void;
  closeModal: () => void;
}


interface Post {
  id: number;
  title: string;
  views: number;
  body : string;
  reactions : {
    likes : number,
    dislikes : number
  }
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
}

