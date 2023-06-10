import { Col, Container, Row } from "react-bootstrap";
import CardMenu from "./CardMenu";
import { listOfFoodCategory } from "../constant/menu";

const Menu = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row xs={1} sm={1} md={2} lg={3}>
                {
                    listOfFoodCategory.map((menu, i) => {
                        return (
                            <Col key= {i}>
                                <CardMenu
                                    title = {menu.title} 
                                    imageUrl = {menu.imageUrl}
                                    context = {menu.context}
                                    imageAlternative = {menu.imageAlternative}
                                ></CardMenu>
                            </Col>
                        );
                    })
                }
            </Row>            
        </Container>

    );
};

export default Menu;
