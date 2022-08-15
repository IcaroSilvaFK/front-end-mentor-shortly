import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface IUseStorageProps {
  key: string;
}

export function useStorage<T>({
  key,
}: {
  key: string;
}): [T | null, (data: T) => void] {
  const [links, setData] = useState<T | null>(null);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(links));
  }, [links]);

  useEffect(() => {
    const storage = localStorage.getItem(key);

    if (storage) {
      setData(JSON.parse(storage));
    }
  }, []);

  function addLinks(data: T) {
    setData(data);
  }

  return [links, addLinks];
}
