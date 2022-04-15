import React from "react";
import { Select } from "antd";

const { Option } = Select;

const EditForm = ({
  handleSubmit,
  // handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const { title, content } = values.card;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name, " ----- ", e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={(e)=>setValues(e.target.value)}
          
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
          onChange={(e)=>setValues(e.target.value)}
        />
      </div>

   

      <br />
      <button type="submit" className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default EditForm;