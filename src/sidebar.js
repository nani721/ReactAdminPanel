import React, { useState } from "react";
import "./style.css";
import Logo from './logo.svg';
import {NavLink} from 'react-router-dom'

function Sidebar() {
  const [sidebarItems] = useState([
    { id: 2, label: "Home", link: "/", icon: " me-3 bi bi-palette-fill" },
    { id: 3, label: "Services", link: "/service", icon: "me-3 bi bi-hammer" },
    { id: 4, label: "Report", link: "/report", icon: "me-3 bi bi bi-pie-chart-fill" },
    { id: 5, label: "Customers", link: "/customer", icon: "me-3 bi bi-people-fill" },
  ]);
  const [subItems] = useState([
     {id: 6, label: "Form-1", link: "/form1"},
     {id: 7, label: "Form-2", link: "/form2"},
     {id: 8, label: "Form-3", link: "/form3"},
  ])
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={open ? "bg-white sidebar vh-100 p-0 side-menu open" : "bg-white sidebar vh-100 p-0 side-menu"}>
      <div className="side-menu-bar text-end">
       <div className="brand-logo">
       <img src={Logo} alt="log" />
        </div> 
        <span className="brand-name"> <i className={open ? "bi bi-justify" : "bi bi-x-lg"} onClick={() => setOpen(!open)}></i></span>
      </div>
      <ul className="list-group list-group-flush">
        {sidebarItems.map((item) => (
          <li className="list-group-item" key={item.id}>
             <NavLink  className="nav-link" activeClassName="active" aria-current="page" to={item.link} > 
                 <i className={item.icon}></i>
                 <span className=" side-nav-item">{item.label}</span>
            </NavLink >
          </li>
        ))}
        <li className="list-group-item">
         <a className={menuOpen ? "nav-link menuOpen" : "nav-link"} aria-current="page" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="me-3 bi bi-file-text-fill"></i>
            <span className=" side-nav-item">Forms</span>
            <i className="bi-chevron-down toggle-btn float-end"></i>
          </a> 
            <ul className="list-group list-group-flush sub-menu">
              {subItems.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <NavLink className="nav-link" activeClassName="active" aria-current="page" to={item.link}>
                    <i className="me-3 bi bi-file-earmark-text"></i>
                    <span className="side-nav-item">{item.label}</span>
                  </NavLink> 
                 </li>
               ))}
            </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
