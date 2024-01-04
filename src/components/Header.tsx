import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../style/responsive";
import { FlexRow } from "../style/globalStyle";
import MenuList from "./MenuList";
import Logo from '../images/logo.svg';

const Header = () => {
    return <HeaderWrapper>
        <Link to="/">
            <img src={Logo} alt="로고" />
        </Link>
        <MenuList fontSize={2} gap={3}/>
    </HeaderWrapper>
}

const HeaderWrapper = styled.header`
    position:absolute;z-index:1;width: 100vw;height:10rem;
    ${FlexRow}
    align-items:center;justify-content: space-between;padding: 0 5rem;box-sizing:border-box;
    ${media.large} {
        img { width:5rem; }
    }
    ${media.small} {
        img { width:3.5rem; }
    }
    ${media.xsmall} {
        height:9em;padding:0 2.5em;
        img { width:3.1em; }
    }
`

export default Header;