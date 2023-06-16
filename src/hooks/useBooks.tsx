import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Categories } from "../types";

export const useBooks = (category: Categories | undefined, page: number) =>
  useQuery({
    queryFn: () =>
      fetch(
        `https://book-finder1.p.rapidapi.com/api/search?categories=${
          category?.category || "General Literature"
        }&page=${page}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "61ee40840cmsh54db39e70473bdap19d489jsn16e9c42eae87",
            "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
          },
        }
      ).then((res) => res.json()) as Promise<ApiResponse>,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    queryKey: ["books", category, page],
  });
