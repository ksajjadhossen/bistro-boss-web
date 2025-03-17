const OrderCard = ({ item }) => {
  const { name, image, recipe, price } = item || {};
  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <p>{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-neutral text-yellow-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
