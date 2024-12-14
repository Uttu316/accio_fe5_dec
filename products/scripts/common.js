export const api = async ({ path, method = "GET" }) => {
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
