import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/URLs";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="items"
          key={item?.card?.info?.id}
          className="border-gray-200 border-b-2 my-3 py-3 px-4 text-left flex justify-between "
        >
          <div className="w-10/12">
            <div className="my-3">
              <p className="font-semibold">{item?.card?.info?.name}</p>
              <span>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12">
            <div className="absolute">
              <button
                className="text-md cursor-pointer text-green-600 bg-white rounded-lg mx-7 mt-20 px-4"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
