export default function FoodsProductCard({item}) {



    return (
        <>
            <div className="grid">
                <div className="productCard">
                <img src={item.strCategoryThumb}  />
                <h2>{item.strCategory}</h2>
                <h3>{item.strCategoryDescription.substring(0,100)}</h3>
                </div>
            </div>


        </>
    )


}