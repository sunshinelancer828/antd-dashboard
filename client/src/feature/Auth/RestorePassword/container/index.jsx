import React, { useEffect } from "react";
import { RestorePasswordForm } from "../components/RestorePasswordForm";
import { useSelector, useDispatch } from "react-redux";
import { restorePasswordRequest } from "../actions";
import { useHistory, Link } from "react-router-dom";
import style from "./index.module.scss";

const RestorePasswordContainer = () => {
  const { isLoading, isError, isSuccess, errorMessage } = useSelector(state => state.auth.restorePassword);
  const { isAuth } = useSelector(state => state.auth.signin);
  const history = useHistory();
  const disptch = useDispatch();

  useEffect(() => {
    isAuth && history.push("/home");
  });

  const restorePassword = (value) => {
    disptch(restorePasswordRequest(value))
  }
  return (
    <div className={style.restorePasswordWrapper}>
      {isSuccess ? (
        <div className={style.authHeader}>
          <h1>Success</h1>
          <p>Link for restore password is sent to your email address.</p>
          <p>
            Go to <Link to="/">Sign in</Link>
          </p>
        </div>
      ) : (
        <RestorePasswordForm
          onSubmit={restorePassword}
          isLoading={isLoading}
          isError={isError}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default RestorePasswordContainer
