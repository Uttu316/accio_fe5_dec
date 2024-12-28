import { useMemo, useState } from "react";
import FoodSelect from "./foodSelectFilter";
import styles from "./styles.module.css";
const FoodFilters = ({ data, setFilterData }) => {
  const [filters, setFilter] = useState({
    area: "All",
    category: "All",
    search: "",
  });

  const [categories, areas] = useMemo(() => {
    let c = ["All"];
    let a = ["All"];

    data.forEach((i) => {
      c.push(i.strCategory);
      a.push(i.strArea);
    });
    c = Array.from(new Set(c));
    a = Array.from(new Set(a));
    return [c, a];
  }, [data]);

  const onChangeArea = (e) => {
    const { value } = e.target;

    let newData = [];

    if (value === "All" && filters.category === "All") {
      newData = [...data];
    } else if (value !== "All") {
      newData = data.filter((i) => i.strArea === value);

      if (filters.category !== "All") {
        newData = newData.filter((i) => i.strCategory === filters.category);
      }
    } else if (value === "All" && filters.category !== "All") {
      newData = data.filter((i) => i.strCategory === filters.category);
    }
    setFilterData(newData);
    setFilter((prev) => ({ ...prev, area: value, search: "" }));
  };
  const onChangeCategory = (e) => {
    const { value } = e.target;

    let newData = [];

    if (value === "All" && filters.area === "All") {
      newData = [...data];
    } else if (value !== "All") {
      newData = data.filter((i) => i.strCategory === value);

      if (filters.area !== "All") {
        newData = newData.filter((i) => i.strArea === filters.area);
      }
    } else if (value === "All" && filters.area !== "All") {
      newData = data.filter((i) => i.strArea === filters.area);
    }
    setFilterData(newData);
    setFilter((prev) => ({ ...prev, category: value, search: "" }));
  };

  const onSearch = (e) => {
    const { value } = e.target;

    setFilter({ area: "All", category: "All", search: value });

    const newData = data.filter((i) =>
      i.strMeal.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(newData);
  };
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        <label>Filter By:</label>
        <FoodSelect
          options={categories}
          name="category"
          onChange={onChangeCategory}
          placeholder="Select Category"
          value={filters.category}
        />
        <FoodSelect
          placeholder="Select Area"
          options={areas}
          name="area"
          onChange={onChangeArea}
          value={filters.area}
        />
      </div>
      <div className={styles.searchContainer}>
        <input
          onChange={onSearch}
          value={filters.search}
          name="search"
          type="search"
          placeholder="Search food"
        />
      </div>
    </div>
  );
};

export default FoodFilters;
