/**
 * Component Props Types
 * @description Interface For components props
 */

import { Article } from "./store";
import { RouteComponentProps } from "react-router-dom";

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

// New Articles Component Props
export interface NewArticlesComponentProps extends RouteComponentProps {}

// Top Articles Component Props
export interface TopArticlesComponentProps extends RouteComponentProps {}
