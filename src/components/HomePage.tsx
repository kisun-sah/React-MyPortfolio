
import { Loader } from "@mantine/core";
import About from "./About";
import Constact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header"
import Mail from "./Mail";
import Project from "./Project";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = ()  => {
    return(
        <>
        {/* <Header />
        <About/>
        <Mail />
        <Social></Social>
        <Project/>
        <Skills/>
        <Experience/>
      
        <Constact/>
        <Footer/> */
        <Loader/>
        }
      

        </>
    )
}
export default HomePage;