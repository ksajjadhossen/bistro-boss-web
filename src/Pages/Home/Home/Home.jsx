import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../CheafRecommands/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopularMenu></PopularMenu>
			<CallUs></CallUs>
			<ChefRecommends></ChefRecommends>
			<FromOurMenu></FromOurMenu>
		</div>
	);
};

export default Home;
