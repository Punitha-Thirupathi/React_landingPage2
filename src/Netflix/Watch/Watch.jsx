import React from "react";
import "./Watch.css";
import Img from "../../Netflix/Assests/watch.png";

const Watch = () => {
  return (
    <section id="watch">
      <div className="watchContent">Enjoy on your TV</div>
       <div className="watchPara1">
        Watch on smart TVs, PlayStation, <br />Xbox, Chromecast, Apple TV, Blu-ray
        players and more.
      </div> 
      <img src={Img} alt=" netflix" className="bg" />
    </section>
  );
};

export default Watch;
