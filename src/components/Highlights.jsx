import React from "react";
import Highlight from "./ui/Highlight";
import { features } from '../data.js'


const Highlights = () => {
    return(
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        {features 
                        .map(feature => <Highlight feature={ feature } key={feature.id}/>)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights