import React from 'react';
import styled from "styled-components";
import Back from "../images/download.jfif";
import ImgLogo from "../images/logo.svg";
import Play from "../images/play-icon-black.png";
import PlayW from "../images/play-icon-white.png";
import Group from "../images/group-icon.png";

function Detail() {
    return (
        <Container>
            <Background>
                <img src={Back} alt=""/>
            </Background>
            <ImageTitle>
                <img src={ImgLogo} alt=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={Play} alt=""/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src={PlayW} alt=""/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupMatchButton>
                    <img src={Group} alt="" />
                </GroupMatchButton>
            </Controls>
            <Subtitle>
                2018 . 7m . Family, Fantasy, Kids, Animation 
            </Subtitle>
            <Description>
            Enjoy flexible booking conditions when booking your trip to Disneyland Paris.Enjoy flexible booking conditions when booking your trip to Disneyland Paris.
            </Description>
        </Container>
    )
}

export default Detail
const Container = styled.div `
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;

`
const Background = styled.div `
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index: -1;
opacity: 0.8;
img {
    width:100%;
    height:100%;
    object-fit: cover;
}
`
const ImageTitle = styled.div `
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
img {
    width:100%;
    height:100%;
    object-fit: cover;
}

`
const Controls = styled.div `
    display:flex;
    align-items: center;
`
const PlayButton = styled.button `
border-radius: 4px;
font-size: 15px;
padding: 0 24px;
display:flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
border: none;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
&:hover {
    background: rgb(198,198,198)
}
`
const TrailerButton = styled(PlayButton) `
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
text-transform: uppercase;

`
const AddButton = styled.button `
margin-right: 16px;
border: 2px solid white;
border-radius:50%;
width:44px;
heihgt: 44px;
display:flex;
align-items:center;
justify-content: center;
cursor:pointer;
background-color: rgba(0,0,0,0.6);

        span {
            font-size: 30px;
            color:white;
        }
`
const GroupMatchButton = styled(AddButton) `
background: rgb(0,0,0);

`
const Subtitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`
const Description = styled.p`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
min-width: 760px;
`