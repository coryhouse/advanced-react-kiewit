import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState(localStorage.getItem(key) || initialValue);

  function handleSetState(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  }

  return [state, handleSetState];
}
