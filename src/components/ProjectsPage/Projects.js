
import { useEffect ,useState} from "react";

function RenderProject({ skill, tag, desc, git, view, uses, desc2 }) {
    const [viewbutton, setviewbutton] = useState("nil");
    const [gitbutton, setgitbutton] = useState("nil");
    


    useEffect(()=>{
        if (git !== "nil"){
            setgitbutton(
                <a href = {git} target = "_blank" rel="noreferrer"> <button className="gitbutton">GIT</button></a>
            )
        }
        else{
            setgitbutton(null)
        }
            if (view !== "nil"){
                setviewbutton(
                    <a href = {view} target = "_blank" rel="noreferrer"> <button className="viewbutton">VIEW</button></a>
                )
                

        }
        else{
            setviewbutton(null)
        }

        
        
    },[git,view])
return(
   
        <div className="projects-container">
            
    <div className="projectcard">
  <div className="projectcard2">
<div className="skill">{skill}</div>
<div className="tag">{tag}</div>
<div className="desc">{desc}</div>
<div className="desc">{desc2}</div>
<div className="button-container" > {gitbutton} {viewbutton} </div>
  </div>
</div>
</div>

)


}

export default RenderProject;