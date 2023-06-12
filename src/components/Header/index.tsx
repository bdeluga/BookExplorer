import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="border-b lg:pl-40 justify-center lg:justify-start h-16 border-gray-700 flex items-center text-2xl font-bold text-gray-100">
      <div className="flex gap-4 items-center">
        {/* should be a link */}
        <span className=" from-orange-200 bg-gradient-to-r to-blue-400 text-transparent bg-clip-text">
          BookExplorer
        </span>
        <FontAwesomeIcon icon={faBook} className="text-blue-500" />
      </div>
    </header>
  );
};

export default Header;
