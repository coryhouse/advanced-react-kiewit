import { useState } from "react";
import { ZodSchema } from "zod";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  zodSchema: ZodSchema<T>
) {
  const [state, setState] = useState(getDefault);

  function getDefault() {
    const cartInStorage = localStorage.getItem(key);
    if (!cartInStorage) return initialValue;
    const result = zodSchema.safeParse(JSON.parse(cartInStorage));
    if (result.success) return result.data as T;
    localStorage.removeItem(key); // Remove invalid data
    return initialValue;
  }

  function handleSetState(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  }

  return [state, handleSetState] as const;
}
