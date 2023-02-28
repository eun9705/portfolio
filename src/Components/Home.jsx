import { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { EngFont,FlexBox, PositionBox } from "./CommonStyle";
import { AiOutlineArrowRight } from 'react-icons/ai';

import flower from '../images/flower-icon.png';
import homeBg from '../images/home-bg.jpg';
import line from '../images/line.png';
import borderTextImg from '../images/border-text.png';


const MaskWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    /* transition: .8s cubic-bezier(1,0,.9,.86); */
    /* transition: .7s cubic-bezier(.18,0,1,.41); */
    /* transition: .5s cubic-bezier(.05,.07,.5,.32); */
    &.on { 
        transition: .8s cubic-bezier(1,0,.9,.76);
        transform:scale(20);opacity:0;

    }
    .bgBox {
        position: relative;
        margin-top: 2rem;
        background: url(${homeBg}) no-repeat center / cover;
    }
`;
const MaskTxt = styled.div`
    position: relative;
    ${EngFont}
    font-size: 20rem;
    mix-blend-mode: darken;
    background-color: black;
    letter-spacing: 1rem;
`;
const BorderTxt = styled.p`
    margin: 0 2rem;
    padding: 1.4rem 3.4rem;
    font-family: Shrikhand;
    font-size: 2rem;
    letter-spacing: .3rem;
    border: 1px solid white;
    border-radius: 50%;
`;

const ImgBox = styled(FlexBox)`
    p { 
        margin: 0 3rem;
        font-family: Playball; 
        font-size: 2rem;
        letter-spacing: .3rem;
    }
    .turn {transform: scaleX(-1);}
`;

const GoButton = styled(FlexBox)`
    ${PositionBox}
    padding: 1.5rem;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 3.5rem;
    font-family: 'NotoSansB', '맑은 고딕', 'sans-serif';
    font-size: 1.2rem;
    color:white;
    letter-spacing: .1rem;
    background-color: #000000;
    /* span { display:block; } */
    /* svg {
        width: 3rem;
        height: 3rem;
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
    } */
`;

const LinkWrapper = styled(FlexBox)`
    ${PositionBox}
    a {
        font-family: 'NotoSansM', '맑은고딕', 'sans-serif';
        font-size: 1.6rem;
        color:white;
        &:first-child { margin-right:3.5rem; }
    }
`;

const BorderTextImgBox = styled.div`
    ${PositionBox}
`;

const CircleIconBase = styled(FlexBox)`
    width:4rem;
    height:4rem;
    background-color: #000000;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    color: #FFFFFF;
    svg { 
        width:2rem;
        height:2rem;    
    }
`;

const CircleIconHover = styled(CircleIconBase)`
    background-color: #FFFFFF;
    svg { 
        fill: #000000;
    }
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { startAni:false }
    }
    render() {
        return (
            <MaskWrapper className={this.state.startAni ? "on" : ''}>
                <FlexBox>
                    <img src={flower} alt="꽃 아이콘" />
                    <BorderTxt>Eunkyoung's</BorderTxt>
                    <img src={flower} alt="꽃 아이콘" />
                </FlexBox>
                <div className="bgBox">
                    <MaskTxt>PORTFOLIO</MaskTxt>
                    <BorderTextImgBox value={{right:"-85px",top:"-25px"}}>
                        <img src={borderTextImg} alt="" />
                    </BorderTextImgBox>
                </div>
                <ImgBox>
                    <img src={line} alt="선 이미지" />
                    
                    <p>All of Me</p>
                    <img className="turn" src={line} alt="선 이미지" />
                </ImgBox>
                <GoButton value={{bottom:"40px"}} onClick={()=>this.setState({startAni:true})}>
                    <FlexBox direction={"column"}>
                        <span>GO TO NEXT PAGE</span>
                        <span>GO TO NEXT PAGE</span>
                    </FlexBox>
                    <FlexBox direction={"column"}>
                        <span>
                            <CircleIconBase>
                                <AiOutlineArrowRight />
                            </CircleIconBase>
                        </span>
                        <span>
                            <CircleIconHover>
                                <AiOutlineArrowRight />
                            </CircleIconHover>
                        </span>
                    </FlexBox>
                    {/* <BsArrowRightCircle className="off" />
                    <BsArrowRightCircleFill className="on"/> */}
                </GoButton>
                <LinkWrapper value={{left:"auto",right:"40px",top:"auto",bottom:"40px"}}>
                    <Link to="https://www.notion.so/re-code/Re-code-6d45e13c0bf543d79bd9b8303845a439" target={"_blank"}>NOTION</Link>
                    <Link to="https://github.com/eun9705" target={"_blank"}>GITHUB</Link>
                </LinkWrapper>
            </MaskWrapper>
        );
    }
}

export default Home;