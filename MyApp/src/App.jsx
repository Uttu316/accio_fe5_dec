import React from "react";
import Menu from "./pages/Menu";
import MemoPage from "./pages/Memo";
import Form from "./pages/form";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Profile from "./pages/ProfilePage";
import NotFound from "./pages/NotFoundPage";
import Restaurant from "./pages/Restaurant";
import FoodDetail from "./pages/FoodDetail";
import PrivatePage from "./Auth";
import ErrorBoundary from "./ErroBoundary";
// const FoodDetail = React.lazy(() => import("./pages/FoodDetail"));

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/meal/:mealId"
            element={
              <PrivatePage>
                <FoodDetail />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
