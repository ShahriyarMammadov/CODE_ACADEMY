import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useSelector, useDispatch } from "react-redux";
import { favAction } from "../../../redux/action/fav.action";

const CardComponent = () => {
  const Data = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  return (
    <div className="component">
      <div className="cards">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={4}
          loop={true}
        >
          {Data?.data?.map((e) => {
            return (
              <SwiperSlide key={e._id}>
                <div className="card">
                  <div className="image">
                    <img src={e?.image} alt="" />
                    <div className="icons">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <i className="fa-solid fa-cart-shopping"></i>
                      <i
                        className="fa-solid fa-heart"
                        onClick={() => {
                          dispatch(favAction(e));
                        }}
                      ></i>
                    </div>
                  </div>
                  <div className="text">
                    <p>{e?.category}</p>
                    <h3>{e?.brandName}</h3>
                    <h2>${e?.price}.00</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CardComponent;
