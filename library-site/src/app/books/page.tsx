import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useBooksProviders } from '@/hooks';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  useEffect(() => {
    load({ search: searchTerm, filterGenres: selectedGenre ? [selectedGenre] : [], sort: { field: sortBy, direction: 'asc' } });
  }, [searchTerm, selectedGenre, sortBy]);

  const genres = ['fantastique', 'comédie']; // Ajoutez ici d'autres genres au besoin

  return (
    <div className="container mx-auto p-4 flex h-screen">
      <div className="w-1/4 h-full border-r" style={{ borderWidth: '2px', borderColor: '#ccc' }}>
        <div className="mb-4">
          <span className="mb-2 block">Filtrer par genre :</span>
          {genres.map((genre) => (
            <button
              key={genre}
              className={`mb-2 px-2 py-1 rounded border ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => setSelectedGenre(selectedGenre === genre ? '' : genre)}
            >
              {genre}
            </button>
          ))}
          <div className="mt-4">
            <span className="block font-semibold mb-2">Trier par :</span>
            <button
              className={`mr-2 px-2 py-1 rounded border ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => setSortBy('name')}
            >
              Titre
            </button>
            <button
              className={`mr-2 px-2 py-1 rounded border ${sortBy === 'name author' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => setSortBy('name author')}
            >
              Auteur
            </button>
            <button
              className={`mr-2 px-2 py-1 rounded border ${sortBy === 'writtenOn' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => setSortBy('writtenOn')}
            >
              Date
            </button>
            <button
              className={`mr-2 px-2 py-1 rounded border ${sortBy === 'genres' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => setSortBy('genres')}
            >
              Genre
            </button>
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
          {books.map((book) => (
            <div key={book.id} className="mb-8 p-4 border rounded shadow-lg mr-4">
              <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
              <p className="mb-2">
                <span className="font-semibold">Genre :</span> {book.genres.join(', ')}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Date :</span> {new Date(book.writtenOn).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Auteur :</span> {book.author.firstName} {book.author.lastName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
