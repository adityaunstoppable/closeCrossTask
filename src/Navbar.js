import React from 'react'
import "./Navbar.css"
import Logo from "./images/logo.PNG"
import StarOutlineIcon from "@material-ui/icons/StarOutline"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import {Avatar} from '@material-ui/core'

function Navbar() {
    return (
        <div className="nav">

           <div className="logo">
                <img height="50px" src={Logo} />
           </div>

            <div className="rectangles-1">
                 <button className="white ">
                    Training Mode
                 </button>

                 <button className="dark ">
                    Live Mode
                 </button>
            </div>
           



            <div className="rectangles-2">
                

                 <button className="dark ">
                    Show All
                 </button>

                 <button className="white ">
                    Crypto
                 </button>

                 
                 <button className="dark ">
                    Commodities
                 </button>

                 <button className="white ">
                    Stock
                 </button>

                 <button className="dark ">
                    Index
                 </button>

                 <button className="dark ">
                    Currency
                 </button>


            </div>

            <div className="icons">
                
                <div className="icon">
                    <SearchOutlinedIcon />
                </div>
                
                <div className="icon">    
                    <StarOutlineIcon />
                </div>

                
                <div className="icon">
                    <CastForEducationIcon />
                </div>

                
                <div className="icon">
                    <Avatar src="https://scontent.flko3-1.fna.fbcdn.net/v/t1.0-9/87555389_2808072305977278_8550027907664183296_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=dQH9_ubrNpYAX_xTOc3&_nc_ht=scontent.flko3-1.fna&oh=90fb5c3bde7160e9efa2eba06525eed8&oe=60084896"  />
                </div>

            </div>

        </div>
    )
}

export default Navbar
