import { Link, useParams } from "react-router";
import useAPIStatus from "../../hooks/useAPIStatus";
import { api } from "../../services";
import { useEffect, useState } from "react";
import FoodHeader from "../../components/foodHeader";
import "./style.css";
import PageWrapper from "../../components/PageWrapper";
const FoodDetail = () => {
  const { mealId } = useParams();
  const { isDone, isError, isLoading, setStatus } = useAPIStatus();
  const [data, setData] = useState(null);

  const getData = async () => {
    setStatus("loading");
    try {
      const res = await api({
        path: `/public/meals/${mealId}`,
      });
      if (res && res.data) {
        setData(res.data);
        setStatus("done");
        return;
      }
      throw new Error("Data not Found");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onWatch = () => {
    window.open(data.strYoutube || data.strSource);
  };

  return (
    <PageWrapper>
      {isDone && (
        <section className="product_section">
          <div className="product_image">
            <img id="product_img" src={data.strMealThumb} alt="title" />
          </div>

          <div className="product_content">
            <p id="product_title">{data.strMeal}</p>
            <p id="product_category">{data.strCategory}</p>
            <p id="product_description">{data.strInstructions}</p>
            <p id="product_price">{data.strArea}</p>
            <p id="product_rating">
              <span id="product_rate">{data.strTags}</span>
            </p>

            <div className="product_actions">
              <button onClick={onWatch} id="add_to_cart">
                Know More
              </button>
            </div>
          </div>
        </section>
      )}

      {isLoading && <h2>Loading...</h2>}
      {isError && (
        <div>
          <h2>Data not Found</h2>
          <Link to="/restaurant" replace>
            Go to Restaurant
          </Link>
        </div>
      )}
    </PageWrapper>
  );
};

export default FoodDetail;
