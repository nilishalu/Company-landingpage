import React from 'react';
import "./product.css";

const Product = (data) => {
    const features = data.props;
    return (
        <div className='product-features'>        
            {features.map((feature, index) => (
                <div key={index} className='product-feature'>
                    <img src={feature.logoLink} alt='Logo' width={"60px"}></img>
                    <div className='info'>
                    <h3 className='title'>{feature.title}</h3>
                    <p className='desc'>{feature.desc}</p>
                    <a href={feature.moreInfo}>Learn more</a>
                    </div>
                </div>
            ))};
        </div>
  )
}

export default Product;
