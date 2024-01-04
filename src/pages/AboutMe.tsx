import { useRef } from "react";
import styled from "styled-components";
import { media } from "../style/responsive";
import { SubFont, SubFontStrong, SubPageTitle, SubTitle } from "../style/globalFont";
import { Container, FlexColumn, GridCenter } from "../style/globalStyle";
import skillDummy from '../dummy/skillData.json'; 
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import DotList from "../components/DotList";
import mainImg from '../images/aboutImg.png';
import list01 from '../images/howWork_1.png';
import list02 from '../images/howWork_2.png';
import list03 from '../images/howWork_3.png';
import list04 from '../images/howWork_4.png';

const AboutMe = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInRef = useIntersectionObsever(ref);
    return <AboutWrapper>
        <TextWrapper>
            <SubPageTitle highlight="#F2C94C">About <span>Eun Kyoung</span></SubPageTitle>
            <img src={mainImg} alt="소개페이지 대표 이미지" />
            <p>
                스타트업에서 프론트엔드 개발자로 근무하며 React, JavaScript, Scss, Git 등을 이용해 <br />
                웹 서비스 퍼블리싱, 개발업무를 담당하였습니다.<br /><br />

                항상 고객에게 편리하고 좋은 서비스(경험)를 제공할 수 있도록 고민하고 <br className="mobile-none"/>
                디자이너, 백엔드 개발자 등 다양한 직무의 동료들과 <br className="mobile-none"/>
                적극적으로 커뮤니케이션하며 협업했습니다. <br /><br />

                업무 외에도 개인의 역량과 전문성을 키우기 위해 <br />
                알고리즘 문제 풀기, 인프런 강의 듣기 등 꾸준히 자기 개발을 하고 있습니다.<br />
            </p>
        </TextWrapper>
        <HowWorkWrapper>
                <SubTitle color={"#2F80ED"} direction={"right"}>How I <span>Work</span></SubTitle>
                <Container ref={ref} className={isInRef ? "on" : ''}>
                    <img src={list01} alt="목록1 이미지" />
                    <img src={list02} alt="목록2 이미지" />
                    <img src={list03} alt="목록3 이미지" />
                    <img src={list04} alt="목록4 이미지" />
                </Container>
        </HowWorkWrapper>
        <SkillWrapper>
            <SubTitle color={"#219653"}><span>Skill</span></SubTitle>
            <Container>
                <DotListWapper>
                    <p>Front-End</p>
                    <div>
                        {skillDummy.front.map((item:string)=>{
                            return <DotList name={item} dotColor="#6FCF97" key={item}/>
                        })}
                    </div>
                </DotListWapper>
                <hr />
                <DotListWapper>
                    <p>Etc</p>
                    <div>
                        {skillDummy.etc.map((item:string)=>{
                            return <DotList name={item} dotColor="#F2C94C" key={item}/>
                        })}
                    </div>
                </DotListWapper>
            </Container>
        </SkillWrapper>
    </AboutWrapper>
}

const AboutWrapper = styled.div`
    position:relative;padding: 20rem 0 28rem;box-sizing:border-box;
`
const TextWrapper = styled.div`
    position:relative;width:100%;height:40vw;margin-left:13rem;
    h2 {
        position:relative;padding-top:5.8rem;
        &:after { content:'';position:absolute;left:-10.55vw;bottom:-.43em;display:block;width:65.3vw;height:.0625em;border-radius:0 .5rem .5rem 0;background-color:#EB5757; }
    }
    img { position:absolute;right:10rem;top:5rem;height:80%; }
    p { 
        margin-top:7rem;
        ${SubFont}
        line-height:1.6em; 
    }
    ${media.large} {
        h2 {
            &::after {
                width: 68vw;
            }
        }
        img { top:auto;bottom:0; }
    }
    ${media.small} {
        height:auto;margin-left:0;padding: 0 7rem;box-sizing:border-box;
        h2 {
            &:after {
                width:80vw;left:-7rem;
            }
        }
        img { position:static;display:block;height:50vw;margin:10rem auto 0;  }
    }
`

const HowWorkWrapper = styled.div`
    width: 100%;margin: 11rem 0 20rem;
    ${FlexColumn}
    align-items: center;justify-content:center;
    div {
        ${FlexColumn}
        margin-top:8rem;
    }
    img { 
        width:53.3vw;margin-bottom:1rem;
        transform: translateX(-100%);opacity: 0;transition:1s ease-in-out;
        &:nth-child(even) { align-self:flex-end;transform: translateX(200%); }
    }
    div {
        &.on {
           img {transform: translateX(0);opacity:1;}
        }
    }
`

const SkillWrapper = styled.div`
    ${GridCenter}
    width:100%;
    hr { height:1px;margin:4em 0 5em;background-color:#777; }
    
`

const DotListWapper = styled.div`
    display: grid;
    grid-template-columns: 23rem calc(100% - 23rem);
    grid-gap: 5rem;
    &:first-child { margin-top:15rem; }
    p { font-size:2.8rem;
        ${SubFontStrong}
        text-align:right; }
    > div { 
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    ${media.small} {
        > div {
            grid-template-columns: 1fr;
        }
    }
`

export default AboutMe;