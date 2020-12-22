import React from 'react'
import "./Sidebar.css"
import wave from "./images/Wave.png"
import rightArrow from "./images/rightArrow.png"
import sidebarGraph from "./images/sidebarGraph.PNG"
import rectangleSide from "./images/rectangleSide.PNG"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function SideBar() {
    return (
        <div className="sidebar">

           <div className="r-1">  
           
                <div className="green">
                        <div className="green__heading">
                            <img className="green__heading-icon" src={wave} />
                            <h4 className="green__line" >OPEN TRADES</h4>
                            <ChevronRightIcon className="green__heading-arrow" src={rightArrow} />
                        </div>
                 </div>
           

                <div className="grey">
                    
                    <div className="flex-col">
                    <p className="grey__heading">Trades in progress</p>
                    <p className=" white__heading">15</p>
                    </div>
                    
                    <div className="flex-col">
                    <p className="grey__heading closed" >Closed Outcome</p>
                    <p className=" white__heading" >25m 40s</p>
                    <p className="white__hour" >ETH 48 hour</p>
                    </div>
                </div>
           
                <hr style={{background: 'rgba(128,128,128 ,0.2)'  ,height:"1px" , border:"none" , width:"80%" , marginLeft:"20px" , marginTop:"24px"}} />
           
           </div>

          
          
          
          
           <div className="r-2">  
           
                <div className="green">
                        <div className="green__heading">
                            <TrendingUpIcon className="green__heading-icon" />
                            <h4 className="green__line" >TRADING HISTORY</h4>
                            <ChevronRightIcon className="green__heading-arrow-2" src={rightArrow} />
                        </div>
                 </div>
           
                 <div className="flex-row">
                        <p className="flex-row__words">Last</p>
                        <p className="flex-row__words">day</p>
                        <button className="flex-row__words green__week " >week</button>
                        <p className="flex-row__words">month</p>
                        <p className="flex-row__words">all</p>
                    </div>

                <div className="grey">

                   

                    <div className="flex-col">
                    <p className="grey__heading">Total trades</p>
                    <p className=" white__heading">245</p>
                    </div>
                    
                    <div style={{marginLeft:"50px"}} className="flex-col">
                    <p className="grey__heading " >Profit</p>
                    <p className=" white__heading">+21.5% </p>
                    </div>

                    
                </div>
                <br />  
                    <img style={{marginLeft:"12px"}} src={sidebarGraph}  />
           

           </div>




           <div className="r-3">  
           
           <div className="green">
                   <div className="green__heading">
                       <img className="green__heading-icon" src={rectangleSide} />
                       <h4 className="green__line" >TRAINING WALLET</h4>
                       <ChevronRightIcon className="green__heading-arrow-2" src={rightArrow} />
                   </div>
            </div>
      

           <div className="grey-2">
               
               <div style={{marginTop:"20px"}} className="flex-col">
               <p className="grey__heading">Trading</p>
               
               <div style={{display:"flex"}}>

               <p className=" white__heading">$ &nbsp; 34,752.00</p> 
               
               <button className="greenBorder__button" >TOP UP</button>
               </div>

               </div>






               <div style={{marginTop:"20px"}} className="flex-col">
               <p className="grey__heading-2">Holding</p>
               
               <div style={{display:"flex"}}>

               <p className=" white__heading-2">$ &nbsp; 4,102.00</p> 
               
               <button className="greenBorder__button-2" >BUY DAI</button>
               </div>

               </div>
            
           </div>
      
      
      </div>


        </div>
    )
}

export default SideBar
