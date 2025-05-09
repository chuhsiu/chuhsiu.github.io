import { GrLanguage } from "react-icons/gr";
import "../assets/nav.css";
import { useI18n } from "../store/i18nContext";
import { useEffect } from "react";

function Navbar() {
  const { t, changeLang } = useI18n();

  const toggleMenu = (e) => {
    e.stopPropagation();
    const button = e.target;
    button.classList.toggle("open");

    const menu = document.getElementById("menu");
    button.classList.contains("open")
      ? menu.classList.add("show")
      : menu.classList.remove("show");
  };

  const clickMenu = (e) => {
    e.stopPropagation();

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menu-button");

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
    if (menuBtn.classList.contains("open")) {
      menuBtn.classList.remove("open");
    }
  };

  const scrollToSection = function (id) {
    if (id == null) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    window.scrollTo({
      top: target.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleResize = (e) => {
      const menu = document.getElementById("menu");
      const menuBtn = document.getElementById("menu-button");

      if (e.matches) {
        if (menu.classList.contains("show")) {
          menu.classList.remove("show");
        }
        if (menuBtn.classList.contains("open")) {
          menuBtn.classList.remove("open");
        }
      }
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 flex flex-row justify-center py-[20px] shadow-md bg-white text-gray tracking-[1px] font-thin text-sm z-4 w-full">
        <nav className="flex w-full justify-between sm:justify-center items-center">
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection()}>
              {t("section.about").toUpperCase()}
            </a>
          </div>
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Experience")}>
              {t("section.experience").toUpperCase()}
            </a>
          </div>{" "}
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Education")}>
              {t("section.education").toUpperCase()}
            </a>
          </div>
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Skill")}>
              {t("section.skill").toUpperCase()}
            </a>
          </div>
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Project")}>
              {t("section.project").toUpperCase()}
            </a>
          </div>
          <div className="text-xs p-2 rounded-md border-[0.5px] ml-5 sm:ml-0">
            {/* <GrLanguage /> */}
            <ul className="flex flex-row">
              <li className="cursor-pointer" onClick={() => changeLang("en")}>
                En
              </li>
              <li className="mx-2">|</li>
              <li className="cursor-pointer" onClick={() => changeLang("zh")}>
                中文
              </li>
            </ul>
          </div>
          <button
            id="menu-button"
            className="sm:hidden w-[30px] h-[30px] mr-4 relative mobile-munu cursor-pointer"
            type="button"
            onClick={toggleMenu}
          >
            <span className="absolute top-1/3 left-[5px] w-[20px] border-b-1 border-gray-800 transition-all duration-300"></span>
            <span className="absolute top-2/3 left-[5px] w-[20px] border-b-1 border-gray-800 transition-all duration-300"></span>
          </button>
        </nav>
      </header>
      <div
        className="fixed top-[70px] flex flex-col w-full hidden z-3 bg-white shadow-md"
        id="menu"
      >
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection();
            clickMenu(e);
          }}
        >
          {t("section.about").toUpperCase()}
        </a>
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Experience");
            clickMenu(e);
          }}
        >
          {t("section.experience").toUpperCase()}
        </a>{" "}
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Education");
            clickMenu(e);
          }}
        >
          {t("section.education").toUpperCase()}
        </a>
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Skill");
            clickMenu(e);
          }}
        >
          {t("section.skill").toUpperCase()}
        </a>
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Project");
            clickMenu(e);
          }}
        >
          {t("section.project").toUpperCase()}
        </a>
      </div>
    </>
  );
}

export default Navbar;
