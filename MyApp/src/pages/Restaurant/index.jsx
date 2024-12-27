import styles from "./styles.module.css";
import FoodHeader from "../../components/foodHeader";
import FoodHero from "../../components/foodHero";
import FoodFilters from "../../components/foodFilters";
import FoodItem from "../../components/FoodItem";

const Restaurant = () => {
  return (
    <div className={styles.restaurantPage}>
      <FoodHeader />

      <main className={styles.mainContainer}>
        <FoodHero />

        <div className={styles.foodContainer}>
          <h3 className={styles.foodContainerHeading}>Menu Items</h3>

          <FoodFilters />

          <div className={styles.foodItems}>
            <FoodItem />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
