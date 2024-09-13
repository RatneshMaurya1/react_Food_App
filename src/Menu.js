
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RestaurantList } from "./config";

const Menu = () => {
  const { resId } = useParams(); 
  const [restaurant, setRestaurant] = useState(null); 

  useEffect(() => {
    RestaurantList.find((res) => {
        if(res.info.id === resId){
        setRestaurant(res)
        console.log(res)
        }
    })
  }, [resId]);

  
  if (!restaurant) {
    return <h2>Loading...</h2>; 
  }

  return (
    <>
    <div className="menu">
      <h2>{restaurant.info.name}</h2>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
        alt={restaurant.info.name}
      />
      <div className="parent">
        <div className="text">
      <h2>{restaurant.info.locality}, {restaurant.info.areaName}</h2>
      <h3>Cuisines: {restaurant.info.cuisines.join(", ")}</h3>
      <h4>Cost for Two: {restaurant.info.costForTwo}</h4>
      <h5>Average Rating: {restaurant.info.avgRatingString}</h5>
      <h6>Delivery Time:{restaurant.info.sla.slaString}</h6>
      </div>
      <div className="btn">
      <button>Add item</button>
      </div>
      </div>
    </div>
    </>
  );
};

export default Menu;

