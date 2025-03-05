import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
	const [menu, setMenu] = useState([]);
	useState(() => {
		fetch("menu.json").then((Response) =>
			Response.json().then((data) => {
				const popularMenu = data.filter((item) => item.category === "popular");
				setMenu(popularMenu);
			})
		);
	});

	return (
		<section>
			<SectionTitle
				subHeading="Check it out"
				heading="From Our Menu"
			></SectionTitle>
			<div className="grid md:grid-cols-2 py-7">
				{menu.map((item) => (
					<MenuItem key={item.id} data={item}></MenuItem>
				))}
			</div>
		</section>
	);
};

export default PopularMenu;
