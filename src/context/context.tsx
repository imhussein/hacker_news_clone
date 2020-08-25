/**
 * Global App Context Store
 * @description This function is custom function for auto context creattion and i have used to create context object management for each resource ex. Articles, Posts, Users... And i could have used redux, @rxjs/store or flux for state mangement but i prefered to use only react instead of installing new packages and please if you want to me build the app again with redux or Rxjs or any state management i will do it again.
 */

import React, { useReducer, createContext } from "react";
import { ContextAction, ProviderComponentProps } from "../@types/context";

export default function appContext<ContextState>(
  reducer: (state: ContextState, action: ContextAction) => ContextState,
  actions: ContextAction,
  initialState: ContextState
): {
  Provider: ({ children }: ProviderComponentProps) => JSX.Element;
  Context: any;
} {
  const Context = createContext<ContextState>(initialState as any);

  const Provider = ({ children }: ProviderComponentProps): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const restActions: any = {};

    for (let action in actions) {
      //@ts-ignore
      restActions[action] = actions[action](dispatch);
    }

    return (
      <Context.Provider value={{ ...restActions, ...state }}>
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
  };
}
