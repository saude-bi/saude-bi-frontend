import { useRouter } from 'next/router';
import { NextRouter } from 'next/router';
import { removeAuthToken } from './useAuthToken';

export async function useLogout( router: NextRouter) {

    const logout = () => {
        removeAuthToken()
        router.push('/auth/login');
    }
    
    return {logout}
}