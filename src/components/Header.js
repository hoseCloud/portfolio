function Header() {
  const toggle = () => {
    setTimeout(() => {
      window.scrollBy({
        top: -110,
      });
    }, 0);
  };

  return (
    <div id="Header">
      <nav className="bg-gradient-to-r from-gray-800 to-black top-0 opacity-90 fixed w-full bg-gray-800 text-white p-4 z-50">
        <h1 className="text-blue-500 p-3 font-bold text-lg">hoseCloud</h1>
        <a
          href="#Introduction"
          className="text-gray-300 p-3 font-bold"
          onClick={toggle}
        >
          Introduction
        </a>
        <a
          href="#Skills"
          className="text-gray-300 p-3 font-bold"
          onClick={toggle}
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="text-gray-300 p-3 font-bold"
          onClick={toggle}
        >
          Projects
        </a>
        <a
          href="#Comments"
          className="text-gray-300 p-3 font-bold"
          onClick={toggle}
        >
          Comments
        </a>
      </nav>
      <div className="h-32"></div>
    </div>
  );
}

export default Header;
