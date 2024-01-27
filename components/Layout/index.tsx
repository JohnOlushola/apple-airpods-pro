import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="hidden lg:block">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center align-middle h-screen">
        <p>Please view on a desktop</p>
      </div>
    </>
  );
}
