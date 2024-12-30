import { useEffect } from "react";
import { redirect, useNavigate } from "react-router";

const PrivatePage = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", {
        replace: true,
      });
    }
  }, []);

  if (isLoggedIn) {
    return children;
  }

  return null;
};

export default PrivatePage;
