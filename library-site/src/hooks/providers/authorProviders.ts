import axios from 'axios';
import { useState } from 'react';
import { AuthorModel } from '@/models';

type UseListAuthorsProvider = {
  authors: AuthorModel[];
  load: () => void;
};

export const useListAuthors = (): UseListAuthorsProvider => {
    const [authors, setAuthors] = useState<AuthorModel[]>([]);
    
    const fetchAuthors = (): void => {
        axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/authors`)
        .then((data) => setAuthors(data.data))
        .catch((err) => console.error(err));
    };
    
    return { authors, load: fetchAuthors };
};

type AuthorProviders = {
    useListAuthors: () => UseListAuthorsProvider;
};

export const useAuthorsProviders = (): AuthorProviders => ({
    useListAuthors,
});