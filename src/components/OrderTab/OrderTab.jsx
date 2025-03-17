import OrderCard from "../OrderCard/OrderCard";
const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <OrderCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
