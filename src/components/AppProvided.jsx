import React, {createContext, useReducer} from 'react';


const AppContext = createContext();


const AppProvider = ({children}) => {
    const reducer = ({state, action}) => {
        switch (action.type) {
            case 'INCREMENT':
                return {count: state.count + 1};
            case 'INIT':
                return {count: action.value}
            default: 
                return state;
        }
    }

    
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
    );
}

export {AppContext, AppProvider};