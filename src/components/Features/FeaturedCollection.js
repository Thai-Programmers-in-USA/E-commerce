import React from 'react'
import ProductCard from '../ProductCard'


 const FeaturedCollection = () => {

    const products = ["Product 1","Product 2","Product 3","Product 4","Product 5"]
    return (
        <div>
        Featured Collection
        {products.map((product, index) => 
            <ProductCard product={product} key={index} />
        )}
        </div>
    )
}

export default FeaturedCollection;