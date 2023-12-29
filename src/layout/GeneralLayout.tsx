import Footer from "../components/Footer";
import Header from "../components/Header";

interface GeneralLayoutProps {
    children:React.ReactNode
}

const GeneralLayout = ({children}:GeneralLayoutProps) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}

export default GeneralLayout;