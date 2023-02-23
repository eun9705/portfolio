import { Component } from "react";
import styled from "styled-components";
import { EngFont,FlexBox } from "./CommonStyle";
import { BsArrowRightCircle,BsArrowRightCircleFill } from 'react-icons/bs';

import flower from '../images/flower-icon.png';
import homeBg from '../images/home-bg.jpg';
import line from '../images/line.png';

import Shrikhand from '../fonts/Shrikhand-Regular.ttf';
import Playball from '../fonts/Playball-Regular.ttf';

const MaskWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    .blackBg {
        background: url(${homeBg}) no-repeat center / cover;
    }
`;
const MaskTxt = styled.div`
    position: relative;
    ${EngFont}
    font-size: 12.5rem;
    mix-blend-mode: darken;
    color: white;
    background-color: black;
    letter-spacing: 0.05em;
    /* &::after {
        content: 'PORTFOLIO';
        position: absolute;
        left:0;
        top:0;
        z-index: 10;
        mix-blend-mode: normal !important;
        color: #000 !important;
        /* text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;
        text-shadow: -1px 0 #FFF, 0 1px #FFF, 1px 0 #FFF, 0 -1px #FFF;
    } */
`;
const BorderTxt = styled.h1`
    margin: 35px 1.25rem;
    padding: 14px 34px;
    @font-face {
        font-family: 'Shrikhand';
        src: local('Shrikhand'), local('Shrikhand');
        font-style: normal;
        src : url(${Shrikhand}) format('truetype');
        font-weight:normal;
    }
    font-family: Shrikhand;
    font-size: 1.625rem;
    color: white;
    letter-spacing: 0.1em;
    border: 1px solid white;
    border-radius: 50%;

`;

const Test = styled.h1`
    position: absolute;
    left: calc(50% - 670px);
    top: calc(50% - 80px);
    ${EngFont};
    font-size: 220px;
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: thin;
    -webkit-text-stroke-color: #FFF;
    background-color: rgba(0,0,0,0);
    letter-spacing: 0.05em;
`;

const ImgBox = styled(FlexBox)`
    p { 
        margin: 0 30px;
        @font-face {
            font-family: 'Playball';
            src: local('Playball'), local('Playball');
            font-style: normal;
            src : url(${Playball}) format('truetype');
            font-weight:normal;
        }
        font-family: Playball; 
        color: white;
        font-size: 1.625rem;
        letter-spacing: 0.1em;
    }
    .turn {transform: scaleX(-1);}
`;

const Button = styled(FlexBox)`
    position: relative;
    margin-top: 10rem;
    padding: 15px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 35px;
    font-family: 'NotoSansB', '맑은 고딕', 'sans-serif';
    color:white;
    letter-spacing: 0.05rem;
    svg {
        width: 40px;
        height: 40px;
        margin-left: 1.25rem;
        fill:white;
        transition: .3s;
        &.off {
            position: relative;
            z-index: 10;
        }
        &.off:hover {
            opacity: 0;
            + .on {
                opacity: 1;
            }
        }
        &.on { 
            position: absolute;
            z-index: 0;
            right: calc(0% + 15px);
            
            opacity: 0; 
        }
    }
`;


class Home extends Component {
    render() {
        return (
            <MaskWrapper>
                <FlexBox>
                    <img src={flower} alt="꽃 아이콘" />
                    <BorderTxt>Eunkyoung's</BorderTxt>
                    <img src={flower} alt="꽃 아이콘" />
                </FlexBox>
                <div className="blackBg">
                    <MaskTxt>PORTFOLIO</MaskTxt>
                </div>
                <ImgBox>
                    <img src={line} alt="선 이미지" />
                    <p>All of Me</p>
                    <img className="turn" src={line} alt="선 이미지" />
                </ImgBox>
                <Button>
                    GO TO NEXT PAGE
                    <BsArrowRightCircle className="off" />
                    <BsArrowRightCircleFill className="on"/>
                </Button>
            </MaskWrapper>
        );
    }
}

export default Home;