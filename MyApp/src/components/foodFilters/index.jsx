import styles from "./styles.module.css";
const FoodFilters = ({ categories, areas }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        <label>Filter By:</label>
        <select name="area">
          {categories.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <select name="category">
          {areas.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.searchContainer}>
        <input name="search" type="search" placeholder="Search food" />
      </div>
    </div>
  );
};

export default FoodFilters;
