import { useEffect, useState } from "react";
import { Kind } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useViewport } from "../../hooks/useViewport";

interface NavProps {
  kind: Kind;
  setKind: (kind: Kind) => void;
}

const Nav = ({ kind, setKind }: NavProps) => {
  const width = useViewport();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClick = (kind: Kind) => {
    setKind(kind);
    setOpen(false);
  };

  //kinda dirty hack
  useEffect(() => {
    if (width >= 1024) setOpen(false);
  }, [width]);

  return (
    <div className={`bg-gray-900 ${open && "fixed top-0 h-full"}`}>
      <button
        className="lg:hidden text-slate-900 pl-4 pt-4 dark:text-slate-200"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-2xl" />
      </button>

      <div className={`${open ? "block" : "hidden"} lg:block p-10 lg:p-0`}>
        <h2 className="mb-4 font-semibold text-slate-900 dark:text-slate-200">
          Kind
        </h2>
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
          <li>
            <button
              onClick={() => handleClick("General Literature")}
              className={`nav ${kind === "General Literature" && "selected"}`}
            >
              Not specified
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Animals, Bugs & Pets")}
              className={`nav ${kind === "Animals, Bugs & Pets" && "selected"}`}
            >
              Animals, Bugs & Pets
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Art, Creativity & Music")}
              className={`nav ${
                kind === "Art, Creativity & Music" && "selected"
              }`}
            >
              Art, Creativity & Music
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Hobbies, Sports & Outdoors")}
              className={`nav ${
                kind === "Hobbies, Sports & Outdoors" && "selected"
              }`}
            >
              Hobbies, Sports & Outdoors
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Science Fiction & Fantasy")}
              className={`nav ${
                kind === "Science Fiction & Fantasy" && "selected"
              }`}
            >
              Science Fiction & Fantasy
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Real Life")}
              className={`nav ${kind === "Real Life" && "selected"}`}
            >
              Real Life
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Science & Technology")}
              className={`nav ${kind === "Science & Technology" && "selected"}`}
            >
              Science & Technology
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Mystery & Suspense")}
              className={`nav ${kind === "Mystery & Suspense" && "selected"}`}
            >
              Mystery & Suspense
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Reference")}
              className={`nav ${kind === "Reference" && "selected"}`}
            >
              Reference
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
