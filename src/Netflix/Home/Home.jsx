import React from "react";
import "./Home.css";
/*  import bg from '../../Netflix/netflixbg.jpg';   */ 
/* import netflix from '../../Netflix/netflix.png' */

const Home = () => {
  return (
    <section id="home"> 
   
     {/* <div style={{backgroundImage:`url(${bg})`,
           backroundRepeat:"no-repeat", 
           backroundSize:"cover"}}>
        </div> */}
      <div className="homeContent">
        <span className="content">
          The biggest Indian hits. Ready to
           watch here from
        </span>
         <span className="offerPer"> ₹ 149</span>
        <p className="homePara">Join today. Cancel anytime.</p>
        <p className="homePara2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <form className="form">
        <input type="email" className="email" placeholder=" Enter Your Email" />
        <button className="formBtn"> Get Started {">"} </button>
      </form>
    
    </section>
    
  );
};

export default Home;
