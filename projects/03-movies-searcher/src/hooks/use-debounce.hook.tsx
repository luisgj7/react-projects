import { useState, useEffect, useRef } from "react";

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const lastValueRef = useRef<T>(value);
  
    useEffect(() => {
      if (!value) return;
      // If the value does not change, it should not continue.
      if (lastValueRef.current === value) return;
  
      const handler = setTimeout(() => {
        lastValueRef.current = value;
        setDebouncedValue(value);
      }, delay);
  
      // Cleanup
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }

