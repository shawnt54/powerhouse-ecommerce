import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import ServicepageLayout from "./containers/ServiceParts";
import AboutpageLayout from "./containers/About";
import ContactpageLayout from "./containers/Contact";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import OrderSummary from "./containers/OrderSummary";
import Checkout from "./containers/Checkout";
import Profile from "./containers/Profile";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/" component={HomepageLayout} />
    <Route path="/service-parts" component={ServicepageLayout} />
    <Route path="/about" component={AboutpageLayout} />
    <Route path="/contact" component={ContactpageLayout} />
  </Hoc>
);

export default BaseRouter;
