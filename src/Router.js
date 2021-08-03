import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Error from './pages/Error'
import ProductDetail from './pages/ProductDetail'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/products/:id' children={<ProductDetail />} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  )
}

export default AppRouter
