import React from "react";
import { Carousel } from "react-responsive-carousel";
import { TitleScreen } from "../components";
import "./ImgMedia.css";
const ImgMedia = () => {
  return (
    <div className="ImgMedia">
      <TitleScreen
        title={"الصور والوسائط"}
        text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}
      />
      <div className="button">
        <button>اكتشف جميع الوسائط</button>
      </div>
      <div className="container-media-swipe">
        <Carousel
        
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={window.innerWidth > 920 ? 33.3 : 100}
          showArrows={true}
          showIndicators={false}
          infiniteLoop={true}
          
        >
          <div className="item-media">
            <img src={require("../../../../assets/media1.png")} alt="" />
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
          </div>
          <div className="item-media">
            <img src={require("../../../../assets/media3.png")} alt="" />
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
          </div>
          <div className="item-media">
            <img src={require("../../../../assets/media2.png")} alt="" />
            <p >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImgMedia;
