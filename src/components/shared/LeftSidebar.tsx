import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`leftsidebar overflow-auto`}
      style={{ width: isCollapsed ? "100px" : "270px" }}
    >
      <div className="flex flex-col gap-1">
        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${isActive && "font-bold"}`}
                style={{
                  fontSize: "12px",
                }}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-2"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {!isCollapsed && link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="flex p-2 text-blue-500 collapse-button"
        onClick={toggleCollapse}
      >
        {isCollapsed ? <span>&#x2192;</span> : <span> &#x2190;</span>}
      </button>
    </nav>
  );
};

export default LeftSidebar;
