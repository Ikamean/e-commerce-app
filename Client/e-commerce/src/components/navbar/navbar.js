import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Login from '../google/login';
import Logout from '../google/logout';

import UserProfile from './userProfile';

import { useSelector, useDispatch } from 'react-redux';
import{ initializeAccount } from '../../redux/reducers/account';



const Navbar = () => {
    const account = useSelector( state => state.account.user );
    const dispatch = useDispatch();
    
    const [ open, setOpen ] = useState(false);
    
    useEffect(() => {
        const initializeUserAccount = async () => {
            await dispatch(initializeAccount());
        }
        initializeUserAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            <UserProfile account={account}/>
            <Logout />
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    background-color: ${ props=> props.theme.colors.white };
    color: ${ props=> props.theme.colors.black };
    position: sticky;
    top: 0;
    z-index: 1;
`



