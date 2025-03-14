import PropTypes from "prop-types"
import Logo from "./Logo"

const Navbar = ({ data }) => {
  // console.log("navbar rendered", navbarData)
  return (
    <nav id="navbar" className="flex items-center z-20 bg-cover border-b-2 border-yellow-600 h-[70px] top-0 sticky bg-violet-800 flex items-center px-4 md:px-8 lg:px-16 ">
      <div className=" flex items-center h-full" style={{ flex: 1 }}>

          <Logo/>

      </div>

      <div className="Right flex items-center place-content-evenly px-px mr-6 lg:visible sm:invisible">
        <div className="mr-2 px-px text-white flex font-semibold rounded-lg place-content-evenly space-x-2 items-center " style={{ flex: 4 }}>
          {/* o mapping itera sobre o json "data" e acessa o label e link de cada objeto de "data" */}
          {data.map((item, index) => (
            <a key={index} href={item.link} className="px-3 py-2 font-semibold text-white rounded-lg transition hover:bg-yellow-500 hover:text-black hover:bg-opacity-70">
              {item.label}
            </a>)
          )}
          
        </div>
        <a href="/auth" className="ml-auto font-semibold text-white px-4 py-2 border border-white rounded-lg text-white transition hover:bg-yellow-500  hover:text-black">Login</a>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default Navbar
