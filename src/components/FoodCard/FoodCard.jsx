const FoodCard = ({ item }) => {
  const { name, img, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-active text-yellow-600">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
