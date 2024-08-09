import { useState, useEffect } from 'react';

type QueryInput = {
  maxWidth?: number;
  minWidth?: number;
  minHeight?: number;
  maxHeight?: number;
};

const useMediaQuery = (queryInput: QueryInput): boolean => {
  const queryString =
    queryInput &&
    [
      queryInput.minWidth && `(min-width: ${queryInput.minWidth}px)`,
      queryInput.maxWidth && `(max-width: ${queryInput.maxWidth}px)`,
      queryInput.minHeight && `(min-height: ${queryInput.minHeight}px)`,
      queryInput.maxHeight && `(max-height: ${queryInput.maxHeight}px)`,
    ]
      .filter(Boolean)
      .join(' and ');

  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (!queryString) {
      setMatches(false);
      return;
    }

    const mediaQueryList = window.matchMedia(queryString);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [queryString]);

  return matches;
};

export default useMediaQuery;
