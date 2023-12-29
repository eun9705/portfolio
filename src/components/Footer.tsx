import styled from "styled-components";
import MenuList from "./MenuList";
import { FlexColumn, FlexRow } from "../style/globalStyle";
import { KorFont600 } from "../style/globalFont";
import mailIcon from '../images/emailIcon.svg'
import { media } from "../style/responsive";
import theme from "../style/theme";
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
    return <FooterWrapper>
        <MenuList fontSize={1.6} gap={8}/>
        <TextWrapper>
            <div>
                <MdOutlineMailOutline />
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
    svg { width:1.3em;height:1.3em;margin-right:1rem; }
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