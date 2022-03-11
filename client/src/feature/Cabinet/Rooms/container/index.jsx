import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomsFetchRequest, roomAddRequest, roomDelRequest } from "../actions";
import { Loader } from "../../../Common/Loader";
import { Table, Button, Row, Col, Modal, Input } from "antd";
import style from "./index.module.scss";
import common from '../../../../config/app'

const RoomContainer = () => {
  const { confirm } = Modal;
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector(state => state.cabinet.rooms);
  const { user } = useSelector(state => state.auth.signin);

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState();
  const STREAM_SERVER_URL = common.SERVER_URL;

  useEffect(() => {
    dispatch(roomsFetchRequest());
    // eslint-disable-next-line
  }, []);

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleOk = e => {
    dispatch(roomAddRequest(title));
    setTitle(null);
    setShowModal(false);
  };

  const handleCancel = e => {
    setTitle(null);
    setShowModal(false);
  };

  const handleTitle = e => {
    setTitle(e.currentTarget.value);
  }

  const handleCreateClick = (id, title) => {
    window.open(
      STREAM_SERVER_URL + '?rid=' + id + "&open=true&username=" + user.name + "&title=" + title,
      '_blank'
    );
  }

  const handleInviteClick = (id, title) => {
    window.open(
      STREAM_SERVER_URL + '?rid=' + id + "&open=false&username=" + user.name + "&title=" + title,
      '_blank'
    );
  }

  const roomDel = (id) => {
    confirm({
      content: "Do you really delete?",
      onOk() {
        dispatch(roomDelRequest(id));
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state"
    },
    {
      title: "Create",
      key: "create",
      render: (rowData) => (
        (user.role === true) ? (
          <Button type="primary" onClick={() => handleCreateClick(rowData._id, rowData.title)}>Create</Button>
        ) : (
          <Button type="primary" disabled={user.id !== rowData.creator} onClick={() => handleCreateClick(rowData._id, rowData.title)}>Create</Button>
        )
      )
    },
    {
      title: "Invite",
      key: "invite",
      render: (rowData) => (
        <Button type="primary" onClick={() => handleInviteClick(rowData._id, rowData.title)}>Invite</Button>
      )
    },
    {
      title: "Delete",
      key: "delete",
      render: (rowData) => (
        (user.role === true) ? (
          < Button type="primary" onClick={() => roomDel(rowData._id)}> Delete</Button>
        ) : (
          < Button type="primary" disabled={user.id !== rowData.creator} onClick={() => roomDel(rowData._id)}> Delete</Button >
        )
      )
    }
  ];

  return (
    <div>
      <div>
        <Row type="flex" justify="space-between">
          <Col span={4}><h1>Rooms</h1></Col>
          <Col span={4}></Col>
          <Col span={4}></Col>
          <Col span={4}>
            <Button onClick={handleAdd} type="primary">
              Open New Room
            </Button>
          </Col>
        </Row>
      </div>
      <div className={style.roomsList}>
        <Loader isLoading={isLoading}>
          <Table columns={columns} dataSource={data} rowKey="_id" />
        </Loader>
      </div>
      <Modal
        title="New Room"
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Please input the title</p>
        <Input value={title} onChange={handleTitle} />
      </Modal>
    </div>
  );
};

export default RoomContainer;
