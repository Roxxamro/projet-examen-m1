import { UserId } from 'library-api/src/entities';
import { UserModel } from 'library-api/src/models';

export class UserPresenter {
  id: UserId;

  firstname: string;

  lastname: string;

  private constructor(data: UserPresenter) {
    Object.assign(this, data);
  }

  public static from(data: UserModel): UserPresenter {
    return new UserPresenter({
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
    });
  }
}
