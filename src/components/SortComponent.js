import { Select } from "antd";
import React from "react";

const SortComponent = ({handleSort}) => {
  const { Option } = Select;
  return (
    <div>
      <Select
        className="ml-5 mb-3"
        defaultValue="DESC"
        showSearch
        style={{ width: 200 }}
        placeholder="Sort By?"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        <Option onClick={handleSort()} value="1">Sort ASC</Option>
      </Select>
    </div>
  );
};

export default SortComponent;
