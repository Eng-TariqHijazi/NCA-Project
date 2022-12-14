import React from "react";
import "./EmailPage.css";
import { TitleScreen } from "../components";
const EmailPage = () => {
  return (
    <div>
    <div className="EmailPage">
      <div className="container">
        <div className="email-content">
        <b>النشرة البريدية</b>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>
  
            <div className="email-item">
              <input type="email" name="" id="" placeholder="عنوان البريد الالكتروني" />
              <button>اشترك الآن</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
