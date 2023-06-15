interface Published_work {
  binding: string;
  copyright: string | null;
  cover_art_url: string;
  isbn: string;
  page_count: number;
}

export interface Book {
  work_id: string;
  title: string;
  canonical_isbn: string;
  authors: string[];
  page_count: number;
  categories: string[];
  cover_art_url: string;
  published_works: Published_work[];
}

export interface ApiResponse {
  total_results: number;
  total_pages: number;
  results: Book[];
}
