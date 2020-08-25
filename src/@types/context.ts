/**
 * React Context Types
 * @description Interface For React Context API
 */

import { ReactNode } from "react";
import { Actions } from "./Actions";
import { Article } from "./store";

export interface ProviderComponentProps {
  children: ReactNode;
}

export interface ContextAction {
  getNewArticles: Function;
  getTopArticles: Function;
  type?: Actions;
  payload?: Article[];
}
