import React from "react"

import careersPic from "./projects/photos/pexels-photo-3183148.jpg"


function Careers() {

    return(
        // backgroundImage:`url(${fixingPipes})` , backgroundRepeat: "no-repeat", backgroundSize: "cover"
        <div  style={{ padding: 20,  backgroundImage: `url(${careersPic})` , backgroundRepeat: "no-repeat", backgroundSize: "cover" ,}}>
            <h1 style= {{color: `pink`}}>Where Hiring</h1>

            <h2 style ={{ color: `blue`}}>We Help Plumbers Advance in Their Careers</h2>
            <h3  style ={{ color: `purple`}}>Join Our Growing Team Serving with in the Macon, GA Area</h3>
        <div style={{color: `green`}}>

            <p> Are looking for a career instead of another job? It’s something we can relate to at Ricky Heath Plumbing. 
                We want to build a legacy that we can be proud of by providing truly great service.
                 We’d love for you to be a part of it.
                 </p>

                 <p>It’s why we don’t skimp to keep committed, talented, friendly people who share in our vision. 
                    To ensure we work with the best of the best, we offer above-market wages and a generous benefits package, 
                    including health, dental and vision insurance, an IRA and paid time off and holidays.
                     We want you to keep a healthy work-life balance so you’re fresh and ready for our customers.
                 </p>

                 <p>
                 Our positions aren’t limited to experienced plumbers, either. While established candidates are welcome, 
                 we’re also happy to take on recent high school graduates. We’ll pay you while you take our training and provide you with the equipment you’ll need to get started. 
                 You just need to bring strong communication skills and a can-do attitude.
                 </p>

                 <p>
                 So, what are you waiting for? Apply today for a job that teaches you practical skills
                  and lets you improve the days of people across the region. 
                 If you have any questions, feel free to reach out to us at (478) 250-8322.
                 </p>

        </div>


        </div>
    )
}

export default Careers