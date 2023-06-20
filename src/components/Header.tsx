import { Tabs, Tab } from "react-bootstrap";
import About from './About'
import Menu from "./Menu";
import Contact from "./Contact";

interface Header {
    selectedSection: string;
    handleSeclectedSection(section: string): void; 
}

const Header = ({selectedSection, handleSeclectedSection}: Header) => {
    
    const updateSelectecTab = (key: string) => {
        handleSeclectedSection(key)
    }

    return (
    <>
        <div className="page-header">
            <div className="logo-header"></div>
            <div className="arrow bounce">
                <h1 className="arrow-property"></h1>
            </div>
        </div>
        <Tabs
            id="controlled-tab-example"
            activeKey={selectedSection}
            onSelect={(value) => {updateSelectecTab(value as string)}}
            className="mb-3 justify-content-center bg-success"
        >
            <Tab tabClassName={selectedSection === "about" ? "text-secondary" : "text-muted"} eventKey="about" title="About">
                <About></About>
            </Tab>
            <Tab tabClassName={selectedSection === "menu" ? "text-secondary" : "text-muted"} eventKey="menu" title="Menu">
                <Menu></Menu>
            </Tab>
            <Tab tabClassName={selectedSection === "contact" ? "text-secondary" : "text-muted"} eventKey="contact" title="Contact">
                <Contact></Contact>
            </Tab>
    </Tabs>
    </>
    );
}

export default Header;