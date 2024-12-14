const api = async ({ path, method = "GET" }) => {
  const baseURL = "https://fakestoreapi.com";

  const url = baseURL + path;
  try {
    const res = await fetch(url, {
      method,
    });
    if (res.status >= 200 && res.status < 400) {
      const data = await res.json();

      return data;
    }
    throw new Error(res.statusText);
  } catch (e) {
    console.log("ERROR in ", url, e);
    throw e;
  }
};

const getProuct = async () => {
  try {
    //get id from URl
    const search = new URLSearchParams(location.search);
    const id = search.get("id");

    if (id) {
      const data = await api({
        path: `/products/${id}`,
      });

      showProdcut(data);
    } else {
      throw new Error("Product not Valid");
    }
  } catch (e) {
    console.log(e.message);
    //show error to user
  }
};

const showProdcut = (product) => {
  const imageEl = $("#product_img");

  const titleEl = $("#product_title");

  const categoryEl = $("#product_category");

  const descriptionEl = $("#product_description");

  const priceEl = $("#product_price");

  const ratingEl = $("#product_rate");

  const reviewsEl = $("#product_reviews");

  const { title, price, description, rating, category, image } = product;
  let { rate, count } = rating;
  rate = Math.ceil(rate);

  imageEl.attr("src", image);
  imageEl.attr("alt", title);

  titleEl.html(title);

  categoryEl.html(category);

  descriptionEl.html(description);
  priceEl.html(`Price: ${Math.ceil(price)}$`);
  ratingEl.html(`${rate} star: ${"⭐".repeat(rate)}`);
  reviewsEl.html(`${count} reviews`);
};

getProuct();
