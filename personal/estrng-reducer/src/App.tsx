import { useEffect, useState, useRef, RefObject } from "react";
import reactLogo from "./assets/react.svg";

import { useUserContext } from "./hooks/useUserContext";

import "./App.css";
import { UserContextConsumer } from "./contexts/User/UserContextConsumer";
import { IUserContextProps } from "./contexts/User/userContext.types";
import { useAnyReducer } from "./reducers/useAnyReducer";
import { useAnyService } from "./services/anyService";

function App() {
  const operation = "edit";
  const { state, dispatchAny } = useAnyReducer(operation);
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);

  const handleOnChange = (value: RefObject<HTMLInputElement>) => {
    dispatchAny({ type: "SET_DATA", login: value.current?.value });
  };

  console.log("state", state);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <input type="text" ref={inputRef} onChange={() => handleOnChange(inputRef)} value={state} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
