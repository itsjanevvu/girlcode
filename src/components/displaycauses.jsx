import React from "react"
import {useNavigate} from "react-router-dom"
export default function Display (){
    let navigate= useNavigate();
    return(

        

            <div>
                <h5>This is where the causes are displayed one by one</h5>
                
                <button  onClick={()=> {navigate('/match')}}>Select a cause</button>


            </div>
           




    )
}