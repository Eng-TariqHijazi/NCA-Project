import React from "react";
import { Head } from "../AcademicCampus/components/Head";
import { TrustMan } from "./TrustMan";
import './BoardTrust.css'
const BoardTrust = () => {
  return (
    <div className="BoardTrust">
      <Head title={"مجلس الأمناء"} />
      <div className="container">
        <div className="trust-content">
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
          <TrustMan title={"خالد عبد القادر الخالدي"} text={"المدير التنفيذي"} />
        </div>
      </div>
    </div>
  );
};

export default BoardTrust;
