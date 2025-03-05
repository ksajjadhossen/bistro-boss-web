import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import("./FromOurMenu.css");

const FromOurMenu = () => {
	return (
		<section className="backgroundImage bg-fixed text-white bg-red-300 h-screen flex flex-col justify-center items-center">
			<div className="">
				<SectionTitle
					heading="Check it Out"
					subHeading="From Our Menu"
				></SectionTitle>

				<div className=" w-5/6 mx-auto flex items-center justify-center bg-slate-500/40">
					<img
						className="w-1/4 p-6"
						src="https://i.ibb.co.com/fd2fDWmh/featured.jpg"
						alt=""
					/>
					<div className="w-1/2 p-7 py-5">
						<h3 className="text-xl py-3">March 1 , 2025</h3>
						<h4 className="text-2xl py-3">Where can i get some?</h4>
						<p className="py-3">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sit
							magni, neque ipsam possimus dolore repudiandae repellat assumenda
							nisi beatae!
						</p>
						<button class="btn btn-outline border-0 border-b-4">
							Read More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FromOurMenu;
