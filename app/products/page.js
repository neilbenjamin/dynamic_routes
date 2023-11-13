//First fetch call for the json from https://dummyjson.com/docs/products
//This returns the list of the josn objects as we have specified in the mapping function and 
//we have also imported a HOC button to make the item dynamic in the form of a button which links to the 
//params as set out. The json selects the product and the price. Solution courtesy of netx.js 13 notes and code Ryan on youtube.

import Product from "../components/Product";

//fetch data from serevr
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=5&select=title,price");
  const data = await res.json();
  return data.products;
}

export default async function Products() {
    const products = await getProducts()
    // console.log({products})

    //Map products
  return (
    <>
      <h1>Products</h1>
      {
        products.length > 0 && (
            products.map (({id, title, price}) => (
                <Product key={id} id={id} title={title} price={price} />
            ))
        )
      }
    </>
  );
}
