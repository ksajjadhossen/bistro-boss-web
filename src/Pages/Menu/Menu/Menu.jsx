import { Helmet } from "react-helmet-async";
import ItemBanner from "../../../Shared/ItemBanner/ItemBanner";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
const Menu = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro | Menu</title>
			</Helmet>

			<ItemBanner
				img="https://i.ibb.co.com/fGYN3gdF/banner3.jpg"
				title="Our Menu"
				description="Would you like to try"
			></ItemBanner>
			<PopularMenu></PopularMenu>
			<ItemBanner
				img="https://i.ibb.co.com/fGYN3gdF/banner3.jpg"
				title="Our Menu"
				description="Would you like to try"
			></ItemBanner>
			<PopularMenu></PopularMenu>
			<ItemBanner
				img="https://i.ibb.co.com/fGYN3gdF/banner3.jpg"
				title="Our Menu"
				description="Would you like to try"
			></ItemBanner>
			<PopularMenu></PopularMenu>
			<ItemBanner
				img="https://i.ibb.co.com/fGYN3gdF/banner3.jpg"
				title="Our Menu"
				description="Would you like to try"
			></ItemBanner>
			<PopularMenu></PopularMenu>
		</div>
	);
};

export default Menu;
