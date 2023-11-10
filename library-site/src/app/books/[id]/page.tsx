'use client';

import { FC, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useBookIdProviders } from '@/hooks/providers/bookIdProviders';


const BookPage: FC = () => {
  const { useBookId } = useBookIdProviders();
  const { book, load } = useBookId();
  const { id } = useParams();

  useEffect(() => {
    load(id);
  }, []); // Ajoutez une liste de dépendances vide ici pour que useEffect s'exécute une seule fois

  return (
    <>
    
      <h1>Page de détails du livre</h1>
      {book.name && (
        <div>
          <h2>{book.name}</h2>
          <p>Auteur : {book.author.firstName} {book.author.lastName}</p>
          <p>Date : {book.writtenOn}</p>
          <p>Genres : {book.genres.map((genre) => genre.name).join(', ')}</p>
          {/* Vous pouvez ajouter d'autres informations sur le livre ici */}
        </div>
      )}
    </>
  );
};

export default BookPage;
