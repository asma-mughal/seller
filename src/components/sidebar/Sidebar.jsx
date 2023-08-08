import React, { useContext } from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DuoIcon from '@mui/icons-material/Duo';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './sidebar.scss';
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div>
        <div className="sidebar font-poppins">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">IAMSELLER</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>RFPs</span>
            </li>
          </Link>
          <Link to="/users/kanban" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Kanban</span>
          </li>
          </Link>
          <li>
            <Link to="/users/calendar">            
            <CalendarMonthIcon className="icon" />
            <span>Calendar</span>
            </Link>

          </li> 
          <li>
            <Link to="/users/zoom">            
            <DuoIcon className="icon" />
            <span>Zoom </span>
            </Link>

          </li>   
             
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
