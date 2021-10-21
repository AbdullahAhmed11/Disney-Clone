import React from 'react';
import styled from "styled-components";
import Image1 from "../images/logo.svg";
import Image2 from "../images/home-icon.svg";
import Image3 from "../images/search-icon.svg";
import Image4 from "../images/watchlist-icon.svg";
import Image5 from "../images/original-icon.svg";
import Image6 from "../images/movie-icon.svg";
import Image7 from "../images/series-icon.svg";
import Image8 from "../images/user_avatar.jpg";

function Header() {
    return (
        <Nav>
            <Logo src={Image1} />
            <NavMenu>
                <a>
                    <img src={Image2} alt="" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src={Image3} alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={Image4} alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={Image5} alt="" />
                    <span>ORIGNAL</span>
                </a>
                <a>
                    <img src={Image6} alt="" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src={Image7} alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <USerImg src={Image8}/>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
height: 70px;
background: #090b13;
display:flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu = styled.div`
display: flex;
flex:1;
margin-left:25px;
align-items: center;
    a {
        display:flex;
        align-items: center;
        padding: 0 12px;
        cursor:pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height:2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom : -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition:all  0.5s ease-in-out;

            }
        }
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);            
            }
        }
    }
@media (max-width: 768px) {
    display:none
}
`
const USerImg = styled.img`
width:50px;
height: 50px;
border-radius: 50%;
cursor:pointer;

@media (max-width: 768px) {
    margin-left: 8rem;
}


`