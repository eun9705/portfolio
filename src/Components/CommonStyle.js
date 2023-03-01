import styled, { createGlobalStyle, css } from "styled-components";
import NotoSansB from "../fonts/NotoSansKR-Bold.otf";
import NotoSansM from "../fonts/NotoSansKR-Medium.otf";
import NotoSansR from "../fonts/NotoSansKR-Regular.otf";
import BlackHan from "../fonts/BlackHanSans-Regular.ttf";
import Shrikhand from '../fonts/Shrikhand-Regular.ttf';
import Playball from '../fonts/Playball-Regular.ttf';


export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: var(--black);
        --main-color: #6E9FDD;
        --sub-color-01: #0E2F91;
        --sub-color-02: #D2D5F0;
    }
    @font-face {
        font-family: 'NotoSansB';
        src: local('NotoSansB'), local('NotoSansB');
        font-style: normal;
        src : url(${NotoSansB}) format('opentype');
        font-weight:normal;
    }
    @font-face {
        font-family: 'NotoSansM';
        src: local('NotoSansM'), local('NotoSansM');
        font-style: normal;
        src : url(${NotoSansM}) format('opentype');
        font-weight:normal;
    }
    @font-face {
        font-family: 'NotoSansR';
        src: local('NotoSansR'), local('NotoSansR');
        font-style: normal;
        src : url(${NotoSansR}) format('opentype');
        font-weight:normal;
    }
    @font-face {
        font-family: 'BlackHan';
        src: local('BlackHan'), local('BlackHan');
        font-style: normal;
        src : url(${BlackHan}) format('truetype');
        font-weight:normal;
    }
    @font-face {
        font-family: 'Shrikhand';
        src: local('Shrikhand'), local('Shrikhand');
        font-style: normal;
        src : url(${Shrikhand}) format('truetype');
        font-weight: normal;
    }
    @font-face {
            font-family: 'Playball';
            src: local('Playball'), local('Playball');
            font-style: normal;
            src : url(${Playball}) format('truetype');
            font-weight:normal;
        }
    html{ font-size: 62.5%; } //기본은 16px 하지만 사용자가 글꼴을 작거나 크게 보는 경우를 위해 font-size를 다음과 같이 설정함
    body { background-color: var(--main-color);overflow:hidden; }
    * { margin: 0;padding: 0;font-family: NotoSansR, '맑은고딕', sans-serif;font-size:1.6rem;color: var(--white); }
    a { text-decoration: none;color:var(--main-font); }
    ol,li { list-style: none; }
    button { border:none; }
    @media screen and (max-width: 1280px){
        html { font-size: 50%; }
    }
    @media screen and (max-width:992px) {
        html { font-size: 25%; }
    }
`;

export const FontFix = css`
    font-family: ${props => props.font};
    font-size: ${props => props.size};
`;

export const FlexBox = styled.div`
    display:flex;
    width: ${props => props.width || ''};
    height: ${props => props.height || ''};
    flex-direction: ${props =>  props.direction || "row" };
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};;
`;

export const PositionBox = css`
    position: ${props => props.position || 'absolute'};
    ${props => {
        if(props.value) {
            return css`
                left: ${props => props.value.left || ''};
                top: ${props => props.value.top || ''};
                right: ${props => props.value.right|| ''};
                bottom: ${props => props.value.bottom|| ''};
            `
        }
    }}
`;
    
export const MediumFont = css` font-family: 'NotoSansM', '맑은고딕', sans-serif;`

export const BoldFont = css` font-family: 'NotoSansB', '맑은고딕', sans-serif;`