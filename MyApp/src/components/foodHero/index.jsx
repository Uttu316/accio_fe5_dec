import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
const FoodHero = () => {
  const ref = useRef();

  // useEffect(() => {
  //   ref.current.style.background = "blue";
  // }, []);

  return (
    <section ref={ref} className={styles.heroContainer}>
      <h2 className={styles.heroTitle}>Food HUB</h2>
    </section>
  );
};

export default FoodHero;
