import styled from "styled-components";
import { media } from "../style/responsive";
import theme from "../style/theme";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

type ToggleButtonProps = {
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

const ThemeToggleButton = () => {
    const { theme,onChangeTheme } = useContext(ThemeContext)
    return <ToggleButton onClick={onChangeTheme}>
        {theme === 'dark' ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg>}
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