type BookmarkType = {
  id: string;
  title: string;
  url: string;
};

type AddBookmarkAction = {
  type: "ADD_BOOKMARK";
  payload: BookmarkType;
};

type RemoveBookmarkAction = {
  type: "REMOVE_BOOKMARK";
  payload: {
    id: string;
  };
};

type BookmarkActionType = AddBookmarkAction | RemoveBookmarkAction;

export {
  BookmarkActionType,
  AddBookmarkAction,
  RemoveBookmarkAction,
  BookmarkType
};
