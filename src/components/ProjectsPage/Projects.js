import { Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { useEffect ,useState} from "react";

function RenderProject({ skill, tag, desc, git, view, uses, desc2 }) {
    const [viewbutton, setviewbutton] = useState("");
    const [gitbutton, setgitbutton] = useState("");
    


    useEffect(()=>{
        if (git !== ""){
            setgitbutton(
                <a href = {git} target = "_blank"> <button className="gitbutton">GIT</button></a>
            )
        }
            if (view !== ""){
                setviewbutton(
                    <a href = {view} target = "_blank"> <button className="viewbutton">VIEW</button></a>
                )

        }
        if (git === "" && view === ""){
            setgitbutton(<div className="not-available">Project is currently not available for display.</div>)
        }
    },[])
return(
   
        <div className="projects-container">
    <div class="projectcard">
  <div class="projectcard2">
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