import React from "react";
import { Select } from "antd";

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
    </form>
  );
};

export default CreateForm;
