import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2 br5'>
                <img id='inputimage' className='shadow-2' alt='' src={imageUrl} width='300px' height='auto' />
                <div className='bounding-box' style={{top: '30px', right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div> 
        </div>
    );
}

export default FaceRecognition;