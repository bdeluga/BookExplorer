import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../types";

interface useBooksProps {
  category:
    | "Animals, Bugs & Pets"
    | "Art, Creativity & Music"
    | "General Literature"
    | "Hobbies, Sports & Outdoors"
    | "Science Fiction & Fantasy"
    | "Real Life"
    | "Science & Technology"
    | "Mystery & Suspense"
    | "Reference";
}

export const useBooks = (
  //General Literature is a default to fetch for books with categories
  { category }: useBooksProps = { category: "General Literature" }
) =>
  useQuery({
    queryFn: () => {
      const url = new URL("https://book-finder1.p.rapidapi.com/api/search");
      url.searchParams.append("categories", category);

      return fetch(url, {
        headers: {
          "X-RapidAPI-Key":
            "61ee40840cmsh54db39e70473bdap19d489jsn16e9c42eae87",
          "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
        },
      }).then((res) => res.json()) as Promise<ApiResponse>;
    },
    queryKey: ["books"],
  });
