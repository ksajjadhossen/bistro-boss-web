import { Helmet } from "react-helmet-async";
import ItemBanner from "../../../Shared/ItemBanner/ItemBanner";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
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
      ></MenuCategory>

      <MenuCategory
        category={offered}
        img={"https://i.ibb.co.com/fGYN3gdF/banner3.jpg"}
        title="Our Menu"
        description="Would you like to try"
      ></MenuCategory>

      <MenuCategory
        category={offered}
        img={"https://i.ibb.co.com/fGYN3gdF/banner3.jpg"}
        title="Our Menu"
        description="Would you like to try"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
