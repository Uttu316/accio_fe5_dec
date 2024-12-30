import { useContext } from "react";
import FoodItem from "../FoodItem";
import styles from "./styles.module.css";
import { RestaurantContext } from "../../providers/Restaurant.Provider";

const FoodList = ({ children }) => {
  const { filteredData } = useContext(RestaurantContext);

  return (
    <div className={styles.foodItems}>
      {filteredData.map((item) => (
        <FoodItem
          key={item.id}
          id={item.id}
          title={item.strMeal}
          img={item.strMealThumb}
          category={item.strCategory}
          area={item.strArea}
        />
      ))}
      {children}
    </div>
  );
};

export default FoodList;
