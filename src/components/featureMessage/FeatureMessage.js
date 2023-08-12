import React from 'react'
import { messageFeature } from '../../data/messageFeature';
import Feature from '../../cards/feature/Feature';

const FeatureMessage = () => {
  return (
    <div>
      <h2>Messaging for all</h2>
      <p>User generated content in real-time will have multiple touchpoints for offshoring.</p>
      <Feature props = {messageFeature}/>
    </div>
  )
}

export default FeatureMessage
