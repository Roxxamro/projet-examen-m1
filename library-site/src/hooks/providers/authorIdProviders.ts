import axios from 'axios';
import { useState } from 'react';
import { AuthorModel } from '@/models';

type UseAuthorIdProvider = {
    author: AuthorModel;
    load: (id: string) => void;
};

export const useAuthorId = (): UseAuthorIdProvider => {
    const [author, setAuthor] = useState<AuthorModel>({} as AuthorModel);

    const fetchAuthor = (id: string): void => {
        axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`)
        .then((data) => setAuthor(data.data))
        .catch((err) => console.error(err));
    };

    return { author, load: fetchAuthor };
}

type AuthorIdProviders = {
    useAuthorId: () => UseAuthorIdProvider;
};

export const useAuthorByIdProviders = (): AuthorIdProviders => ({
    useAuthorId,
});