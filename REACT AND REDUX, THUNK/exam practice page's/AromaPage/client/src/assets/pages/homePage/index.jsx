import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  productAction,
  searchAction,
} from "../../../redux/action/product.action";
import CardComponent from "../../components/cardBestSellers";
import SearchComp from "../../components/search";
import { Link } from "react-router-dom";
import { favAction } from "../../../redux/action/fav.action";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [toggle, setToggle] = useState(true);
  const Data = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productAction());
  };
  const handleSort = () => {
    setToggle(!toggle);
    if (toggle) {
      let sortedData = Data.data.sort((a, b) => (a.price > b.price ? 1 : -1));
      dispatch(searchAction(sortedData));
    } else {
      getData();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="sec1">
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
            alt=""
          />
        </div>

        <div className="right">
          <h3>Shop is fun</h3>
          <h1>BROWSE OUR PREMIUM PRODUCT</h1>
          <p>
            Us which over of signs divide dominion deep fill bring they're meat
            beho upon own earth without morning over third. Their male dry. They
            are great appear whose land fly grass.
          </p>
          <button>Browse Now</button>
        </div>
      </section>

      <section id="sec2">
        <p>Popular Item in the market</p>
        <h1>
          Trending <span>Product</span>
        </h1>
        <SearchComp />
        <button
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() => {
            handleSort();
          }}
        >
          Sort by Price
        </button>
        <div className="cards">
          {Data?.data?.map((e) => {
            return (
              <div className="card" key={e._id}>
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

                  <Link to={`/detailPage/${e._id}`}>MORE</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="sec3">
        <div className="text">
          <h1>Up To 50% Off</h1>
          <h3>Winter Sale</h3>
          <p>Him she'd let them sixth saw light</p>
          <button>Shop Now</button>
        </div>
      </section>

      <section id="sec4">
        <CardComponent />
      </section>

      <section id="sec5">
        <div className="header">
          <p>Popular Item in the market</p>

          <h1>
            Latest <span>News</span>
          </h1>
        </div>

        <div className="cardlar">
          <div className="cardNews">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png"
                alt=""
              />
            </div>
            <div className="comment">
              <p>By Admin</p>
              <p>2 Comments</p>
            </div>

            <div className="body">
              <h1>The Richland Center Shooping News and weekly shooper</h1>
              <p>
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>

              <h3>
                Read More <i class="fa-solid fa-arrow-right"></i>
              </h3>
            </div>
          </div>
          <div className="cardNews">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png"
                alt=""
              />
            </div>
            <div className="comment">
              <p>By Admin</p>
              <p>2 Comments</p>
            </div>

            <div className="body">
              <h1>The Richland Center Shooping News and weekly shooper</h1>
              <p>
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>

              <h3>
                Read More <i class="fa-solid fa-arrow-right"></i>
              </h3>
            </div>
          </div>
          <div className="cardNews">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png"
                alt=""
              />
            </div>
            <div className="comment">
              <p>By Admin</p>
              <p>2 Comments</p>
            </div>

            <div className="body">
              <h1>The Richland Center Shooping News and weekly shooper</h1>
              <p>
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>

              <h3>
                Read More <i class="fa-solid fa-arrow-right"></i>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
