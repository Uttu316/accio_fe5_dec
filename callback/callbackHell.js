function getCountries(callback) {
  console.log("C");
  const data = [
    {
      name: "India",
    },
    {
      name: "America",
    },
  ];

  callback(data);
}

function getStates(country, callback) {
  console.log("S");
  const data = [
    {
      name: "UP",
      country: "India",
    },
    {
      name: "Texas",
      country: "America",
    },
    {
      name: "JK",
      country: "India",
    },
    {
      name: "Washington",
      country: "America",
    },
  ];

  let states = data.filter((item) => item.country === country.name);

  callback(states);
}

function getCity(state, callback) {
  console.log("Ci");

  const data = [
    {
      name: "Agra",
      state: "UP",
    },
    {
      name: "Srinagar",
      state: "JK",
    },
    {
      name: "Dallas",
      state: "Texas",
    },
    {
      name: "Seatlle",
      state: "Washington",
    },
  ];

  const cities = data.filter((i) => i.state === state.name);

  callback(cities);
}

getCountries((countries) => {
  const country = countries[0];
  getStates(country, (states) => {
    const state = states[0];
    getCity(state, (cities) => {
      const city = cities[0];
      console.log(city);
    });
  });
});

//c
//s
//ci
//{name:"Agra"}
