import axios from 'axios';
import { useEffect, useState } from 'react';
import { PlainBookModel, Sort } from '@/models';

type ListBooksInput = {
  search?: string;
  sort?: Sort;
  filterGenres?: string[];
};

type UseListBooksProvider = {
  books: PlainBookModel[];
  load: (input?: ListBooksInput) => void;
};

export const useListBooks = (): UseListBooksProvider => {
  const [books, setBooks] = useState<PlainBookModel[]>([]);

  const fetchBooks = (input?: ListBooksInput): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/books`)
      .then((response) => {
        const books = response.data;

        const sort = input?.sort ?? { field: 'id', direction: 'asc' };

        const sortedBooks = (books as PlainBookModel[]).sort((b1, b2) => {
            if (sort.field === 'name') {
              if (sort.direction === 'asc') {
                return b1.name.localeCompare(b2.name);
              }
              return b2.name.localeCompare(b1.name);
            }
            if (sort.field === 'name author') {
              if (sort.direction === 'asc') {
                return b1.author.firstName.localeCompare(b2.author.firstName);
              }
              return b2.author.firstName.localeCompare(b1.author.firstName);
            }
            if (sort.field === 'writtenOn') {
              if (sort.direction === 'asc') {
                return b1.writtenOn > b2.writtenOn ? 1 : -1;
              }
              return b2.writtenOn > b1.writtenOn ? 1 : -1;
            }
            if (sort.field === 'genres') {
              if (sort.direction === 'asc') {
                return b1.genres.join(',').localeCompare(b2.genres.join(','));
              }
              return b2.genres.join(',').localeCompare(b1.genres.join(','));
            }
            return 0;
          })
          .filter(
           ({ name }) => (input?.search ? name.toLowerCase().includes(input.search.toLowerCase()) : true),
          )
          .filter(
            ({ genres: bookGenres }) => (input?.filterGenres?.length ? bookGenres.some((genre) => input.filterGenres.includes(genre)) : true),
          );

        setBooks(sortedBooks);
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
