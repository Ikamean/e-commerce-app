import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Login from '../google/login';


import UserProfile from './Profile/UserProfile/userProfile';
import Header from './header';


import { useSelector, useDispatch } from 'react-redux';
import{ initializeAccount } from '../../redux/reducers/account';



const Navbar = () => {
    const account = useSelector( state => state.account.user );
    const dispatch = useDispatch();
    
    useEffect(() => {
        const initializeUserAccount = async () => {
            await dispatch(initializeAccount());
        }
        initializeUserAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if(!account){
        return(
            <NavbarContainer>
                <Header />
                <Login />
            </NavbarContainer>
        )
    }

    return (
        <NavbarContainer>
            <Header />
            <UserProfile />
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-between;
    align-items: center;
    padding: 1rem ;
    background-color: ${ props=> props.theme.colors.white };
    color: ${ props=> props.theme.colors.black };
    position: sticky; 
    top: 0;
    z-index: 1;

    @media(min-width: 650px){
        padding: 1rem 3rem;
    }
`



