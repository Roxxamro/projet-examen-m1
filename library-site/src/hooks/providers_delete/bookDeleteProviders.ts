import axios from "axios";

export const useDeleteBook = async (id: string): Promise<void> => {

    try {

        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`);
        window.location.href = '/books';

    } catch (err) {

        console.error(err);
        throw err;

    }
}