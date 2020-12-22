import React from "react";
import { 
    Nav, 
    NavLogo, 
    NavList, 
    NavListPart, 
    NavButtonPart, 
    Navbtn, 
    NavLogoPart, 
    NavBarContainer 
} from "./NavStyle";
import HNLogo from "../../images/HNLogo.png"

const Navbar = () => {
    return (
        <Nav>
            <NavBarContainer>
                <NavLogoPart>
                    <NavLogo src = {HNLogo} />
                </NavLogoPart>
                <NavListPart>
                    <NavList>Home</NavList>
                    <NavList>Experience</NavList>
                    <NavList>Achievement</NavList>
                    <NavList>Blog</NavList>
                    <NavList>Gallery</NavList>
                </NavListPart>
                <NavButtonPart>
                    <Navbtn>Contact</Navbtn>
                </NavButtonPart>
            </NavBarContainer>
        </Nav>
    )
};

export default Navbar;