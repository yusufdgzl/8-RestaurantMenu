import { useEffect, useState } from "react";
import DrinksProductCard from "../DrinksProductCard";

export default function Drinks(){


    const [drinks,setDrinks] = useState([])

    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((prev)=>prev.json())
        .then((prev)=>setDrinks(prev.drinks))
    },[])



    return(
        <>
        <div className="grid">
        {
        drinks.map((item,index)=> <DrinksProductCard key={index} item={item}/>)
        }
        </div>
        </>
    )
    }