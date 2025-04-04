import SectionTitle from "./SectionTitle";
function Skills() {
  return (
    <>
      <div id="Skills" className="bg-gray-100">
        <SectionTitle title="Skills" />
        <ul>
          <li>
            <div className="mx-8 mb-3">
              <h2>前端技術</h2>
            </div>
            <div>
              <ul className="flex mx-8 flex-wrap justify-center">
                <li className="rounded-md border py-1.5 m-2 text-center transform hover:scale-105 duration-200 ease-out">
                  HTML
                </li>
                <li className="rounded-md border py-1.5 m-2 text-center transform hover:scale-105 duration-200 ease-out">
                  CSS
                </li>
                <li className="rounded-md border py-1.5 m-2 text-center transform hover:scale-105 duration-200 ease-out">
                  JavaScript
                </li>
                <li className="rounded-md border py-1.5 m-2 text-center transform hover:scale-105 duration-200 ease-out">
                  Bootstrap
                </li>
                <li className="rounded-md border py-1.5 m-2 text-center transform hover:scale-105 duration-200 ease-out">
                  Vue2 / 3
                </li>
                <li className="rounded-md border py-1.5 m-2 text-center transform hover:scale-105 duration-200 ease-out">
                  Vuetify
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
