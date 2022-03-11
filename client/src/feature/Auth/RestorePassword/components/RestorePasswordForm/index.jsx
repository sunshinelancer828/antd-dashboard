import React from "react";
import { Form, Icon, Input, Button } from "antd";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

const RestorePasswordFormComponent = ({ form, onSubmit, isLoading, isError, errorMessage }) => {
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
    <Form onSubmit={handleSubmit} className={style.restorePassword}>
      <h1 className={style.authHeader}>Restore password</h1>
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
          Restore
        </Button>
        <div className={style.singupLinks}>
          <Link to="/">Sign in</Link> or{" "}
          <Link to="/signup">Create accaunt</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export const RestorePasswordForm = Form.create({ name: "signinForm" })(
  RestorePasswordFormComponent
);
