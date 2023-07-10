import React from "react";
import { Input } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../redux/action/product.action";
const { Search } = Input;

const SearchComp = () => {
  const dispatch = useDispatch();
  const onSearch = async (ed) => {
    let response = await axios.get(`http://localhost:3000/products`);

    let searchData = response.data.filter((e) =>
      e.brandName.toLowerCase().includes(ed.target.value.toLowerCase())
    );
    dispatch(searchAction(searchData));
  };

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchComp;
