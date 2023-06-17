import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Kind } from "../../types";

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
  kind: Kind;
  setKind: (kind: Kind) => void;
}

const Hamburger = ({ open, setOpen, setKind, kind }: Props) => {
  const handleClick = (kind: Kind) => {
    setKind(kind);
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        className="absolute top-4 left-5 text-2xl"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {open && (
        <div className="absolute h-screen w-screen md:w-fit z-10 md:border-r border-gray-600 bg-gray-900">
          <button
            className="absolute top-4 left-5 text-2xl"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className="mt-16 h-full space-y-6">
            <li>
              <button
                onClick={() => handleClick(null)}
                className={`nav w-full ${!kind && "selected"}`}
              >
                Not specified
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Animals, Bugs & Pets")}
                className={`nav w-full ${
                  kind === "Animals, Bugs & Pets" && "selected"
                }`}
              >
                Animals, Bugs & Pets
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Art, Creativity & Music")}
                className={`nav w-full ${
                  kind === "Art, Creativity & Music" && "selected"
                }`}
              >
                Art, Creativity & Music
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Hobbies, Sports & Outdoors")}
                className={`nav w-full ${
                  kind === "Hobbies, Sports & Outdoors" && "selected"
                }`}
              >
                Hobbies, Sports & Outdoors
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Science Fiction & Fantasy")}
                className={`nav w-full ${
                  kind === "Science Fiction & Fantasy" && "selected"
                }`}
              >
                Science Fiction & Fantasy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Real Life")}
                className={`nav w-full ${kind === "Real Life" && "selected"}`}
              >
                Real Life
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Science & Technology")}
                className={`nav w-full ${
                  kind === "Science & Technology" && "selected"
                }`}
              >
                Science & Technology
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Mystery & Suspense")}
                className={`nav w-full ${
                  kind === "Mystery & Suspense" && "selected"
                }`}
              >
                Mystery & Suspense
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Reference")}
                className={`nav w-full ${kind === "Reference" && "selected"}`}
              >
                Reference
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
