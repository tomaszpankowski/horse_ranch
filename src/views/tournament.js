import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import TournamentS1 from "../components/tournament-s1";
import TournamentS2 from "../components/tournament-s2";
import TournamentS3 from "../components/tournament-s3";
import TournamentS4 from "../components/tournament-s4";

class Tournament extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <TournamentS1/>
                <TournamentS2/>
                <TournamentS3/>
                <TournamentS4/>
            </Container>    
        );
    }
}

export default Tournament;