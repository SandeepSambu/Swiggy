import { useEffect, useState } from "react";
import { RestaurantMenu_URL } from "./URLs";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RestaurantMenu_URL + resId);

    const json = await data.json();

    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
