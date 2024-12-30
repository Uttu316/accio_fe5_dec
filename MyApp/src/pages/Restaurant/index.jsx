import styles from "./styles.module.css";
import FoodHeader from "../../components/foodHeader";
import FoodHero from "../../components/foodHero";
import FoodFilters from "../../components/foodFilters";
import FoodItem from "../../components/FoodItem";
import { useEffect, useMemo, useState } from "react";
import { api } from "../../services";
import useAPIStatus from "../../hooks/useAPIStatus";
import PageWrapper from "../../components/PageWrapper";
import FoodList from "../../components/foodList";
import RestaurantProvider from "../../providers/Restaurant.Provider";

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
    <PageWrapper className={styles.restaurantPage}>
      <main className={styles.mainContainer}>
        <FoodHero />

        <div className={styles.foodContainer}>
          <h3 className={styles.foodContainerHeading}>Menu Items</h3>
          <RestaurantProvider data={data} filteredData={filteredData}>
            <FoodFilters setFilterData={setFilterData} />

            <FoodList>
              {isLoading && <h2>Loading...</h2>}
              {isEmpty && <h2>No Meal Available</h2>}
              {isError && <h2>Something Went Wrong</h2>}
            </FoodList>
          </RestaurantProvider>
        </div>
      </main>
    </PageWrapper>
  );
};

export default Restaurant;
