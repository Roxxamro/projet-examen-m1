'use client';

import React, { FC, useEffect, useState } from 'react';
import { useUsersProviders } from '@/hooks/providers/userProviders';

const UsersPage: FC = () => {
  const { useListUsers } = useUsersProviders();
  const { users, load } = useListUsers();

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

  const filteredUsers = users.filter((utilisateur) => 
    (searchTerm === '' || utilisateur.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <h1 className="text-2xl font-bold my-4 text-center">Liste des Utilisateurs</h1>
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom"
          value={searchTerm}
          onChange={handleSearchName}
          className="px-2 py-1 text-black border rounded-md"
        />
        <input
          type="number"
          placeholder="Rechercher par nombre de livres"
          value={searchLivreCount === '' ? '' : searchLivreCount.toString()}
          onChange={handleSearchLivreCount}
          className="px-2 py-1 text-black border rounded-md ml-4"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredUsers.map((utilisateur) => (
          <div key={utilisateur.id} className="m-4 text-center">
            <button
              onClick={() => { /* Fonction à exécuter lors du clic sur l'image en tant que bouton */ }}
              className="rounded-lg overflow-hidden focus:outline-none"
            >
              <img
                alt={`${utilisateur.firstName} ${utilisateur.lastName}`}
                className="w-24 h-24 object-cover"
              />
            </button>
            <p className="mt-2">{utilisateur.firstName} - {utilisateur.lastName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
