import Navbar from './modules/Navbar';
import Home from './modules/Home';
import Footer from './modules/Footer';
import Create from './modules/Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './modules/BlogDetails';
import NotFound from './modules/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/blogs/:id" component={BlogDetails} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
