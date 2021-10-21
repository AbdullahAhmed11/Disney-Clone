import React from 'react'
import styled from 'styled-components';
import Image from "../images/viewers-disney.png";
import Image1 from "../images/viewers-marvel.png";
import Image2 from "../images/viewers-national.png";
import Image3 from "../images/viewers-pixar.png";
import Image4 from "../images/viewers-starwars.png";

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={Image} alt=""/>
            </Wrap>
            <Wrap>
                <img src={Image1} alt=""/>
            </Wrap>
            <Wrap>
                <img src={Image2} alt=""/>
            </Wrap>
            <Wrap>
                <img src={Image3} alt=""/>
            </Wrap>
            <Wrap>
                <img src={Image4} alt=""/>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div `
margin-top: 30px;
padding: 30px 0 26px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div `
border-radius: 18px;
border: 3px solid rgba(249,249,249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;

    img {
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px, 
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`