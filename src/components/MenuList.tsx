import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";
import { menuListContent } from "../router";
import { FlexRow } from "../style/globalStyle";
import { KorFont600 } from "../style/globalFont";
import { media } from "../style/responsive";


interface MenuListProps {
    fontSize:number,
    gap:number
}

const MenuList = ({fontSize,gap}:MenuListProps) => {
    const { routerTo } = useRouter();
    const pageMoveHandler = (path:string,newWindowOpenBool?:boolean) => newWindowOpenBool ? window.open(path) : routerTo(path);
    return <MenuListWrapper fontSize={fontSize} gap={gap}>
        {menuListContent.map((list)=>{
            return <li
                key={list.id}
                onClick={()=>pageMoveHandler(list.path,list.openNewWindow)}
            >{list.label}</li>
        })}
    </MenuListWrapper>
}

const MenuListWrapper = styled.ul<{fontSize:number,gap:number}>`
    ${FlexRow}
    li { 
        ${KorFont600}
        font-size: ${(props)=>props.fontSize + 'rem'};
        margin-left:${(props)=>props.gap + 'rem'};
        cursor: pointer;
        &:first-child { margin-left:0; }
    }
    ${media.xsmall} {
        li { font-size:2.5rem;margin-left:2.7em; }
    }
`

export default MenuList;