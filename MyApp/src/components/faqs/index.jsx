import styles from "./faq.module.css";
import FAQTab from "./faqTab";
import { faqData } from "../../utils/faqData";

const FAQs = () => {
  return (
    <section className={styles.faqs_wrapper}>
      <h2 className={styles.faqs_title}>Frequently Asked Questions</h2>

      <div className={styles.faqs_container}>
        {faqData.map((item) => (
          <FAQTab key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
