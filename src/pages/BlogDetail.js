import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardDetail from "../components/CardDetail";
import { getCardInfoByIdAction } from "../Redux/actions/cardAction";
import "./BlogDetail.css";
import {useParams} from "react-router-dom";
const BlogDetail = () => {
  const dispatch = useDispatch();
    let {id}= useParams();
  const {card}  = useSelector((state) => ({ ...state }));
  
  useEffect(() => {
    dispatch(getCardInfoByIdAction(id));
  }, []);
  return (
    <div>
      <CardDetail detail={card} />
    </div>
  );
};

export default BlogDetail;
