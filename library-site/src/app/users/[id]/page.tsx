'use client';

import { useParams } from 'next/navigation';
import { FC } from 'react';

const UserDetailsPage: FC = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col justify-between h-screen">
      <h1 className="text-2xl font-bold my-4">User details &apos;ID&apos; NOT IMPLEMENTED</h1>
      <div className="flex justify-center">
      <button
          onClick={() => { /* Fonction à exécuter lors du clic sur l'image en tant que bouton */ }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded mb-40"
        >
          MODIFIER
        </button>
      </div>
    </div>
  );
};















export default UserDetailsPage;
