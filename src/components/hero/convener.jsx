import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Convener</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/hod.jpg"
              alt="Dr. jayarama Pradeep-EEE HOD"
            />
            <h1 className="convener-name"> Dr.Jayarama Pradeep</h1>

            <h1 className="convener-position">Head Of Department - EEE </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
