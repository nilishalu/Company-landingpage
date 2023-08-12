import React from 'react'

const Feature = (data) => {
    const features = data.props;
    return (
        <div>
            <h1>Hello</h1>
            <h2>{features.length}</h2>
        
            {features.map((feature, index) => (
                <div key={index}>
                    <img src={feature.logoLink} alt='Logo' width={"60px"}></img>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                    <a href={feature.moreInfo}>Learn more</a>
                </div>
            ))};
        </div>
  )
}

export default Feature;
