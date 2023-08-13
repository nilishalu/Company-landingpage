import React from 'react'
import { messageFeature } from '../../data/messageFeature';
import Feature from '../../cards/feature/Feature';
import "./featureMessage.css";

const FeatureMessage = () => {
  return (
    <div className='container message-feature'>
      <h2 className='center header'>Messaging for all</h2>
      <p className='center sub-header'>User generated content in real-time will have multiple touchpoints for offshoring.</p>
      <Feature props = {messageFeature} />
    </div>
  )
}

export default FeatureMessage
