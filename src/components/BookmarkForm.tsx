import React, { useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

type initialFormStateType = {
  title: string;
  url: string;
};
const initialFormState: initialFormStateType = {
  title: "",
  url: ""
};

export const BookmarkForm = () => {
  const [formData, setFormData] = useState<initialFormStateType>(
    initialFormState
  );
  const { dispatch } = useBookmarks();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOKMARK",
      payload: {
        ...formData,
        id: crypto.randomUUID()
      }
    });
    setFormData(initialFormState);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={formData.title}
        onChange={inputHandler}
        required
      />
      <br />
      <br />
      <input
        type="url"
        name="url"
        placeholder="Enter url"
        value={formData.url}
        onChange={inputHandler}
        required
      />{" "}
      <br />
      <br />
      <button type="submit">Add to bookmark</button>
      <hr />
    </form>
  );
};
