import './App.css';
import Home from './containers/home/Home';
import Navbar from './components/navbar/Navbar';
import FeatureMessage from './containers/featureMessage/FeatureMessage';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <FeatureMessage />
    </>
  );
}

export default App;
