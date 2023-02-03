import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { Icon } from "./Icon";

export const RedesSociales = () => {
    const { header } = useContext(GlobalContext);
    const { redesSociales } = header;
    return (
      <ul className="Header-redes">
        {redesSociales.map(({ id, title, href, icon }) => (
          <li key={id} className="Header-li">
            <a href={href} title={title} className="Header-red">
              <Icon clase="Header-social" nombre={icon} />
            </a>
          </li>
        ))}
      </ul>
    );
  };
