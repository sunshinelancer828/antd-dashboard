import React from "react";
import { Auth } from "./components/Auth";
import { Cabinet } from "./components/Cabinet";
import { menuList } from "../../../config/menu";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../Auth/Signin/actions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector(state => state.auth.signin);
  const logout = () => {
    dispatch(logoutHandler());
  }

  return isAuth ? (
    <Cabinet menuList={menuList} user={user} logout={logout}>
      {children}
    </Cabinet>
  ) : (
    <Auth>{children}</Auth>
  );
};

export default Layout
