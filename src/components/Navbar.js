import React from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export class Navbar extends React.Component {
    render(){
        return(
<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
<Link to="/">
<img src={logo} alt="store" className="navbar-brand" width="50px"/>
</Link>
<ul className="navbar-nav align-items-center">
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
     Products
</Link>
</li>
</ul>
<Link to="/cart" className="ml-auto">
    <ButtonContainer>
        <span className="mr-2">
        <i className="fas fa-shopping-basket"></i>
        </span>
        my cart
    </ButtonContainer>
</Link>
</NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainPurple);
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.1rem;
    text-transform:capitalize!important;
}

`;