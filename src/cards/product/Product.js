import React from 'react';
import "./product.css";

const Product = (data) => {
    const features = data.data;
    const theme = data.theme;
    
    return (
        <div className='product-features'>        
            {features.map((feature, index) => (
                <div key={index} className='product-feature'>
                    <img src={feature.logoLink} alt='Logo' width={"60px"} className='icon'></img>
                    <div className='info'>
                    <h3 className={theme === 'black' ? 'title-dark' : 'title-light'}>{feature.title}</h3>
                    <p className={theme === 'black' ? 'desc-dark' : 'desc-light'}>{feature.desc}</p>
                    <a href={feature.moreInfo}>Learn more</a>
                    </div>
                </div>
            ))};
        </div>
  )
}

export default Product;
