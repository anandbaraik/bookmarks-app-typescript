import { bookmarks as bookmarksData } from "../assets/bookmarks";
import { BookmarkActionType, BookmarkType } from "../types/Bookmarks.types";

export type BookmarksStateType = {
  bookmarks: BookmarkType[];
};

type BookmarkReducerProps = (
  state: BookmarksStateType,
  action: BookmarkActionType
) => BookmarksStateType;

export const initialState: BookmarksStateType = {
  bookmarks: bookmarksData
};

export const bookmarkReducer: BookmarkReducerProps = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK": {
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    }
    case "REMOVE_BOOKMARK": {
      return {
        ...state,
        bookmarks: [...state.bookmarks].filter(
          ({ id }) => id !== action.payload.id
        )
      };
    }
    default:
      return state;
  }
};
