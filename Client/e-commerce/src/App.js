import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage';
import Navbar from './components/navbar/navbar';

const App = () => {
    

    return (
    <>
        <Navbar />

        <Switch>
            <Route exact path='/' >
                <HomePage />
            </Route>
        </Switch>

    </>
    )
}

export default App
