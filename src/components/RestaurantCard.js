import { CDN_URL } from "../utils/URLs";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, slaString } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="p-4 w-[250px] m-3 rounded-lg shadow-2xl"
    >
      <div className="image ">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="res-logo rounded-lg w-52 h-52"
        />
      </div>
      <div className="card-info pl-1 pt-2 h-44">
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{slaString}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export const withPromotedLable = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-0.5 px-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
