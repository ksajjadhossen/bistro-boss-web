import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../CheafRecommands/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopularMenu></PopularMenu>
			<CallUs></CallUs>
			<ChefRecommends></ChefRecommends>
		</div>
	);
};

export default Home;
