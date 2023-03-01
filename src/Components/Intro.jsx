import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import $ from 'jquery';
import { BoldFont, FlexBox, MediumFont, PositionBox } from "./CommonStyle";
import { AiOutlineArrowRight } from 'react-icons/ai';
import flower from '../images/flower-icon.png';
import homeBg from '../images/home-bg.jpg';
import line from '../images/line.png';
import borderTextImg from '../images/border-text.png';

const MaskWrapper = styled(FlexBox)`
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
    font-family: BlackHan, NotoSansB, sans-serif;
    font-size: 20rem;
    letter-spacing: 1rem;
    mix-blend-mode: darken;
    background-color: black;
`;
const BorderTxt = styled.p`
    margin: 0 2rem;
    padding: 1.4rem 3.4rem;
    border: 1px solid white;
    border-radius: 50%;
    font-family: Shrikhand, NotoSansR, serif;
    font-size: 2rem;
    letter-spacing: .3rem;
`;

const ImgBox = styled(FlexBox)`
    p { 
        margin: 0 3rem;
        font-family: Playball, NotoSansR, serif; 
        font-size: 2rem;
        letter-spacing: .3rem;
    }
    .turn { transform: scaleX(-1); }
`;

const GoButton = styled(FlexBox)`
    ${PositionBox}
    padding: 1.5rem;
    border: 1px solid var(--white);
    border-radius: 3.5rem;
    background-color: var(--black);
    cursor: pointer;
    span { 
        ${BoldFont}
        font-size: 1.2rem;
        letter-spacing: .1rem;
    }
`;

const LinkWrapper = styled(FlexBox)`
    ${PositionBox}
    a {
        ${MediumFont}
        &:first-child { margin-right:3.5rem; }
    }
`;

const BorderTextImgBox = styled.div`
    ${PositionBox}
`;

const CircleIconBase = styled(FlexBox)`
    width: 4rem;
    height: 4rem;
    background-color: var(--black);
    border: 1px solid var(--white);
    border-radius: 50%;
    color: var(--white);
    svg { width:2rem; height:2rem;}
`;

const CircleIconHover = styled(CircleIconBase)`
    background-color: var(--white);
    svg { fill: var(--black); }
`;

class Intro extends Component {
    render () {
        return (
            <MaskWrapper className={this.props.value ? "on" : ''} width={"100vw"} height={"100vh"} direction={"column"} id={"test"}>
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
                <GoButton value={{bottom:"40px"}} onClick={this.props.fn}>
                {/* <GoButton value={{bottom:"40px"}} onClick={()=>this.setState({startAni:true})}> */}
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
                </GoButton>
                <LinkWrapper value={{left:"auto",right:"40px",top:"auto",bottom:"40px"}}>
                    <Link to="https://www.notion.so/re-code/Re-code-6d45e13c0bf543d79bd9b8303845a439" target={"_blank"}>NOTION</Link>
                    <Link to="https://github.com/eun9705" target={"_blank"}>GITHUB</Link>
                </LinkWrapper>
            </MaskWrapper>
        )
    }

}

export default Intro;