import styles from "./styles.module.css";
const FoodItem = () => {
  return (
    <div className={styles.foodItem}>
      <div className={styles.img}>
        <img
          alt={"Title"}
          src={
            "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
          }
        />
      </div>
      <div className={styles.content}>
        <p className={styles.foodTitle}>Title 1</p>
        <p className={styles.foodCategory}>Food Category</p>
        <p className={styles.foodArea}>India</p>
      </div>
    </div>
  );
};
export default FoodItem;
