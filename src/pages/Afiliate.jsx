import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"

const Afiliate = () => {
    return (
        <>
        <Navbar data={navbarData}></Navbar>
        <Footer data={footerData}></Footer>
        </>
    )
}

export default Afiliate
