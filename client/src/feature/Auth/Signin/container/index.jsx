import React, { useEffect } from "react";
import {SigninForm} from "../components/SigninForm";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { signinRequest } from "../actions";
import { useHistory } from "react-router-dom";

const SigninContainer = () => {
  const { isLoading, isAuth, isError, errorMessage } = useSelector(state => state.auth.signin);
  const history = useHistory();
  const dispatch = useDispatch();
  
  const signin = (value) => {
    dispatch(signinRequest(value));
  }

  useEffect(() => {
    isAuth && history.push("/room");
  });

  return (
    <div className={style.signinFormWrapper}>
      <SigninForm
        onSubmit={signin}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default SigninContainer;
