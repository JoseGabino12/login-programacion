import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './home'
import Login from './login'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "login" component = {Login} title = "Login" />
      </Scene>
   </Router>
)
export default Routes