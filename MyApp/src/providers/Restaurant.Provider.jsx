import { createContext, useState } from "react";

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children, data, filteredData }) => {
  const [count, setCount] = useState(0);
  return (
    <RestaurantContext.Provider value={{ data, count, setCount, filteredData }}>
      {children}
    </RestaurantContext.Provider>
  );
};
export default RestaurantProvider;
