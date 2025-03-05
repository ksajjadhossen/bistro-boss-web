import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
	return (
		<div>
			<SectionTitle
				subHeading="Should try"
				heading="Chef Recommends"
			></SectionTitle>
			<div className=" flex justify-center pb-7">
				<div className="flex">
					<div className="card bg-base-100 w-96 shadow-lg">
						<figure className="px-10 pt-10">
							<img
								src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"
								alt=""
								className="rounded-xl"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Roast Duck Breast</h2>
							<p>
								Roasted duck breast (served pink) with gratin potato and a
								griottine cherry sauce
							</p>
							<div className="card-actions">
								<button className="btn btn-active text-yellow-600">
									Buy Now
								</button>
							</div>
						</div>
					</div>
					<div className="card bg-base-100 w-96 shadow-lg">
						<figure className="px-10 pt-10">
							<img
								src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
								alt=""
								className="rounded-xl"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Escalope de Veau</h2>
							<p>
								A card component has a figure, a body part, and inside body
								there are title and actions parts
							</p>
							<div className="card-actions">
								<button className="btn btn-neutral text-yellow-600">
									Buy Now
								</button>
							</div>
						</div>
					</div>
					<div className="card bg-base-100 w-96 shadow-lg">
						<figure className="px-10 pt-10">
							<img
								src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg"
								alt=""
								className="rounded-xl"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Breton Fish Stew</h2>
							<p>
								Chargrilled chicken with avocado, baby gem lettuce, baby
								spinach, shallots, French beans, walnuts, croutons and a mustard
								dressing
							</p>
							<div className="card-actions">
								<button className="btn btn-active text-yellow-600">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefRecommends;
