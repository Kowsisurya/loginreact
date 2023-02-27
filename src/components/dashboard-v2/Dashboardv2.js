import Section1 from "./Section1";
import "./dashboardv2.css";
import Section2 from "./Section2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboardv2 = () => {
    return(
        <div>
            <Row>
                <Col>
                    <div className="sticky-costimize-menu">
                        <div className="v2-section-1">
                            <Section1 />
                        </div>
                    </div>
                    
                    <div className="v2-section-2">
                        <Section2 />
                    </div>
                </Col>
            </Row>  
        </div>
    );
}
export default Dashboardv2;