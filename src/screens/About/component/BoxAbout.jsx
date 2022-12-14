export const BoxAbout = ({ img, title, text, direction }) => {
    return (
      <div
        className="box-about"
        style={{ flexDirection: direction === "left" ? "row-reverse" : "row" }}
      >
        <div className="box-about-img">
          <img src={img} alt="about" />
        </div>
        <div className="box-about-detail">
          <b>{title}</b>
          <p>{text}</p>
        </div>
      </div>
    );
  };