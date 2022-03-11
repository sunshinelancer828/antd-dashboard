import React from "react";
import { Form, Icon, Input, Button } from "antd";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

const SigninFormComponent = ({ onSubmit, isLoading, isError, errorMessage, form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={style.signupForm} name="signinForm" >
      <h1 className={style.authHeader}>Create account</h1>
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [
            { required: true, message: "Please input your name!" },
            { min: 2, message: "Min length name 2 symbols!" },
            { max: 30, message: "Max length name 30 symbols!" }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="name"
          />
        )}
      </Form.Item>
      <Form.Item
        {...isError && {
          help: errorMessage,
          validateStatus: "error"
        }}
      >
        {getFieldDecorator("email", {
          rules: [
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" }
          ]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="email"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoading}
          type="primary"
          style={{ width: "100%" }}
          htmlType="submit"
        >
          Sing up
        </Button>
        <div className={style.singupLinks}>
          <Link to="/">Sign in</Link> or{" "}
          <Link to="/restore-password">Forgot password</Link>
        </div>
      </Form.Item>
    </Form >
  );
};

export const SignupForm = Form.create({ name: "signinForm" })(
  SigninFormComponent
);
