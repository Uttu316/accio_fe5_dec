let values = {};

function handleForm() {
  const form = document.getElementById("form");

  form.addEventListener("change", function (e) {
    const { name, value } = e.target;
    values = { ...values, [name]: value };
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    sendData(values);
  });
}

handleForm();

async function sendData(userData) {
  const url = "https://reqres.in/api/users";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
