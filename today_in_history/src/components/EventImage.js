import React, { useEffect, useState } from 'react';
import ImgPlaceholder from '../assets/placeholder.svg';
import '../styles/EventImage.css';

const EventImage = (props) => {
    const PLACEHOLDER_ALT_TEXT = "Placeholder Image";
    const [imagePath, setImagePath] = useState(null);

    useEffect(() => {
        setImagePath(props.imgSrc)
    }, [props.imgSrc])

    const onImgPathError = () => {
        console.log("Cannot load image at path: ", props.imgSrc);
        setImagePath(null);
    }

    return (
        <div className='eventImgContainer'>
            <img
                onError={onImgPathError}
                src={imagePath || ImgPlaceholder}
                alt={props.altText || PLACEHOLDER_ALT_TEXT}
            />
        </div>
    )
}

export default EventImage;
