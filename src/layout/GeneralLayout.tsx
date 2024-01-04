import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

interface GeneralLayoutProps {
    children:React.ReactNode
}

const GeneralLayout = ({children}:GeneralLayoutProps) => {
    return <>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
    </>
}

export default GeneralLayout;