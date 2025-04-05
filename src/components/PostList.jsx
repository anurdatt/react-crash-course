import { useContext, useEffect, useState } from 'react'
import NewPost from './NewPost'
import { CounterContext } from './CounterProvider'
import Post from './Post'
import classes from './PostList.module.css'
import Modal from './Modal'
function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const { dispatch } = useContext(CounterContext)

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts')
      const resBody = await response.json()
      setPosts(resBody.posts)
      setIsFetching(false)
      dispatch({ type: 'INIT', value: resBody.posts.length })
    }
    fetchPosts()
  }, [])

  async function addPostHandler(postData) {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: [['Content-Type', 'application/json']],
    })
    const resBody = await response.json()
    setPosts((existingPosts) => [resBody.post, ...existingPosts])
    dispatch({ type: 'INCREMENT' })
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Loading data.</h2>
          <p>Please wait!</p>
        </div>
      )}
    </>
  )
}

export default PostList
