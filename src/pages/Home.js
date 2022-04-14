import React, { useEffect, useState } from "react";
import HomeCategory from "./HomeCategory";
import { useSelector, useDispatch } from "react-redux";
import { getCardInfoAction } from "../Redux/actions/cardAction";
import Pagination from "../components/Pagination";
import { Spin, Space } from "antd";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { arrCard } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  console.log(arrCard);
  useEffect(() => {
    setLoading(true);
    dispatch(getCardInfoAction());
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HomeCategory autoFocus arrCard={arrCard} />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Home;
