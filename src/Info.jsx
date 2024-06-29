import React from "react";
import portrait from "./assets/65dafc7d-43a7.webp";

export default function Info() {
  return (
    <div className="info">
      <img src={portrait} alt="Portrait" />

      <div className="info-text">
        <h2 className="info-text--name">Philipp Recknagel</h2>
        <p className="info-text--jobtitle">Fullstack Developer</p>
        <p className="info-text--website">philipprecknagel.at</p>
      </div>

      <div className="info-btns">
        <a className="info-btns--email-btn">
          <i className="info-btns--email-btn--icon"></i>
          Email
        </a>
      </div>
    </div>
  );
}
