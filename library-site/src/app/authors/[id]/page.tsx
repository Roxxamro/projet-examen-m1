'use client';
import { FC, useEffect,useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuthorIdProviders } from '@/hooks/providers/authorIdProviders';

const AuthorDetailsPage: FC = () => { 
  const { useAuthorId } = useAuthorIdProviders();
  const { author, load, update} = useAuthorId();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  useEffect(() => {
    load(id);
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    // Pré-remplir les champs avec les valeurs actuelles
    setNewFirstName(author?.firstName || '');
    setNewLastName(author?.lastName || '');
    setNewPhotoUrl(author?.photoUrl || '');
  };
  const handleSaveClick = () => {
    // Coté Back-end, on ne peut pas modifier les infos de l'auteur
    update( {id, firstName: newFirstName, lastName: newLastName, photoUrl: newPhotoUrl });
    setIsEditing(false);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {author ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{`${author.firstName} ${author.lastName}`}</h2>
          {isEditing ? (
            <>
              <input
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                placeholder="Nouveau prénom"
                className="mb-2 px-2 py-1 text-black border rounded-md"
              />
              <input
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                placeholder="Nouveau nom"
                className="mb-2 px-2 py-1 text-black border rounded-md"
              />
              <input
                type="text"
                value={newPhotoUrl}
                onChange={(e) => setNewPhotoUrl(e.target.value)}
                placeholder="Nouvelle URL de photo"
                className="mb-2 px-2 py-1 text-black border rounded-md "
              />
              <button
                onClick={handleSaveClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2"
              >
                ENREGISTRER
              </button>
            </>
          ) : (
            <>
              {author.photoUrl && (
                <img
                  src={author.photoUrl}
                  alt={`${author.firstName} ${author.lastName}`}
                  className="rounded-full mx-auto mb-4"
                />
              )}
              <button
                onClick={handleEditClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded mb-4"
              >
                MODIFIER
              </button>
            </>
          )}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default AuthorDetailsPage;





















