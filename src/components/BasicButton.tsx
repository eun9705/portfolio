import { useRouter } from "../hooks/useRouter";
import styled from "styled-components";
import { media } from "../style/responsive";
import { KorFont500 } from "../style/globalFont";
import { FlexRow } from "../style/globalStyle";
import Icon from "./Icon";

type BasicButtonProps = {
    name:string;
    url:string
}

const BasicButton = ({name,url}:BasicButtonProps) => {
    const { routerTo } = useRouter();
    return <ButtonWrapper onClick={()=>routerTo(url)}>
        {name}
        <Icon icon="arrow" width={8} height={15}/>
    </ButtonWrapper>
}

const ButtonWrapper = styled.button`
    ${FlexRow}
    align-items:center;margin-right:1rem;padding: 1.5rem 2.4rem;border-radius:1rem;box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);cursor: pointer;
    ${KorFont500}
    font-size:1.6rem;
    color:#222222;
    background-color: #FFFFFF;
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