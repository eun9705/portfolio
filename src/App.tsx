import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import ThemeProvider from './context/ThemeProvider';
import { GlobalFonts } from './style/globalFont';
import { GlobalStyled } from './style/globalStyle';
import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
    return <ThemeProvider>
        <GlobalFonts />
        <GlobalStyled />
        <ThemeToggleButton />
        <RouterProvider router={routers}/>
    </ThemeProvider>
}

export default App;