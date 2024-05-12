import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Restaurant_URL } from "../utils/URLs";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your internet connection is lost!!! Please check your
        internet connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="px-5">
          <input
            className="border border-solid border-black"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 bg-blue-100 px-5 py-0.5 rounded-lg"
            onClick={() => {
              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn bg-blue-100 px-5 py-0.5 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="p-4">
          <label> UserName : </label>
          <input
            className="border border-black px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap px-[52px]">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
