import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Category } from "../types";

export const useBooks = (category: Category, page: number) =>
  useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://book-finder1.p.rapidapi.com/api/search?" +
          new URLSearchParams({
            categories: category || "General Literature",
            page: page.toString(),
          }),
        {
          headers: {
            "X-RapidAPI-Key":
              "61ee40840cmsh54db39e70473bdap19d489jsn16e9c42eae87",
            "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json() as Promise<ApiResponse>;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,

    queryKey: ["books", category, page],
  });
