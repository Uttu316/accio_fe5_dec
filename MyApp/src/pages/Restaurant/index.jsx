import styles from "./styles.module.css";
import FoodHeader from "../../components/foodHeader";
import FoodHero from "../../components/foodHero";
import FoodFilters from "../../components/foodFilters";
import FoodItem from "../../components/FoodItem";
import { useEffect, useMemo, useState } from "react";
import { api } from "../../services";
import useAPIStatus from "../../hooks/useAPIStatus";

const Restaurant = () => {
  const [data, setData] = useState([]);

  const [filteredData, setFilterData] = useState([]);
  const { isDone, isError, isLoading, setStatus } = useAPIStatus();
  const isEmpty = isDone && filteredData.length === 0;

  const getData = async () => {
    setStatus("loading");
    try {
      const res = await api({
        path: "/public/meals",
      });

      if (res && res.data) {
        const meals = res.data.data;
        setStatus("done");
        setData(meals);
        setFilterData(meals);
        return;
      }
      throw new Error("Data not recieved");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.restaurantPage}>
      <FoodHeader />

      <main className={styles.mainContainer}>
        <FoodHero />

        <div className={styles.foodContainer}>
          <h3 className={styles.foodContainerHeading}>Menu Items</h3>

          <FoodFilters data={data} setFilterData={setFilterData} />

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
            {isLoading && <h2>Loading...</h2>}
            {isEmpty && <h2>No Meal Available</h2>}
            {isError && <h2>Something Went Wrong</h2>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
