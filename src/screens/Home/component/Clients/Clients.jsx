import React from "react";
import { ImgBox, TitleScreen } from "../components";
import './Clients.css'
const Clients = () => {
  return (
    <div className="Clients">
      <div className="container">
        <div className="clients-content">
          <TitleScreen
            title={"العملاء وأصحاب المصلحة"}
            text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}
          />
          <div className="client-list">
            <ImgBox img={require("../../../../assets/3.png")}/>
            <ImgBox img={require("../../../../assets/01.png")}/>
            <ImgBox img={require("../../../../assets/4.png")}/>
            <ImgBox img={require("../../../../assets/5.png")}/>
            <ImgBox img={require("../../../../assets/6.png")}/>
            <ImgBox img={require("../../../../assets/7.png")}/>
            <ImgBox img={require("../../../../assets/8.png")}/>
            <ImgBox img={require("../../../../assets/06.png")}/>
            <ImgBox img={require("../../../../assets/1638307575.png")}/>
            <ImgBox img={require("../../../../assets/2.png")}/>
            <ImgBox img={require("../../../../assets/21.png")}/>
            <ImgBox img={require("../../../../assets/20.png")}/>
            
          </div>
          <div className="button">
            <button>مشاهدة المزيد</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
