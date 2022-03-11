import {
  USERS_REQUEST_PROCESS,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS,

  USERDEL_REQUEST_ERROR,
  USERDEL_REQUEST_SUCCESS,

  ROLEUPDATE_REQUEST_ERROR,
  ROLEUPDATE_REQUEST_SUCCESS
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case USERS_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case USERDEL_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case USERDEL_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter(user => user._id !== action.data.id)],
        isLoading: false
      };
    case ROLEUPDATE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case ROLEUPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data.reduce((arr, user) => user._id !== action.data._id ? [...arr, user] : [...arr, action.data], [])],
        isLoading: false
      };
    default:
      return state;
  }
};
