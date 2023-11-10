import axios from 'axios';
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