'use client';

import { FC } from 'react';

const AuthorsPage: FC = () => (
<>
        <h1>Liste des Auteurs</h1>
        <ul>
            {listeAuteurs.map((author) => (
                <li key={author.id}>
                    {author.name}, {author.firstname}
                </li>
            ))}
        </ul>
    </>
);
