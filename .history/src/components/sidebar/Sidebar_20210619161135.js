import React from "react";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import NotificationsNoneTwoToneIcon from "@material-ui/icons/NotificationsNoneTwoTone";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";
import { ContactSupportOutlined } from "@material-ui/icons";

const lists = [
  { id: 1, title: "Dashboard", icon: <DashboardTwoToneIcon /> },
  { id: 2, title: "Finances", icon: <MonetizationOnTwoToneIcon /> },
  { id: 3, title: "Notifications", icon: <NotificationsNoneTwoToneIcon /> },
  { id: 4, title: "Profile", icon: <AccountBoxRoundedIcon /> },
];

export default function Sidebar() {
  const [selected, setSelected] = useState();
  const [color, setColor] = useState("#808080");
  const [bgColor, setBgColor] = useState("");
  const [toggle, setToggle] = useState(true);
  const history = useHistory();

  const changeColor = () => {
    if (toggle) {
      setColor("white");
      setBgColor("#2a95bf");
      setToggle(false);
    } else {
      setColor("#808080");
      setBgColor("");
      setToggle(true);
    }
  };

  const handleColor = (row) => {
    setSelected(row.id);
  };

  const handleRoute = (route) => {
    let path = "/" + route;
    history.push(path);
  };

  const path = history.location.pathname.substr(1);
  console.log(path);
  return (
    <div className="root-sidebar">
      {lists.map((list) => (
        <button
          key={list.id}
          className="button-dashboard"
          style={{
            backgroundColor: list.title === path ? "#2a95bf" : "",
            color: list.title === path ? "white" : "#808080",
          }}
          onClick={() => {
            handleColor(list);
            handleRoute(list.title);
          }}
        >
          {list.icon}
          {list.title}
        </button>
      ))}
    </div>
  );
}
