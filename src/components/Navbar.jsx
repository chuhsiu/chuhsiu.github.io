function Navbar() {
  return (
    <>
      <header className="flex flex-row justify-center pt-[30px] pb-[20px] shadow-xl backdrop-blur-sm text-gray tracking-[1px] font-thin text-sm">
        <ul className="flex flex-row justify-center items-center">
          <li className="mx-4">
            <a href="#">ABOUT</a>
          </li>
          <li className="mx-4">
            <a href="#Skills">SKILLS</a>
          </li>
          <li className="mx-4">
            <a href="#Experience">EXPERIENCE</a>
          </li>
          <li className="mx-4">
            <a href="#Education">EDUCATION</a>
          </li>
          <li className="mx-4">
            <a href="#">PROJECT</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
