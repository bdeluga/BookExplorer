export interface Book {
  work_id: string;
  canonical_isbn: string;
  title: string;
  authors: string[];
  categories: string[];
}

export interface ApiResponse {
  total_results: number;
  total_pages: number;
  results: Book[];
}

export type Kind =
  | "Animals, Bugs & Pets"
  | "Art, Creativity & Music"
  | "General Literature"
  | "Hobbies, Sports & Outdoors"
  | "Science Fiction & Fantasy"
  | "Real Life"
  | "Science & Technology"
  | "Mystery & Suspense"
  | "Reference"
  | null;

export interface ColumnHeader {
  label: string;
  key: keyof Book;
  minWidth?: number;
}
