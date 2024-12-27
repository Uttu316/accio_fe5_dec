import styles from "./styles.module.css";
const FoodItem = ({ id, title, category, area, img }) => {
  return (
    <div className={styles.foodItem}>
      <div className={styles.img}>
        <img alt={title} src={img} />
      </div>
      <div className={styles.content}>
        <p className={styles.foodTitle}>{title}</p>
        <p className={styles.foodCategory}>{category}</p>
        <p className={styles.foodArea}>{area}</p>
      </div>
    </div>
  );
};
export default FoodItem;
