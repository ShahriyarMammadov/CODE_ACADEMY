import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";
import { Helmet } from "react-helmet";

const WishListPage = () => {
  const FavData = useSelector((state) => state.favReducer);
  const dispatch = useDispatch();

  console.log(FavData);
  return (
    <div id="favorite">
      <Helmet>
        <meta charSet="utf-8" />
        <title>wishList</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {FavData?.map((e) => {
        return (
          <div className="card" key={e.data._id}>
            <div className="image">
              <img src={e.data.image} alt="" />
            </div>
            <div className="text">
              <p>{e.data.category}</p>
              <h3>{e.data.brandName}</h3>
              <h2>${e.data.price}.00</h2>

              <Link to={`/detailPage/${e.data._id}`}>MORE</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishListPage;
