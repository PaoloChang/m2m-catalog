import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* background-color: lightblue; */
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled.div`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 758px) {
    display: block;
    /* background-image: url(name_that_imported) */
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 45%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 758px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled(Button)`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 758px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>M2M</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((menu, index) => (
          <NavMenuLinks key={index} to={menu.link}>
            {menu.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary={true}>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
