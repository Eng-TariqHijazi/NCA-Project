import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Icon from "react-web-vector-icons";
import { NewsSwipe, RealAndNumbers, ImgMedia, Partners,Stats, Clients, EmailPage } from "./component";
import {Video} from "./component/Video/Video";

const Home = () => {
  const Service = ({ icon }) => {
    return (
      <div className="service">
        <div className="icon">
          <Icon
            name={icon}
            font="FontAwesome"
            color="white"
            size={20}
            // style={{}}
          />
        </div>
          
        <b>هذا نص الخدمة</b>
        <p>هذا نص افتراضي سيتم استبداله</p>
      </div>
    );
  };
  const ProgramsItem = ({ img }) => {
    return (
      <div className="programs-item">
        <img src={img} alt="logo" />
        <div className="container">
          <div className="title">هذا نص اسم البرنامج</div>
          <div className="text">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </div>
          <p className="btnArrow">←</p>
        </div>
      </div>
    );
  };
  return (
    <div className="Home">
      <div className="Swiper-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={100}
          showArrows={true}
          showIndicators={false}
        >
          <div className="item-1">
            <b>الاكاديمية الوطنية للبناء</b>
            <p>هذا نص افتراضي سيتم استبداله</p>
          </div>
          <div className="item-2">
            <b>الاكاديمية الوطنية للبناء</b>
            <p>هذا نص افتراضي سيتم استبداله</p>
          </div>
          <div className="item-3">
            <b>الاكاديمية الوطنية للبناء</b>
            <p>هذا نص افتراضي سيتم استبداله</p>
          </div>
        </Carousel>
      </div>
      <div className="container">
        <div className="home-content">
          <div className="services">
            <Service icon={"phone"} />
            <div className="line-vertical"></div>
            <Service icon={"calendar"} />
            <div className="line-vertical" />
            <Service icon={"desktop"} />
            <div className="line-vertical" />
            <Service icon={"folder"} />
          </div>
          <div className="text-service">هذا نص الخدمة</div>
          <div className="manager-container">
            <div className="manager-img">
              <img src={require("../../assets/person.png")} alt="logo" />
            </div>
            <div className="manager-details">
              <div className="double-right">“</div>
              <div className="text-manager">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </div>
              <div className="double-left">“</div>
              <div className="name-manager">هذا نص اسم المؤسس</div>
              <div className="jop-manager">مؤسس اكاديمية الوطنية للبناء</div>
            </div>
          </div>
          <div className="programs-train">
            <div className="programs-title">البرامج التدريبية</div>
            <div className="programs-text">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
            </div>
            <div className="programs-list">
              <ProgramsItem img={require("../../assets/train1.png")} />
              <ProgramsItem img={require("../../assets/train2.png")} />
              <ProgramsItem img={require("../../assets/train3.png")} />
              <ProgramsItem img={require("../../assets/train4.png")} />
            </div>
            <div className="button">
              <button>اكتشف جمسع البرامج</button>
            </div>
            <div className="img-background">
              <img src={require("../../assets/Vector0.png")} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <NewsSwipe />
      <RealAndNumbers />
      <ImgMedia />
      <Partners />
      <Stats />
      <Clients/>
      <Video />
      <EmailPage />
    </div>
  );
};

export default Home;
