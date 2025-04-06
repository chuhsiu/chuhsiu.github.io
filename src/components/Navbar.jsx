import { GrLanguage } from "react-icons/gr";
import "../assets/nav.css";
function Navbar() {
  const toggleMenu = (e) => {
    e.stopPropagation();
    const button = e.target;
    button.classList.toggle("open");

    const menu = document.getElementById("menu");
    console.log(button.classList);
    button.classList.contains("open")
      ? menu.classList.add("show")
      : menu.classList.remove("show");
  };

  return (
    <>
      <header className="sticky sm:static flex flex-row justify-center py-[20px] shadow-xl backdrop-blur-sm text-gray tracking-[1px] font-thin text-sm z-2 w-full">
        <nav className="flex w-full justify-end sm:justify-center items-center">
          <div className="mx-4 hidden sm:block">
            <a href="#">ABOUT</a>
          </div>
          <div className="mx-4 hidden sm:block">
            <a href="#Skills">SKILLS</a>
          </div>
          <div className="mx-4 hidden sm:block">
            <a href="#Experience">EXPERIENCE</a>
          </div>
          <div className="mx-4 hidden sm:block">
            <a href="#Education">EDUCATION</a>
          </div>
          <div className="mx-4 hidden sm:block">
            <a href="#">PROJECT</a>
          </div>
          <button
            className="sm:hidden w-[30px] h-[30px] mr-4 relative mobile-munu cursor-pointer"
            type="button"
            onClick={toggleMenu}
          >
            <span className="absolute top-1/3 left-[5px] w-[20px] border-b-1 border-gray-800 transition-all duration-300"></span>
            <span className="absolute top-2/3 left-[5px] w-[20px] border-b-1 border-gray-800 transition-all duration-300"></span>
          </button>
          {/* <div className="mx-4">
            <GrLanguage />
          </div> */}
        </nav>
      </header>
      <div className="sticky flex flex-col w-full hidden z-3" id="menu">
        <a className="p-4 hover:bg-gray-200 duration-300" href="#">
          ABOUT
        </a>
        <a className="p-4 hover:bg-gray-200 duration-300" href="#Skills">
          SKILLS
        </a>
        <a className="p-4 hover:bg-gray-200 duration-300" href="#Experience">
          EXPERIENCE
        </a>
        <a className="p-4 hover:bg-gray-200 duration-300" href="#Experience">
          EDUCATION
        </a>
        <a className="p-4 hover:bg-gray-200 duration-300" href="#Experience">
          PROJECT
        </a>
      </div>
    </>
  );
}

export default Navbar;
