import React from "react";
import "./App.css";
import FirstComponent from "./components/firstComponent";
import NHeader from "./components/netflix_Header";
import NBanner from "./components/netflix_Banner";
import FAQs from "./components/faqs";

const App = () => {
  return (
    <div>
      <NHeader title="APPLE" />
      <NBanner />
      <FAQs />
    </div>
  );
};

export default App;
