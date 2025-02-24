import { User } from 'library-api/src/entities';
import { UserRepositoryOutput } from './user.repository.type';

export const adaptUserEntityToUserModel = (
  user: User,
): UserRepositoryOutput => ({
  ...user,
});
