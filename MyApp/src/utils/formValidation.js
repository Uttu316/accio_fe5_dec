export const isValidName = (name) => {
  if (typeof name === "string" && name.length > 4) {
    return true;
  }
  return false;
};

export const isValidEmail = (email) => {
  const regex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

  const isMatch = regex.test(email);

  if (typeof email === "string" && isMatch) {
    return true;
  }
  return false;
};

export const isValidPassword = (password) => {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const isMatch = regex.test(password);

  if (typeof password === "string" && isMatch) {
    return true;
  }
  return false;
};
