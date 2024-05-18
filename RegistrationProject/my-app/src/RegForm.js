import React from "react";
import Title from "./Title"
import Button from "./Button"


function RegForm(){

    return(
        <div  className="m-auto">
            <div  className="container m-auto mt-4 p-2 shadow-sm border-5">
                <Title text="Resgistration"/>
                <form>
                    <div  className="form-group">
                        <input type="text"  placeholder="Enter your name"/>
                        <label className=" text-danger fs-sm"> Please enter your name</label>
                    </div> {""}

                    <div className="form-group">
                        <input type="email" placeholder="Enter your email"/>
                        <label className="text-danger fs-sm">Please Enter your email</label>
                    </div> {""}

                    <div className="form-group">
                        <input type="password" placeholder="Enter your password"/>
                        <label className="text-danger fs-sm">Please enter your password</label>
                    </div> {""}

                    <Button  btnClass={"btn-primary btn-lg btn-block"}  text="Register" />
                    
                    
                </form>
               
             </div>

        </div>
    )
}

export default RegForm