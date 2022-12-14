import React from "react";
import { Aim } from "../About/component/Aim";
import { Head } from "./components/Head";
import './AcademicCampus.css'
const AcademicCampus = () => {
  return (
    <div className="AcademicCampus">
      <Head
        title={"الحرم الأكاديمي والسكني"}
        text={
          "تمتلئ حياة الأكاديمية الوطنية للبناء النشطة والحياة الجامعية بالخبرات المشتركة في المناهج الدراسية لاستكمال مناهجنا الأكاديمية وتعزيز التجربة الشاملة."
        }
      />
      <div className="container">
        <div className="content-campus">
          <Aim img={require('../../assets/campus1.png')} text={"مساحة 70.000 متر مربع"}/>
          <Aim img={require('../../assets/campus2.png')} text={"ورش عمل مع قطع غيار لجميع التخصصات"}/>
          <Aim img={require('../../assets/campus3.png')} text={"محاكيات متخصصة"}/>
          <Aim img={require('../../assets/campus4.png')} text={"حجرات دراسية ذكية"}/>
          <Aim img={require('../../assets/campus5.png')} text={"سعة متدربين تصل الى 1000"}/>
          <Aim img={require('../../assets/campus6.png')} text={"معامل الحاسوب والاختبار"}/>
          <Aim img={require('../../assets/campus7.png')} text={"قاعة للمناسبات"}/>
          <Aim img={require('../../assets/campus8.png')} text={"معامل الحاسوب والاختبار"}/>
          <Aim img={require('../../assets/campus9.png')} text={"مراقبة الأمن والسلامة على مدار الساعة طوال أيام الأسبوع عبر الدوائر التلفزيونية المغلقة"}/>
          <Aim img={require('../../assets/campus10.png')} text={"مسجد"}/>
          <Aim img={require('../../assets/campus11.png')} text={"عيادة طبية"}/>
          <Aim img={require('../../assets/campus12.png')} text={"أماكن ترفيهية ورياضية متعددة"}/>
          <Aim img={require('../../assets/campus13.png')} text={"سكن خاص للموظفين والطلاب"}/>
         
        </div>
      </div>
    </div>
  );
};

export default AcademicCampus;
