import { RoomContainer } from "./Rooms";
import { UsersContainer } from "./Users";

export const routes = [
  {
    path: "/room",
    component: RoomContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/users",
    component: UsersContainer,
    isAuth: true,
    exact: true,
  }
];
