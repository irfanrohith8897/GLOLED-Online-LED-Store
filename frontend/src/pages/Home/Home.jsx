import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreCategory setCategory={setCategory} category={category}/>
      <ProductDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
