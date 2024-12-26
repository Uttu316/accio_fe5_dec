import React from "react";
import { useState } from "react";
import { MENU_DATA } from "../../utils/menuData";

const Menu = () => {
  const [list, setlist] = useState(MENU_DATA);

  const onFilter = (category) => {
    if (category === "all") {
      setlist(MENU_DATA);
    } else {
      const matches = MENU_DATA.filter((i) => i.category === category);

      setlist(matches);
    }
  };
  return (
    <div id="menu">
      <h1>Our Menu</h1>

      <div>
        <button onClick={() => onFilter("all")}>All</button>
        <button onClick={() => onFilter("breakfast")}>Breakfast</button>
        <button onClick={() => onFilter("lunch")}>Lunch</button>
        <button onClick={() => onFilter("shakes")}>Shakes</button>
      </div>

      <div>
        {list.map((i) => (
          <div key={i.id}>
            <div>
              <img src={i.img} alt={i.title} />
            </div>
            <div>
              <div>
                <span>{i.title}</span>
                <span>{i.price}</span>
              </div>
              <div>{i.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
