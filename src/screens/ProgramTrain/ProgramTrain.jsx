import React from "react";
import "./ProgramTrain.css";
import { Program } from "./components/Program";
const ProgramTrain = () => {

  return (
    <div className="program-train-page">
      <div className="img-train">
        <img
          src={require("../../assets/programtrain.png")}
          alt="Program Train"
        />
      </div>
      <div className="box-program-train">
        <b>البرامج التدريبية</b>
        <p>
          نحن هنا لمساعدة طلاب الأكاديمية الوطنية للبناء على تحقيق أقصى استفادة
          من خبراتهم، والجمع بين الأشخاص والأماكن والبرامج التي تدعم نموهم
          وعافيتهم ونجاحهم داخل وخارج الفصل الدراسي - في الأكاديمية الوطنية
          للبناء وفي العالم خارجها.
        </p>
      </div>
      <div className="container">
        <div className="program-train-content">
          <Program
            img={require("../../assets/programtrain1.png")}
            title={"هذا نص اسم البرنامج"}
            text={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"
            }
            direction={'left'}
          />
          <Program
            img={require("../../assets/programtrain2.png")}
            title={"هذا نص اسم البرنامج"}
            text={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"
            }
            direction={'right'}
          />
          <Program
            img={require("../../assets/programtrain3.png")}
            title={"هذا نص اسم البرنامج"}
            text={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"
            }
            direction={'left'}
          />
          <Program
            img={require("../../assets/programtrain4.png")}
            title={"هذا نص اسم البرنامج"}
            text={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"
            }
            direction={'right'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramTrain;
