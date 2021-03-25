import React, { useState } from 'react';
import styled from 'styled-components';

//spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { deleteProduct } from '../../../axios/uploadService';
import { initializeAccount } from '../../../redux/reducers/account';


import { useDispatch, useSelector } from 'react-redux';


import { HiDotsVertical } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';

const Deletebtn = ({id}) => {
    const [ deleteLoading, setDeleteLoading ] = useState(false);
    const [ open, setOpen ] = useState(false);

    const dispatch = useDispatch();
    const loggedUser = useSelector( state => state.account.user );


    const location = window.location.href;
    const locationRegex = /account/;

    let showDelete = locationRegex.test(location);

    
    let admin = false;
    if(loggedUser){
        admin = loggedUser.subID === process.env.REACT_APP_ADMIN_SUB;
    }
    


    const handleDelete = async () => {
        let finishedLoading = await deleteProduct(id);
        setDeleteLoading(true)
        

        if(finishedLoading){
            setDeleteLoading(false);
            await dispatch(initializeAccount());
        }
        
    }

    if(!showDelete && !admin){
        return null
    }

    return (
            <>

                <DeleteToggle onClick={ ()=> setOpen(!open)}>
                    <HiDotsVertical />
                </DeleteToggle>

                {
                open &&
                <DeleteButton onClick={()=> handleDelete()}> <AiFillDelete /> Delete </DeleteButton>
                
                }

                {

                deleteLoading &&
                <DeleteLoader>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </DeleteLoader>

                }
            
            
            </>  
    )
}

export default Deletebtn
const DeleteToggle = styled.span`
    position: absolute;
    top:5px;
    right:0;
    font-size: 24px;
    cursor: pointer;
`
const DeleteButton = styled.button`
    position: absolute;
    top:1px;
    right:20px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${ props => props.theme.colors.black };
    opacity: 70%;
    background-color: ${ props => props.theme.colors.white };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 8px;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    &:hover{
        color: ${ props => props.theme.colors.white };
        background-color: ${ props => props.theme.colors.blue };
        opacity: 1;
    }
`

const DeleteLoader = styled.div`
    position: absolute;
    top: 0;
    left: 150px;
`