import {Row,Col, Button} from 'reactstrap'
function Footer(){
    return(
        
        <Row>
        <div className = "footer" style = {{textAlign:'center'}} >
            <div className = "footerSpl">
            <Col auto>
            <div className = "footerName" style = {{textAlign:'center',justifyContent:'center'}}>
                <br/>
             With ❤️, SabariGaneshK  ⚜️  ⚜️  ⚜️
            </div>
            </Col>
            <br/>
            <Col>
                <span className = "footerSocial"> <Button className = "fa fa-1x fa-instagram"></Button>@sabz_qetuowryip_1357924680</span>  <br/>
                <span className = "footerSocial"> <Button className = "fa fa-1x fa-instagram"></Button>@beingcodeworm</span>  <br/>
                <span className = "footerSocial"> <Button className = "fa fa-1x fa-linkedin"></Button>@sabariganeshk</span>
                
            </Col>
          </div>

            

         

        </div>
        </Row>
        
        
    )
}
export default Footer;