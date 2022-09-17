
import React from "react";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Nav from "./component/nav";
import { Provider } from 'react-redux';
import  store from './store'
import Home from "./screens/home"
import { Cart, Details } from "./screens";



function App() {
  

  return(
        <div >
          <Router >
          <Provider store={store}>
      <Nav/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/details/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
       

       </Routes> 
       </Provider>
    </Router>
        </div>
  )
}

export default App;