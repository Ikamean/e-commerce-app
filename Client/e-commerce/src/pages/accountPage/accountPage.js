import React from 'react';
import styled from 'styled-components';


import{ useSelector } from 'react-redux';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Uploads from '../../components/uploads/uploads';
import UploadBtn from '../../components/uploadBtn';



const AccountPage = () => {
    const account =  useSelector(state => state.account.user );
    
    if(!account){
        return <Centered> <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </Centered>
    }


    return (
        <>  
            <UploadBtn />
            <Uploads uploads={account.uploads}/>
            
        </>
    )
}

export default AccountPage

export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

