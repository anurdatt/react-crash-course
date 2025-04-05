import { MdPostAdd, MdMessage } from 'react-icons/md'
import { CounterContext } from './CounterProvider'
import classes from './MainHeader.module.css'
import { useContext } from 'react'

function MainHeader({ onCreatePost }) {
  const { state } = useContext(CounterContext)
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>Count is {state.count}</p>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  )
}

export default MainHeader
