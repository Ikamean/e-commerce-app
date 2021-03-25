import React from 'react';
import styled from 'styled-components';

import { adminCleanup } from '../../redux/reducers/images';

import { useDispatch, useSelector } from 'react-redux';

const AdminCleanup = () => {
    const dispatch = useDispatch();
    const account = useSelector(state => state.account.user );

    const admin = account.subID === process.env.REACT_APP_ADMIN_SUB
    
    const handleCleanup = async () =>{
        let res = await dispatch(adminCleanup())
        if(res){
            console.log('Cleanup Finished');
        }
    }

    return (
            admin 
            &&
            <CleanupBtn onClick = { () => handleCleanup() }>Cleanup</CleanupBtn>
        
    )
}

export default AdminCleanup

const CleanupBtn = styled.button`
    border:none;
    outline:none;
    padding: 1rem;
    border-radius: 10px;
    background-color: ${ props => props.theme.colors.blue };
    cursor: pointer;
    color: ${ props => props.theme.colors.white };
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
`