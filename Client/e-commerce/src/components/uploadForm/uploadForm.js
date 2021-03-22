import React, { useState } from 'react';
import styled from 'styled-components';

import { upload } from '../../axios/uploadService';

const UploadForm = () => {
    const [ inputChange, setInputChange ] = useState('');
    const [ previewSource, setPreviewSource ] = useState('');

    const [ textAreaInput, setTextAreaInput ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ price, setPrice ] = useState('');
    
    const handleFileSelect = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewSource(reader.result);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!previewSource) return;

        const userInput = {
            image: JSON.stringify(previewSource),
            details: textAreaInput,
            category: category,
            price: price
        }
        
        uploadImage(userInput);

        setPreviewSource('');
        setTextAreaInput('');
        setCategory('');
        setPrice('');
    }

    const uploadImage = async (userInput) => {
        console.log(userInput);
        await upload(userInput);
    }

    return (
        <UploadFormContainer>
        <Form onSubmit={(e)=>handleSubmit(e)}>

            <label htmlFor='select'>Select File</label>
            <input id='select' type='file'  value={inputChange} onChange={(e)=> handleFileSelect(e) } />

            <label htmlFor='textArea'>Item Details</label>
            <textarea value={textAreaInput} onChange={(e)=>setTextAreaInput(e.target.value)} id='textArea'/>

            <label htmlFor='category'>Choose Category:</label>
            <select  name="category" id="category" onChange={(e)=>setCategory(e.target.value)}>
                <option value=''></option>
                <option  value="rockClimbing">Rock Climbing</option>
                <option value="mountaineering">Mountaineering</option>
                <option value="skiing">Skiing</option>
            </select>

            <label htmlFor='price'>Price</label>
            <input value={price} type='text' id='price' onChange={(e)=>setPrice(e.target.value)} />

            <label htmlFor='submit'>Upload</label>
            <button id='submit' type='submit'>Submit</button>

        </Form>

        {
            previewSource &&
            <img src={previewSource} alt='preview' height='50px' width='50px' />
        }

        </UploadFormContainer>
    )
}

export default UploadForm

const UploadFormContainer = styled.div`
    display: flex;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
