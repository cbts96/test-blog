import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { Skeleton } from "antd";

const SearchCategory = ({ arrCard }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(setLoading(true), 5000);
    setLoading(false);
    console.log(arrCard)
  }, []);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return loading? (<Skeleton />):(
    <>
     <motion.ul variants={container} initial="hidden" animate="visible">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center ">
      {arrCard.search?.map((value, key) => {
        return (
          <motion.li key={key} variants={item}>
          <div key={key}>
            <Card arrCard={value} />
          </div>
          </motion.li>
        );
      })}
    </div>
    </motion.ul>
  </>);
};

export default SearchCategory;