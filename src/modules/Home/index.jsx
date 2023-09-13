import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
// import FeatureCard from '../../components/FeatureCard'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import Products from '../../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
      const data = await response.json()
      // console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2> */}
        <h1 className="text-3xl lg:text-5xl font-bold title-font text-black">Featured Products</h1>
        <span className='w-20 h-1 bg-red-600 mx-auto mt-6'></span>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div><span className="loader my-12"></span></div>
      }
      <Products />
     
    </>
  )
}

export default Home