import { Parallax } from "react-parallax";
const ItemBanner = ({ img, title, description }) => {
	return (
		<Parallax
			blur={{ min: -70, max: 70 }}
			bgImage={img}
			bgImageAlt="the dog"
			strength={-200}
		>
			<div
				className="hero h-[700px] uppercase "
				style={{
					backgroundImage: `url(${img}`,
				}}
			>
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content text-center px-60 py-28 bg-black/30">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{title}</h1>
						<p className="mb-5">{description}</p>
					</div>
				</div>
			</div>
		</Parallax>
	);
};

export default ItemBanner;
