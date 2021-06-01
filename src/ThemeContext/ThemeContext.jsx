import React, {createContext, useReducer} from 'react'
import { SET_CUSTOM_THEME, SET_DARK_THEME, SET_LIGHT_THEME } from './ThemeConstants'
import themeReducer from './ThemeReducer'

var initialValue = { background: "#fcfcfc", color: "black" }
// create new Context
export var ThemeContext = createContext() //create context just like store
const ThemeProvider = ({children}) => {
    var [state, dispatch] = useReducer(themeReducer,initialValue)

    var actions = {
        setLightTheme : () => dispatch({type: SET_LIGHT_THEME}),
        setDarkTheme : () => dispatch({type: SET_DARK_THEME}),
        setCustomTheme : (theme) => dispatch({type: SET_CUSTOM_THEME, payload:{theme}})


    }
    return (
        <ThemeContext.Provider value = {{themeState:state, themeActions: actions}}>
           {children} 
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
