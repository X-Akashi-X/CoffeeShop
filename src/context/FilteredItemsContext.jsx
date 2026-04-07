import { createContext, useState } from "react";
import products from "../assets/data.json";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState(products);
  const [active, setActive] = useState(false)

  return (
    <Context.Provider value={{ filteredItems, setFilteredItems }}>
      {children}
    </Context.Provider>
  );
};
