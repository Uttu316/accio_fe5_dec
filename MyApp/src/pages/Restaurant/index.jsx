import styles from "./styles.module.css";
import FoodHeader from "../../components/foodHeader";
import FoodHero from "../../components/foodHero";
import FoodFilters from "../../components/foodFilters";
import FoodItem from "../../components/FoodItem";
import { useEffect, useMemo, useState } from "react";
import { api } from "../../services";

const Restaurant = () => {
  const [data, setData] = useState([]);

  const [filteredData, setFilterData] = useState([]);

  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const [categories, areas] = useMemo(() => {
    let c = [];
    let a = [];

    data.forEach((i) => {
      c.push(i.strCategory);
      a.push(i.strArea);
    });
    c = Array.from(new Set(c));
    a = Array.from(new Set(a));
    return [c, a];
  }, [data]);

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

          <FoodFilters categories={categories} areas={areas} />

          <div className={styles.foodItems}>
            {filteredData.map((item) => (
              <FoodItem
                key={item.id}
                id={item.idMeal}
                title={item.strMeal}
                img={item.strMealThumb}
                category={item.strCategory}
                area={item.strArea}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
