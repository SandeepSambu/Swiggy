import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mx-auto my-1 w-6/12">
      <div
        className="bg-gray-100 shadow-lg shadow-slate-250 p-3 cursor-pointer rounded"
        onClick={handleClick}
      >
        <div className="flex justify-between ">
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
      </div>
      {/* Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
