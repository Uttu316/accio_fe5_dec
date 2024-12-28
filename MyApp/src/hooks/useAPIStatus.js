import { useState } from "react";

const useAPIStatus = () => {
  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  return {
    isLoading,
    isError,
    isDone,
    setStatus,
  };
};

export default useAPIStatus;
