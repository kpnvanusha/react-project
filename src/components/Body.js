import { Card } from "./Card.js"
import {restaurantData} from '../data/restaurantData.js'
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer.js"
export const Body = () => {
    let [resData, setResData] = useState([]);
    let [filteredRestaurants,setFilteredRestaurants] = useState([]);
    let [searchText,setSearchText] = useState('');
    //let filteredRestaurants;
    const getTopRatedRestaurants = () => {
        const topRatedResList = resData.filter((restaurant) =>{
            return restaurant.info.avgRating > 4.3;
        });
        setFilteredRestaurants(topRatedResList);
    }
    //console.log(searchText);
    //console.log(resData);
    useEffect(() => {
        fetchData();
    },[]);
    filterDataOnSearch = () => {
        const filteredData = resData.filter((restaurant) => {
                return (restaurant.info.name).toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(filteredData);
        //searchText === '' ? setFilteredRestaurants(resData) : setFilteredRestaurants(filteredData);
    }
    handleOnChange = (e) => {
        setSearchText(e.target.value);
    }
    const fetchData = async () => {
        let  restaurantData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        restaurantData = await restaurantData.json();
        setResData(restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(resData);
        setFilteredRestaurants(restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    if(filteredRestaurants.length === 0){
        return <Shimmer/>;
    }
    return (
        <>
        <div className="body-container">
            <div className="search-container">
                <input type="text" className="search-box" value={searchText} onChange= {handleOnChange}/>
                <button className="search-btn" onClick= {filterDataOnSearch}>Search</button>
            </div>
            <button type="button" className="filter-btn" onClick={getTopRatedRestaurants}>Top rated Restaurants</button>
            <ul className="cards-container" role="list" aria-label="Available Restaurants" tabIndex='1'>

                {filteredRestaurants && filteredRestaurants.map((restaurant) => {
                    return <Card id={restaurant.info.id} resData = {restaurant}/>
                })}
            </ul>
        </div>
        </>
    )
}