import { faAngleRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Crumbs {
  path: string[];
}

const BreadCrumbs = ({ path }: Crumbs) => {
  return (
    <ul className="flex-shrink-0 flex mb-3 ml-4 text-gray-500">
      {path.map((crumb, idx) => (
        <li className="flex items-center" key={crumb}>
          <button
            className="hover:text-gray-300 capitalize disabled:pointer-events-none flex items-center gap-1 font-bold"
            disabled={idx === path.length - 1}
          >
            {idx === 0 && <FontAwesomeIcon className="text-xs" icon={faHome} />}
            {crumb}
          </button>
          {idx < path.length - 1 && (
            <FontAwesomeIcon icon={faAngleRight} className="mx-1.5" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
