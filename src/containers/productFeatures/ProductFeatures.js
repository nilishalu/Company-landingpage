import React from 'react';
import Product from '../../cards/product/Product';
import { productFeature } from '../../data/productFeature';
import "./productFeature.css";

const ProductFeatures = () => {
  return (
    <div className='container'>
      <h2 className='center header'>Redefining Product Features</h2>
      <p className='center sub-header'>Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.</p>
       <div className='featuring'>
       <Product props = {productFeature}/>
       <Product props = {productFeature}/>
       </div>
    </div>
  )
}

export default ProductFeatures;
