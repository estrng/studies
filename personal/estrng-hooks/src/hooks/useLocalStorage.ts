import { useState, useRef, useEffect } from "react";

type SerializeFunction<T> = (value: T) => string;
type DeserializeFunction<T> = (value: string) => T;

type UseLocalStorageReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useLocalStorage<K extends string, T>(
  key: K,
  defaultValue: T,
  {serialize = JSON.stringify, deserialize = JSON.parse}: {
    serialize?: SerializeFunction<T>,
    deserialize?: DeserializeFunction<T>,
  } = {}
): UseLocalStorageReturnType<T> {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage)
      } catch (error) {
        window.localStorage.removeItem(key)
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = useRef<K>(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) window.localStorage.removeItem(prevKey)

    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}