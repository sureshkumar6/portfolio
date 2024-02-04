import React from "react";
import bio from '../Images/bio.png'
import './Biograpgh.css'

const Biograpgh= ()=>{
    return(
        <div className="bio-container">
            <div className="bio-text">
                <h2>LET ME INTRODUCE MYSELF</h2>
                <p> A tech enthusiast with a love for programming...</p>
                <p>I am fluent in classics like C++, C and Python.</p>
                <p>My field of Interest's are building new  Web Technologies and AI Applications and also in areas related to Blockchain.</p>
                <p>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
            </div>
            <div className="bio-image">
                <img src={bio} alt="bio"/>
            </div>
        </div>
    )
}

export default Biograpgh