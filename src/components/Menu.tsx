import { Col, Container, Row } from "react-bootstrap";
import CardMenu from "./CardMenu";
import { listOfFoodCategory } from "../constants/menu";

import "../style/menu.scss";

const Menu = () => {
  return (
    <Container>
      <Row className="g-1">
        {listOfFoodCategory.map((menu, i) => {
          return (
            <Col xs={12} sm={12} md={6} lg={4} key={i} className="p-1">
              <CardMenu
                title={menu.title}
                imageUrl={menu.imageUrl}
                context={menu.context}
                imageAlternative={menu.imageAlternative}
              ></CardMenu>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Menu;
