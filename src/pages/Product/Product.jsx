import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import "./Product.css"
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find(p => p.id === Number(productId));
  
  if (!product) {
    return <div>Product not found</div>; // Display error message if product is undefined
  }

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
