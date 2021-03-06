// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Item from "../item";
import { useDispatch } from "react-redux";
import { Actions } from "../../state/actions";
const listItems = ({ listProductWoman }) => {
  const listItem = listProductWoman&& listProductWoman.filter((item)=> item.id > 4 && item.id < 9) 

  return (
    <div className="listItem">
      <div style={{ width: "70%" }} className="flex items-center man-wrap">
        {listItem && listItem.map((item) => (
          <Item record={item} />
        ))}
      </div>
    </div>
  );
};
export default listItems;
