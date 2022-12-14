import React from 'react'
export   const Program = ({ img, title, text, direction }) => {
    return (
      <div className="program" style={{flexDirection:direction==="left"?"row-reverse":"row"}}>
        <div className="program-img">
          <img src={img} alt="Program" />
        </div>
        <div className="program-detail">
          <div className="text-program">برنامج</div>
          <b>{title}</b>
          <p>{text}</p>
          <button>انضم الان</button>
        </div>
      </div>
    );
  };
