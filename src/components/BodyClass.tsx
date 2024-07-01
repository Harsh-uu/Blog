import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function BodyClass() {
  const location = useLocation();

  useEffect(() => {
    // Remove all classes from the body
    document.body.className = '';

    // Add a class based on the current path
    if (location.pathname.includes('/signup')) {
      document.body.classList.add('signup');
    } else if (location.pathname.includes('/blogpost')) {
      document.body.classList.add('blogpost');
    } // Add more else if blocks for other paths
  }, [location]);

  return null;
}