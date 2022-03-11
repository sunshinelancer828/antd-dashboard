import { api } from "../../../helpers/api";

export const USERS_REQUEST_PROCESS = "USERS_REQUEST_PROCESS";
export const USERS_REQUEST_ERROR = "USERS_REQUEST_ERROR";
export const USERS_REQUEST_SUCCESS = "USERS_REQUEST_SUCCESS";

export const USERDEL_REQUEST_ERROR = "USERDEL_REQUEST_ERROR";
export const USERDEL_REQUEST_SUCCESS = "USERDEL_REQUEST_SUCCESS";

export const ROLEUPDATE_REQUEST_ERROR = "ROLEUPDATE_REQUEST_ERROR";
export const ROLEUPDATE_REQUEST_SUCCESS = "ROLEUPDATE_REQUEST_SUCCESS";

export const usersRequestProcess = () => ({
  type: USERS_REQUEST_PROCESS
});

export const usersRequestSuccess = data => ({
  type: USERS_REQUEST_SUCCESS,
  data
});

export const usersRequestError = error => ({
  type: USERS_REQUEST_ERROR,
  error
});

export const usersFetchRequest = () => async dispatch => {
  try {
    dispatch(usersRequestProcess());

    const data = await api("get", "users");

    dispatch(usersRequestSuccess(data));
  } catch (error) {
    dispatch(usersRequestError(error.response ? error.response.data : error));
  }
};

export const userDelRequestSuccess = data => ({
  type: USERDEL_REQUEST_SUCCESS,
  data
});

export const userDelRequestError = error => ({
  type: USERDEL_REQUEST_ERROR,
  error
});

export const userDelRequest = (userid) => async dispatch => {
  try {
    const data = await api("post", "user/del", {id:userid});

    dispatch(userDelRequestSuccess(data));
  } catch (error) {
    dispatch(userDelRequestError(error.response ? error.response.data : error));
  }
};

export const roleUpdateRequestSuccess = data => ({
  type: ROLEUPDATE_REQUEST_SUCCESS,
  data
});

export const roleUpdateRequestError = error => ({
  type: ROLEUPDATE_REQUEST_ERROR,
  error
});

export const roleUpdateRequest = (userid) => async dispatch => {
  try {
    const data = await api("post", "user/roleupdate", {id:userid});

    dispatch(roleUpdateRequestSuccess(data));
  } catch (error) {
    dispatch(roleUpdateRequestError(error.response ? error.response.data : error));
  }
};
