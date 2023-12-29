import styled from "styled-components";
import { media } from "../style/responsive";
import theme from "../style/theme";
import { MdDarkMode,MdWbSunny } from 'react-icons/md';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

type ToggleButtonProps = {
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

const ThemeToggleButton = () => {
    const { theme,onChangeTheme } = useContext(ThemeContext)
    return <ToggleButton onClick={onChangeTheme}>
        {theme === 'dark' ? <MdWbSunny /> : <MdDarkMode className="dark"/>}
    </ToggleButton>
}

// const ThemeToggleButton = ({onClick}:ToggleButtonProps) => {
//     return <ToggleButton onClick={onClick}>
//         {localStorage.getItem('theme') === 'dark' ? <MdWbSunny /> : <MdDarkMode className="dark"/>}
//     </ToggleButton>
// }

const ToggleButton = styled.button`
    position:fixed;right:2rem;bottom:2rem;z-index:1;
    display:grid;place-items:center;
    width:5rem;height:5rem;border-radius:50%;font-size:2rem;cursor: pointer;
    box-shadow: ${({theme})=>theme.buttonShadow};
    background-color: ${({theme})=>theme.buttonBackgroundColor};
    svg {
        width:1.3em;height:1.3em;
        fill:${({theme})=>theme.buttonFontColor};
    }
    ${media.small} {
        width:8rem;height:8rem;font-size:1.1em;
    }
    ${media.xsmall} {
        right:5rem;bottom:5rem;width:12rem;height:12rem;
    }
`

export default ThemeToggleButton;