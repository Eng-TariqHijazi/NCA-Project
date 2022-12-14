import React from "react";
import { TitleScreen } from "../Home/component/components";
import "./Model.css";
import Icon from "react-web-vector-icons";
const Model = () => {
  const InputForm = ({
    title,
    placeholder,
    type,
    detail,
    icon,
    textIcon,
    img,
  }) => {
    return (
      <div className="item-input">
        <label htmlFor="">
          <p>{title}</p>
          <p>{detail}</p>
        </label>
        <div className="input">
          <input type={type} placeholder={placeholder} />
          <div className="icon">
            <Icon
              name={icon}
              font="FontAwesome"
              color="#00000044"
              size={20}
              // style={{}}
            />
            {img ? <img src={img} style={{ width: 30, height: 20 }} /> : <></>}

            <p>{textIcon}</p>
          </div>
        </div>
      </div>
    );
  };

  const ListForm = ({ title, placeholder, type, detail, icon, list = [] }) => {
    if (list.length == 0) {
      for (let index = 0; index < 50; index++) {
        list[index] = index + 50;
      }
    }
    return (
      <div className="item-input">
        <label htmlFor="">
          <p>{title}</p>
          <p>{detail}</p>
        </label>
        <div className="input">
          <select>
            {list.map(function (item) {
              return <option>{item}</option>;
            })}
          </select>
        </div>
      </div>
    );
  };
  const AttachImg = ({
    title,
    placeholder,
    detail,
  }) => {
    const attach = ()=>{
        let input = document.getElementById("inputTag");
        let boxAttach = document.getElementById("boxAttach")

        input.addEventListener("change", ()=>{
            let inputImage = document.querySelector("input[type=file]").files[0];
            boxAttach.innerText = inputImage.name;
            boxAttach.style.color = '#000'
        })
      }
    return (
      <div className="attach-input">
        <label htmlFor="">
          <p>{title}</p>
          <p>{detail}</p>
        </label>
        <label className="input" onClick={attach}>
          <input type={"file"} id="inputTag"/>
          <p id="boxAttach">{placeholder}</p>
          <div className="icon">
            <Icon
              name={"folder"}
              font="FontAwesome"
              color="#00000044"
              size={20}
              // style={{}}
            />
          </div>
        </label>
      </div>
    );
  };
  return (
    <div className="Model">
      <div className="container">
        <div className="model-content">
          <TitleScreen
            title={"فورم تعبئة النموذج"}
            text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}
          />
          <form action="">
            <div className="model-form">
              <InputForm
                title={"الاسم الأول"}
                detail={"(حقل اجباري)"}
                placeholder={"منور"}
                type={"text"}
              />
              <InputForm
                title={"الاسم الثاني"}
                placeholder={"الشمري"}
                type={"text"}
              />
              <InputForm
                title={" رقم الهوية"}
                placeholder={"1120225410"}
                type={"text"}
              />
              <InputForm title={"العمر"} placeholder={"21 سنة"} type={"text"} />
              <InputForm
                title={"رقم المبنى"}
                placeholder={"5353"}
                type={"text"}
              />
              <InputForm
                title={"الشارع"}
                placeholder={"شارع الأمير سلمان بن محمد بن سعود"}
                type={"text"}
              />
              <InputForm
                title={"الحي"}
                placeholder={"حي الياسمين"}
                type={"text"}
              />
              <InputForm
                title={"الرمز البريدي"}
                placeholder={"11461"}
                type={"text"}
              />
              <InputForm
                title={"المدينة"}
                placeholder={"الرياض"}
                type={"text"}
              />
              <InputForm
                title={"المنطقة"}
                placeholder={"القصيم"}
                type={"text"}
              />
              <InputForm
                title={"الايميل"}
                placeholder={"mn1417mmnn@gmail.com"}
                type={"email"}
              />
              <InputForm
                title={"رقم الهاتف المحمول"}
                placeholder={"564765490"}
                type={"text"}
                img={require("../../assets/al.png")}
                textIcon={"+966 "}
              />
              <InputForm
                title={"تاريخ الميلاد"}
                placeholder={"8-Mar-96"}
                type={"text"}
                detail={"(ان لا يزيد عن 24 سنة)"}
              />
              <ListForm title={"درجة قياس"} detail={"(ان لا يقل عن 60)"} />
              <ListForm title={"الدرجة الثانوية العامة (ان لايقل عن 70)"} />
              <ListForm title={"درجة اللغة الإنجليزية في شهادة الثانوية"} />
              <AttachImg title={"ارفق صورة شهادة الثانوية"} placeholder={"قم بإرفاق الصورة"}/>
              <ListForm title={"الجنس"} list={["ذكر", "أنثى"]} />
              <AttachImg title={"ارفق صورة من الهوية الوطنية"} placeholder={"قم بإرفاق الصورة"}/>
              <AttachImg title={"ارفق صورة من السيرة الذاتية"} placeholder={"قم بإرفاق الصورة"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
