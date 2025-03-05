import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { SiComma } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("reviews.json").then((data) =>
			data.json().then((data) => setReviews(data))
		);
	}, []);

	return (
		<section className="my-10 w-2/3 mx-auto">
			<SectionTitle
				subHeading="What out clients says"
				heading="Testimonials"
			></SectionTitle>
			{}
			<div className=" h-3/4 ">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
					{reviews.map((data) => (
						<SwiperSlide key={data._id} data={data}>
							<div className="p-5 flex flex-col items-center">
								<Rating
									style={{ maxWidth: 180 }}
									value={data.rating}
									readOnly
								/>
								<div className="text-7xl rotate-180 my-6 ">
									<SiComma />
								</div>

								<p className="py-8 w-2/3">{data.details}</p>
								<h3 className="text-yellow-500 text-3xl font-bold">
									{data.name}
								</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
