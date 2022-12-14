import React from "react";
import './StudentsAcademy.css'
const StudentsAcademy = () => {
  return (
    <div className="StudentsAcademy">
      <div className="container">
        <div className="studentsAcademy-content">
          <div className="img-student">
            <img
              src={require("../../assets/StudentsAcademy.png")}
              alt="StudentsAcademy"
              srcset=""
            />
          </div>
          <div className="detail-student">
            <b>طلاب الأكاديمية الوطنية للبناء</b>
            <p>
              نحن هنا لمساعدة طلاب الأكاديمية الوطنية للبناء على تحقيق أقصى
              استفادة من خبراتهم، والجمع بين الأشخاص والأماكن والبرامج التي تدعم
              نموهم وعافيتهم ونجاحهم داخل وخارج الفصل الدراسي - في الأكاديمية
              الوطنية للبناء وفي العالم خارجها.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsAcademy;
