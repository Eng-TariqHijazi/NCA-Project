import React from "react";
import "./About.css";
import { Aim } from "./component/Aim";
import { BoxAbout } from "./component/BoxAbout";
import { VisionOrMessage } from "./component/VisionOrMessage";
const About = () => {
  return (
    <div className="About">
      <div className="img-about">
        <img src={require("../../assets/about.png")} alt="about" />
      </div>

      <div className="box-program-train">
        <b>من نحن</b>
        <p>
          الأكاديمية الوطنية للبناء   هي منظمة فنية وأكاديمية تأسست نتيجة
          للشراكة المثمرة بين شركة البواني القابضة والمؤسسة العامة للتدريب
          التقني والمهني (TVTC) وتعاون الجهات الفاعلة في مجال الانشاء والبناء
          التي تمول الأكاديمية.
        </p>
      </div>
      <div className="container">
        <BoxAbout
          title={"تتبنى الأكاديمية معايير"}
          text={
            "إقليمية ووطنية ودولية في التدريب الفني والمهني في قطاع صناعة الانشاء والبناء. وهي منظمة غير ربحية يديرها مجلس أمناء مستقل."
          }
          img={require("../../assets/about1.png")}
          direction={"right"}
        />
      </div>
      <div className="vision-message">
        <div className="container">
          <div className="vision-content">
            <VisionOrMessage
              img={require("../../assets/Frame.png")}
              title={"الرؤية"}
              text={
                "تتمثل رؤيتنا في أن نصبح إحدى الأكاديميات التدريبية الرائدة في مجال المقاولات والبناء في المنطقة والتي تستخدم أحدث تقنيات المقاولات والبناء والتدريب العملي على أيدي خبراء دوليين متخصصين."
              }
            />
            <VisionOrMessage
              img={require("../../assets/Frame1.png")}
              title={"الرسالة"}
              text={
                "لتعزيز التعلم مدى الحياة والاحتراف في مهنة المقاولات والبناء، ستعزز الأكاديمية الوطنية للبناء غرس المعرفة والخبرة العملية اللازمة لطلابنا لمتابعة التحصيل الأكاديمي والتطوير الوظيفي. نحن نقدم الأفضل فقط!"
              }
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-content">
          <b className="aim-text">الأهداف</b>
          <div className="aims">
            <Aim img={require("../../assets/Frame2.png")} text={"أمان"} />
            <Aim
              img={require("../../assets/Frame3.png")}
              text={"تطوير الناس"}
            />
            <Aim img={require("../../assets/Frame4.png")} text={"تفوق"} />
            <Aim
              img={require("../../assets/Frame5.png")}
              text={"العدل والنزاهة"}
            />
            <Aim
              img={require("../../assets/Frame6.png")}
              text={"العمل بروح الفريق الواحد"}
            />
            <Aim img={require("../../assets/Frame7.png")} text={"إستجابة"} />
            <Aim
              img={require("../../assets/Frame8.png")}
              text={"الابتكار والتكنولوجيا"}
            />
          </div>
          <BoxAbout
            title={
              "تهدف الأكاديمية الوطنية للبناء إلى توفير تدريب جيد للمواطنين السعوديين الشباب لإعدادهم للعمل في صناعة الانشاءات والبناء."
            }
            text={
              " تحقيقًا لحلم وطني، تطمح الأكاديمية الوطنية للبناء لخريجيها الرواد أن يكونوا لبنة في جهود المملكة لخلق اقتصاد قائم على المعرفة. "
            }
            img={require("../../assets/about1.png")}
            direction={"right"}
          />
          <BoxAbout
            title={
              "تهدف الأكاديمية الوطنية للبناء إلى ترسيخ مكانتها كأكاديمية تقنية وفنية للتدريب على مستوى عالمي في صناعة الانشاءات والبناء في المنطقة من خلال تحقيق الأهداف التالية:"
            }
            text={
              "إقليمية ووطنية ودولية في التدريب الفني والمهني في قطاع صناعة الانشاء والبناء. وهي منظمة غير ربحية يديرها مجلس أمناء مستقل."
            }
            img={require("../../assets/about1.png")}
            direction={"left"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
