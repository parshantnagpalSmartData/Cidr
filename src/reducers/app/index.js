import * as types from "../../actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  root: "MainScreen", // 'login' / 'after-login',
  navigator: null
});

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROOT_CHANGED:
      return {
        ...state,
        root: action.root
      };
    case types.SET_NAVIGATOR:
      return {
        ...state,
        navigator: action.navigator
      };
    default:
      return state;
  }
}
