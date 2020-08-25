/**
 * App Actions Used To change the state in the store (Redux Like Pattern)
 */

import { Actions } from "../../@types/Actions";
import { newArticles, topArticles } from "../../data/AppData";

export const getNewArticles = (dispatch: Function) => async () => {
  try {
    dispatch({
      type: Actions.GET_NEW_ARTICLES,
      payload: null,
    });
    let newItems = [];
    if (newArticles.end < 500) {
      await newArticles.getArticles();
      newItems = await newArticles.getData();
    }
    dispatch({ type: Actions.GET_NEW_ARTICLES, payload: newItems });
  } catch (error) {
    console.log(error);
  }
};

export const getTopArticles = (dispatch: Function) => async () => {
  try {
    dispatch({
      type: Actions.GET_TOP_ARTICLES,
      payload: null,
    });
    let newItems = [];
    if (topArticles.end < 500) {
      await topArticles.getArticles();
      newItems = await topArticles.getData();
    }
    dispatch({ type: Actions.GET_TOP_ARTICLES, payload: newItems });
  } catch (error) {
    console.log(error);
  }
};
