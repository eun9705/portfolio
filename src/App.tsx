import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { GlobalStyled } from './style/globalStyle';
import ThemeToggleButton from './components/ThemeToggleButton';
import { GlobalFonts } from './style/globalFont';
import ThemeProvider from './context/ThemeProvider';

const App = () => {
    // const localThemeMode = localStorage.getItem('theme') || 'light';
    
    // const [themeMode,setThemeMode] = useState(localThemeMode);
    
    // const toggleTheme = () => {
    //     setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    //     localStorage.setItem('theme',themeMode === 'light' ? 'dark' : 'light');
    // }

    return <ThemeProvider>
        <GlobalFonts />
        <GlobalStyled />
        <ThemeToggleButton />
        {/* <ThemeToggleButton onClick={toggleTheme}/> */}
        <RouterProvider router={routers}/>
    </ThemeProvider>
}

export default App;