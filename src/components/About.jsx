import sticker from "../assets/sticker.png";
import background from "../assets/bg.jpg";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import { useI18n } from "../store/i18nContext";
function About() {
  const { t } = useI18n();
  return (
    <>
      <div
        id="About"
        className={`bg-[url(${background})] bg-cover py-[20px] h-fit`}
      >
        <div className="relative group bg-white/30 backdrop-blur-sm p-10 md:max-w-3/5 md:w-fit w-full max-w-90 m-auto rounded-md shadow-md hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-400 ease-in-out">
          <div className="block mx-auto rounded-full h-[120px] w-[120px] overflow-hidden duration-300 ease-in-out group-hover:scale-105">
            <img
              src={sticker}
              alt="sticker"
              className="scale-110 object-cover duration-300 ease-in-out group-hover:scale-100"
            />
          </div>
          <div className="flex justify-center items-center my-2 group-hover:my-5 duration-300 ease-in-out">
            <div>
              <CiMail className="mr-0 cursor-pointer" />
              {/* <p className="block cursor-pointer">chuhsiuu.cheng@gmail.com</p> */}
            </div>
            <div>
              <FaGithub className="mx-2 cursor-pointer" />
              {/* <p className="block cursor-pointer">chuhsiuu.cheng@gmail.com</p> */}
            </div>
            <div>
              <FaLinkedin className="mr-2 cursor-pointer" />
              {/* <p className="block cursor-pointer">chuhsiuu.cheng@gmail.com</p> */}
            </div>
          </div>
          <h4 className="text-teal-900 tracking-[1px] font-thin my-2">
            {t("about.name")}
          </h4>
          <h5 className="tracking-[0.5px] font-thin">{t("about.title")}</h5>
          <p className="opacity-0 h-0 group-hover:h-fit group-hover:opacity-100 transition-all text-xs text-xs/5 mt-0 group-hover:mt-3 duration-300 ease-in-out tracking-[0.8px] font-thin">
            {t("about.intro", { returnObjects: true }).map((line, index) => (
              <React.Fragment key={index}>
                {line} <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
