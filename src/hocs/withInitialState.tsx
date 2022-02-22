import React, { useState, useEffect, ComponentType } from "react";
import { getCars } from "../apiCalls";
import Loading from "../components/Loading";
import { arraySortByValue } from "../utils/arrayUtils";
import { AppState } from "../state/AppStateReducer";

type InjectedProps = { initialState: AppState };

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<TProps & InjectedProps>
) {
  return (props: Omit<TProps, keyof InjectedProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      carsList: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined | any>();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const results = await getCars();
          const sortedResults = arraySortByValue(results, "id");
          setInitialState((prevState) => ({
            ...prevState,
            carsList: sortedResults,
          }));
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <WrappedComponent {...(props as TProps)} initialState={initialState} />
    );
  };
}
