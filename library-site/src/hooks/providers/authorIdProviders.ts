import axios from 'axios';
import { useState } from 'react';
import { AuthorModel } from '@/models';
 
type UseAuthorIdProvider = {
  author: AuthorModel;
  load: (id: string) => void;
  update: (updatedAuthor: AuthorModel) => void;
};
 
export const useAuthorId = (): UseAuthorIdProvider => {
  const [author, setAuthor] = useState<AuthorModel>({} as AuthorModel);
 
  const fetchAuthor = (id: string): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`)
      .then((data) => setAuthor(data.data))
      .catch((err) => console.error(err));
  };
 
  const updateAuthor = (updatedAuthor: AuthorModel): void => {
    setAuthor(updatedAuthor);
  };
 
  return { author, load: fetchAuthor, update: updateAuthor };
};
 
type AuthorIdProviders = {
  useAuthorId: () => UseAuthorIdProvider;
};
 
export const useAuthorIdProviders = (): AuthorIdProviders => ({
  useAuthorId,
});