import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='w-50 center pa4 br3 shadow-3 pattern'>
                <input className='f4 pa2 w-70 fullVis' type='text' onChange={onInputChange}/>
                <button 
                className='w-30 grow f4 fullvis link dib ph3 pv2 white bg-light-purple'
                onClick = {onPictureSubmit}
                >Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm