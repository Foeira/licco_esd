import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const menuItems = [
    {
      title: "Inicio",
      path: "/",
      icon: "ri-home-5-line",
      id: "I1",
    },
    {
      title: "Servicios",
      path: "/about",
      icon: "ri-folder-info-line",
      id: "I2",
    },
    {
      title: "Clientes",
      path: "/clients",
      icon: "ri-user-3-line",
      id: "I3",
    },
    {
      title: "Contacto",
      path: "/contact",
      icon: "ri-contacts-line",
      id: "I4",
    },
  ];

  return (
    <div>
      {/* content */}
      <div className="pt-10">{children}</div>

      {/* footer */}
      <div className="fixed top-0 left-0 right-0 sm:top-0">
        <div className="flex w-full justify-center lg:justify-center md:justify-start">
          {menuItems.map((item, index) => (
            <div className="flex flex-col justify-end items-center" id="navbar">
              {location.pathname === item.path && (
                <div>
                  <div className="h-1 bg-secondary"></div>
                </div>
              )}
              <div
                className={`px-40 sm:px-5 bg-primary py-6 ${
                  index === 0 && "rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2 `}
              >
                <i
                  key={"u1"}
                  className={`${item.icon} text-secondary text-xl`}
                ></i>
                <Link
                  to={`${item.path}`}
                  className="text-secondary text-xl sm:hidden "
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
