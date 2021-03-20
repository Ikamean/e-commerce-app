import React from 'react';

import { GoogleLogout } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import{ GoogleBtn } from './login';

import { useDispatch } from 'react-redux';
import { logoutAccount } from '../../redux/reducers/account';




const client_id = process.env.REACT_APP_CLIENT_ID;

const Logout = () => {
    const dispatch = useDispatch();
    
    const onLogoutSuccess = (res) =>{
        localStorage.clear();
        dispatch(logoutAccount());
    }

    return( 
                
                <GoogleLogout
                    clientId={client_id}
                    render={renderProps => (
                        <GoogleBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <FcGoogle /> Logout
                        </GoogleBtn>
                    )}
                    onLogoutSuccess={()=>onLogoutSuccess()}
                    />
    )
}

export default Logout



