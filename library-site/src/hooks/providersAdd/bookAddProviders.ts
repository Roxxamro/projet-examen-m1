import axios from 'axios';

// Ajout d'un livre dans la base de données

export const useAddBook = async (book: any): Promise<void> => {

    try {

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/books`, book);
        window.location.href = '/books';

    } catch (err) {

        console.error(err);
        throw err;

    }

}