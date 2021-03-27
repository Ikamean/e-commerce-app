import React from 'react';
import styled from 'styled-components';

import Login from '../google/login';


import UserProfile from './Profile/UserProfile/userProfile';
import Header from './header';
import AdminCleanup from './adminCleanup';


import { useSelector } from 'react-redux';

import Language from '../LanguageBtn/language';


const Navbar = () => {
    const account = useSelector( state => state.account.user );
    


    if(!account){
        return(
            <>
                <NavbarContainer>
                    <Header />
                    <Language />
                    <Login />
                </NavbarContainer>
            </>
        )
    }

    return (
        <>
            <NavbarContainer>
                <Header />
                <AdminCleanup />
                <Language />
                <UserProfile />
            </NavbarContainer>
        </>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem 1rem 1rem ;
    background-color: ${ props=> props.theme.colors.white };
    color: ${ props=> props.theme.colors.black };
    position: sticky; 
    top: 0;
    z-index: 100;
`



