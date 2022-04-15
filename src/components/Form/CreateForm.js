import React from "react";
import { Select } from "antd";
import AdminNav from "../DashBoard/Nav/AdminNav";

const { Option } = Select;

const CreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const { title, content } = values;

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
<div className="col-md-10">
<div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <input
          type="text"
          name="content"
          className="form-control"
          value={content}
          onChange={handleChange}
        />
      </div>

   

      <br />
      <button type="submit" className="btn btn-outline-info">Save</button>
</div>
      </div>
     
      
    </form>
  );
};

export default CreateForm;
