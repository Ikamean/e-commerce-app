import React from 'react';
import styled from 'styled-components';

import { GoogleLogin } from 'react-google-login';
import { verifyToken } from '../../axios/loginService';
import { FcGoogle } from 'react-icons/fc';

import { useDispatch } from 'react-redux';
import{ initializeAccount } from '../../redux/reducers/account';

const client_id = process.env.REACT_APP_CLIENT_ID;

const Login = () => {
    const dispatch = useDispatch();

    const onSuccess = async (res) => {
        
        let verification = await verifyToken(res.tokenId);
        
        const loggedUser = {
            sub: verification.sub,
            name: verification.name,
            picture: verification.picture,
            given_name: verification.given_name
        }
        localStorage.setItem('user', JSON.stringify(loggedUser));

        await dispatch(initializeAccount(verification));

    }
    const onFailure = (res) => {
        localStorage.clear();
    }

    return(
                    <GoogleLogin
                        clientId={client_id}
                        render={renderProps => (
                            <GoogleBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                <FcGoogle /> Login
                            </GoogleBtn>
                        )}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        />
    )
}
        

export default Login


export const GoogleBtn = styled.button`
    cursor: pointer;
    width: auto;
    padding: 5px;
    outline: none;
    background-color: '#fff';
    border: 2px solid ${ props => props.theme.google.color };
    color: ${ props => props.theme.google.color };
    font-size: 14px;
    font-weight: 900;
    height: 44px;
    min-width: 80px;
    border-radius: 4px;
    &:hover{
        box-shadow: 0 1px 4px ${ props=> props.theme.google.shadow };
        transition: all 80ms linear;
    }
    &:active{
        border: none;
        background-color: ${ props => props.theme.google.active };
        transition: all 80ms linear;
    }
`