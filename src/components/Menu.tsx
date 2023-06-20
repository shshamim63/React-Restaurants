import { Col, Container, Row } from "react-bootstrap";
import CardMenu from "./CardMenu";
import { listOfFoodCategory } from "../constant/menu";

import '../style/menu.scss';
import { useEffect, useState } from "react";
import { ScreenSize } from "../utils/screen.constant";

const Menu = () => {
    const [currentWindow, setCurrentWindow] = useState(window.innerWidth)

    const handleResize = () => {
        setCurrentWindow(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const calculateMarginTopForMenu = (serialNumber: number) => {
        let currentBreakpoint = ''

        if (currentWindow < ScreenSize.sm) {
            currentBreakpoint += 'xs'
        } else if (currentWindow < ScreenSize.md) {
            currentBreakpoint += 'sm'
        } else if (currentWindow < ScreenSize.lg) {
            currentBreakpoint += 'md'
        } else {
            currentBreakpoint += 'lg'
        }

        if (serialNumber == 0) {
            return ''
        } else if (serialNumber === 1 && currentBreakpoint === 'md') {
            return ''
        } else {
            return 'mt-1'
        }
    }

    return (
        <Container className="mt-3 mb-3">
            <Row>
                {
                    listOfFoodCategory.map((menu, i) => {
                        return (
                            <Col xs={12} sm={10} md={6} lg={4} key= {i} className={calculateMarginTopForMenu(i)}>
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
