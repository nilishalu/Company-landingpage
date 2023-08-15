import './App.css';
import Home from './containers/home/Home';
import Navbar from './components/navbar/Navbar';
import FeatureMessage from './containers/featureMessage/FeatureMessage';
import ProductFeatures from './containers/productFeatures/ProductFeatures';
import CEOMessage from './containers/ceoMessage/CEOMessage';
import Blogs from './containers/blogs/Blogs';
import Clients from './containers/clients/Clients';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <FeatureMessage />
    <ProductFeatures />
    <CEOMessage />
    <Blogs />
    <Clients />
    </>
  );
}

export default App;
