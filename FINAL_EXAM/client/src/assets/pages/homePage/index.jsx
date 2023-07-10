import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { cardAction, favAction } from "../../../redux/action/card.action";
import LoadingComp from "../../components/loading";
import CarouselComp from "../../components/carousel";
import SearchAndSortComp from "../../components/search";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const getData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardAction());
  }, []);

  const handleWishList = (obj) => {
    dispatch(favAction(obj));
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="section1">
        <div className="img1 img">
          <div className="text">
            <h1>Push Your Life To a New Level</h1>
            <p>
              Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor
              turpis mattis
            </p>
            <button>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </button>

            <Link to={"/meet"}>Meet Me</Link>
          </div>
        </div>
        <div className="img2 img"></div>
        <div className="img3 img"></div>
      </section>

      <section id="section2">
        <div className="header">
          <h1>How Can I Help You</h1>
          <p>We can discuss your problems</p>
        </div>
        <SearchAndSortComp />
        {getData.loading ? (
          <LoadingComp />
        ) : (
          <div className="cards">
            {getData.data.map((e) => {
              return (
                <div className="card">
                  <i
                    onClick={() => {
                      handleWishList(e);
                    }}
                    class="fa-solid fa-heart"
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  ></i>
                  <div className="image">
                    <img src={e?.image} alt="" />
                  </div>
                  <div className="about">
                    <h1>{e?.headerText}</h1>
                    <p>{e?.aboutText}</p>
                    <p>${e?.price}</p>
                    <Link to={`/detailPage/${e._id}`}>MORE</Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section id="section3">
        <div className="header">
          <h1>Latest Courses</h1>
        </div>

        <div className="cards">
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg"
                alt=""
              />
            </div>
            <div className="body">
              <p>10.05.2018</p>
              <h1>Become a Whole New Person</h1>
              <p>
                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-smiling.jpg"
                alt=""
              />
            </div>
            <div className="body">
              <p>18.05.2018</p>
              <h1>Learn Easy How To Learn Easy</h1>
              <p>
                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-family.jpg"
                alt=""
              />
            </div>
            <div className="body">
              <p>10.05.2018</p>
              <h1>How To Be a Better Parent</h1>
              <p>
                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <CarouselComp />
      </section>

      <section id="section5">
        <div className="header">
          <h1>Online Webinars</h1>
        </div>

        <div className="cards">
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-success.jpg"
                alt=""
              />
            </div>
            <div className="headerText">
              <h1>Short Path To Successful Life</h1>
              <p>14.08.2018</p>
            </div>
            <hr />
            <button>Join Webinar</button>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-boss.jpg"
                alt=""
              />
            </div>
            <div className="headerText">
              <h1>What to Tell For Better Salary</h1>
              <p>14.08.2018</p>
            </div>
            <hr />
            <button>Join Webinar</button>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-meeting.jpg"
                alt=""
              />
            </div>
            <div className="headerText">
              <h1>Meet New People And Opportunities</h1>
              <p>14.08.2018</p>
            </div>
            <hr />
            <button>Join Webinar</button>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-stucked.jpg"
                alt=""
              />
            </div>
            <div className="headerText">
              <h1>When You Have Stucked in Your Life</h1>
              <p>14.08.2018</p>
            </div>
            <hr />
            <button>Join Webinar</button>
          </div>
        </div>

        <div className="brand">
          <div className="brandCollect">
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-01.png"
              alt=""
            />
          </div>
          <div className="brandCollect">
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-02.png"
              alt=""
            />
          </div>
          <div className="brandCollect">
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-03.png"
              alt=""
            />
          </div>
          <div className="brandCollect">
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-04.png"
              alt=""
            />
          </div>
          <div className="brandCollect">
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-05.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="section6">
        <div className="header">
          <h1>Buy The LifeCoach Now!</h1>
          <button>Buy Now!</button>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            width="99.8%"
            height="400px"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
