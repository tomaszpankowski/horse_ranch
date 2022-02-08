import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import RanchS1 from "../components/ranch-s1";
import RanchS2 from "../components/ranch-s2";
import RanchS3 from "../components/ranch-s3";

class Ranch extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <RanchS1/>
                <RanchS2/>
                <RanchS3/>
            </Container>    
        );
    }
}

export default Ranch;