import { Route } from "react-router-dom";
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
            
            <Component {...propsRoutes} />
            <FooterBottom />
          
          </>
        );
      }}
    />
    
  );
};

export default HomeTemplate;