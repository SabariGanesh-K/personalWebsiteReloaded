import vit from "../shared/about/vit.jpg"
import nsn from "../shared/about/nsn.jpg"
function About(){
    return (
        <div>
            <div className = "container">
                To Brief , 
                blah blah blah about me
            </div>
            <br/>
            <div >
                <div style = {{fontFamily:'monospace',fontSize:'2.5rem',textAlign:'center'}}>EDUCATION</div>
                <br/><br/>
                <div style = {{background:'rgba(34, 82, 179,0.8)',borderRadius:'4rem',padding:'2rem'}}>
                <div style = {{fontFamily:'Comfortaa'}}>I am currently pursuing my UG  @ </div>
                <div style = {{textAlign:'center'}} >
                        <div>
                            <br/>
                        <img src = {vit} width = "70%" />
                        </div>
                        <div style = {{fontFamily:'Comfortaa',fontSize:'2rem'}}>
                       
                        VIT Chennai <br/>
                        </div>
                        <div style = {{fontFamily:'Comfortaa'}}>
                            (2021-2025)<br/>
                            Btech in Computer Science and Engineering with specialisation in Cyber Physical Systems
                        </div>
                </div>
                </div>
                    <br/><br/>
                <div style = {{background:'rgba(74,30,30,0.8)',borderRadius:'4rem',padding:'2rem'}}>
                <div style = {{fontFamily:'Comfortaa'}}>I completed my School life  @ </div>
                <div style = {{textAlign:'center'}} >
                        <div>
                            <br/>
                        <img src = {nsn} width = "70%" />
                        </div>
                        <div style = {{fontFamily:'Comfortaa',fontSize:'1.5rem'}}>
                       
                        NSN MEMORIAL SENIOR SECONDARY SCHOOL <br/>
                        </div>
                        <div style = {{fontFamily:'Comfortaa'}}>
                            (2006-2021)<br/>
                            Grade 10 , Grade 12 : C.B.S.E
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default About;