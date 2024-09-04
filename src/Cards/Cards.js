
const RestaurantCard = ({cloudinaryImageId,name,avgRatingString,cuisines,areaName}) => {

    return(
        <div className="cards">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="image"/>
        <h2>{name}</h2>
        <h3>rating:{avgRatingString}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h6>{areaName}</h6>
    </div>
    )
}

export default RestaurantCard
