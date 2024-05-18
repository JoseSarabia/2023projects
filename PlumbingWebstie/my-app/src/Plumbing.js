import React from "react"
import {useNavigate} from "react-router-dom"
import fixingPipes from "./projects/photos/istockphoto-644996994-612x612.jpg"

import sink from "./projects/photos/pexels-photo-1080721.jpg"
function Plumbing() {

    const navigate = useNavigate()

    
    return(

        <div  style={{padding: 30 , margin: 0, color: `red` , backgroundImage:`url(${fixingPipes})` , backgroundRepeat: "no-repeat", backgroundSize: "cover"}} classname= "homeSection"   >
            <h2 >Plumbing Services</h2>
            <h1>Expert Care for Residential and Commercial Plumbing Systems</h1>
            <p> Our plumbers are the premier choice for Warner Robins, GA, residents and folks in the surrounding communities. Take a look at the extensive plumbing services we offer in the area. </p>

           
           <h1>Water Heater Repair</h1>
           <p> Few things grab your attention like an unexpectedly cold shower. We’ll help get your mind focused on other matters by repairing your tankless or traditional water heater.

            </p>

            <h1>
            Water Leak Detection & Repair
            </h1>

          <p>
          Water follows the path of least resistance. That means the wall or ceiling showing water damage may not be near the source of the leak. Our team 
          has the methods and tools to find and repair your leak.
          </p>

          <h1>
          Gas Line Repairs
          </h1>

          <p>
          Leave anything involving your gas lines to the professionals. If you think you have a leak, call 911 and evacuate your home. Our certified professionals
           can repair your gas lines once you’re safe and authorities have secured your home.
          </p>

          <form> 
            <label>Enter Your Name : 
                <input type="text"/>
            </label>

            <label>Contact Number :
                <input type= "number"/>
            </label>
          </form>

            <button onClick={() => navigate("/About")}>Go to Products page</button>

        </div>
    )
}

export default Plumbing