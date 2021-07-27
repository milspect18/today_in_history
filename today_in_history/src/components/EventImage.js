import React from 'react';
import ImgPlaceholder from '../assets/placeholder.svg';
import '../styles/EventImage.css';

const EventImage = (props) => {
    return (
        <div className='eventImgContainer'>
            <img src={props.imgSrc || ImgPlaceholder} />
        </div>
    )
}

export default EventImage;
