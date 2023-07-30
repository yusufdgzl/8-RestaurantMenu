export default function DrinksProductCard({item}) {



    return (
        <>
            <div className="grid">
                <div className="productCard">
                <img 
                style={{width:"350px"}}
                src={item.strDrinkThumb}  />
                <h2>{item.strDrink}</h2>
                <h3>{item.strInstructions.substring(0,100)}</h3>
                </div>
            </div>


        </>
    )


}