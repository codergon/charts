import { combineReducers } from "redux";


const preferences = (state = { darkThemeEnabled: false }, action: any) => {
  switch (action.type) {
    case 0:
      return { darkThemeEnabled: true };
    case 1:
      return { darkThemeEnabled: false };

    default:
      return state;
  }
};

export default combineReducers({ preferences });
