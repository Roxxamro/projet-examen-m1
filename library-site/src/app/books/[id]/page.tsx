'use client';

import { FC, useEffect } from 'react';
import { useBookIdProviders } from '@/hooks/providers/bookIdProviders';

const BookPage: FC = () => {
  const { useBookId } = useBookIdProviders();
  const { book, load } = useBookId();

  useEffect(() => {
      load(); 
  }, []);

  return (
    <>
      <h1>Page de détails du livre</h1>
      {book.title && (
        <div>
          <h2>{book.name}</h2>
          <p>Auteur : {book.authorId}</p>
          <p>Date : {book.writtenOn}</p>
          {/* Ajoutez d'autres informations sur le livre ici */}
        </div>
      )}
    </>
  );
};

export default BookPage;
