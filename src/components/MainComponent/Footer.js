import {Row,Col} from 'reactstrap'
import './footer.css'
function Footer(){
    return(
        
        <Row>
        <div className = "footer" style = {{textAlign:'center'}} >
            <div className = "footerSpl">
            <Col auto>
            <div className = "footerName" style = {{textAlign:'center',justifyContent:'center'}}>
                <br/>
             With ❤️, SabariGaneshK <br/> ⚜️  ⚜️  ⚜️
            </div>
            </Col>
            <br/>
      
          </div>

        </div>
        </Row>
        
        
    )
}
export default Footer;