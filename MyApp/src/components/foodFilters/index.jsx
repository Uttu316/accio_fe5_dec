import styles from "./styles.module.css";
const FoodFilters = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        <label>Filter By:</label>
        <select name="area">
          <option value={"India"}>India</option>
          <option value={"British"}>British</option>
        </select>
        <select name="category">
          <option value={"Dessert"}>Dessert</option>
          <option value={"Vegeterian"}>Vegeterian</option>
        </select>
      </div>
      <div className={styles.searchContainer}>
        <input name="search" type="search" placeholder="Search food" />
      </div>
    </div>
  );
};

export default FoodFilters;
