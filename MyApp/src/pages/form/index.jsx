import { useState } from "react";
import styles from "./styles.module.css";
import * as FV from "../../utils/formValidation";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
    age: 0,
  });

  const [error, setError] = useState("");

  const onChange = (e) => {
    let { value, id, name } = e.target;

    if (name === "age") {
      value = id;
    } else if (name === "isAccepted") {
      value = !state.isAccepted;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const isValidForm = () => {
    const { name, age, email, password, confirmPassword, isAccepted } = state;

    if (!FV.isValidName(name)) {
      setError("Enter valid name");
      return;
    }
    if (!FV.isValidEmail(email)) {
      setError("Enter valid email");
      return;
    }
    if (!FV.isValidPassword(password)) {
      setError("Enter valid password");
      return;
    }
    if (password !== confirmPassword) {
      setError("Re enter your password");
      return;
    }
    if (!age) {
      setError("Select age");
      return;
    }
    if (!isAccepted) {
      setError("Please accept policy");
      return;
    }
    return true;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (isValidForm()) {
      console.log(state);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.formHeading}>Register User</h1>

      <form onSubmit={onSubmit} className={styles.formWrapper}>
        <div className={styles.formItem}>
          <label htmlFor="name">Name</label>
          <input onChange={onChange} id="name" name="name" value={state.name} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input
            onChange={onChange}
            id="email"
            name="email"
            type="email"
            value={state.email}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password">Password</label>
          <input
            onChange={onChange}
            id="password"
            name="password"
            type="password"
            value={state.password}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={onChange}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={state.confirmPassword}
          />
        </div>
        <div className={styles.formItem}>
          <p>Age Group</p>
          <label htmlFor="under18">Under 18 </label>
          <input
            type="radio"
            id="under18"
            name="age"
            value={state.age}
            onChange={onChange}
          />
          <label htmlFor="18+">18+ </label>
          <input
            type="radio"
            id="18+"
            name="age"
            value={state.age}
            onChange={onChange}
          />
        </div>
        <div className={styles.checkBoxItem}>
          <input
            type="checkbox"
            name="isAccepted"
            value={state.isAccepted}
            onChange={onChange}
            id="isAccepted"
          />
          <label htmlFor="isAccepted"> I agree with Terms and conditions</label>
        </div>

        {!!error && <p className={styles.error}>{error}</p>}
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
