import { Link } from "react-router-dom"
import Header from "../Header"
import "../NotFound.css"



export  function NotFound(){
    return <>
        <Header/>
        <div className="not-found">
        

        <h1>Oops! This page seems to be missing</h1>
        <Link  className="not-found-goback" to="/">Go back to Home page</Link>
    </div>
       </>
}
