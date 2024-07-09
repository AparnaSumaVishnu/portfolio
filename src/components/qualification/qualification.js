import React from "react";
import "./qualification.css";
import Qualification from "../../assets/qual.jpg";

const QualificationSection = () => {
  return (
    <section id="qual">
      <div className="qualTitle">
        <h6>Qualification</h6>
      </div>
      <div className="qualBars">
        <div className="qualBar">
          <img src={Qualification} alt="Qualification" className="qualBarImg" />
          <div className="qualBarText">
            <h2>BSC Computer Science</h2>
            <p>
              Completed Graduation in Bachelor of Science in Computer Science from University of Calicut in 2024.
            </p>
            <p>2021-2024</p>
            <p>CGPA: 7.57</p>
          </div>
        </div>
        <div className="qualBar">
          <img src={Qualification} alt="Qualification" className="qualBarImg" />
          <div className="qualBarText">
            <h2>HSC</h2>
            <p>Completed HSC from Maharashtra State Board.</p>
            <p>2019-2021</p>
            <p>Percentage: 88%</p>
          </div>
        </div>
        <div className="qualBar">
          <img src={Qualification} alt="Qualification" className="qualBarImg" />
          <div className="qualBarText">
            <h2>SSC</h2>
            <p>Completed SSC from Maharashtra State Board.</p>
            <p>2018-2019</p>
            <p>Percentage: 86.8%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
