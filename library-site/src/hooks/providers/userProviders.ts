import axios from 'axios';
import { useState } from 'react';
import { UserModel } from '@/models';

type UseListUsersProvider = {
  users: UserModel[];
  load: () => void;
};

export const useListUsers = (): UseListUsersProvider => {
    const [users, setUsers] = useState<UserModel[]>([]);
    
    const fetchUsers = (): void => {
        axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        .then((data) => setUsers(data.data))
        .catch((err) => console.error(err));
    };
    
    return { users, load: fetchUsers };
};

type UserProviders = {
    useListUsers: () => UseListUsersProvider;
};

export const useUsersProviders = (): UserProviders => ({
    useListUsers,
});