import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Popconfirm } from "antd";
import axios from "axios";
import "./index.scss";
import { Helmet } from "react-helmet";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const nav = useNavigate();

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      3;
      axios.delete(`http://localhost:3000/product/${data._id}`);
      nav("/");
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const getData = async () => {
    let response = await axios.get(`http://localhost:3000/product/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.headerText}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card">
        <div className="image">
          <img src={data?.image} alt="" />
        </div>
        <div className="about">
          <h1>Name: {data?.headerText}</h1>
          <p>About: {data?.aboutText}</p>
          <p>ID: {data?._id}</p>
          <p>Price: {data?.price}</p>

          <Popconfirm
            title="Delete?"
            description="Open Popconfirm with async logic"
            open={open}
            onConfirm={() => {
              handleOk();
            }}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}
          >
            <Button type="primary" onClick={showPopconfirm}>
              DELETE
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
