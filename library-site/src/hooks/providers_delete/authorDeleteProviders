import axios from "axios";
 
export const useDeleteAuthor = async (id: string): Promise<void> => {

    try {

        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`);
        window.location.href = '/authors';
        
    } catch (err) {

        console.error(err);
        throw err;

    }

}