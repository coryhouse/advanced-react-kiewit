import ky from "ky";
import { useEffect, useState } from "react";

type UseFetchArgs = {
  url: string;
};

export function useFetch<TResponse>({ url }: UseFetchArgs) {
  const [data, setData] = useState<TResponse | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await ky(url).json();
        setData(data as TResponse);
      } catch (err) {
        // TODO: Handle error in a type safe manner
        setError(err as Error);
      }
    }
    getData();
  }, [url]);

  return { data, error };
}
