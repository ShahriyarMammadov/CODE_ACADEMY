import React from "react";
import "./index.css";
import { Space, Spin } from "antd";

const LoadingComp = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default LoadingComp;
