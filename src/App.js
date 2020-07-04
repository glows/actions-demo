/* eslint-disable */
import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
// 引入加载路由视图得函数组件
import RouterView from "./router/index.js";
// 引入路由配置表
import config from "./router/config.js";

export default class App extends Component {
  render() {
      return (
          <div className='App'>
              <Router>
                  {/* 加载/展示路由视图组件 */}
                  <RouterView routes={config}/>
              </Router>
          </div>
      )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         {/* 加载/展示路由视图组件 */}
//         <RouterView routes={config} />
//       </Router>
//     </div>
//   );
// }

// export default App;
