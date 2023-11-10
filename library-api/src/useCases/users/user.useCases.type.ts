import { UserModel } from 'library-api/src/models';
import { CreateUserRepositoryInput } from 'library-api/src/repositories/users/user.repository.type';

export type UserUseCasesOutput = UserModel;
export type CreateUserUseCasesInput = CreateUserRepositoryInput;
