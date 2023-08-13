import './App.css';
import Home from './containers/home/Home';
import Navbar from './components/navbar/Navbar';
import FeatureMessage from './containers/featureMessage/FeatureMessage';
import ProductFeatures from './containers/productFeatures/ProductFeatures';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <FeatureMessage />
    <ProductFeatures />
    </>
  );
}

export default App;
