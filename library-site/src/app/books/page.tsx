'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import { useBooksProviders } from '@/hooks';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    load();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Books</h1>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <p>
            Genre:
            {book.genres}
          </p>
          <p>
            Date:
            {book.writtenOn.toLocaleDateString()}
          </p>
          <p>
            Auteur:
            {book.author}
          </p>
        </div>
      ))}
    </>
  );
};

export default BooksPage;
