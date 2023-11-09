import axios from 'axios';
import { useState } from 'react';
import { PlainBookModel, Sort } from '@/models';


type UseListBooksProvider = {
  books: PlainBookModel[];
  load: () => void;
};

type ListBooksInput = {
  search?: string;
  Genre?: BookGenre[];
  sort?: Sort;
}

export const useListBooks = (): UseListBooksProvider => {
  const [books, setBooks] = useState<PlainBookModel[]>([]);

  const fetchBooks = (): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/books`)
      .then((response) => {
        const books = 

      })
      .catch((err) => console.error(err));
  };
  

  return { books, load: fetchBooks };
};

type BookProviders = {
  useListBooks: () => UseListBooksProvider;
};

export const useBooksProviders = (): BookProviders => ({
  useListBooks,
});
