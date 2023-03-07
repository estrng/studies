import { useCallback, useEffect, useRef } from 'react';

type Dispatch<A> = (value: A) => void;

export function useSafeDispatch<A>(dispatch: Dispatch<A>): Dispatch<A> {
  const mountedRef = useRef(false);

  // useLayoutEffect is used to make sure that the mountedRef.current is
  // set immediately after the update. Even though this effect does not interact 
  // with any external resource another effect inside a useLayoutEffect which does 
  // interact with the dom may depend on the value being set
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    (...args) => (mountedRef.current ? dispatch(...args) : undefined),
    [dispatch],
  );
}