import React from "react";
import { ImgBox, TitleScreen } from "../components";
import "./Partners.css";
const Partners = () => {
  return (
    <div className="Partners">
      <div className="container">
        <div className="partner-content">
          <TitleScreen
            title={"الشركاء"}
            text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}
          />
          <div className="partner-grid">
            <ImgBox img={require("../../../../assets/20.png")} />
            <ImgBox img={require("../../../../assets/21.png")} />
            <ImgBox img={require("../../../../assets/1638307575.png")} />
            <ImgBox img={require("../../../../assets/01.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
