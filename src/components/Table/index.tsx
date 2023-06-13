import { useQuery } from "@tanstack/react-query";
interface TableProps {
  category?:
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

interface Book {
  work_id: string;
  title: string;
  canonical_isbn: string;
  authors: string[];
  page_count: number;
  cover_art_url: string;
}

interface ApiResponse {
  total_results: number;
  total_pages: number;
  results: Book[];
}

const Table = ({ category }: TableProps) => {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      let url = "https://book-finder1.p.rapidapi.com/api/search";

      if (category) {
        url +=
          "?" +
          new URLSearchParams({
            categories: category,
          });
      }
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
  console.log(data?.results[0]);
  return (
    <div className="border overflow-y-auto flex-grow p-10 rounded-lg">
      {isLoading && "Loading"}
      {data?.results.map((book) => (
        <div>{book.title}</div>
      ))}
    </div>
  );
};

export default Table;
