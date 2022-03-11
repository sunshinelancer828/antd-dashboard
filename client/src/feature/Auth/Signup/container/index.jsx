import React, { useEffect } from "react";
import { SignupForm } from "../components/SignupForm";
import { useSelector, useDispatch } from "react-redux";
import { signupRequest } from "../actions";
import { useHistory, Link } from "react-router-dom";
import style from "./index.module.scss";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuth, isError, isSuccess, errorMessage } = useSelector(state => state.auth.signup);
  const history = useHistory();

  useEffect(() => {
    isAuth && history.push("/home");
  });

  const signup = (value) => {
    dispatch(signupRequest(value));
  }

  return (
    <div className={style.signupFormWrapper}>
      {isSuccess ? (
        <div className={style.authHeader}>
          <h1>Success</h1>
          <p>A password is sent to your email address.</p>
          <p>
            Go to <Link to="/">Sign in</Link>
          </p>
        </div>
      ) : (
        <SignupForm
          onSubmit={signup}
          isLoading={isLoading}
          isError={isError}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default SignupContainer
