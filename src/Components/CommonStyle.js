import styled, { createGlobalStyle, css } from "styled-components";
import NotoSansB from "../fonts/NotoSansKR-Bold.otf";
import NotoSansM from "../fonts/NotoSansKR-Medium.otf";
import NotoSansR from "../fonts/NotoSansKR-Regular.otf";
import BlackHan from "../fonts/BlackHanSans-Regular.ttf";


export const GlobalStyle = createGlobalStyle`
    :root {
        --main-font: #333333;
        --sub-font: #AAAAAA;
        --background-color: #6E9FDD;
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
    * { 
        font-family: NotoSansR, 맑은 고딕, sans-serif;
        color: var(--main-font);
        margin: 0;
        padding: 0;
    }
    body { background-color: var(--background-color); }
`;

export const FlexBox = styled.div`
    display:flex;
    width: ${props => props.width || ''};
    flex-direction: ${props =>  props.direction || "row" };
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};;
`;
    
export const EngFont = css`
    @font-face {
        font-family: 'BlackHan';
        src: local('BlackHan'), local('BlackHan');
        font-style: normal;
        src : url(${BlackHan}) format('truetype');
        font-weight:normal;
    }
    font-family: BlackHan, 맑은 고딕, sans-serif;
`