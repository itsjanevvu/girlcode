import React from "react"
import {useNavigate} from "react-router-dom"
export default function  Filter (){
    let navigate= useNavigate();
    return(

       
        

            <div>
                <h5>This is Jadiha's page</h5>

                <button  onClick={()=> {navigate('/display')}}>Fill in skills</button>


            </div>
           




    )
}