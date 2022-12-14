import React from "react";
import {TitleScreen} from "../components";
import './RealAndNumbers.css'
const RealAndNumbers = () => {
  const RenderItem = ({ img, title, text }) => {
    return (
      <div className="item-real">
        <img src={img} alt="news" />
        <b>{title}</b>
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className="RealAndNumbers">
      <div className="container">
        <div className="content-real">
          <TitleScreen title={"حقائق وأرقام"} text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}/>
          <div className="list-real">
            <RenderItem
              img={require("../../../../assets/Vector1.png")}
              title={"هذا نص افتراضي سيتم استبداله"}
              text={"هذا نص افتراضي سيتم استبداله"}
            />
            <RenderItem
              img={require("../../../../assets/Vector2.png")}
              title={"هذا نص افتراضي سيتم استبداله"}
              text={"هذا نص افتراضي سيتم استبداله"}
            />
            <RenderItem
              img={require("../../../../assets/Vector3.png")}
              title={"هذا نص افتراضي سيتم استبداله"}
              text={"هذا نص افتراضي سيتم استبداله"}
            />
            <RenderItem
              img={require("../../../../assets/Vector4.png")}
              title={"هذا نص افتراضي سيتم استبداله"}
              text={"هذا نص افتراضي سيتم استبداله"}
            />
          </div>
          <div className="button">
            <button>اكتشف جميع الأرقام</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealAndNumbers;
