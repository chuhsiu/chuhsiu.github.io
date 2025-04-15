import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { useI18n } from "../store/i18nContext";
import { getLocalizedText } from "../utils/i18nHelper";
import ReactMarkdown from "react-markdown";
function Experience() {
  const { t, i18n } = useI18n();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!i18n.language) return;
    axios
      .get("/data/experience.json")
      .then((res) => {
        setData(res.data.sort((a, b) => a.sortOrder - b.sortOrder));
      })
      .catch((e) => {
        console.error("載入 JSON 發生錯誤", e);
      });
  }, []);
  return (
    <>
      <div id="Experience" className="w-full xl:w-3/5 md:w-4/5 m-auto">
        <SectionTitle title={t("section.experience")} />
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul className="m-8">
            {data.map((item) => (
              <li key={item.id} className="group relative pl-7 pb-8 last:pb-0">
                <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-black/10 group-first:top-2 duration-500"></div>
                <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#7284a1] group-hover:bg-teal-800"></div>
                <div className="text-[16px]/8 font-thin">
                  <h3 className="text-gray-500 font-thin text-sm mb-2 group-hover:text-shadow-sm duration-200 bg-stone-200 px-3 py-1 rounded-md w-fit relative before:absolute before:size-[9px] before:bg-stone-200 before:top-[10px] before:-left-[4px] before:rotate-[-45deg] before:skew-x-12 before:skew-y-8">
                    {item.startDate} - {item.endDate}
                  </h3>
                  <h2 className="font-thin tracking-[0.5px] mb-2 group-hover:text-shadow-sm duration-200">
                    <span className="font-semibold tracking-[1px] text-xl group-hover:text-teal-800/70 duration-200">
                      {getLocalizedText(item.translations, i18n.language).title}
                    </span>{" "}
                    /{" "}
                    {getLocalizedText(item.translations, i18n.language).company}
                  </h2>
                  <ReactMarkdown>
                    {getLocalizedText(
                      item.translations,
                      i18n.language
                    ).content.join("\n\n")}
                  </ReactMarkdown>
                  {/* <span className="group-hover:text-sky-500 duration-300">
                      開發公司形象網站
                    </span>
                    ，強化企業品牌形象與線上曝光度
                    <br />
                    設計與建置
                    <span className="group-hover:text-sky-500 delay-100 duration-300">
                      網站後台管理系統
                    </span>
                    ，提升內容管理效率與操作便捷性
                    <br />
                    使用 PowerShell 開發自動化工具，並運用 Task Scheduler
                    建立排程，減少人工操作並優化工作流程 <br />
                    採用 JavaScript 模組及其他前端技術，將原有的企業流程管理系統
                    (BPM) 導入響應式網頁設計
                    (RWD)，提供各類裝置，如手機、平板與桌面端使用
                    <br />
                    <span className="group-hover:text-sky-500 delay-200 duration-300">
                      與跨部門協作並規劃專案進度
                    </span>
                    ，確保開發順利推進並按時交付 */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Experience;
