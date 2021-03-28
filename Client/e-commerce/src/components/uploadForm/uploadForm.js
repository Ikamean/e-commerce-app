import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { initializeAccount } from '../../redux/reducers/account';

import CategoryField from './categoryField';
import PriceField from './priceField';
import SelectImgField from './selectImgField';
import DetailsField from './detailsField';
import FacebookField from './facebookField';
import NumberField from './numberField';
import Submit from './submit';

import Preview from './Preview/preview';

import { upload } from '../../axios/uploadService';




const UploadForm = () => {
    const dispatch = useDispatch();

    // eslint-disable-next-line no-unused-vars
    const [ inputChange, setInputChange ] = useState('');
    const [ previewSource, setPreviewSource ] = useState([]);


    const [ textAreaInput, setTextAreaInput ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ facebook, setFacebook ] = useState('');

    const [ uploadLoading, setUploadLoading ] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [ uploadFiniShed, setUploadFiniShed ] = useState(false);
    
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(previewSource.concat(reader.result));
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(previewSource.length === 0) return

        const userInput = {
            image: previewSource,
            details: textAreaInput,
            category: category,
            price: price,
            number: number,
            facebook: facebook
        }
        
        uploadImage(userInput);
        
        setUploadLoading(true);
        setUploadFiniShed(false);

        
    }

    const uploadImage = async (userInput) => {
        let res = await upload(userInput);
        if(res){
            setUploadLoading(false);
            setUploadFiniShed(true);

            setPreviewSource([]);
            setTextAreaInput('');
            setCategory('');
            setPrice('');
            setNumber('');
            setFacebook('');
            
            await dispatch(initializeAccount());
        }
    }

    return (
        <UploadFormContainer>

        <Form onSubmit={(e)=>handleSubmit(e)}>

            <SelectImgField image={previewSource} handleFileSelect={handleFileSelect} inputChange={inputChange} />

            <CategoryField setCategory={setCategory} />

            <PriceField price={price} setPrice={setPrice} />

            <FacebookField facebook={facebook} setFacebook={setFacebook} />

            <NumberField number={number} setNumber={setNumber} />

            <DetailsField textAreaInput={textAreaInput} setTextAreaInput={setTextAreaInput} />

            <Submit image={previewSource} />

        </Form>

            <Preview loading={uploadLoading} source={previewSource} setPreviewSource={setPreviewSource} />

        </UploadFormContainer>
    )
}

export default UploadForm

const UploadFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${ props => props.theme.colors.white };
    @media( min-width: 650px){
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;
    }

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${ props => props.theme.colors.white };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 2rem;
    margin: 1rem 1rem;
    border: none;
    outline:none;

    @media( min-width: 1024px ){
        width: 600px;
    }
`
export const HorizontalAlign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: ${ props => props.market ? "cursor" : "text" };
    &:hover{
        color: ${ props => props.market && props.theme.colors.blue};
    }
`
export const Label = styled.label`
    font-weight: 500;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.085em;
    background-color: ${ props => props.image ? props.theme.colors.blue :  props.theme.colors.white };
    margin-top: 10px;
    border: none;
    outline:none;
    padding: 1rem 12px;
    gap: 10px;
    color: ${ props => props.submit ? props.theme.colors.blue : props.theme.colors.black };
    border-radius: 4px;

    input[type="file"] {
    display: none;
    };


    font-size: ${ props => props.submit && '24px' };
    border-radius: 10px;
    &:hover, &:focus{
        background-color: ${ props =>  (props.upload || props.submit) && props.theme.colors.blue };
        color: ${ props => (props.submit || props.upload) && props.theme.colors.white };
        cursor: ${ props => (props.submit || props.upload) && 'pointer' };
    }

`
export const Input = styled.input`
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 10px;
`