import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { MENU_URL } from "../constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    
    const [menuData,setMenuData] = useState([]);
    const { resId } = useParams();
    const fetchMenuData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" + resId);
         data = await data.json();
        setMenuData(data);
        console.log(data);
    }
    const data = menuData?.data?.cards[2]?.card?.card?.info;
    let menuItems = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    menuItems = menuItems === undefined ? menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards : menuItems;
    console.log(menuItems);
    useEffect(() => {
        fetchMenuData();
    },[])
    return menuData?.length === 0 ? <Shimmer/> :(
        <>
        <h1>{data.name}</h1>
        <div>{data.city}</div>
        <div>{data.costForTwoMessage}</div>
        <div>{data.avgRating}</div>
        <div>{data.cuisines.join(',')}</div>
        <ul className="menu-items" role="list">
            {menuItems && menuItems.map((item)=>{
                return <MenuItem key={item.card.info.id} menuItem = {item}/>
            })}
        </ul>
        </>
    )
}
export default RestaurantMenu;