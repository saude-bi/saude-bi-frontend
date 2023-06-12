import {
  injectCreate,
  injectRemove,
  injectFindAll,
  injectFindById,
  injectUpdate,
} from '@/store/common';
import { CreateUserDto, User, UpdateUserDto } from '@/types/user';

const endpoint = 'users';

export const { useFindUserQuery } = injectFindById<User>('findUser', endpoint);

export const { useFindAllUsersQuery } = injectFindAll<User, { username?: string }>('findAllUsers', endpoint);

export const { useCreateUserMutation } = injectCreate<User, CreateUserDto>('createUser', endpoint);

export const { useUpdateUserMutation } = injectUpdate<User, UpdateUserDto>('updateUser', endpoint);

export const { useRemoveUserMutation } = injectRemove('removeUser', endpoint);
