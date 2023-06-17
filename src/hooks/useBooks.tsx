import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Kind } from "../types";

export const useBooks = (kind: Kind, page: number, author?: string) =>
  useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://book-finder1.p.rapidapi.com/api/search?" +
          new URLSearchParams({
            categories: kind || "General Literature",
            page: page.toString(),
          }) +
          `${author ? `&author=${author}` : ""}`,
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

    queryKey: ["books", kind, page, author],
  });
