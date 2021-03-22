import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage';
import AccountPage from './pages/accountPage/accountPage';
import FormPage from './pages/UploadFormPage/FormPage';

import Navbar from './components/navbar/navbar';

const App = () => {
    

    return (
    <>
        <Navbar />

        <Switch>
            
            <Route exact path='/' >
                <HomePage />
            </Route>

            <Route exact path='/account' >
                <AccountPage />
            </Route>

            <Route exact path='/upload' >
                <FormPage />
            </Route>

        </Switch>

    </>
    )
}

export default App
