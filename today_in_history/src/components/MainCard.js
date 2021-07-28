import React from 'react';
import '../styles/MainCard.css';

const MainCard = (props) => {

    return (
        <div className="cardContainer">
            {props.children}
        </div>
    )
}

export default MainCard;
