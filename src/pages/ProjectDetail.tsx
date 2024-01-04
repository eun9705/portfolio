import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRouter } from "../hooks/useRouter";
import styled from "styled-components";
import { media } from "../style/responsive";
import { EngFont, KorFont500, SubFont } from "../style/globalFont";
import { Container, GridCenter } from "../style/globalStyle";
import { projectData } from '../dummy/projectData.js';
import images from '../dummy/images.js';
import Badge from "../components/Badge";

interface ProjectData {
    eng:string;
    kor:string;
    thumbnail:string;
    mockup:string[];
    overview:string;
    review:string;
}

const ProjectDetail = () => {
    const { routerTo } = useRouter();
    const { pathname } = useLocation();
    const id:string = pathname.split('/')[2];
    const detailNum:number = parseInt(id) - 1;
    const [detailInfo,setDetailInfo] = useState<ProjectData>();
    useEffect(()=>{
        if(parseInt(id) > projectData.length) {
            routerTo('/error');
        }else {
            setDetailInfo(projectData[detailNum]);
        }
    },[detailInfo]);
    return <ProjectDetailWrapper>
        <h2>
            <span>{detailInfo?.eng}</span><br />
            {detailInfo?.kor}
        </h2>
        <img src={images[detailInfo?.mockup[0]!]} alt="프로젝트 목업 이미지 1" className="first"/>
        <Badge name={"Overview"} color={"#F2C94C"} radius={1.875} huge/>
        <p>{detailInfo?.overview}</p>
        <hr />
        <Badge name={"Review"} color={"#219653"} radius={1.875} huge/>
        <p>{detailInfo?.review}</p>
        <img src={images[detailInfo?.mockup[1]!]} alt="프로젝트 목업 이미지 2" className="last"/>
    </ProjectDetailWrapper>
}

const ProjectDetailWrapper = styled(Container)`
    ${GridCenter}
    margin: auto;padding:20rem 0;
    h2 {
        ${KorFont500}
        font-size: 5rem;
        place-self: start;
        span {
            ${EngFont}
            font-size: 3rem;
            ${SubFont}
        }
    }
    img { width:100%; }
    .first { margin-bottom: .5em; }
    .last { margin-top:7.8em; }
    p { margin-top:2em;padding:0 10rem;
        ${SubFont}
        line-height:2em;white-space:pre-wrap;text-align:center; }
    hr { width:100%;height:1px;margin:4em 0;background-color:#CCCCCC; }
    ${media.xsmall} {
        p { padding: 0; }
    }
`

export default ProjectDetail;