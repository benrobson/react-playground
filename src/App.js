import Navbar from './modules/Navbar';
import Home from './modules/Home';
import Footer from './modules/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
