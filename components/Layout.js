import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Layouts ({ children }) {
    return (
        <>
            <NavBar/>
                { children }
            <Footer/>
        </>
    )  
}