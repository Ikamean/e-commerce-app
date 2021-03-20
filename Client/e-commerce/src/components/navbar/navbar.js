import React from 'react';
import styled from 'styled-components';

import Login from '../google/login';
import Logout from '../google/logout';

import { useSelector } from 'react-redux';

const Navbar = () => {
    const account = useSelector( state => state.account.user )

    console.log(account);

    if(!account){
        return(
            <NavbarContainer>
                <Login />
            </NavbarContainer>
        )
    }

    return (
        <NavbarContainer>
            <Logout />
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`
