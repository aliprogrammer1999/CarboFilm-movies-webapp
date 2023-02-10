import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <div className="max-w-[1600px]">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
