import axios from 'axios';
<<<<<<< HEAD

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
=======
import { CreateBookModel, PlainAuthorModel } from '@/models';
 
type CreateBookProvider = {
  book: CreateBookModel;
  author: PlainAuthorModel;
};
 
export const useAddBook = async (
  book: CreateBookModel,
): Promise<CreateBookProvider> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/books`,
      {
        name: book.name,
        writtenOn: book.writtenOn,
        author: {
          id: book.author.id,
          firstName: book.author.firstName,
          lastName: book.author.lastName,
        },
        genres: book.genres,
      },
    );
    window.location.href = '/books';
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
>>>>>>> b75f61c79ca326905281265058ae3bebc4d38082
