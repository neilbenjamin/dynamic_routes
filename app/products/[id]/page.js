//This sub dircteory is set up in the main products subdirectory within the specified [id]
//params which is build into the app file structure as it's set up now. This is the link to which we
//are directed when we click on the Go To Product button. Solution courtesy of code Ryan on YouTube as well as the next.js 13 documentation.

import Product from "@/app/components/Product"//Import Porduct component

//Fetch the json from the server
export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/products?limit=5&select=title,price")
    const data = await res.json()
   //This is important to change the type to string as the params is expecting it and not a number.
   //Return the id data
    return data.products.map((product) => ({
      id: product.id.toString(),
    }))
  }

  //Fetch the data from the serevr dynamically by the id we just created.
async function getProduct(id) {
    const res = await fetch (`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    return data
}

//Extract the id parameter from the dynamic link using the id 
export default async function ProductPage ({params}) {
    const product = await getProduct(params.id)
    console.log({product})
    return (
        <Product noButton title={product.title} price={product.price} /> 
    )
}