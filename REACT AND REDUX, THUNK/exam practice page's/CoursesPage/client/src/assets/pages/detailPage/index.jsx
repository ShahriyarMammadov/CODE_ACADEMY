import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Popconfirm } from "antd";
import axios from "axios";
import "./index.scss";
import Loading from "../../../components/loading";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const nav = useNavigate();

  const getDetailData = async () => {
    let response = await axios.get(`http://localhost:3000/products/${id}`);
    setData(await response.data);
    setLoading(false);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = (id) => {
    setConfirmLoading(true);
    axios.delete(`http://localhost:3000/products/${id}`);
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="detail">
          <div className="image">
            <img src={data?.image} alt="" />
          </div>

          <div className="text">
            <h2>{data?.title}</h2>
            <p>{data?.cardHeader}</p>
            <p>{data?.text}</p>
            <h5>${data?.price}</h5>

            <Popconfirm
              title="Are You Serious??"
              description="If you press ok, it will be deleted once"
              open={open}
              onConfirm={() => {
                handleOk(data?._id);
              }}
              okButtonProps={{
                loading: confirmLoading,
              }}
              onCancel={handleCancel}
            >
              <Button type="primary" onClick={showPopconfirm}>
                Delete
              </Button>
            </Popconfirm>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
