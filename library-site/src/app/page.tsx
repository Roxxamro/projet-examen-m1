import { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => (
  <main
    className="flex min-h-screen flex-col items-start justify-start p-24"
    style={{ backgroundImage: 'url("/images/image-bibliothèque.jpg")', backgroundSize: 'cover' }}
  >
    <h1 className="text-4xl font-bold mt-2 text-white">Bienvenue dans notre Bibliothèque en Ligne</h1>
    <p className="text-xl mt-4 text-white">Découvrez notre vaste collection de livres et explorez les œuvres des auteurs les plus renommés.
    Vous retrouverez les informations plus précises sur chaque auteur présent sur le site ainsi que des informations supplémentaires sur les livres disponibles.
    Bonne lecture !</p>
    {/* Reste du contenu de la page */}
  </main>
);

export default Home;
