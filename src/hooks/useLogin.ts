import axios from 'axios';
import { storeAuthToken } from './useAuthToken';
import { NextRouter } from 'next/router';
import { useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';

export default function useLogin(password: string, username: string, router: NextRouter) {
  const [error, setError] = useState('');

  const login = async () => {
    try {
      const response = await axiosInstance.post('/auth', {
        username,
        password,
      });

      if (response.status === 200) {
        storeAuthToken(response.data.access_token);
        router.push('/home');
      }
    } catch (err) {
      setError('Erro: ' + err);
    }
  };

  return { login, error };
}
