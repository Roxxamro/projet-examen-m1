'use client';

import { FC, ReactElement, useEffect } from 'react';
import { useBooksProviders } from '@/hooks';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <p>
            Genre:
            {book.genres}
          </p>
          <p>
            Date d'écriture:
            {book.dateEcriture}
          </p>
          <p>
            Auteur:
            {book.auteur}
          </p>
        </div>
      ))}
    </>
  );
};
export default BooksPage;
