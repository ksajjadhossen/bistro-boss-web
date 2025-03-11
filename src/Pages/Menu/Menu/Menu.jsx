import { Helmet } from "react-helmet-async";
import ItemBanner from "../../../Shared/ItemBanner/ItemBanner";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
const Menu = () => {
  const [menu] = useMenu();

  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <MenuCategory
        category={offered}
        img={"https://i.ibb.co.com/fGYN3gdF/banner3.jpg"}
        title="Our Menu"
        description="Would you like to try"
        heading="Don't miss"
        subheading="Today's Offer"
      ></MenuCategory>

      <MenuCategory
        category={dessert}
        img={"https://i.ibb.co.com/fGM9C3sx/chef-service.jpg"}
        title="Desserts"
        description="lorem"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        subheading="Today's Offer"
      ></MenuCategory>
      <MenuCategory
        category={pizza}
        img={"https://i.ibb.co.com/fGM9C3sx/chef-service.jpg"}
        title="pizzas"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        heading="Don't miss"
        subheading="Today's Offer"
      ></MenuCategory>
      <MenuCategory
        category={salad}
        img={"https://i.ibb.co.com/fGM9C3sx/chef-service.jpg"}
        title="Salads"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        heading="Don't miss"
        subheading="Today's Offer"
      ></MenuCategory>
      <MenuCategory
        category={soup}
        img={"https://i.ibb.co.com/fGM9C3sx/chef-service.jpg"}
        title="Soups"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        heading="Don't miss"
        subheading="Today's Offer"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
