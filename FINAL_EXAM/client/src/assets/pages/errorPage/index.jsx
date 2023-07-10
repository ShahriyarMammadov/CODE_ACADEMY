import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import './index.scss'

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <div className="error">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              nav("/");
            }}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default ErrorPage;
