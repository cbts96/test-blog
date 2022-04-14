import React from "react";
import { Select } from "antd";

const { Option } = Select;

const EditForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const { title, content } = values.card;


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
          placeholder={title}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <input
          type="text"
          name="content"
          className="form-control"
          value={content}
          placeholder={content}
          onChange={handleChange}
        />
      </div>

   

      <br />
      <button type="submit" className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default EditForm;