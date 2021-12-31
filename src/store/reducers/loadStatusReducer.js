import {Types} from '../actions/loadStatus';


const initialState = {
  loadStatus: {
    isLoading: true,
  },
};

function loadStatusReducer(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case Types.APP_IS_LOADING:
      return {
        ...state,
        loadStatus: {
          isLoading: true,
        },
      };
    case Types.USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}

export default loadStatusReducer;
