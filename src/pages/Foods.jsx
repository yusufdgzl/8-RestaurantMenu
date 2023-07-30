
import { useEffect } from "react"
import { useState } from "react"
import FoodsProductCard from "../FoodsProductCard"

export default function Foods(){

    const [foods,setFoods] = useState([])

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((prev)=>prev.json())
        .then((prev)=>setFoods(prev.categories))
    },[])

return(
    <>
    
        <div className="grid">
            {
             foods.map((item,index)=> <FoodsProductCard key={index} item={item} />)
            }
        </div>
   
    
        </>
    )
    }