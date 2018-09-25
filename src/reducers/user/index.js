/*
AuthorName : Parshant Nagpal
FileName: reducer.js
Description: Contains the reducer regarding the user
Date : 11 Sept 2018  
*/

import * as Types from "./actionTypes";
const initialState = {};

export default (user = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_REGISTERATION:
      return { ...state, ...action.data };
  }
});
