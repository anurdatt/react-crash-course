import PostList from "./components/PostList"; 
import MainHeader from "./components/MainHeader";
import { AppProvider } from "./components/AppProvided";
import { useState } from "react";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  return (
    <AppProvider>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </AppProvider>
  );
}

export default App;