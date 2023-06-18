import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Crumbs } from "../../types";

interface Props {
  crumbs: Crumbs[];
}

const BreadCrumbs = ({ crumbs }: Props) => {
  return (
    <ul className="flex pl-4 mb-2 mt-4 md:mt-0 md:mb-4 text-gray-500 whitespace-nowrap text-xs md:text-base">
      {crumbs.map((crumb, idx) => (
        <li key={crumb.label}>
          <button
            className="hover:text-gray-300 capitalize disabled:pointer-events-none font-bold"
            onClick={crumb.returnFn}
            disabled={idx === crumbs.length - 1}
          >
            {crumb.label}
          </button>
          {idx < crumbs.length - 1 && (
            <FontAwesomeIcon icon={faAngleRight} className="mx-1.5" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
