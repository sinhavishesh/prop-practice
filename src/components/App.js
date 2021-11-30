import React from "react"

import Product from "./Product"
import productsData from "./ProductsData"

function App() {
    const productComponent = productsData.map(item => <Product name={item.name}/>)

    return(
        <div>
            {productComponent}
        </div>
    )
}

export default App