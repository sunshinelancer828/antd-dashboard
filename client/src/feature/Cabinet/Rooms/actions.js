import { api } from "../../../helpers/api";

export const ROOMS_REQUEST_PROCESS = "ROOMS_REQUEST_PROCESS";
export const ROOMS_REQUEST_ERROR = "ROOMS_REQUEST_ERROR";
export const ROOMS_REQUEST_SUCCESS = "ROOMS_REQUEST_SUCCESS";

export const ROOMADD_REQUEST_ERROR = "ROOMADD_REQUEST_ERROR";
export const ROOMADD_REQUEST_SUCCESS = "ROOMADD_REQUEST_SUCCESS";

export const ROOMDEL_REQUEST_ERROR = "ROOMDEL_REQUEST_ERROR";
export const ROOMDEL_REQUEST_SUCCESS = "ROOMDEL_REQUEST_SUCCESS";

export const roomsRequestProcess = () => ({
  type: ROOMS_REQUEST_PROCESS
});

export const roomsRequestSuccess = data => ({
  type: ROOMS_REQUEST_SUCCESS,
  data
});

export const roomsRequestError = error => ({
  type: ROOMS_REQUEST_ERROR,
  error
});

export const roomsFetchRequest = () => async dispatch => {
  try {
    dispatch(roomsRequestProcess());

    const data = await api("get", "rooms");

    dispatch(roomsRequestSuccess(data));
  } catch (error) {
    dispatch(roomsRequestError(error.response ? error.response.data : error));
  }
};

export const roomAddSuccess = data => ({
  type: ROOMADD_REQUEST_SUCCESS,
  data
});

export const roomAddRequestError = error => ({
  type: ROOMADD_REQUEST_ERROR,
  error
});

export const roomAddRequest = roomTitle => async dispatch => {
  try {
    const data = await api("post", "room/add", {title: roomTitle});

    dispatch(roomAddSuccess(data));
  } catch (error) {
    dispatch(roomAddRequestError(error.response ? error.response.data : error));
  }
};

export const roomDelSuccess = data => ({
  type: ROOMDEL_REQUEST_SUCCESS,
  data
});

export const roomDelRequestError = error => ({
  type: ROOMDEL_REQUEST_ERROR,
  error
});

export const roomDelRequest = roomId => async dispatch => {
  try {
    const data = await api("post", "room/del", {id: roomId});

    dispatch(roomDelSuccess(data));
  } catch (error) {
    dispatch(roomDelRequestError(error.response ? error.response.data : error));
  }
};

