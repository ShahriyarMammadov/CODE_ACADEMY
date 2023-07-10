import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Rate, Card } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { featuredAction } from "../../../redux/action/featured.action";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import CardComp from "../../../components/card";

const HomePage = () => {
  const [classList, setclassList] = useState(false);
  const [value, setValue] = useState(4);
  const getData = useSelector((state) => state.featuredReducer);
  const dispatch = useDispatch();
  const desc = ["1", "2", "3", "4", "5"];
  SwiperCore.use([Autoplay]);
  const { Meta } = Card;

  useEffect(() => {
    dispatch(featuredAction(""));
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      setclassList(true);
    } else {
      setclassList(false);
    }
  });

  return (
    <>
      <section id="section1" className={classList ? "sec1" : null}>
        <div className="sec1Text">
          <h1>Online learning platform</h1>
          <p>
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies
          </p>
          <button className="button-48">
            <span>Join For Free</span>
          </button>

          <div className="cards">
            <div className="card">
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg"
                  alt=""
                />
              </div>
              <div className="rightText">
                <h2>60+ UX courses</h2>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg"
                  alt=""
                />
              </div>
              <div className="rightText">
                <h2>Expert instructors</h2>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg"
                  alt=""
                />
              </div>
              <div className="rightText">
                <h2>Life time access</h2>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="header">
          <h1>Our featured courses</h1>
        </div>
        <div className="swiper">
          <Swiper
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {getData?.data?.map((e) => {
              return (
                <SwiperSlide>
                  <Card
                    loading={getData?.loading}
                    key={e.id}
                    style={{
                      width: 350,
                    }}
                    cover={<img alt="example" src={e?.image} />}
                  >
                    <p>{e?.title}</p>
                    <h4>{e?.cardHeader}</h4>
                    <p>{e?.text}</p>
                    <span>
                      <Rate
                        tooltips={desc}
                        onChange={setValue}
                        value={e?.rating}
                      />
                    </span>
                    <span className="price">${e?.price}</span>
                    <br />
                    <Link to={`detailPage/${e?._id}`}>
                      <button className="button-48">
                        <span>Find Out More</span>
                      </button>
                    </Link>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section id="section3">
        <div className="iconPhoto">
          <img
            src="https://smarts-ef.org/wp-content/uploads/2020/12/EF-and-Motivation-Upward.png"
            alt=""
          />
        </div>
        <div className="aboutText">
          <div className="left">
            <h1>Learn new skills online with top educators</h1>
            <p>
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>
            <div className="bottom">
              <div className="text">
                <i class="fa-solid fa-check"></i>
                <p>
                  Techniques to engage effectively with vulnerable children and
                  young people.
                </p>
              </div>
              <div className="text">
                <i class="fa-solid fa-check"></i>
                <p>
                  Join millions of people from around the world learning
                  together.
                </p>
              </div>
              <div className="text">
                <i class="fa-solid fa-check"></i>
                <p>
                  Join millions of people from around the world learning
                  together. Online learning is as easy and natural.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <a href={"https://www.youtube.com/@guristyle"} target="_blank">
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="header">
          <h1>Explore top subjects</h1>
        </div>
        <div className="cards">
          <div className="flex">
            <div className="card1 card">
              <Link>PROGRAMING</Link>
            </div>
            <div className="card2 card">
              <Link>PROGRAMING</Link>
            </div>
            <div className="card3 card">
              <Link>PROGRAMING</Link>
            </div>
            <div className="card4 card">
              <Link>PROGRAMING</Link>
            </div>
          </div>
          <div className="flex">
            <div className="card5 card">
              <Link>PROGRAMING</Link>
            </div>
            <div className="card6 card">
              <Link>PROGRAMING</Link>
            </div>
            <div className="card7 card">
              <Link>PROGRAMING</Link>
            </div>
            <div className="card8 card">
              <Link>PROGRAMING</Link>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="button-48">
            <span>View More Subjects</span>
          </button>
        </div>
      </section>

      <section id="section5">
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about3.png.webp"
            alt=""
          />
        </div>
        <div className="right">
          <div className="bottom">
            <div className="header">
              <h1>Learner outcomes on courses you will take</h1>
            </div>
            <div className="text">
              <i class="fa-solid fa-check"></i>
              <p>
                Techniques to engage effectively with vulnerable children and
                young people.
              </p>
            </div>
            <div className="text">
              <i class="fa-solid fa-check"></i>
              <p>
                Join millions of people from around the world learning together.
              </p>
            </div>
            <div className="text">
              <i class="fa-solid fa-check"></i>
              <p>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section6">
        <div className="header">
          <h1>Community experts</h1>
        </div>
        <CardComp />
      </section>

      <section id="section5">
        <div className="left">
          <img
            className="sec7Img"
            src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about2.png.webp"
            alt=""
          />
        </div>

        <div className="right">
          <div className="bottom">
            <div className="header">
              <h1>Learner outcomes on courses you will take</h1>
            </div>
            <div className="text">
              <i class="fa-solid fa-check"></i>
              <p>
                Techniques to engage effectively with vulnerable children and
                young people.
              </p>
            </div>
            <div className="text">
              <i class="fa-solid fa-check"></i>
              <p>
                Join millions of people from around the world learning together.
              </p>
            </div>
            <div className="text">
              <i class="fa-solid fa-check"></i>
              <p>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </p>
            </div>
          </div>
          <div className="button">
            <button className="button-48">
              <span>Join Now For Free</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
