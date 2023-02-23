import { Component } from "react";
import styled from "styled-components";
import { EngFont } from "./CommonStyle";
import BlackHan from '../fonts/BlackHanSans-Regular.ttf';

import flower from '../images/flower-icon.png';

const MainSection = styled.section`
    width: 100vw;
    height: 100vh;
    background: url('../images/home-bg.jpg') no-repeat center / cover;
`;

const TxtMaskDiv = styled.div`
    width: 100vw;
    height:100vh;
    background-color: black;
`;

const MaskTxt = styled.h1`
    ${EngFont}
    color:white;
    font-size: 220px;
    // @font-face {
    //     font-family: 'BlackHan';
    //     src: local('BlackHan'), local('BlackHan');
    //     font-style: normal;
    //     src : url(${BlackHan}) format('truetype');
    //     font-weight:normal;
    // }
    // font-family: BlackHan, 맑은 고딕, sans-serif;
    --webkit-fill-color: transparent
`;

class Home extends Component {
    render() {
        return (
            <MainSection>
                <TxtMaskDiv>
                    <img src={flower} alt="꽃 아이콘" />
                    <MaskTxt>PORTFOLIO</MaskTxt>
                </TxtMaskDiv>     
            </MainSection>
        );
    }
}

export default Home;