import { useBookmarks } from "../context/BookmarkContext";

export const BookmarkList = () => {
  const {
    state: { bookmarks },
    dispatch
  } = useBookmarks();

  if (bookmarks.length === 0) {
    return <p>No bookmarks, please add.</p>;
  }

  return (
    <ol>
      {bookmarks?.map((bookmark) => {
        return (
          <li
            style={{ marginBottom: "0.5rem", textAlign: "left" }}
            key={bookmark.id}
          >
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>{" "}
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_BOOKMARK",
                  payload: { id: bookmark.id }
                })
              }
            >
              remove
            </button>
          </li>
        );
      })}
    </ol>
  );
};
