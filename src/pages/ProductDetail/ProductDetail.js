import React from 'react';
import ProductData from '../../components/ProductCard/ProductData';
import ProductDetailCard from '../../components/ProductCard/ProductDetailCard';

const ProductDetail = ({ match, classes }) => {
  const slug = match.params.slug;
  const product = ProductData.find(item => item.slug === slug)

  return (
    <div>
      <ProductDetailCard product={product} />
    </div>
  )
}

export default ProductDetail
