import { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => (
  <main className="flex min-h-screen flex-col items-start justify-start p-24">
    <h1 className="text-4xl font-bold mt-2">Bienvenue dans notre Bibliothèque en Ligne</h1>
    <p className="text-xl mt-4">Découvrez notre vaste collection de livres et explorez les œuvres des auteurs les plus renommés.</p>
    <img src="/images/image-bibliothèque.jpg" alt="Description de l'image" className="max-w-full" />
    {/* Reste du contenu de la page */}
  </main>
);

export default Home;