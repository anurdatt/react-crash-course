import PostList from './components/PostList'
import MainHeader from './components/MainHeader'
import { CounterProvider } from './components/CounterProvider'
import { useState } from 'react'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function hideModalHandler(event) {
    setModalIsVisible(false)
  }

  function showModalHandler(event) {
    setModalIsVisible(true)
  }

  return (
    <CounterProvider>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </CounterProvider>
  )
}

export default App
