import { combineReducers } from "redux";

import { usersReducer as users } from "./Users";
import { roomsReducer as rooms } from "./Rooms";

export const reducers = combineReducers({
  users,
  rooms
});
