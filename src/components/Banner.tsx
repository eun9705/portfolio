import styled from "styled-components";
import BasicButton from "./BasicButton";
import bannerBg from "../images/bannerBg.jpg";
import bannerBgTablet from '../images/bannerBgTablet.jpg';
import bannerBgMobile from '../images/bannerBgMobile.jpg';
import { KorFont600 } from "../style/globalFont";
import { FlexColumn, FlexRow } from "../style/globalStyle";
import { media } from "../style/responsive";

const Banner = () => {
    return <BannerWapper>
        <strong>더 궁금하다면 지금 바로 클릭해보세요!</strong>
        <p>기술스택, 경력 정보를 확인할 수 있어요.</p>
        <div>
            <BasicButton name={"소개글 보기"} url={"/about"}/>
            <BasicButton name={"경력사항 보기"} url={"/career"}/>
        </div>
    </BannerWapper>
}

const BannerWapper = styled.div`
    ${FlexColumn}
    align-items: flex-end;
    justify-content: center;
    width:91.6vw;height:30rem;margin:20rem 0;padding:0 12rem;box-sizing:border-box;background:url(${bannerBg}) no-repeat center / cover;border-radius:2rem;
    strong { 
        ${KorFont600}
        font-size:2.6rem; 
        color:#222222 !important;
    }
    p { margin:1rem 0 4rem;font-size:1.6rem;color:#777777; }
    div { 
        ${FlexRow} 
    }
    ${media.medium} {
        background-image:url(${bannerBgTablet});
    }
    ${media.small} {
        background-position:left 40% center;
    }
    ${media.xsmall} {
        height:12em;margin:7em 0;padding:0 3em;background-image:url(${bannerBgMobile});border-radius:.8em;
        strong { font-size:3rem; }
        p { font-size:2.5rem; }
    }
`

export default Banner;