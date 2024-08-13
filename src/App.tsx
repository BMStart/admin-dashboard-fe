import { Suspense, useEffect, useState } from 'react';
import RoutersLocal from './router';

import { useUserQuery } from '@/store/api/usersApi';
import { useActions } from '@/store/hooks/useActions';
import { getCookieValue } from '@/utils/utils';
import { Loading } from '@/components/shader';
// import { ErrorsPage } from './pages';

const App = () => {
  const token = getCookieValue('_auth_token_');

  const { setCredentials, setRole, setIsAuthorized } = useActions();
  const [loading, setLoading] = useState(true);
  const [showLoadingFallback, setShowLoadingFallback] = useState(true);

  const { data, isLoading, error: queryError } = useUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      setCredentials(data);
      setRole(data.role);
      setIsAuthorized(true);
      setLoading(false);
    }
    if (!token) {
      setIsAuthorized(false);
      setLoading(false);
    }
  }, [data, setCredentials, setRole, setIsAuthorized, token]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoadingFallback(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading || loading || showLoadingFallback) {
    return <Loading.Welcome />;
  }

  if (queryError) {
    return <div>errors</div>;
  }

  return (
    <Suspense fallback={<Loading.Full />}>
      <RoutersLocal />
    </Suspense>
  );
};

export default App;
