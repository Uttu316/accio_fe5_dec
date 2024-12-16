import { useState } from "react";

const FAQs = () => {
  const [isVisible, setIsVisble] = useState(false);

  const onQuestionClick = () => {
    setIsVisble(!isVisible);
  };
  return (
    <section className="faqs_wrapper">
      <h2 className="faqs_title">Frequently Asked Questions</h2>

      <div className="faqs_container">
        <div className="faq_container">
          <button onClick={onQuestionClick} className="faq_question">
            What is Netflix
          </button>
          {isVisible && (
            <div className="faq_answer">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
