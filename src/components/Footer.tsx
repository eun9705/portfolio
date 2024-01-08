import styled from "styled-components";
import { media } from "../style/responsive";
import { KorFont600 } from "../style/globalFont";
import { FlexColumn, FlexRow } from "../style/globalStyle";
import MenuList from "./MenuList";
import Icon from "./Icon";

const Footer = () => {
    return <FooterWrapper>
        <MenuList fontSize={1.6} gap={8}/>
        <TextWrapper>
            <div>
                <Icon icon="email" width={28} height={24} />
                <p>Contact.<strong>silverccong05@gmail.com</strong></p>
            </div>
            <span>
                ⓒ 2024. Bae Eunkyoung. All rights reserved.<br />
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