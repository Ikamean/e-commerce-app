import React from 'react';

import { GoogleLogout } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import{ Details } from '../navbar/Profile/profileCard/accountDetails';

import { useDispatch } from 'react-redux';
import { logoutAccount } from '../../redux/reducers/account';




const client_id = process.env.REACT_APP_CLIENT_ID;

const Logout = () => {
    const dispatch = useDispatch();
    
    const onLogoutSuccess = (res) =>{
        dispatch(logoutAccount());
    }

    return( 
                
                <GoogleLogout
                    clientId={client_id}
                    render={renderProps => (
                        <Details onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            Logout
                        </Details>
                    )}
                    onLogoutSuccess={()=>onLogoutSuccess()}
                    />
    )
}

export default Logout



