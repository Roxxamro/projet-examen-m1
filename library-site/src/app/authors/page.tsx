'use client'

import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useAuthorsProviders } from '@/hooks/providers/authorProviders';
import { useAddAuthor } from '@/hooks/providersAdd/authorAddProviders';

const handleAuthorClick = (id: string) => {
  window.location.href = `/authors/${id}`;
};

const AuthorsPage: FC = () => {
  const { useListAuthors } = useAuthorsProviders();
  const { authors, load } = useListAuthors();
  const addAuthor = useAddAuthor;

  useEffect(() => {
    load();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleAddAuthor = async () => {
    try {
      await addAuthor({
        firstName: newFirstName,
        lastName: newLastName,
        photoUrl: newPhotoUrl,
      });
      setIsModalOpen(false);
      load();
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={handleAddClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {authors
          .filter(
            (auteur) =>
              searchTerm === '' ||
              auteur.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              auteur.lastName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((auteur) => (
            <div key={auteur.id} className="m-4 text-center">
              <button
                onClick={() => handleAuthorClick(auteur.id)}
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Ajouter un auteur"
      >
        <h2>Ajouter un auteur</h2>
        <form>
          {/* Ajoutez le formulaire d'ajout d'auteur ici */}
          <input
            type="text"
            placeholder="Nouveau prénom"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            className="px-2 py-1 text-black border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Nouveau nom"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            className="px-2 py-1 text-black border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Nouvelle URL de photo"
            value={newPhotoUrl}
            onChange={(e) => setNewPhotoUrl(e.target.value)}
            className="px-2 py-1 text-black border rounded-md mb-2"
          />
          <button
            type="button"
            onClick={handleAddAuthor}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter
          </button>
          <button
            type="button"
            onClick={handleModalClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
          >
            Annuler
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AuthorsPage;



