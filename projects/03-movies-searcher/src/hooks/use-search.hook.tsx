import { useState, useRef, useEffect } from "react";

export function useSearchValidation(search: string) {
  const [ error, setError ] = useState<string | null>(null);
  const [ query, setQuery ] = useState<string | null>(null);
  const isFirstInput = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstInput.current && search === "") {
      isFirstInput.current = false;
      return;
    }

    if (search.trim() === "") {
      setError("Enter a movie");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Movies cannot be searched with a number");
      return;
    }

    if (search.trim().length < 3) {
      setError("The search should be at least 3 characters");
      return;
    }

    setQuery(search);
    setError(null);
  }, [search]);

  return { query, error };
}
