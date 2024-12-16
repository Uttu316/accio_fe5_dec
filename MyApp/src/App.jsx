import React from "react";
import "./App.css";
import FirstComponent from "./components/firstComponent";
import NHeader from "./components/netflix_Header";
import NBanner from "./components/netflix_Banner";

const App = () => {
  return (
    <div>
      <NHeader />
      <NBanner />
    </div>
  );
};

export default App;
