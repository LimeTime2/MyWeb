// Navbar.jsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '../Theme/theme';

function Navbar() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Nav>
                <NavSide>
                    <NavBrand>
                        <span className="nav-brand-highlight">&lt;</span>Pattarapong Sakwaykin
                        <span className="nav-brand-highlight">&gt;</span>
                    </NavBrand>
                    <NavLinks>
                        <ButtonLink href="#education">About</ButtonLink>
                        <ButtonLink href="#skills">Skills</ButtonLink>
                        <ButtonLink href="#timeline">Education</ButtonLink>
                        <ButtonLink href="#contact">Contact</ButtonLink>
                        
                    </NavLinks>
                    <GitHub>
                        <GitLink href="https://github.com/" className="github-link">Github Profile</GitLink>
                    </GitHub>
                </NavSide>
            </Nav>
        </ThemeProvider>
    );
}

export default Navbar;

// Styled Components
export const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: ${({ theme }) => theme.bg};
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1140px;
`;

export const NavBrand = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

export const ButtonLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const GitHub = styled.div``;

export const GitLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1.8px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 5px 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;

    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;
