import styled from "styled-components";
import { media } from "../style/responsive";
import { FlexRow } from "../style/globalStyle";

type DotListProps = {
    name:string;
    dotColor:string;
}

const DotList = ({name,dotColor}:DotListProps) => {
    return <SkillName color={dotColor}><i/>{name}</SkillName>
}

const SkillName = styled.div<{color?:string}>`
    margin-bottom:2rem;font-size: 2.4rem;
    i { display:inline-block;width:2rem;height:2rem;margin-right:2rem;background-color:${(props)=>props.color};border-radius:50%; }
    ${media.xsmall} {
        font-size: 3rem;
    }
`

export default DotList;