import { Category } from "../../types";

interface NavProps {
  category: Category | undefined;
  setCategory: (category: Category) => void;
}

const Nav = ({ category, setCategory }: NavProps) => {
  return (
    <>
      <h2 className="mb-4  font-semibold text-slate-900 dark:text-slate-200">
        Category
      </h2>
      <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
        <li>
          <button
            onClick={() => setCategory(undefined)}
            className={`nav ${category === undefined && "selected"}`}
          >
            Not specified
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Animals, Bugs & Pets")}
            className={`nav ${
              category === "Animals, Bugs & Pets" && "selected"
            }`}
          >
            Animals, Bugs & Pets
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Art, Creativity & Music")}
            className={`nav ${
              category === "Art, Creativity & Music" && "selected"
            }`}
          >
            Art, Creativity & Music
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Hobbies, Sports & Outdoors")}
            className={`nav ${
              category === "Hobbies, Sports & Outdoors" && "selected"
            }`}
          >
            Hobbies, Sports & Outdoors
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Science Fiction & Fantasy")}
            className={`nav ${
              category === "Science Fiction & Fantasy" && "selected"
            }`}
          >
            Science Fiction & Fantasy
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Real Life")}
            className={`nav ${category === "Real Life" && "selected"}`}
          >
            Real Life
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Science & Technology")}
            className={`nav ${
              category === "Science & Technology" && "selected"
            }`}
          >
            Science & Technology
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Mystery & Suspense")}
            className={`nav ${category === "Mystery & Suspense" && "selected"}`}
          >
            Mystery & Suspense
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory("Reference")}
            className={`nav ${category === "Reference" && "selected"}`}
          >
            Reference
          </button>
        </li>
      </ul>
    </>
  );
};

export default Nav;
