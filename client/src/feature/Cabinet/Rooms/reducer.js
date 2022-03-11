import {
  ROOMS_REQUEST_PROCESS,
  ROOMS_REQUEST_ERROR,
  ROOMS_REQUEST_SUCCESS,

  ROOMADD_REQUEST_ERROR,
  ROOMADD_REQUEST_SUCCESS,

  ROOMDEL_REQUEST_ERROR,
  ROOMDEL_REQUEST_SUCCESS
} from "./actions";

const initialState = {
  data: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOMS_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case ROOMS_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case ROOMS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case ROOMADD_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case ROOMADD_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.data.newRoom],
        isSuccess: true,
        isLoading: false
      };
    case ROOMDEL_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case ROOMDEL_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter(room => room._id !== action.data.id)],
        isLoading: false
      };
    default:
      return state;
  }
};
