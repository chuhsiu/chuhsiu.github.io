import SectionTitle from "./SectionTitle.jsx";
function Education() {
  return (
    <>
      <div id="Education" className="bg-gray-200">
        <div className="w-full xl:w-3/5 md:w-4/5 m-auto">
          <SectionTitle title="Education" />
          <ul className="p-8">
            <li className="group relative pl-7 pb-8 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-black/10 group-first:top-2 duration-500 group-hover:animate-colorChange"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-200 bg-zinc-500"></div>
              <h3 className="text-gray-500 text-sm mb-2">2023.01 - 2025.03</h3>
              <h2 className="tracking-[1.5px] mb-2">
                <b>資訊管理學系</b>
              </h2>
              <h2 className="tracking-[1.5px] mb-2">國立中山大學</h2>
            </li>
            <li className="group relative pl-7 pb-8 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-black/10 group-first:top-2 duration-500 group-hover:animate-colorChange"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-200 bg-zinc-500"></div>
              <h3 className="text-gray-500 text-sm mb-2">2023.01 - 2025.03</h3>
              <h2 className="tracking-[1.5px] mb-2">
                <b>資訊管理研究所，金融服務與金融科技微學程</b>
              </h2>
              <h2 className="tracking-[1.5px] mb-2">國立中山大學</h2>
              <p className="text-xs text-sm/6 text-sky-500">
                研究主題 : 互動式資料視覺化的探索分析-以2018
                年性平公投與台灣六都之社經因素為例
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Education;
