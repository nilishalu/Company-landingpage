import React from 'react';
import "./feature.css";

const Feature = (data) => {
    const features = data.props;
    return (
        <div className='features'>        
            {features.map((feature, index) => (
                <div key={index} className='feature'>
                    <img src={feature.logoLink} alt='Logo' width={"60px"} className='icon'></img>
                    <h3 className='title'>{feature.title}</h3>
                    <p className='desc'>{feature.desc}</p>
                    <a href={feature.moreInfo}>Learn more</a>
                </div>
            ))};
        </div>
  )
}

export default Feature;
