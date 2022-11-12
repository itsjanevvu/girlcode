
import React from "react"
// import Filter from './components/filtercauses';
import {useNavigate} from "react-router-dom"


export default function Signin (){

    let navigate= useNavigate();
    return(
// 
       
        

            <div className = "footer-text">

                {/* <button>Sign in (to Jadiha's page)</button> */}
                <button  onClick={()=> {navigate('/filters')}}>Sign in</button>


            </div>
           




    )
}