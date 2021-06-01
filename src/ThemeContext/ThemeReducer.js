import {
  SET_CUSTOM_THEME,
  SET_DARK_THEME,
  SET_LIGHT_THEME,
} from "./ThemeConstants";

var themeReducer = (state, action) => {
  var { type, payload } = action;
  switch (type) {
    case SET_LIGHT_THEME:
      return { background: "#fcfcfc", color: "black" };
    case SET_DARK_THEME:
      return { background: "#2b2b2b", color: "white" };
    case SET_CUSTOM_THEME:
      return {
        background: payload.theme.background,
        color: payload.theme.color,
      };
    default:
      return state;
  }
};
export default themeReducer