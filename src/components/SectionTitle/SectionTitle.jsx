/* eslint-disable no-unused-vars */
const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className="text-center my-8 w-4/12 mx-auto">
			<p className="text-yellow-500 text-xl italic py-1">
				--- {subHeading} ---
			</p>
			<h3 className="text-4xl font-bold text-gray-800 border-y-4 p-2 uppercase">
				{heading}
			</h3>
		</div>
	);
};

export default SectionTitle;
