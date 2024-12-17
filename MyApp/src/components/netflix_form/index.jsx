import { useState } from "react";
import styles from "./styles.module.css";

const NForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const onInput = (e) => {
    let { name, value } = e.target;

    if (name === "remember") {
      value = !state.remember;
    }

    setState({ ...state, [name]: value });
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formtitle}>Sign in</div>
      <form className={styles.formContainer}>
        <div className={styles.inputItem}>
          <input
            value={state.email}
            onChange={onInput}
            name="email"
            className={styles.input}
          />
          <label htmlFor="email" className={styles.inputItemLabel}>
            Email
          </label>
        </div>
        <div className={styles.inputItem}>
          <input
            onChange={onInput}
            name="password"
            type="password"
            className={styles.input}
            value={state.password}
          />
          <label htmlFor="password" className={styles.inputItemLabel}>
            Password
          </label>
        </div>
        <div className={styles.checkboxInput}>
          <input
            onChange={onInput}
            value={state.remember}
            type="checkbox"
            name="remember"
          />
          <label htmlFor="remember"> Remember this</label>
        </div>
        <button className={styles.btn}>Signin</button>
      </form>
    </div>
  );
};
export default NForm;
