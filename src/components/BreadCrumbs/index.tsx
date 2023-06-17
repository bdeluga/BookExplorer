import { faAngleRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Crumbs {
  path: string[];
  homeFn: () => void;
}

const BreadCrumbs = ({ path, homeFn }: Crumbs) => {
  return (
    <ul className="flex pl-4 mb-2 mt-4 md:mt-0 md:mb-4 text-gray-500 whitespace-nowrap text-xs md:text-base">
      <li>
        <button
          className="hover:text-gray-300 capitalize disabled:pointer-events-none flex items-center gap-1 font-bold"
          disabled={!path.length}
          onClick={homeFn}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
      </li>
      {path.map((crumb, idx) => (
        <li className="flex items-center" key={crumb}>
          {idx < path.length && (
            <FontAwesomeIcon icon={faAngleRight} className="mx-1.5" />
          )}
          <button
            className="hover:text-gray-300 capitalize disabled:pointer-events-none font-bold"
            disabled={idx === path.length - 1}
          >
            {crumb}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
