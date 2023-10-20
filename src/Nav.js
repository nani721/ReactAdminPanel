import React, { useState } from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./Nav.css";

function Nav() {
  const [drowdownItems] = useState([
    { id: 1, label: "Profile", icon: "bi bi-person-circle fs-5 me-3" },
    { id: 2, label: "Settings", icon: "bi bi-sliders2-vertical fs-5 me-3" },
    { id: 3, label: "LogOut", icon: "bi bi-power fs-5 me-3" },
  ]);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <span className="navbar-brand ">
      </span>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        {/* <div class="input-group Search-field">
          <input
            type="text"
            class="form-control"
            placeholder="Search this blog"
          />
          <div class="input-group-append ">
            <button class="btn btn-secondary" type="button">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div> */}
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown admin-text ">
            <a
              className="nav-link dropdown-toggle  fs-5"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admin
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              {drowdownItems.map((item) => (
                <a className="dropdown-item" href="#" key={item.id}>
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
