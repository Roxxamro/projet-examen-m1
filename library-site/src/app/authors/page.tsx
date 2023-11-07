'use client';


import { FC, useState} from 'react';

type Auteur = {
    id: number;
    name: string;
    photo: string;
    NombreDeLivre: number;
};


const listeAuteurs: Auteur[] = [
    {id: 1, name: "Victor Hugo", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bonnat_Hugo001z.jpg/220px-Bonnat_Hugo001z.jpg", NombreDeLivre: 10},
    {id: 2, name: "Charles Baudelaire", photo: "data:image/jpeg;base64,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", NombreDeLivre: 5},
    {id: 3, name: "Jean de La Fontaine", photo: "data:image/jpeg;base64,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", NombreDeLivre: 10},
    {id: 4, name: "Emile zola", photo: "https://www.babelio.com/users/AVT_mile-Zola_8181.jpg", NombreDeLivre: 10},
    
];


const AuthorsPage: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLivreCount, setSearchLivreCount] = useState<number | ''>('');
  
    const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredAuthors = listeAuteurs.filter(auteur =>
        (searchTerm === '' || auteur.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (searchLivreCount === '' || auteur.NombreDeLivre === searchLivreCount)
      );
    const handleSearchLivreCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchLivreCount(value === '' ? '' : parseInt(value));
      };
  
    return (
        <>
 <h1 className="text-2xl font-bold my-4 text-center ">Liste des Auteurs</h1>
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
        {filteredAuthors.map((auteur) => (
          <div key={auteur.id} className="m-4 text-center">
            <button 
            onClick={() => { /* Fonction à exécuter lors du clic sur l'image en tant que bouton */ }}
              className="rounded-lg overflow-hidden focus:outline-none"
            >
                <img
                src={auteur.photo}
                alt={`${auteur.name} ${auteur.NombreDeLivre}`}
                className="w-24 h-24 object-cover"
              />
            </button>
            <p className="mt-2">{auteur.name} - Livres: {auteur.NombreDeLivre}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuthorsPage;
