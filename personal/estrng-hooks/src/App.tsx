import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAsync } from './hooks/useAsync'
import { useGitHub } from "./services/gitHub";

interface User {
  name: string;
  avatar_url: string;
  bio: string;
}

function App() {
  const { callGitHubData } = useGitHub();
  //const gitUser = '123rqfeqavawerbvarvbqwvcq243t32vr\vb';
  const gitUser = 'estrng';
  const [count, setCount] = useState(0)
  const { data: gitData, status, error, run} = useAsync<User>({status: gitUser ? 'pending' : 'idle'})

  useEffect(() => {
    if (!gitUser) return
    run(callGitHubData(gitUser))
  }, [])
  
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
      {status === 'pending' && <div>Loading...</div>}
      {status === 'resolved' && (
        <div>
          <h2>{gitData?.name}</h2>
          <img src={gitData?.avatar_url} alt={gitData?.name} />
          <p>{gitData?.bio}</p>
        </div>
      )}
      {status === 'rejected' && <div>
        <h2>{error?.message}</h2>
      </div>}
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
  )
}

export default App
