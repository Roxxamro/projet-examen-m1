'use client';

import React, { FC, useEffect, useState } from 'react';
import { useAuthorsProviders } from '@/hooks/providers/authorProviders';
const handleAuthorClick = (id: string) => {
  window.location.href = `/authors/${id}`;
}

const AuthorsPage: FC = () => {
  const { useListAuthors } = useAuthorsProviders();
  const { authors, load } = useListAuthors();

  useEffect(() => {
    load();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchLivreCount, setSearchLivreCount] = useState<number | ''>('');

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchLivreCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchLivreCount(value === '' ? '' : parseInt(value, 10));
  };

 const filteredAuthors = authors.filter((auteur) =>
    (searchTerm === '' || 
    auteur.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auteur.lastName.toLowerCase().includes(searchTerm.toLowerCase()))

    /* Cette ligne ne fonctionne pas car on ne récupére pas les livres de l'auteur
    &&
    (searchLivreCount === '' || auteur.count === searchLivreCount)
    */
  );

  return (
    <>
      <h1 className="text-2xl font-bold my-4 text-center">Liste des Auteurs</h1>
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom"
          value={searchTerm}
          onChange={handleSearchName}
          className="px-2 py-1 text-black border rounded-md"
        />
        
        {/* <input
          type="number"
          placeholder="Rechercher par nombre de livres"
          value={searchLivreCount === '' ? '' : searchLivreCount.toString()}
          onChange={handleSearchLivreCount}
          className="px-2 py-1 text-black border rounded-md ml-4"
        /> */}
        
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredAuthors.map((auteur) => (
          <div key={auteur.id} className="m-4 text-center">
            <button
              onClick={() => { handleAuthorClick(auteur.id); }}
              className="rounded-lg overflow-hidden focus:outline-none"
            >
              <img
                src={auteur.photoUrl}
                alt={`${auteur.firstName} ${auteur.lastName}`}
                className="w-24 h-24 object-cover"
              />
            </button>
            <p className="mt-2">{auteur.firstName} - {auteur.lastName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuthorsPage;
