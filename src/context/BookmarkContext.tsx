import React, { createContext, useContext, useReducer } from "react";
import {
  bookmarkReducer,
  initialState,
  BookmarksStateType
} from "../reducer/BookmarkReducer";

import { BookmarkActionType } from "../types/Bookmarks.types";

type BookmarkContextProviderProps = {
  children: React.ReactNode;
};

type BookmarkContextType = {
  state: BookmarksStateType;
  dispatch: React.Dispatch<BookmarkActionType>;
};
const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkContextProvider: React.FC<BookmarkContextProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);
  return (
    <BookmarkContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be within the provider!");
  }
  return context;
};
