import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Info from "./Info.jsx";
import About from "./About.jsx";
import Interests from "./Interests.jsx";
import Footer from "./Footer.jsx";

function BusinessCard() {
  return (
    <div className="container">
      <main>
        <Info />

        <About />

        <Interests />
      </main>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BusinessCard />
  </React.StrictMode>
);
