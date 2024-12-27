import { Link } from "react-router";
import styles from "./styles.module.css";

const FoodHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Food Hub</h1>
      <nav className={styles.navbar}>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};
export default FoodHeader;
