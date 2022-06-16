import { v4 } from "uuid";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
  const DUMMY_LIST = [
    {
      id: "dish__01",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "dish__02",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "dish__03",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "dish__04",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },

    {
      id: "dish__05",
      name: "Hot Pot",
      description: "Beef, lamb, pork and vegetarian",
      price: 12.99,
    },
    {
      id: "dish__06",
      name: "French Pizza",
      description: "Soft and chewy and great",
      price: 15.29,
    },
    {
      id: "dish__07",
      name: "Ice Cream",
      description: "Philly-style water ice, soft-serve, gelato",
      price: 3.79,
    },
    {
      id: "dish__08",
      name: "Steak",
      description: "With olive oil and generously season",
      price: 39.5,
    },
    {
      id: "dish__09",
      name: "Pancakes",
      description: "With sweet or savoury toppings",
      price: 7.77,
    },
  ];

  const menuList = DUMMY_LIST.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MenuItem>
  ));

  return (
    <section>
      <ul className="menu-list__list">{menuList}</ul>
    </section>
  );
};

export default MenuList;
