import { Route } from "react-router-dom";
import AdminNav from "../components/DashBoard/Nav/AdminNav";
import FooterBottom from "../layouts/FooterBottom";

import Header from "../layouts/Header";


const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    
    <Route
      {...restProps}
      render={(propsRoutes) => {
        return (
          <>
          
            <Header {...propsRoutes} />
            <AdminNav />
            
            <Component {...propsRoutes} />
            <FooterBottom />
          
          </>
        );
      }}
    />
    
  );
};

export default HomeTemplate;