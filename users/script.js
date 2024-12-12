async function getUsers() {
  showLoader();
  try {
    const url = "https://reqres.in/api/users";

    const res = await fetch(url);
    if (res.status <= 200 && res.status < 400) {
      const resData = await res.json();

      const users = resData.data;

      showUsers(users);
      return;
    }
    throw new Error(res.statusText);
  } catch (e) {
    console.log(e);
  } finally {
    hideLoader();
  }
}

function showUsers(users) {
  const container = document.getElementById("users");

  let liNodes = users.map((item) => {
    const li = createUser(item);
    return li;
  });

  container.append(...liNodes);
}

function createUser(user) {
  const { first_name, last_name } = user;

  const li = document.createElement("li");

  li.innerHTML = `${first_name} ${last_name}`;

  return li;
}

function showLoader() {
  const el = document.getElementById("loader");
  el.style.display = "block";
}

function hideLoader() {
  const el = document.getElementById("loader");
  el.style.display = "none";
}

getUsers();
