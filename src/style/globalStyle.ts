import styled, { createGlobalStyle,css } from "styled-components";
import reset from "styled-reset";
import { media } from './responsive';

export const GlobalStyled = createGlobalStyle`
    ${reset}
    html { 
        font-size:62.5%;
    }
    body {
        /* background-setting */
        background-color: ${({theme}) => theme.backgroundColor};
        /* font-setting */
        font-family:'SCore-400','맑은 고딕',sans-serif;font-weight:400;
        font-size: 2rem;
        color: ${({theme})=> theme.fontColor};
        overflow-x:hidden;
        line-height: normal; //line-height:1 대신 normal 사용
    }
    button,hr { border:none; }
    .mobile-only { display:none; }
    ${media.medium} {
        html { font-size:50%; }
    }
    ${media.small} {

    }
    ${media.xsmall} {
        html { 
            font-size:25%; 
            text-size-adjust:none;
            -webkit-text-size-adjust:none; 
            -moz-text-size-adjust:none;
            -ms-text-size-adjust:none;
        }
        body { font-size:3rem; }
        .mobile-none { display:none; }
        .mobile-only { display:block; }
    }
`

export const FlexRow = css`
    display: flex;
    flex-direction: row;
`

export const FlexColumn = css`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    width: 80.2vw;
`

export const GridCenter = css`
    display: grid;
    place-items: center;
`
