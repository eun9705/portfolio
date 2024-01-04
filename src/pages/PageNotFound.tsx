import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import styled from "styled-components";
import { media } from "../style/responsive";
import { KorFont600, SubFontStrong } from "../style/globalFont";
import { FlexColumn } from "../style/globalStyle";
import errorImgLight from '../images/errorImg_black.png';
import errorImgDark from '../images/errorImg_white.png';

const PageNotFound = () => {
    const { theme } = useContext(ThemeContext);
    return <PageNotFoundWrapper>
        {theme === 'dark' ? <img src={errorImgDark} alt="에러 이미지" /> : <img src={errorImgLight} alt="에러 이미지"/>}
        <strong>Page Not Found</strong>
        <p>입력한 주소가 잘못되었거나, <br className="mobile-only"/>사용이 일시 중단되어 요청하신 페이지를 찾을 수 없습니다.</p>
    </PageNotFoundWrapper>
}

const PageNotFoundWrapper = styled.div`
    ${FlexColumn}align-items:center;justify-content:center;
    height:100vh;
    img { height:60%; }
    strong { 
        ${KorFont600}
        font-size:4rem; 
        color: #F2C94C;
    }
    p { 
        margin-top:1rem;
        ${SubFontStrong} 
    }
    ${media.small} {
        img { height:auto; }
    }
    ${media.xsmall} {
        text-align:center;
        img { width:80%; }
    }
`

export default PageNotFound;