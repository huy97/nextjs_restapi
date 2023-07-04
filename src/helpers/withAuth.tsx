import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }

      //TODO: Check if token is valid here
    }, []);

    return <Component />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
