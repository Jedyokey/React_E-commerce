import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = ({ scrollToNewCollection, newCollectionRef }) => {
  return (
    <div>
        <Hero scrollToNewCollection={scrollToNewCollection} />
        <Popular />
        <Offers />
        <NewCollections ref={newCollectionRef} />
        <NewsLetter /> 
    </div>
  )
}

export default Shop
