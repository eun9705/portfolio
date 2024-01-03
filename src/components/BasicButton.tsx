import { useRouter } from "../hooks/useRouter";
import styled from "styled-components";
import arrowIcon from "../images/arrowIcon.svg"
import { KorFont500 } from "../style/globalFont";
import { media } from "../style/responsive";
import { FlexRow } from "../style/globalStyle";

type BasicButtonProps = {
    name:string;
    url:string
}

const BasicButton = ({name,url}:BasicButtonProps) => {
    const { routerTo } = useRouter();
    return <ButtonWrapper onClick={()=>routerTo(url)}>
        {name}
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
            <path d="M1 13.5L5.93936 8.56061C6.5227 7.97728 6.5227 7.02274 5.93936 6.4394L1 1.5" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </ButtonWrapper>
}

const ButtonWrapper = styled.button`
    ${FlexRow}
    align-items:center;margin-right:1rem;padding: 1.5rem 2.4rem;border-radius:1rem;box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);cursor: pointer;
    ${KorFont500}
    font-size:1.6rem;
    color:#222222;
    &:last-child { margin:0; }
    svg { margin-left:1.5rem; }
    ${media.xsmall} {
        font-size: 2.5rem;
        svg { 
            width: 1.5rem;height:2rem;
        }
    }
`

export default BasicButton;