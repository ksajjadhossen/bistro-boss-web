const MenuItem = ({ data }) => {
	return (
		<div className="flex gap-3 w-2/3 mx-auto p-4 ">
			<div className="w-[118px] p-3">
				<img
					style={{ borderRadius: "0px 200px 200px 200px" }}
					src={data.image}
					alt={data.name}
				/>
			</div>
			<div className="">
				<h3 className="text-2xl">{data.name} -----------------</h3>
				<p>{data.recipe}</p>
			</div>
			<div className="">
				<p className="text-yellow-500">${data.price}</p>
			</div>
		</div>
	);
};

export default MenuItem;
