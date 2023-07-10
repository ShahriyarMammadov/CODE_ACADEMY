import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const GetWish = useSelector((state) => state.favoritesReducer);

  return (
    <div>
      {GetWish?.map((data) => {
        return (
          <Card
            key={data.id}
            loading={false}
            style={{
              width: 300,
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
              margin: "0 auto",
            }}
            cover={<img alt="example" src={data.images} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={data.name}
              description={data.PRICE}
            />
            <p>{data.id}</p>
            <p style={{ color: "green" }}>CPU: {data.cpu}</p>
            <p style={{ color: "red" }}>STORAGE: {data.ssd}</p>
            <button
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
          </Card>
        );
      })}
    </div>
  );
};

export default WishList;
