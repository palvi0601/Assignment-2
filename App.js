import React, {useState} from "react"


const App=()=>{
    
    let [score,setScore] = useState(0);

    return(
        <div>
            <div className = "top">
            <h1> State concept in React JS</h1>
            <h2 className = "subheading"> Counter App</h2>
            </div>
            <div className = "middle">
            <h3>{score}</h3>
            </div>
            <div className = "bottom">
            <button className = "button" onClick = {()=>(score < 25) ? setScore(score+1) : ""}> + </button>
            <button className = "button" onClick = {()=> (score > 0) ? setScore(score-1) : ""}> - </button>
            <button className = "button" onClick = {()=>{setScore(0)}}> ~ </button>
            </div>
        </div>

    )

}
export default App