import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import Hero from "./../components/Content/Hero"
// import imgUrl from "/testHero.jpeg"
import { useEffect } from "react"

const Products = () => {
        useEffect(() => {
          document.title = "Produtos";
        }, []);
    return (
<>
            <Navbar data={navbarData}></Navbar>
            <Hero
                title={"Premiações"}
                data={[]}
                hasButton={false}
                bgImage={''}
                titleStyle={"text-border-lg border-white text-7xl h-1/2 text-yellow-500 font-bold"}
                subTitleStyle={"items-center flex flex-col content-center w-1/2 text-white font-bold"}
                textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                style={"bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-72 w-full place-content-center  h-64 "}
                spanStyle={"rounded-xl bg-opacity-80  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}

            />
            
            <Footer data={footerData}/>
        </>
    )
}

export default Products
