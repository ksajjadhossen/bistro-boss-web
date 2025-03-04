import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Category = () => {
	return (
		<Swiper
			slidesPerView={4}
			spaceBetween={1}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className=" max-w-screen-xl my-16"
		>
			<SwiperSlide className="">
				<img
					className="mx-auto"
					src="https://i.ibb.co.com/ksmYpR7q/slide1.jpg"
					alt=""
				/>
				<h3 className=" text-3xl font-bold text-white shadow-sm text-center items-center -mt-20">
					Salad
				</h3>
			</SwiperSlide>
			<SwiperSlide className="">
				<img
					className="mx-auto"
					src="https://i.ibb.co.com/jvPXBhkV/slide2.jpg"
					alt=""
				/>
				<h3 className=" text-3xl font-bold text-white text-center items-center -mt-20">
					Pizza
				</h3>
			</SwiperSlide>
			<SwiperSlide className="">
				<img
					className="mx-auto"
					src="https://i.ibb.co.com/yF7SSbK4/slide3.jpg"
					alt=""
				/>
				<h3 className=" text-3xl font-bold text-white text-center items-center -mt-20">
					Soups
				</h3>
			</SwiperSlide>
			<SwiperSlide className="">
				<img
					className="mx-auto"
					src="https://i.ibb.co.com/Y4yNtKD9/slide4.jpg"
					alt=""
				/>
				<h3 className=" text-3xl font-bold text-white text-center items-center -mt-20">
					Desserts
				</h3>
			</SwiperSlide>
		</Swiper>
	);
};

export default Category;
