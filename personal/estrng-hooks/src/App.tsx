import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAsync } from './hooks/useAsync'

function App() {
  const [count, setCount] = useState(0)
  const { data, status, error, run} = useAsync()

  async function callGitHubData() {
    return fetch('https://api.github.com/users/estrng', {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }).then(async response => {
      return await response.json()
    })
  }

  useEffect(() => {
    if (!data) return
    run(callGitHubData())
  }, [])
  
  console.log("DATA DO USEASYNC", data)
  console.log("status DO USEASYNC", status)
  console.log("error DO USEASYNC", error)

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
