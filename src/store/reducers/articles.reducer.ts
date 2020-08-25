/**
 * Articles reducer function
 */

import { ArticleState, ArticleActions } from "../../@types/store";
import { Actions } from "../../@types/Actions";

const initialState: ArticleState = {
  topArticles: null,
  newArticles: null,
  allItemsCount: 0,
  range: [0, 0],
};

export default function articlesReducer(
  state: ArticleState = initialState,
  action: ArticleActions
): ArticleState {
  switch (action.type) {
    case Actions.GET_NEW_ARTICLES:
      return {
        ...state,
        newArticles: action.payload,
      };
    case Actions.GET_TOP_ARTICLES:
      return {
        ...state,
        topArticles: action.payload,
      };
    default:
      return state;
  }
}
