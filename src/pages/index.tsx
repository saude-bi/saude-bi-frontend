import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function HomePage() {
  const router = useRouter();

  useEffect(()=> {
    const token = localStorage.getItem('access_token');
    if (token) {
      console.log('Token encontrado:', token);
    } else {
      console.log('Token não encontrado.');
      router.push('/auth/login');
    }
  })

  const logout = () => {
    localStorage.removeItem('access_token')
    router.push('/auth/login');
  }
  return (
   <div>
      <h1>Usuário autenticado</h1>
      <button onClick={logout}>Logout</button>
   </div>
  );
}
