import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
// import Auth from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Post from './component/Post/Post';
// import Form from './component/Form/Form';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
       {routes}
      </div>
    );
  }
}

export default App;
