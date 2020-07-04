import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App';
// import router from './router.js'
import Detail from '../pages/Detail';
import About from '../components/About'
import MyCanvas from '../pages/MyCanvas';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/my-canvas" component={MyCanvas} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default AppRouter;