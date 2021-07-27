import React from 'react';
import ImgPlaceholder from '../assets/placeholder.svg';
import '../styles/EventImage.css';

const EventImage = (props) => {
    const PLACEHOLDER_ALT_TEXT = "Placeholder Image";

    return (
        <div className='eventImgContainer'>
            <img
                src={props.imgSrc || ImgPlaceholder}
                alt={props.altText || PLACEHOLDER_ALT_TEXT}
            />
        </div>
    )
}

export default EventImage;
