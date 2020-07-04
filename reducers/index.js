import {
  RECEIVE_PROFILE} from "../actions";


const profiles = (state = initialState, action) => {

  switch (action.type) {
    case RECEIVE_PROFILE:
          console.log("\nAll Profile- Reducer =>",state)
      return {
        ...state,
        ...action.profiles
      };

    default:
      return state;
  }
};

export default profiles;
