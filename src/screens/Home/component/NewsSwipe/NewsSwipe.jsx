import React from "react";
import "./NewsSwiper.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const NewsSwipe = () => {
  const RenderItem = ({ text, img, title, color }) => {
    return (
      <div className="item-news">
        <div
          className="box-color-news"
          style={{ backgroundColor: color }}
        ></div>
        <div className="container">
          <div className="news-content">
            <div className="main-news">
              <b>الأخبار والأحداث</b>
              <p>{text}</p>
              <button>اكتشف جميع الأحداث</button>
            </div>
            <div className="news-container">
              <img src={img} alt="news" />
              <div className="title-news-container">
                <b>{title}</b>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="NewsSwipe">
    <Carousel
      showThumbs={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={100}
      showArrows={false}
      showIndicators={true}
    >
      <RenderItem
        color={"#4F6DAA"}
        text={
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى"
        }
        title={"هذا نص عنوان خبر"}
        img={require("../../../../assets/imgNews.png")}
      />
      <RenderItem
        color={"#4F6DAA"}
        text={
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى"
        }
        title={"هذا نص عنوان خبر"}
        img={require("../../../../assets/imgNews.png")}
      />
      <RenderItem
        color={"#4F6DAA"}
        text={
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى"
        }
        title={"هذا نص عنوان خبر"}
        img={require("../../../../assets/imgNews.png")}
      />
    </Carousel>
    </div>
  );
};

export default NewsSwipe;
