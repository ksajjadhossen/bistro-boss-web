import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../CheafRecommands/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopularMenu></PopularMenu>
			<CallUs></CallUs>
			<ChefRecommends></ChefRecommends>
			<FromOurMenu></FromOurMenu>
			<Testimonials></Testimonials>
		</div>
	);
};

export default Home;
