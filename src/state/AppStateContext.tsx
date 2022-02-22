import React, { createContext, useContext, Dispatch } from "react";
import { useImmerReducer } from "use-immer";
import { withInitialState } from "../hocs/withInitialState";
import { appStateReducer, AppState, CarsList } from "./AppStateReducer";
import { Action } from "./actions";

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};

type AppStateContextProps = {
  carsList: CarsList[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    const { carsList } = state;

    return (
      <AppStateContext.Provider value={{ carsList, dispatch }}>
        {children}
      </AppStateContext.Provider>
    );
  }
);
export const useAppState = () => {
  return useContext(AppStateContext);
};
