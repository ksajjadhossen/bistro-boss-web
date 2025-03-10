import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
	return (
		<div>
			<Carousel>
				<div>
					<img src="https://i.ibb.co.com/vvmYvzSL/01.jpg" />
				</div> 
				<div>
					<img src="https://i.ibb.co.com/W4cfZBtF/02.jpg" />
				</div>
				<div>
					<img src="https://i.ibb.co.com/wN1XTL6b/03.png" />
				</div>
				<div>
					<img src="https://i.ibb.co.com/N6tFFVd4/04.jpg" />
				</div>
				<div>
					<img src="https://i.ibb.co.com/mVWVTgKC/05.png" />
				</div>
				<div>
					<img src="https://i.ibb.co.com/zWvMvfWj/06.png" />
				</div>
			</Carousel> 
		</div>
	);
};

export default Banner;
