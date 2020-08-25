import { Article } from "./store";

// Navbar Item Props
export interface NavbarItemComponentProps {
  text: string;
  link: string;
}

// Articles Component Props
export interface ArticlesComponentProps {
  articles: Article[] | null;
}

// Article Component Props
export interface ArticleComponentProps {
  article: Article;
  index: number;
}
