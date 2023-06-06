const Header = () => {
    return (
    <>
        <div className="page-header">
            <div className="logo-header"></div>
            <div className="arrow bounce">
            <h1 className="arrow-property"></h1>
            </div>
        </div>

        <nav className="bg-success">
            <ul className="nav justify-content-center">
                <li className="nav-item menu-item" id="about">About</li>
                <li className="nav-item menu-item" id="menu">Menu</li>
                <li className="nav-item menu-item" id="contact">Contact</li>
            </ul>
        </nav>
    </>
    );
}

export default Header;