let values = {};

function handleForm() {
  const form = document.getElementById("form");

  form.addEventListener("change", function (e) {
    const { name, value } = e.target;
    values = { ...values, [name]: value };
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(values);
  });
}

handleForm();
