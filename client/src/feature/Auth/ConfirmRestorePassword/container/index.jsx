import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { confirmRestorePasswordRequest } from "../actions";
import { Loader } from "../../../Common/Loader";
import style from "./index.module.scss";

const ConfirmRestorePasswordContainer = ({match}) => {
  const history = useHistory();
  const { isLoading, isSuccess, errorMessage } = useSelector(state => state.auth.confirmRestorePassword);
  const { isAuth } = useSelector(state => state.auth.signin);

  useEffect(() => {
    isAuth && history.push("/home");
  });

  useEffect(() => {
    const token = match.params.token;
    token && confirmRestorePasswordRequest(token);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.confirmRestorePasswordWrapper}>
      <Loader isLoading={isLoading}>
        {isSuccess ? (
          <div>
            <h1>Success</h1>
            <p>Password has changed.</p>
            <p>
              Go to <Link to="/">Sign in</Link>
            </p>
          </div>
        ) : (
          <div>
            <h1>Error</h1>
            <p>{errorMessage}</p>
          </div>
        )}
      </Loader>
    </div>
  );
};

export default ConfirmRestorePasswordContainer
