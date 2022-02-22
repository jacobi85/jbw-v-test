import { Action } from "./actions";
export const appStateReducer = (draft: AppState, action: Action): AppState => {
  switch (action.type) {
    default:
      return draft;
  }
};

export type CarsList = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export type AppState = {
  carsList: CarsList[];
};
