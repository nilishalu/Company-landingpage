import './App.css';
import Home from './containers/home/Home';
import Navbar from './components/navbar/Navbar';
import FeatureMessage from './containers/featureMessage/FeatureMessage';
import ProductFeatures from './containers/productFeatures/ProductFeatures';
import CEOMessage from './containers/ceoMessage/CEOMessage';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <FeatureMessage />
    <ProductFeatures />
    <CEOMessage />
    </>
  );
}

export default App;
