import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
	const [menu] = useMenu()
	const popular = menu.filter(item => item.category ==="popular");
	// const [menu, setMenu] = useState([]);
	// useEffect(() => {
	// 	fetch("menu.json").then((Response) =>
	// 		Response.json().then((data) => {
	// 			const popularMenu = data.filter((item) => item.category === "popular");
	// 			setMenu(popularMenu);
	// 		})
	// 	);
	// });

	return (
		<section className=" py-10">
			<SectionTitle
				subHeading="Check it out"
				heading="From Our Menu"
			></SectionTitle>
			<div className="grid md:grid-cols-2 py-7">
				{popular.map((item) => (
					<MenuItem key={item.id} data={item}></MenuItem>
				))}
			</div>
			<div class="flex justify-center items-center ">
				<button class="btn btn-soft">View Full Menu</button>
			</div>
		</section>
	);
};

export default PopularMenu;
