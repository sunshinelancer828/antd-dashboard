import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersFetchRequest, userDelRequest, roleUpdateRequest } from "../actions";
import { Loader } from "../../../Common/Loader";
import { Table, Button, Switch, Modal } from "antd";
import style from "./index.module.scss";

const UsersContainer = () => {
  const { confirm } = Modal;
  const { isLoading, data } = useSelector(state => state.cabinet.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersFetchRequest());
    // eslint-disable-next-line
  }, []);

  const userDel = (id) => {
    confirm({
      content: "Do you really delete?",
      onOk() {
        dispatch(userDelRequest(id));
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const changeRole = (id) => {
    dispatch(roleUpdateRequest(id));
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Role",
      key: "role",
      render: (rowData) => (
        <Switch
          checked={rowData.role}
          onChange={() => {
            changeRole(rowData._id);
          }}
        />
      )
    },
    {
      title: "Delete",
      key: "delete",
      render: (rowData) => (
        <Button type="primary" onClick={() => userDel(rowData._id)}>Delete</Button>
      )
    }
  ];

  return (
    <div>
      <h1>Users</h1>
      <div className={style.usersList}>
        <Loader isLoading={isLoading}>
          <Table columns={columns} dataSource={data} rowKey="_id" />
        </Loader>
      </div>
    </div>
  );
};

export default UsersContainer
