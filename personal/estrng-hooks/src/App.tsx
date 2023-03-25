import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { useGitHub } from "./services/gitHub";
import "./App.css";
import { User } from "./services/gitHubServices.types";

function App() {
  const gitUser = "estrng";
  const { callGitHubDataAxios } = useGitHub();
  const [count, setCount] = useState(0);
  const [gitData, setGitData] = useState<User>({} as User);

  /**
   * Implemntação simples async, sem then e catch ou try e catch,
   * usando dados abstraidos da camada de serviço
   */
  const getGitHubData = useCallback(async () => {
    if (!gitUser) return;
    const { user, error } = await callGitHubDataAxios(gitUser);
    if (error) alert(error.message);
    setGitData(user);
  }, []);

  /**
   * Nesse caso não foi possivel usar useEffect(getGitHubData, [getGitHubData])
   * pois a função getGitHubData é assincrona e o useEffect não aceita na função de limpeza.
   */
  useEffect(() => {
    getGitHubData();
  }, [getGitHubData]);

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
      <h1>Vite + React</h1>
      {/* status === "pending" */ !gitData && <div>Loading...</div>}
      {
        /* status === "resolved" */ gitData && (
          <div>
            <h2>{gitData?.name}</h2>
            <img src={gitData?.avatar_url} alt={gitData?.name} />
            <p>{gitData?.bio}</p>
          </div>
        )
      }
      {/* {status === "rejected" && (
        <div>
          <h2>{error?.message}</h2>
        </div>
      )} */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
