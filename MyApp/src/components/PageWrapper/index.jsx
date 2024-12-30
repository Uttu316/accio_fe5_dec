import FoodHeader from "../foodHeader";

const PageWrapper = ({ className, children }) => {
  return (
    <div className={className}>
      <FoodHeader />

      {children}
    </div>
  );
};

export default PageWrapper;
