/**
 * Articles Context
 */

import contextCreation from "../context/context";
import articlesReducer from "./reducers/articles.reducer";
import { getNewArticles, getTopArticles } from "./actions/articles.action";
import { ArticleState } from "../@types/store";

export const {
  Context: ArticlesContext,
  Provider: ArticlesProvider,
} = contextCreation<ArticleState>(
  // @ts-ignore
  articlesReducer,
  {
    getNewArticles,
    getTopArticles,
  },
  { newArticles: null, topArticles: null }
);
