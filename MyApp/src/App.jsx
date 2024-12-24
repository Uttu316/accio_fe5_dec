import React from "react";
import "./App.css";
import FirstComponent from "./components/firstComponent";
import NHeader from "./components/netflix_Header";
import NBanner from "./components/netflix_Banner";
import FAQs from "./components/faqs";
import NForm from "./components/netflix_form";
import ClassCounter from "./components/ClassCounter";

const App = () => {
  return (
    <div>
      <NHeader title="Netflix" />
      <NBanner />
      <ClassCounter start={5} max={10} min={1} />
      <FAQs />
      <NForm />
    </div>
  );
};

export default App;
