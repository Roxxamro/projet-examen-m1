import axios from 'axios';

export const useAddAuthor = async (author: any): Promise<void> => {

    try {

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authors`, author);
        window.location.href = '/authors';

    } catch (err) {

        console.error(err);
        throw err;

    }

}