import { Kind } from "../../types";

interface NavProps {
  kind: Kind;
  setKind: (kind: Kind) => void;
}

const Nav = ({ kind, setKind }: NavProps) => {
  return (
    <div className="hidden lg:block">
      <h2 className="mb-4  font-semibold text-slate-900 dark:text-slate-200">
        Kind
      </h2>
      <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
        <li>
          <button
            onClick={() => setKind(null)}
            className={`nav ${!kind && "selected"}`}
          >
            Not specified
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Animals, Bugs & Pets")}
            className={`nav ${kind === "Animals, Bugs & Pets" && "selected"}`}
          >
            Animals, Bugs & Pets
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Art, Creativity & Music")}
            className={`nav ${
              kind === "Art, Creativity & Music" && "selected"
            }`}
          >
            Art, Creativity & Music
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Hobbies, Sports & Outdoors")}
            className={`nav ${
              kind === "Hobbies, Sports & Outdoors" && "selected"
            }`}
          >
            Hobbies, Sports & Outdoors
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Science Fiction & Fantasy")}
            className={`nav ${
              kind === "Science Fiction & Fantasy" && "selected"
            }`}
          >
            Science Fiction & Fantasy
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Real Life")}
            className={`nav ${kind === "Real Life" && "selected"}`}
          >
            Real Life
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Science & Technology")}
            className={`nav ${kind === "Science & Technology" && "selected"}`}
          >
            Science & Technology
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Mystery & Suspense")}
            className={`nav ${kind === "Mystery & Suspense" && "selected"}`}
          >
            Mystery & Suspense
          </button>
        </li>
        <li>
          <button
            onClick={() => setKind("Reference")}
            className={`nav ${kind === "Reference" && "selected"}`}
          >
            Reference
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
