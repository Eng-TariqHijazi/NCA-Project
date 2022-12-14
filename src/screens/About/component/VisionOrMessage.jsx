export const VisionOrMessage = ({ title, text, img }) => {
    return (
      <div className="vision">
        <div className="vision-about-img">
          <img src={img} alt="about" />
        </div>
        <div className="vision-about-detail">
          <b>{title}</b>
          <p>{text}</p>
        </div>
      </div>
    );
  };