import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardAction } from "../../assets/redux/action/card.action";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import ModalPage from "../../assets/pages/modalPage";
import Loading from "../loading";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import { addToFavoritesAction } from "../../assets/redux/action/favorite.action";

const CardComponent = () => {
  const GetData = useSelector((state) => state.cardReducer);
  const GetWish = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();
  const [count, setCount] = useState(4);

  useEffect(() => {
    dispatch(cardAction());
  }, []);
  return (
    <>
      <div className="cards">
        {GetData.Loading
          ? Loading
          : GetData?.data?.slice(0, count).map((e) => {
              return (
                <>
                  <div className="cards">
                    <Link to={`modalpage/${e?.id}`}>
                      <Card
                        key={e?.id}
                        loading={GetData.loading}
                        style={{
                          width: 300,
                          cursor: "pointer",
                        }}
                        cover={<img alt="example" src={e.images} />}
                      >
                        <Meta
                          avatar={
                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                          }
                          title={e?.name}
                          description={e?.PRICE}
                        />
                      </Card>
                    </Link>
                    <i
                      onClick={() => {
                        dispatch(addToFavoritesAction(e));
                      }}
                      class="fa-solid fa-heart"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </div>
                </>
              );
            })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setCount(count + 2);
          }}
        >
          MORE
        </button>
      </div>
    </>
  );
};

export default CardComponent;
