export const Aim = ({ img, text }) => {
  return (
    <div className="aim">
      <div className="img">
        <img src={img} alt="about" />
      </div>
      <p>{text}</p>
    </div>
  );
};
