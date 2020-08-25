import React, { useReducer, createContext } from "react";
import { ContextAction, ProviderComponentProps } from "../@types/context";

// Global App Context
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
