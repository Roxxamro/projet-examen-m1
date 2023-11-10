import axios from 'axios';
<<<<<<< HEAD

export const useAddAuthor = async (author: any): Promise<void> => {

    try {

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authors`, author);
        window.location.href = '/authors';

    } catch (err) {

        console.error(err);
        throw err;

    }

=======
import { CreateAuthorModel } from '@/models';
 
type CreateAuthorProvider = {
  author: CreateAuthorModel;
};
 
// Async pour pouvoir utiliser await
export const useAddAuthor = async (
  author: CreateAuthorModel,
): Promise<CreateAuthorProvider> => {
  try {
    // Await pour attendre la réponse de l'API avant de continuer
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/authors`,
      {
        firstName: author.firstName,
        lastName: author.lastName,
        photoUrl: author.photoUrl,
      },
    );
 
    window.location.href = '/authors';
 
    return { author };
  } catch (err) {
    console.error(err);
 
    throw err;
  }
>>>>>>> b75f61c79ca326905281265058ae3bebc4d38082
}