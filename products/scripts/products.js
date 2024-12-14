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

let products;

const getProducts = async () => {
  try {
    products = await api({
      path: "/products",
    });

    showProducts(products);
    handleFilter();
  } catch (e) {}
};

const showProducts = (products) => {
  const productContainer = $("#products_container");

  const productsEl = products.map((item) => {
    const cardEl = createProduct(item);
    return cardEl;
  });

  productContainer.append(productsEl);
};

const createProduct = (product) => {
  const { title, id, image, category, price, rating } = product;
  const { rate } = rating;

  let card = $(`<div class="product_card">
          <div class="product_image_box">
            <img
              src=${image}
              alt=${title}
            />
          </div>
          <div class="product_content">
            <p class="product_title">${title}</p>
            <p class="product_brand">${category}</p>
            <p class="product_price">Price: ${Math.ceil(price)}$</p>
            <p class="product_rating">${"⭐".repeat(Math.ceil(rate))}</p>
          </div>
        </div>`);

  card.on("click", function (e) {
    const path = location.href;
    location.href = path.replace("index", "product") + `?id=${id}`;
  });

  return card;
};

const clearProducts = () => {
  $("#products_container").empty();
};

const handleFilter = () => {
  const ratingFilter = $("#products_filter");

  ratingFilter.on("change", function (e) {
    const { value } = e.target;
    let filteredProducts;

    if (value === "all") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(
        (i) => Math.ceil(i.rating.rate) === parseInt(value)
      );
    }
    clearProducts();
    showProducts(filteredProducts);
  });
};
getProducts();
