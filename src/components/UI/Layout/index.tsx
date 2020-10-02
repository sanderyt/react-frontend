import React, { FC, ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./layout.scss";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
