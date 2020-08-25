/**
 * App Resources Interface
 * @description React Context Store Interafces
 */

import { Actions } from "./Actions";

export interface Article {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: number;
  type: string;
  url: string;
}

export interface ArticleState {
  topArticles: Article[] | null;
  newArticles: Article[] | null;
  allItemsCount: number;
  range: [number, number];
}

export interface GetNewArticlesAction {
  type: Actions.GET_NEW_ARTICLES;
  payload: Article[];
}

export interface GetTopArticlesAction {
  type: Actions.GET_TOP_ARTICLES;
  payload: Article[];
}

export type ArticleActions = GetNewArticlesAction | GetTopArticlesAction;
