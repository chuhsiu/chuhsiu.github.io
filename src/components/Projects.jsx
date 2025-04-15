import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { GrMoreVertical } from "react-icons/gr";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { useI18n } from "../store/i18nContext";
import { getLocalizedText } from "../utils/i18nHelper";
import ReactMarkdown from "react-markdown";
import Dialog from "./Dialog";
function Projects() {
  const { t, i18n } = useI18n();
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [detail, setDetail] = useState([]);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = (item) => {
    setOpenDialog(true);
    setDetail(item);
  };

  useEffect(() => {
    axios
      .get("/data/projects.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.error("載入 JSON 發生錯誤", e);
      });
  }, []);
  return (
    <>
      <div id="Project" className="bg-gray-300">
        <div className="pb-[40px] w-full xl:w-3/5 md:w-4/5 m-auto">
          <SectionTitle title={t("section.project")} />
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <ul className="mt-2 flex flex-wrap">
              {data.map((item) => (
                <li
                  className="w-full md:w-1/2 mt-5 md:mx-0 mx-[20px] group cursor-pointer"
                  key={item.id}
                >
                  <div className="mx-8 md:mx-5 h-full rounded-[10px] shadow-md overflow-hidden hover:shadow-lg hover:shadow-white/60 duration-300 bg-white">
                    <img
                      className="h-[250px] w-full object-cover group-hover:scale-105 duration-200"
                      src={item.image}
                    ></img>
                    <h2 className="relative w-fit h-[60px] p-4 m-auto text-[#7284a1] group-hover:font-bold duration-200">
                      {getLocalizedText(item.translations, i18n.language).name}
                    </h2>
                    <div className="text-xs text-sm/5 font-thin px-7 pb-5 tracking-[1px] h-[50px] trancate overflow-hidden line-clamp-3">
                      <ReactMarkdown>
                        {getLocalizedText(
                          item.translations,
                          i18n.language
                        ).content.join("\n\n")}
                      </ReactMarkdown>
                    </div>
                    <div className="flex justify-center mt-5">
                      <a
                        className="cursor-pointer border-[0.5px] border-gray-300 bg-gray-100 rounded-full size-[35px] relative mx-2 mb-2 hover:bg-gray-300"
                        onClick={() => handleOpenDialog(item)}
                      >
                        <GrMoreVertical className="size-[25p] relative top-[9px] left-[9px]" />
                      </a>
                      {item.code !== "" ? (
                        <a
                          className="border-[0.5px] border-gray-300 bg-gray-100 rounded-full size-[35px] relative mx-2 mb-2 hover:bg-gray-300"
                          href={item.code}
                          target="_blank"
                        >
                          <FaGithub className="size-[25p] relative top-[9px] left-[9px]" />
                        </a>
                      ) : (
                        ""
                      )}
                      {item.link !== "" ? (
                        <a
                          className="border-[0.5px] border-gray-300 bg-gray-100 rounded-full size-[35px] relative mx-2 mb-2 hover:bg-gray-300"
                          href={item.link}
                          target="_blank"
                        >
                          <TiArrowForwardOutline className="size-[25p] relative top-[9px] left-[9px]" />
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Dialog
        detail={detail}
        open={openDialog}
        closeDialog={closeDialog}
      ></Dialog>
    </>
  );
}

export default Projects;
