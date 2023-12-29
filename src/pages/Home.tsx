import styled from "styled-components";
import { FlexColumn } from "../style/globalStyle";
import Banner from "../components/Banner";
import MainBgLight from '../images/mainImg_light.png';
import MainBgDark from '../images/mainImg_dark.png';
import OverviewBg from '../images/introduceBg.png';
import { EngFont } from "../style/globalFont";
import ProjectImageCard from "../components/ProjectImageCard";
import { media } from "../style/responsive";
import theme from "../style/theme";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <HomeWrapper>
            <MainImgWrapper className={theme === 'dark' ? 'dark' : ''}/>
            <OverViewWrapper>
                <p>
                    안녕하세요! 프론트엔드 개발자 배은경입니다.<br />
                    최고의 사용자 경험을 제공하는 개발자로 거듭나기 위해<br />
                    저만의 속도로 꾸준히 전진하는 중입니다.
                </p>
            </OverViewWrapper>
            <Banner />
            <ProjectWrapper>
                <h2><span>Side</span> Project</h2>
                <ProjectImageCard />
            </ProjectWrapper>
        </HomeWrapper>
    )
}   

const HomeWrapper = styled.div`
    ${FlexColumn}
    align-items: center;
`
const MainImgWrapper = styled.div`
    width: 100vw;height:100vh;
    background:${({theme})=>theme.subBackgroundColor} url(${MainBgLight}) no-repeat center / 45% auto;border-radius:0 0 150rem 150rem / 0 0 15rem 15rem;
    box-shadow:${({theme})=>theme.basicShadow};
    &.dark {
        background-image: url(${MainBgDark});
    }
    ${media.small} {
        height:50vh;min-height:450px;background-size:55% auto;
    }
`

const OverViewWrapper = styled.div`
    width: 100vw;margin-top:12rem;padding-top:26vw;background:url(${OverviewBg}) no-repeat center top / 100%;
    p { font-size:3rem;text-align:center;line-height:2em; }
    
    ${media.xsmall} {
        padding-top:30vw;
    }
`

const ProjectWrapper = styled.div`
    width:80.2vw;margin-bottom:9em;
    h2 { margin-bottom:1.2rem;line-height:1.8em; }
    * {
        ${EngFont}
        font-size: 8rem;
    }
    span { color: #2F80ED;}
`


export default Home;