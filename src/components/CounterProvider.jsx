import React, { createContext, useReducer } from 'react'

const CounterContext = createContext({ count: 0 })
const reducer = (state, action) => {
  if (!action || !action.type) {
    throw new Error(`Reducer got invalid action: ${JSON.stringify(action)}`)
  }

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'INIT':
      return { count: action.value }
    default:
      return state
  }
}
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export { CounterContext, CounterProvider }
