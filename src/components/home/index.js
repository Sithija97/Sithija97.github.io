import React from "react";
import "./home.css";
import Header from "../header/index";
import Footer from "../footer/index";
import Body from "../body/index";
function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
