import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'library-api/src/common/errors';
import { UserId, User } from 'library-api/src/entities';
import { GenreModel } from 'library-api/src/models';
import {
  UserRepositoryOutput,
  CreateUserRepositoryInput,
} from 'library-api/src/repositories/users/user.repository.type';
import { adaptUserEntityToUserModel } from 'library-api/src/repositories/users/user.utils';
import { DataSource, Repository, In } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(public readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  /**
   * Get all plain users
   * @returns Array of plain users
   */
  public async getAllPlain(): Promise<UserRepositoryOutput[]> {
    const user = await this.find({})

    return user.map(adaptUserEntityToUserModel);
  }

  /**
   * Get a user by its ID
   * @param id user's ID
   * @returns user if found
   * @throws 404: user with this ID was not found
   */
  public async getById(id: UserId): Promise<UserRepositoryOutput> {
    const user = await this.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError(`user - '${id}'`);
    }

    return adaptUserEntityToUserModel(user);
  }

  /**
   * Create a new user
   * @param input Data to create the user
   * @returns Created user
   */
  public async createUser(
    input: CreateUserRepositoryInput,
  ): Promise<UserRepositoryOutput> {
    const id = await this.dataSource.transaction(async (manager) => {
      const [newUser] = await manager.save<User>([
        manager.create<User>(User, { ...input }),
      ]);
      return newUser.id;
      });
    return this.getById(id);
  }

  /**
   * Delete a user from database
   * @param id User's id
   */
  public async deletebyid(id: UserId): Promise<void> {
    await this.delete(id);
  }
}
