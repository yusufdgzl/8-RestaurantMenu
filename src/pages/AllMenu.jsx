import { useEffect, useState } from "react";
import FoodsProductCard from "../FoodsProductCard";
import DrinksProductCard from "../DrinksProductCard";
export default function AllMenu() {


    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((prev) => prev.json())
            .then((prev) => setFoods(prev.categories))
    }, [])

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then((prev) => prev.json())
            .then((prev) => setDrinks(prev.drinks))
    }, [])

    return (
        <>

            <div className="grid">
                {
                    foods.map((item, index) => <FoodsProductCard key={index} item={item} />)
                }
                {
                    drinks.map((item, index) => <DrinksProductCard key={index} item={item} />)
                }
            </div>

        </>
    )
}