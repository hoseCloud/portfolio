function Header() {
  return (
    <div className="Header">
      <nav className="bg-gradient-to-r from-gray-800 to-black p-3 flex justify-start">
        <h1 className="text-blue-500 p-3 font-bold text-lg">hoseCloud</h1>
        <a href="#Introduction" className="text-gray-300 p-3 font-bold">
          Introduction
        </a>
        <a href="#Skills" className="text-gray-300 p-3 font-bold">
          Skills
        </a>
        <a href="#Projects" className="text-gray-300 p-3 font-bold">
          Projects
        </a>
        <a href="#Comments" className="text-gray-300 p-3 font-bold">
          Comments
        </a>
      </nav>
    </div>
  );
}

export default Header;
