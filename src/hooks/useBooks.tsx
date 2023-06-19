import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Kind } from "../types";

export const useBooks = (kind: Kind, page: number, author?: string) =>
  useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://book-finder1.p.rapidapi.com/api/search?" +
          new URLSearchParams({
            categories: kind,
            page: page.toString(),
            ...(author && { author }),
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
        //429 most of the times
        throw new Error("Something went wrong");
      }
      //transform data
      const data = (await response.json()) as ApiResponse;
      const transformedData = {
        ...data,
        results: data.results.map((book) => {
          const transformedBook = {
            work_id: book.work_id,
            canonical_isbn: book.canonical_isbn,
            title: book.title,
            authors: book.authors.join(", ") || "Not known",
            categories: book.categories.join(", ") || "Not known",
          };
          return transformedBook;
        }),
      };
      return transformedData;
    },

    keepPreviousData: true,
    refetchOnWindowFocus: false,
    queryKey: ["books", kind, page, author],
  });
