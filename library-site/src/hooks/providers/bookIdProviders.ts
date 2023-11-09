import axios from 'axios';
import { useState } from 'react';
import { PlainBookModel } from '@/models';

type UseBookIdProvider = {
    book: PlainBookModel;
    load: (id: string) => void; // Passer l'ID du livre en argument
};

export const useBookId = (): UseBookIdProvider => {
    const [book, setBook] = useState<PlainBookModel>({} as PlainBookModel);

    const fetchBook = (id: string): void => {
        axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`)
        .then((data) => setBook(data.data))
        .catch((err) => console.error(err));
    };

    return { book, load: fetchBook };
}


type BookIdProviders = {
    useBookId: () => UseBookIdProvider;
};

export const useBookIdProviders = (): BookIdProviders => ({
    useBookId,
});