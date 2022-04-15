import React, { useEffect, useState } from "react";
import HomeCategory from "./HomeCategory";
import SearchCategory from "./SearchCategory";
import SortCategory from "./SortCategory";
import { useSelector, useDispatch } from "react-redux";
import { getCardInfoAction } from "../Redux/actions/cardAction";
import Pagination from "../components/Pagination";
import { Empty, Input, Space } from "antd";
import Loader from "../components/Loader";
import { getSearchAction, getSortAction } from "../Redux/actions/queryAction";
import SortComponent from "../components/SortComponent";
// import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
  const { arrCard } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);
  const { search } = useSelector((state) => ({ ...state }));
  const { sort } = useSelector((state) => ({ ...state }));
  const [render, setRender] = useState(arrCard);
  const [renderSort, setRenderSort] = useState(arrCard);
  const [sortById, setSortById] = useState([]);
  const dispatch = useDispatch();
  const [qKey, setQKey] = useState("");
  const { Search } = Input;

  const onSearch = (value) => handleSearch(value);
  useEffect(() => {
    setLoading(true);
    dispatch(getCardInfoAction());
    setTimeout(() => setLoading(false), 3000);
    setRender(search)
    
  }, []);
  const handleSort = () => {
    dispatch(getSortAction());
    setRenderSort(sort)
    
  };
  const handleSearch = (qKey) => {
    dispatch(getSearchAction(qKey));
    setRender(search)
    
  };
  useEffect(() => {
    dispatch(getSearchAction(qKey));
    setRender(search)
  }, [qKey]);
  useEffect(() => {
    dispatch(getSearchAction());
    setRenderSort(sort)
  }, [sortById]);
  
  
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
        
          <Space direction="vertical">
            {" "}
            <Search
              value={qKey}
              onChange={(e) => setQKey(e.target.value)}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              className="ml-5 mb-3"
              onClick={handleSearch}
            />
          </Space>

          {
            renderSort?<SortCategory arrCard={renderSort}/>:""
          }
          <SortComponent className="ml-5 mb-3" handleSort={handleSort} />
{
  (!render&&!arrCard)&&<Empty />
}
          {render ? (
            <SearchCategory arrCard={render} />
          ) : (
            <HomeCategory autoFocus arrCard={arrCard} />
          )}

          
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Home;
