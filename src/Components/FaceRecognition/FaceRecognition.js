import React from 'react';
import './FaceRecognition.css'
// import '../../App.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='helpingout' >
            <div className='absolute'>
                <img className='imgSettings' id='inputImage' alt="" src={imageUrl} />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition