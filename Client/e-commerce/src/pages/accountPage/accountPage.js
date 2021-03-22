import React from 'react';

import { useSelector } from 'react-redux';


const AccountPage = () => {
    const account = useSelector( state => state.account.user );
    let { name, email, givenName, uploads } = '';

    if(account){
        name = account.name;
        email = account.email;
        givenName = account.givenName;
        uploads = account.uploads;
    }

    if(!account){
        return <div>Loading...</div>
    }


    return (
        
        <div>
            { name }
        </div>
    )
}

export default AccountPage
