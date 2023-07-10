import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { delFavAction } from "../../../redux/action/card.action";

const WishPage = () => {
  const favData = useSelector((state) => state.favReducer);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delFavAction(e));
  };
  return (
    <div className="wishList">
      {favData.map((e) => {
        return (
          <div className="wish">
            <div className="cards">
              <div className="card">
                <div className="image">
                  <img src={e?.image} alt="" />
                </div>
                <div className="about">
                  <h1>{e?.headerText}</h1>
                  <p>{e?.aboutText}</p>
                  <p>${e?.price}</p>
                  <Link to={`/detailPage/${e._id}`}>MORE</Link>
                  <button
                    onClick={() => {
                      handleDelete(e);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishPage;
