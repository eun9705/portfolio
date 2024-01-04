import styled from "styled-components";
import { media } from "../style/responsive";
import { KorFont500 } from "../style/globalFont";

type BadgeProps = {
    color:string;
    radius?:number;
    huge?:boolean;
    name:string;
}

const Badge = ({color,radius,huge,name}:BadgeProps) => {
    return <BadgeWrapper color={color} radius={radius} huge={huge}>{name}</BadgeWrapper>
}

const BadgeWrapper = styled.div<{color?:string,radius?:number,huge?:boolean}>`
    display:inline-block;
    padding:${(props)=>props.huge ? ".625em 3em" : "0 1.1em"};
    background-color:${(props)=>props.color || "#F2C94C"};
    border-radius:${(props)=>props.radius? props.radius +  'em' : ".625em"};
    ${KorFont500}
    font-size:1.6rem;color:#FFF;line-height:2.5em;
    ${media.xsmall} {
        font-size: 2.8rem;
    }
`

export default Badge;