import React from "react";
import './Biograpgh.css';

const Multiple = (props) => {
    const { title, paragraphs, imageSrc, altText } = props;
    return (
        <div className="bio-container" id="about">
            <div className="bio-text">
                <h2>{title}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="bio-image">
                <img src={imageSrc} alt={altText} />
            </div>
        </div>
    );
}

export default Multiple;
