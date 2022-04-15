import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SearchOutlined} from "@ant-design/icons"
import CardDetail from "../components/CardDetail";
import { getCardInfoByIdAction } from "../Redux/actions/cardAction";
import "./BlogDetail.css";
import {useParams} from "react-router-dom";
import { getQueryAction } from "../Redux/actions/queryAction";
const BlogDetail = () => {
  // const [page,setPage]=useState(1);
  // const [qKey,setQKey]=useState("");
  // const [id,setId]=useState(932);
  const dispatch = useDispatch();
    let {id}= useParams();
  const {card}  = useSelector((state) => ({ ...state }));
  
  useEffect(() => {
    dispatch(getCardInfoByIdAction(id));
  }, []);
  return (
    <div>
      {/* <div className="query">
        <span>Query By:</span>
        <span><input type="search" value={page} onChange={(e)=>setPage(e.target.value)} icon={<SearchOutlined/>} placeholder="page" /></span>
        <span><input type="search" value={qKey} onChange={(e)=>setQKey(e.target.value)} icon={<SearchOutlined/>} placeholder="query" /></span>
        <span><input type="search" value={id} onChange={(e)=>setId(e.target.value)} icon={<SearchOutlined/>} placeholder="id" /></span>
      </div> */}
      <CardDetail detail={card} />
    </div>
  );
};

export default BlogDetail;
