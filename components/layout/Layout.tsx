import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
