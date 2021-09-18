import React from "react"
import {Link} from "react-router-dom"

const Navlinks = ({Icon, text}) => {

    return(
        <div className="navlinks">
            <Icon />
            <Link to={{ pathname: `/${text}`}}>{text}</Link>
        </div>
    )

}

export default Navlinks 