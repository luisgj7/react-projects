import { useState, useRef, useEffect } from "react";

export function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Enter a movie");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Movies cannot be searched with a number");
      return;
    }

    if (search.length < 3) {
      setError("The search should be at least 3 characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
