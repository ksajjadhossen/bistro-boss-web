import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopularMenu></PopularMenu>
			<CallUs></CallUs>
		</div>
	);
};

export default Home;
