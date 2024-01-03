import styled from "styled-components";
import MenuList from "./MenuList";
import { FlexColumn, FlexRow } from "../style/globalStyle";
import { KorFont600 } from "../style/globalFont";
import mailIcon from '../images/emailIcon.svg'
import { media } from "../style/responsive";
import theme from "../style/theme";

const Footer = () => {
    return <FooterWrapper>
        <MenuList fontSize={1.6} gap={8}/>
        <TextWrapper>
            <div>
                {/* <MdOutlineMailOutline /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                    <path d="M20.4118 23H7.47059C3.58824 23 1 21.0588 1 16.5294V7.47059C1 2.94118 3.58824 1 7.47059 1H20.4118C24.2941 1 26.8824 2.94118 26.8824 7.47059V16.5294C26.8824 21.0588 24.2941 23 20.4118 23Z" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.4119 8.11768L16.3613 11.353C15.0284 12.4141 12.8413 12.4141 11.5084 11.353L7.4707 8.11768" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Contact.<strong>eun97052425@gmail.com</strong></p>
            </div>
            <span>
                ⓒ 2023. Bae Eunkyoung. All rights reserved.<br />
                해당 사이트는 1920*1080해상도에 최적화 되었습니다.
            </span>
        </TextWrapper>
    </FooterWrapper>
}

const FooterWrapper = styled.footer`
    ${FlexColumn}
    justify-content: space-between;width:100vw;height:20rem;padding:4.3rem 10rem;box-sizing:border-box;
    background-color: ${({theme})=>theme.subBackgroundColor};
    ${media.small} {
        height:30rem;
    }
    ${media.xsmall} {
        height:14em;padding: 2.5em;
    }
`

const TextWrapper = styled.div`
    text-align: right;
    * { font-size:1.4rem; }
    div {
        ${FlexRow}  
        align-items:center;justify-content:flex-end;margin-bottom:2rem; 
    }
    svg { width:1.4em;height:1.4em;margin-right:1rem; }
    path { stroke:${({theme})=>theme.fontColor} }
    p { display: inline-block; }
    span { display:block; }
    strong { 
        ${KorFont600} 
    }
    ${media.xsmall} {
        * { font-size:2.5rem; }
    }
`

export default Footer;