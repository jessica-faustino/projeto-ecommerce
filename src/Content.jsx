import React from "react";
import { Switch, Route } from "react-router-dom"; 
import {Store } from "./Componentes/Store/Store";
import { Cart } from "./Componentes/Cart/Cart";

export const Content = () => {
    return (
        <Switch>
            <Route path= '/cart' component={ Cart }/>
            <Route exact path='/' component={Store}/>
        </Switch>
    )
}