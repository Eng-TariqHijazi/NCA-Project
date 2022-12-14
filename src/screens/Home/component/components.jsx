import React from "react";
export const TitleScreen = ({ title, text }) => {
  return (
    <>
      <b
        style={{
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "45px",
          color: "#333333",
        }}
      >
        {title}
      </b>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "22px",
          lineHeight: "42px",
          color: "#33333340",
          paddingTop: "10px",
        }}
      >
        {text}
      </p>
    </>
  );
};
export const ImgBox = ({ img }) => {
  return (
    <div
      className="img-box"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "268px",
        height: "180px",
        border: "1px solid #F1F1F1",
        borderRadius: " 12px",
      }}
    >
      <img
        src={img}
        alt={"partners"}
        style={{ maxWidth: "240px", maxHeight: "170px" }}
      />
    </div>
  );
};
export const StatsItem = ({ title, text }) => {
  return (
    <div
      style={{
        width: "271px",
        height: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.09)",
        borderRadius: "20px",
        flexDirection:'column'
      }}
    >
      <b style={{fontSize:"45px",fontWeight:500,lineHeight:"59.4px",color:"#4F6DAA",marginBottom:"20px"}}>{title}</b>
      <p style={{fontSize:"18px",fontWeight:400,lineHeight:"24px",color:"#333",marginBottom:"40px"}}>{text}</p>
    </div>
  );
};
