import React from "react"
import {Link} from "react-router-dom"

const Navlinks = ({Icon, text}) => {

    return(
        <div className="navoptions">
            <Icon />
            <Link to={{ pathname: `/${text.toLowerCase()}`}}>{text}</Link>
        </div>
    )

}

export default Navlinks 