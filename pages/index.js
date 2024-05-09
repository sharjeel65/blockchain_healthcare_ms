import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/login'); // Redirect to the login page after 1 second (1000 milliseconds)
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div>
      <h1>Welcome to Our Healthcare Records Management System</h1>
      <p>Redirecting to login page...</p>
    </div>
  );
};

export default HomePage;
