import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage';
import AccountPage from './pages/accountPage/accountPage';
import FormPage from './pages/UploadFormPage/FormPage';
import CategoryPage from './pages/categoryPage/categoryPage';
import UserMarketPage from './pages/userMarketPage/userMarketPage';

import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/footer';

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

            <Route exact path='/:category' >
                <CategoryPage />
            </Route>

            <Route path ='/market/:user' >
                <UserMarketPage />
            </Route>

        </Switch>
        <Footer />
    </>
    )
}

export default App
