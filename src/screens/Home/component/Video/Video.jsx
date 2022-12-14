import React from "react";
import { Player } from "video-react";
import { TitleScreen } from "../components";
import './Video.css'
export const Video = () => {
  return (
    <div className="Stats">
      <div className="container">
        <div className="client-content">
          <TitleScreen
            title={"هذا نص عنوان الفيديو"}
            text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}
          />
          <div className="video-item">
            <Player height={575} fluid={false} width={'100%'} poster={require("../../../../assets/Rec20.png")} muted={false} playsInline={false} preload="none">
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
};
