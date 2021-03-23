import React from 'react'

const Preview = ({ source }) => {
    return (
        
        <div>
            {
            source &&
            source.map(
                (source,i)=> <img key={i} src={source} alt='preview' height='50px' width='50px' />
            )
            }
    </div>
    )
}

export default Preview
