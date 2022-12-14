import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="list-row">
            <div className="logo-footer">
              <img src={require("../../assets/logoFooter.png")} alt="logo" />
            </div>
            <div className="item-list-footer">
              <p>
                <a href="#">الرئيسية</a>
              </p>
              <p>
                <a href="#">من نحن</a>
              </p>
              <p>
                <a href="#">القبول والتسجيل</a>
              </p>
              <p>
                <a href="#">الشروط والاحكام</a>
              </p>
            </div>
            <div className="item-list-footer">
              <p>
                <a href="#">الرئيسية</a>
              </p>
              <p>
                <a href="#">من نحن</a>
              </p>
              <p>
                <a href="#">القبول والتسجيل</a>
              </p>
              <p>
                <a href="#">سياسة الخصوصية</a>
              </p>
            </div>
            <div className="item-list-footer">
              <p>
                <a href="#">البرامج التدريبية</a>
              </p>
              <p>
                <a href="#">القسم الاكاديمي</a>
              </p>
              <p>
                <a href="#">تقدم بطلب</a>
              </p>
              <p>
                <a href="#">تواصل معنا</a>
              </p>
            </div>
            <div className="item-list-footer">
              <p>
                <a href="#">samialjarosha6@gmail.com : الايميل</a>
              </p>
              <p>
                <a href="#">رقم الهاتف</a>
              </p>
              <p>
                <a href="#">العنوان</a>
              </p>
            </div>
          </div>
          <div className="para-footer">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. هذا
            النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="text-footer">
          جميع الحقوق محفوظة لدى الاكاديمية الوظنية للبناء © 2023
        </div>
      </div>
      <div className="img-background">
        <img src={require("../../assets/Group.png")} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
