import React from 'react'
import "./Body.css"
import bodyStar from "./images/bodyStar.png"
import bodyIcon from "./images/bodyIcon.PNG"
import bodyGraph1 from "./images/bodyGraph-1.PNG"
import bodyGraph2 from "./images/bodyGraph-2.PNG"

function Body() {
    return (
        <div className="body">
            
            
            <div className="body__upperLines">

                <div className="body__upperLines__left">
                
                    <p className="body__flex-row__words">Select assets, types and period: </p>
                    <button className="body__greenBorder__button" >FILTER</button>

                </div>


                <div className="body__upperLines__right">

                    <div className="right-1">
                        <p className="body__flex-row__words">Units: </p>
                        <button className="body__greenBorder__button__right" >%</button>
                        <button className="body__greenBorder__button-2__right" >$</button>
                    </div>
                    
                    <div className="right-2">
                        <p className="body__flex-row__words">Sort by </p>
                        <button className="body__greenBorder__button__right-2" >Trending</button>
                    </div>
                
                </div>   
          
            </div>

{/* boxes */}
            <div className="body__rectangle">

                <div className="body__rectangle-1">
                    <img style={{marginTop:"-18px" , marginLeft:"10px"}} src={bodyStar} />

                    <div className="body__flex-col">
                        <p className="body__white__heading">ETH 48 hours</p>
                        <p style={{marginTop:"5px"}} className="body__flex-row__words">Crypto </p>
                    </div>
                </div>

                <div className="dashedLine" />
                
                <div className="body__rectangle-2">
                    <div className="body__rectangle-2--top">
                    <img src={bodyIcon}/>
                    <p style={{fontSize:"12px" ,color:"rgba(225,225,225 , 0.8)" , marginLeft:"15px"}}>2,2x</p>
                    </div>

                    <p style={{marginTop:"7px"}} className="body__flex-row__words">Outcome in 6h 41m </p>
                </div>


                <div className="body__graph">
                    <img style={{marginLeft:"40px" , objectFit:"contain"}} src={bodyGraph1} />
                    <img style={{marginLeft:"40px"  ,objectFit:"contain"}} src={bodyGraph2} />
                    
                </div>


                <div className="rect-3">
                    <p className="body__white__heading">$ 34,346.00</p>
                    <p style={{marginTop:"10px"}} className="body__flex-row__words">Total commitment funds</p>
                </div>
            </div>

           
            <div className="body__rectangle">

                <div className="body__rectangle-1">
                    <img style={{marginTop:"-18px" , marginLeft:"10px"}} src={bodyStar} />

                    <div className="body__flex-col">
                        <p className="body__white__heading">ETH 48 hours</p>
                        <p style={{marginTop:"5px"}} className="body__flex-row__words">Crypto </p>
                    </div>
                </div>

                <div className="dashedLine" />
                
                <div className="body__rectangle-2">
                    <div className="body__rectangle-2--top">
                    <img src={bodyIcon}/>
                    <p style={{fontSize:"12px" ,color:"rgba(225,225,225 , 0.8)" , marginLeft:"15px"}}>2,2x</p>
                    </div>

                    <p style={{marginTop:"7px"}} className="body__flex-row__words">Outcome in 6h 41m </p>
                </div>


                <div className="body__graph">
                    <img style={{marginLeft:"40px" , objectFit:"contain"}} src={bodyGraph1} />
                    <img style={{marginLeft:"40px"  ,objectFit:"contain"}} src={bodyGraph2} />
                    
                </div>


                <div className="rect-3">
                    <p className="body__white__heading">$ 34,346.00</p>
                    <p style={{marginTop:"10px"}} className="body__flex-row__words">Total commitment funds</p>
                </div>
            </div>

           
            <div className="body__rectangle">

                <div className="body__rectangle-1">
                    <img style={{marginTop:"-18px" , marginLeft:"10px"}} src={bodyStar} />

                    <div className="body__flex-col">
                        <p className="body__white__heading">ETH 48 hours</p>
                        <p style={{marginTop:"5px"}} className="body__flex-row__words">Crypto </p>
                    </div>
                </div>

                <div className="dashedLine" />
                
                <div className="body__rectangle-2">
                    <div className="body__rectangle-2--top">
                    <img src={bodyIcon}/>
                    <p style={{fontSize:"12px" ,color:"rgba(225,225,225 , 0.8)" , marginLeft:"15px"}}>2,2x</p>
                    </div>

                    <p style={{marginTop:"7px"}} className="body__flex-row__words">Outcome in 6h 41m </p>
                </div>


                <div className="body__graph">
                    <img style={{marginLeft:"40px" , objectFit:"contain"}} src={bodyGraph1} />
                    <img style={{marginLeft:"40px"  ,objectFit:"contain"}} src={bodyGraph2} />
                    
                </div>


                <div className="rect-3">
                    <p className="body__white__heading">$ 34,346.00</p>
                    <p style={{marginTop:"10px"}} className="body__flex-row__words">Total commitment funds</p>
                </div>
            </div>

           
            <div className="body__rectangle">

                <div className="body__rectangle-1">
                    <img style={{marginTop:"-18px" , marginLeft:"10px"}} src={bodyStar} />

                    <div className="body__flex-col">
                        <p className="body__white__heading">ETH 48 hours</p>
                        <p style={{marginTop:"5px"}} className="body__flex-row__words">Crypto </p>
                    </div>
                </div>

                <div className="dashedLine" />
                
                <div className="body__rectangle-2">
                    <div className="body__rectangle-2--top">
                    <img src={bodyIcon}/>
                    <p style={{fontSize:"12px" ,color:"rgba(225,225,225 , 0.8)" , marginLeft:"15px"}}>2,2x</p>
                    </div>

                    <p style={{marginTop:"7px"}} className="body__flex-row__words">Outcome in 6h 41m </p>
                </div>


                <div className="body__graph">
                    <img style={{marginLeft:"40px" , objectFit:"contain"}} src={bodyGraph1} />
                    <img style={{marginLeft:"40px"  ,objectFit:"contain"}} src={bodyGraph2} />
                    
                </div>


                <div className="rect-3">
                    <p className="body__white__heading">$ 34,346.00</p>
                    <p style={{marginTop:"10px"}} className="body__flex-row__words">Total commitment funds</p>
                </div>
            </div>

           
            <div className="body__rectangle">

                <div className="body__rectangle-1">
                    <img style={{marginTop:"-18px" , marginLeft:"10px"}} src={bodyStar} />

                    <div className="body__flex-col">
                        <p className="body__white__heading">ETH 48 hours</p>
                        <p style={{marginTop:"5px"}} className="body__flex-row__words">Crypto </p>
                    </div>
                </div>

                <div className="dashedLine" />
                
                <div className="body__rectangle-2">
                    <div className="body__rectangle-2--top">
                    <img src={bodyIcon}/>
                    <p style={{fontSize:"12px" ,color:"rgba(225,225,225 , 0.8)" , marginLeft:"15px"}}>2,2x</p>
                    </div>

                    <p style={{marginTop:"7px"}} className="body__flex-row__words">Outcome in 6h 41m </p>
                </div>


                <div className="body__graph">
                    <img style={{marginLeft:"40px" , objectFit:"contain"}} src={bodyGraph1} />
                    <img style={{marginLeft:"40px"  ,objectFit:"contain"}} src={bodyGraph2} />
                    
                </div>


                <div className="rect-3">
                    <p className="body__white__heading">$ 34,346.00</p>
                    <p style={{marginTop:"10px"}} className="body__flex-row__words">Total commitment funds</p>
                </div>
            </div>

           

        </div>
    )
}

export default Body
