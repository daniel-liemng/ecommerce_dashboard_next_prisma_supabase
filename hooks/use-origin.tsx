import { useEffect, useState } from 'react';

// to access window location
// http://localhost:3000
export const useOrigin = () => {
  const [isMounted, setIsMounted] = useState(false);

  // check if window is available || window location exists
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return '';
  }

  return origin;
};
