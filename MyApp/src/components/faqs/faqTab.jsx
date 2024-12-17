import { useState } from "react";
import styles from "./faq.module.css";

const FAQTab = (props) => {
  const { question, answer } = props;
  const [isVisible, setIsVisble] = useState(false);

  const onQuestionClick = () => {
    setIsVisble(!isVisible);
  };
  return (
    <div className={styles.faq_container}>
      <button onClick={onQuestionClick} className={styles.faq_question}>
        <span>{question}</span> <span>{isVisible ? "*" : "+"}</span>
      </button>
      {isVisible && <div className={styles.faq_answer}>{answer}</div>}
    </div>
  );
};

export default FAQTab;
