import React from "react";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon"></Avatar>}
      <h2 className="headerOption__title">{title}</h2>
    </div>
  );
};

export default HeaderOption;
