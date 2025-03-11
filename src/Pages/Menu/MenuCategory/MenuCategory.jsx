import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemBanner from "../../../Shared/ItemBanner/ItemBanner";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
const MenuCategory = ({category, img, title, description}) => {
    return (
        <section className=" py-10">
            <ItemBanner img={img} title={title} description={description} ></ItemBanner>
        <SectionTitle
            subHeading="Check it out"
            heading="From Our Menu"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 py-7">
            {category.map((item) => (
                <MenuItem key={item.id} data={item}></MenuItem>
            ))}
        </div>
        <div class="flex justify-center items-center ">
            <button class="btn btn-soft">View Full Menu</button>
        </div>
    </section>
    );
};

export default MenuCategory;