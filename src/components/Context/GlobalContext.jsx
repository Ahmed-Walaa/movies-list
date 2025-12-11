import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer.jsx";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        movieDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
export function useMovieContext() {
  return useContext(GlobalContext);
}
