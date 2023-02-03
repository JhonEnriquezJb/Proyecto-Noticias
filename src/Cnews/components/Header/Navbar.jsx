import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../../../provider/Provider";

export const Navbar = () => {
  const { header } = useContext(GlobalContext);
  const { menu } = header;

  return (
    <nav className="Header-nav">
      <ul className="Header-ul">
        {menu.map(({ id, title, to  }) => (
          <div key={id}>
            <li className="Header-li">
              <NavLink
                to={to}
                title={title}
                className={({isActive}) => `Header-a ${isActive ? "isActive" : ""}`}
              >
                {title}
              </NavLink>
             
            </li>
            
          </div>
        ))}
      </ul>
    </nav>
  );
};
