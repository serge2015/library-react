import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Highlight = ( { feature }) => {
    return(
        <div className="highlight">
            <div className="highlight__img">
                <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="highlight__subtitle">{ feature.title }</h3>
            <p className="highlight__para">{ feature.para }</p>

        </div>
    )
}

export default Highlight