import React, { useEffect } from "react";
import { Card } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { cardAction } from "../../redux/action/featured.action";
import "swiper/css/autoplay";

const CardComp = () => {
  const CardData = useSelector((state) => state.cardReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardAction());
  }, []);

  return (
    <div className="cardComp">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {CardData?.cardData?.map((e) => {
          return (
            <div className="swiperCard">
              <SwiperSlide>
                <Card
                  bordered={true}
                  style={{
                    width: 300,
                  }}
                >
                  <img src={e?.image} alt="" />
                  <h1>{e?.name}</h1>
                  <p>{e?.info}</p>
                </Card>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardComp;
