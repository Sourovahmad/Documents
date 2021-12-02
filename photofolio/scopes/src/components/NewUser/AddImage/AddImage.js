import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AddImage.css';

const AddImage = () => {
    return (
        <div id='addImage_area'>
            <div className='container'>
                <div className=''>
                    <div className='addIcon'>
                        <FontAwesomeIcon icon={faArrowCircleDown} />
                    </div>
                    <p>Add a Banner Image</p>
                    <h6>Optimal dimension is 4444x333</h6>
                </div>
            </div>
        </div>
    );
};

export default AddImage;