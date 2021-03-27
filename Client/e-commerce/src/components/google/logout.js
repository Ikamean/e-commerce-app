import React from 'react';

import { GoogleLogout } from 'react-google-login';
import{ Details } from '../navbar/Profile/profileCard/accountDetails';

import { useDispatch } from 'react-redux';
import { logoutAccount } from '../../redux/reducers/account';


import { useTranslation } from 'react-i18next';

const client_id = process.env.REACT_APP_CLIENT_ID;

const Logout = () => {
    const dispatch = useDispatch();

    const { t } = useTranslation();
    
    const onLogoutSuccess = (res) =>{
        dispatch(logoutAccount());
    }

    return( 
                
                <GoogleLogout
                    clientId={client_id}
                    render={renderProps => (
                        <Details onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            {t('Logout')}
                        </Details>
                    )}
                    onLogoutSuccess={()=>onLogoutSuccess()}
                    />
    )
}

export default Logout



