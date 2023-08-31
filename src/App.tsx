import "./styles.css";
import { Header } from "./components/Header";
import { BookmarkList } from "./components/BookmarkList";
import { BookmarkForm } from "./components/BookmarkForm";
export default function App() {
  return (
    <div className="App">
      <Header title={"Bookmarks"} />
      <BookmarkForm />
      <BookmarkList />
    </div>
  );
}
