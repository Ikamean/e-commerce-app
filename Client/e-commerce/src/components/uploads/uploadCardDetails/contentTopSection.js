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

import { useTranslation } from 'react-i18next';

import Contact from './ContactUser/contact';

const ContentTopSection = ({id, user}) => {
    const [ deleteLoading, setDeleteLoading ] = useState(false);
    const [ open, setOpen ] = useState(false);

    const dispatch = useDispatch();
    const loggedUser = useSelector( state => state.account.user );


    const location = window.location.href;
    const locationRegex = /account/;

    const { t } = useTranslation();

    let showDelete = locationRegex.test(location);

    
    let admin = false;
    if(loggedUser){
        admin = loggedUser.subID === process.env.REACT_APP_ADMIN_SUB;
    }
    


    const handleDelete = async () => {
        let confirm = window.confirm('Delete Product?');
        
        if(!confirm) return null;

        let finishedLoading = await deleteProduct(id);
        setDeleteLoading(true)
        

        if(finishedLoading){
            setDeleteLoading(false);
            await dispatch(initializeAccount());
        }
        
    }

    if(!showDelete && !admin){
        return <Contact user={user} />
    }

    return (
            <>
                
                <TopSectionContainer >
                    <Contact user={user} />
                    <OptionIcon onClick={ ()=> setOpen(!open)}> <HiDotsVertical /> </OptionIcon>
                    

                    {
                    open &&
                    <DeleteButton onClick={()=> handleDelete()}> <AiFillDelete /> {t('Delete')} </DeleteButton>
                    
                    }

                    {

                    deleteLoading &&
                    <DeleteLoader>
                            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    </DeleteLoader>

                    }

                </TopSectionContainer>
            
            
            </>  
    )
}

export default ContentTopSection

const TopSectionContainer = styled.span`
    position: relative;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease;
    margin-top: 5px;
    padding-left: 5px;
`
const OptionIcon = styled.span`
    cursor: pointer;
    
`

const DeleteButton = styled.button`
    position: absolute;
    z-index: 10;
    top:0;
    right:20px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${ props => props.theme.colors.black };
    background-color: ${ props => props.theme.colors.white };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding:0.5rem 2.2rem;
    width: 176px;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    &:hover{
        color: ${ props => props.theme.colors.white };
        background-color: ${ props => props.theme.colors.blue };
    }
    transition: all 0.5s ease;
`

const DeleteLoader = styled.div`
    position: absolute;
    top: 0;
    left: 150px;
    transition: all 0.5s ease;
`