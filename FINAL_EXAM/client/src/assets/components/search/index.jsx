import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import {
  cardAction,
  searchAndSortAction,
} from "../../../redux/action/card.action";

const SearchAndSortComp = () => {
  const [toggle, setToggle] = useState(true);
  const searchData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    let response = await axios.get(`http://localhost:3000/product`);
    let newData = response.data.filter((element) =>
      element.headerText.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch(searchAndSortAction(newData));
  };

  const handleSort = () => {
    setToggle(!toggle);
    if (toggle) {
      let sortedData = searchData.data.sort((a, b) => a.price - b.price);
      dispatch(searchAndSortAction(sortedData));
    } else {
      dispatch(cardAction());
    }
  };

  return (
    <div className="search">
      <div className="component">
        <input
          type="text"
          placeholder="Enter the Search Name"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          onClick={() => {
            handleSort();
          }}
        >
          Sort by Price
        </button>
      </div>
    </div>
  );
};

export default SearchAndSortComp;
