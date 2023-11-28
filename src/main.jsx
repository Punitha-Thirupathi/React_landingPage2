import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Netflix/netflixNavbar/Navbar.jsx";
import Watch from "./Netflix/Watch/Watch.jsx";
import Download from "./Netflix/Download/Download.jsx";
import Footer from "./Netflix/Footer/Footer.jsx";

/* import SignIn from './Netflix/SignIn/SignIn.jsx' */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Watch />
    <Download />
    <Footer />

    {/*     <SignIn /> */}
  </React.StrictMode>
);
