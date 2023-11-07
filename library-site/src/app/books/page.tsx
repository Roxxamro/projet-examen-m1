'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import { useBooksProviders } from '@/hooks';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    load();
  }, []);

  const handleSortBy = (criteria: string) => {
    setSortBy(criteria);
  };

  const filteredBooks = books
    .filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre ? book.genres.includes(selectedGenre) : true)
    )
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'author') {
        return a.author.localeCompare(b.author);
      }
      // Add more sorting criteria if needed
      return 0;
    });

  const genres = ['fantastique', 'comédie']; // Ajoutez ici d'autres genres au besoin

  return (
    <div className="container mx-auto p-4 flex h-screen">
      <div className="w-1/4 h-full border-r" style={{ borderWidth: '2px', borderColor: '#ccc' }}>
        <div className="mb-4">
          <span className="mb-2 block">Filtrer par genre :</span>
          {genres.map((genre) => (
            <button
              key={genre}
              className={`mb-2 px-2 py-1 rounded border ${
                selectedGenre === genre ? 'bg-blue-500 text-white' : 'border-gray-300'
              }`}
              onClick={() => setSelectedGenre(selectedGenre === genre ? '' : genre)}
            >
              {genre}
            </button>
          ))}
          <div className="mt-4">
            <span className="block font-semibold mb-2">Trier par :</span>
            <button
              className={`mr-2 px-2 py-1 rounded border ${sortBy === 'title' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => handleSortBy('title')}
            >
              Titre
            </button>
            <button
              className={`mr-2 px-2 py-1 rounded border ${sortBy === 'author' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => handleSortBy('author')}
            >
              Auteur
            </button>
            {/* Ajoutez d'autres boutons pour les critères de tri supplémentaires au besoin */}
          </div>
        </div>
      </div>
      <div className="w-3/4 pl-4 h-full">
        <input
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 text-black"
          type="text"
          placeholder="Rechercher par titre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h1 className="text-3xl font-bold mb-4 text-center">Livres</h1>
        <div className="flex justify-center flex-wrap overflow-y-auto">
          {filteredBooks.map((book) => (
            <div key={book.id} className="mb-8 p-4 border rounded shadow-lg mr-4">
              <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
              <p className="mb-2">
                <span className="font-semibold">Genre :</span> {book.genres}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Date :</span> {book.writtenOn.toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Auteur :</span> {book.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
