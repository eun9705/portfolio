import styled, { createGlobalStyle,css } from "styled-components";
import Pacifico from '../fonts/Pacifico-Regular.woff'
import SCDream4 from '../fonts/SCDream4.woff';
import SCDream5 from '../fonts/SCDream5.woff';
import SCDream6 from '../fonts/SCDream6.woff';

export const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: "Pacifico-400";
        src: url(${Pacifico}) format("woff"); 
        font-weight: 400;
    }
    @font-face {
        font-family: "SCore-400";
        src: url(${SCDream4}) format("woff"); 
        font-weight: 400;
    }
    @font-face {
        font-family: "SCore-500";
        src: url(${SCDream5}) format("woff"); 
        font-weight: 500;
    }
    @font-face {
        font-family: "SCore-600";
        src: url(${SCDream6}) format("woff"); 
        font-weight: 600;
    }
`

/* font-style */
export const KorFont400 = css`
    font-family: 'SCore-400','맑은 고딕',sans-serif;font-weight:400;
`

export const KorFont500 = css`
    font-family: 'SCore-500','맑은 고딕',sans-serif;font-weight:500;
`

export const KorFont600 = css`
    font-family: 'SCore-600','맑은 고딕',sans-serif;font-weight:600;
`

export const EngFont = css`
    font-family: 'Pacifico-400',serif;font-weight:400;
`
export const SubPageTitle = styled.h2<{highlight?:string,direction?:string}>`
    ${KorFont600}
    font-size: 8rem;
    ${(props)=>props.highlight && 
        css`
           span { color:${props.highlight} } 
        `    
    }
`
export const SubTitle = styled.h2<{color?:string,direction?:string}>`
    position:relative;width:100%;text-align:center;
    ${KorFont600}
    font-size: 5rem;
    ${(props)=>props.color &&
        css`
        span { color:${props.color} }`
    }
    &:after { 
        content:'';position:absolute;left:0;bottom:.28em;width:calc(50% - 2em);height:.1em;background-color:${(props) => props.color};border-radius:0 .1em .1em 0; 
        ${(props) => props.direction === 'right' && css`
            left:auto;right:0;
            width:calc(50% - 4em); 
            border-radius: .1em 0 0 .1em;
        `}
    }
`

export const SubFont = css`
    color: ${({theme})=>theme.subFontColor};
`

export const SubFontStrong = css`
    ${SubFont};
    ${KorFont500}
`