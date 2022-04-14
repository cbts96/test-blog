import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../components/FileUpload";
import CreateForm from "../components/Form/CreateForm";
import { createBlogAction } from "../Redux/actions/BlogAction";
import { Redirect } from "react-router-dom";

const CreatePost = () => {
  // const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState({
    title: "Blog",
    content: "Description",
  });
  
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // step 1
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    //   loadCategories();
  }, []);

  // const loadCategories = () =>
  //   getCategories().then((c) => setCategories(c.data));
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (window.confirm("Are You Sure?")) {
      //Gọi action
      dispatch(createBlogAction(values));
      console.log(values,"aaa");
      setLoading(false);
      Redirect("/dashboard")
    }
  };

  // const handleRemove = async (slug) => {
  //   // let answer = window.confirm("Delete?");
  //   // console.log(answer, slug);
  //   if (window.confirm("Delete?")) {
  //     setLoading(true);
  //     removeCategory(slug, user.token)
  //       .then((res) => {
  //         setLoading(false);
  //         toast.error(`${res.data.name} deleted`);
  //         loadCategories();
  //       })
  //       .catch((err) => {
  //         if (err.response.status === 400) {
  //           setLoading(false);
  //           toast.error(err.response.data);
  //         }
  //       });
  //   }
  // };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {loading ? (
              <h4 className="text-danger">Loading..</h4>
            ) : (
              <h4>Create category</h4>
            )}

            <FileUpload values={values} setValues={setValues} />
            <CreateForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              
              
              values={values}
              setValues={setValues}
            />
            {/* step 2 and step 3 */}
            {/* <LocalSearch keyword={keyword} setKeyword={setKeyword} /> */}

            {/* step 5 */}
            {/* {categories.filter(searched(keyword)).map((c) => (
            <div className="alert alert-secondary" key={c._id}>
              {c.name}
              <span
                onClick={() => handleRemove(c.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/admin/category/${c.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
