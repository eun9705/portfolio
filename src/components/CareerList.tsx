import styled from "styled-components";
import { CareerInfoDetailType } from "../pages/CareerDescription";
import Badge from "./Badge";
import { KorFont500, SubFontStrong } from "../style/globalFont";
import { media } from "../style/responsive";

type ListInfoProps = {
    listInfo:CareerInfoDetailType
}

const CareerList = ({listInfo}:ListInfoProps) => {
    const {role,title,term,done,stack} = listInfo;
    return <ListContentWrapper>
        <p>{role}</p>
        <ContentWrapper>
            <p>{title}</p>
            <span>{term}</span>
            <ul>
                {done.map((item,idx)=>{
                    return <li key={idx}>{item}</li>
                })}
            </ul>
            <SkillBadgeWrapper>
                {stack.map((item,idx)=>{
                    return <Badge key={idx} name={item} color={"#F2C94C"} />
                })}
            </SkillBadgeWrapper>
        </ContentWrapper>
    </ListContentWrapper>
}

const ListContentWrapper = styled.div`
    display:grid;grid-template-columns:.5fr 2fr;
    padding:5em 0;border-bottom: 1px solid #CCC;
    &:last-child { border-bottom:none; }
    > p { 
        ${KorFont500} 
        font-size: 2.6rem;
        white-space:pre-wrap; 
    }
    ${media.small} {
        grid-template-columns: 1fr;
        > p { margin-bottom:2em;white-space:nowrap; }
    }
`

const ContentWrapper = styled.div`
    span {
        ${SubFontStrong}
        font-size:2.2rem; }
    ul { margin-top:1.5em;}
    li { line-height:2em;list-style:inside; }
`

const SkillBadgeWrapper = styled.div`
    margin-top:.5rem;padding-left: 2rem;
    div { margin-right:.5em;margin-bottom:.5em; }
`

export default CareerList;