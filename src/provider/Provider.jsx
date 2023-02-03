import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const bbdd = {
  header: {
    menu: [
      { id: uuidv4(), title: "Home", to: '/' },
      { id: uuidv4(), title: "General", to: '/general' },
      { id: uuidv4(), title: "Business", to: '/business' },
      { id: uuidv4(), title: "Entertainmet", to: '/entertainmet' },
      { id: uuidv4(), title: "Health", to: '/health' },
      { id: uuidv4(), title: "Science", to: '/science' },
      { id: uuidv4(), title: "Sports", to: '/sports' },
      { id: uuidv4(), title: "Technology", to: '/technology' },
      { id: uuidv4(), title: "Our Team", to: '/ourteam' },
    ],
    redesSociales: [
      { id: uuidv4(), title: "Facebook", href: "#", icon: "facebook" },
      { id: uuidv4(), title: "Twitter", href: "#", icon: "twitter" },
      { id: uuidv4(), title: "Instagram", href: "#", icon: "instagram" },
      { id: uuidv4(), title: "Youtube", href: "#", icon: "youtube" },
    ],
  },
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
  );
};
