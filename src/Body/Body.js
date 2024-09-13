import "./Body.css"
import { RestaurantList } from "../config"
import React, { useState} from "react"
import RestaurantCard from "../Cards/Cards"
import { Link } from "react-router-dom"


function filterData(input,restaurant){
  return restaurant.filter((restaurant) => restaurant.info.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
  
}

const Body = () => {
  const [allRestaurant,setAllReastaurent] = useState(RestaurantList)
const [restaurants,setRestaurants] = useState(RestaurantList)
const [inputText, setInputText] = useState("")


    return (
      <>
      <div className="searchInput">
          <input 
          type="text"
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} 
          />

          <button onClick={() => {
            const data = filterData(inputText,allRestaurant)
            setRestaurants(data)
          }}>search</button>
      </div>
        <div className="body">
          {
            restaurants.map((restaurant) => {
              return <Link to={"/menu/" + restaurant.info.id } key={restaurant.info.id}><RestaurantCard {...restaurant.info} /></Link>
            })
          }
        {/* <RestaurantCard restaurant = {RestaurantList[0]}/>
        <RestaurantCard restaurant = {RestaurantList[1]}/>
        <RestaurantCard restaurant = {RestaurantList[2]}/>
        <RestaurantCard restaurant = {RestaurantList[3]}/>
        <RestaurantCard restaurant = {RestaurantList[4]}/>
        <RestaurantCard restaurant = {RestaurantList[5]}/>
        <RestaurantCard restaurant = {RestaurantList[6]}/>
        <RestaurantCard restaurant = {RestaurantList[7]}/> */}
        </div>
        </>
    )
}

export default Body

