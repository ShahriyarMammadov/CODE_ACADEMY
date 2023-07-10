import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import {Helmet} from "react-helmet";
import { Button, Popconfirm } from "antd";

const DetailPage = () => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = (deleteID) => {
    setConfirmLoading(true);
    axios.delete(`http://localhost:3000/products/${deleteID}`);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      nav("/");
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const getData = async () => {
    let response = await axios.get(`http://localhost:3000/products/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="detailCard">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.brandName}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="image">
        <img src={data?.image} alt="" />
      </div>
      <div className="about">
        <h1>{data?.category}</h1>
        <p>{data?.brandName}</p>
        <h2>{data?.price}</h2>

        <Popconfirm
          title="Title"
          description="Open Popconfirm with async logic"
          open={open}
          onConfirm={() => {
            handleOk(data._id);
          }}
          okButtonProps={{
            loading: confirmLoading,
          }}
          onCancel={handleCancel}
        >
          <Button
            type="primary"
            onClick={() => {
              showPopconfirm();
            }}
          >
            Delete
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default DetailPage;
