import { useRouter } from "../hooks/useRouter";
import styled from "styled-components";
import arrowIcon from "../images/arrowIcon.svg"
import { KorFont500 } from "../style/globalFont";
import { media } from "../style/responsive";

type BasicButtonProps = {
    name:string;
    url:string
}

const BasicButton = ({name,url}:BasicButtonProps) => {
    const { routerTo } = useRouter();
    return <ButtonWrapper onClick={()=>routerTo(url)}>{name}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
    position:relative;margin-right:1rem;padding: 2rem 3.9rem 1.5rem 2.4rem;background: #FFFFFF url(${arrowIcon}) no-repeat center right 1.5rem;border-radius:1rem;box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);cursor: pointer;
    ${KorFont500}
    font-size:1.6rem;
    color:#222222;
    &:last-child { margin:0; }

    ${media.small} {
        background-size:.7rem auto;
    }
    ${media.xsmall} {
        font-size: 2.5rem;
        background-position:center right .6em;background-size:0.28em auto;
    }
`

export default BasicButton;