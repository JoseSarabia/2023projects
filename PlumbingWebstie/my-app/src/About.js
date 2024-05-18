import React from "react"
import aboutUsPic from "./projects/photos/pexels-photo-1080721.jpg"

function About() {

    return(

        <div style={{padding: 30 , margin: 0, color: `blue` , backgroundImage:`url(${aboutUsPic})` , backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <h2>Bibb County Ga  Established Plumbing Pros</h2>

            <h3>We’ve Been Solving Home and Commercial Emergencies Since 1988</h3>
            <p>Cold calling a stranger can be awkward. Asking those strangers to repair or improve a critical part of your home is even worse. How about we fix all that by introducing ourselves and telling you what we’re all about?

</p>
            <h3>Why Choose Us</h3>

            <p> There’s no shortage of plumbers to pick from across the region, but none match 
                our mix of proven experience, quality service and timely results. We offer a wide 
                range of services, including water heater installations and gas line repair for 
                commercial and residential properties.  </p>

            <h3> Reviews </h3>
            <p> Ricky Heath Plumbing has earned repeat customers and good will in communities such as Gray, GA. 
                Take a look at all the praise and positive feedback we’ve received from our clients. </p>
        </div>
    )
}

export default About