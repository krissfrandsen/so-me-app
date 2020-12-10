import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <HomeGuest />
      <Footer />
    </>
  );
};

ReactDOM.render(<Main />, document.querySelector("#app"));
