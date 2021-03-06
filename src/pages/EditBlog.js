import React, { useState, useEffect } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import EditForm from "../components/Form/EditForm";
import { getCardInfoByIdAction } from "../Redux/actions/cardAction";
import { useDispatch, useSelector } from "react-redux";
// import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";

import { useParams } from "react-router-dom";
import { updateBlogAction } from "../Redux/actions/BlogAction";
const initialState = {
  title: "",
  content: "",
};

const UpdateBlog = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  // const { user } = useSelector((state) => ({ ...state }));
  // router
  const { card } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    loadBlogDetail();
    console.log(values);
    // loadCategories();
  }, []);

  const loadProduct = () => {
    // getProduct(slug).then((p) => {
    // });
  };

  const loadBlogDetail = () => {
    const action = getCardInfoByIdAction(id);
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const ask=window.confirm("Are You Sure?")
if(ask){

  dispatch(updateBlogAction(id,values));
  console.log(id,values,"------")
}

    // updateProduct(slug, values, user.token)
    setLoading(false);
  };

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   console.log(e.target.name, " ----- ", e.target.value);
  // };

  const handleCategoryChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* {JSON.stringify(card)} */}
        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4 className="text-center">Blog Update</h4>
          )}

          <EditForm
            handleSubmit={handleSubmit}
            // handleChange={handleChange}
            setValues={setValues}
            values={card}
            // handleCategoryChange={handleCategoryChange}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
