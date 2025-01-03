import React from "react";
import "./App.css";
import NHeader from "../../components/netflix_Header";
import NBanner from "../../components/netflix_Banner";
import Hooks from "../../components/hooks";
import FAQs from "../../components/faqs";
import NForm from "../../components/netflix_form";

const NetflixHome = () => {
  return (
    <div>
      <NHeader title="Netflix" />
      <NBanner />
      {/* <ClassCounter start={5} max={10} min={1} /> */}
      <Hooks />
      <FAQs />
      <NForm />
    </div>
  );
};

export default NetflixHome;
