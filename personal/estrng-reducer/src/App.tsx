import { useEffect, useState, useRef} from 'react'
import reactLogo from './assets/react.svg'

import { useUserContext } from './hooks/useUserContext'

import './App.css'
import { UserContextConsumer } from './contexts/User/UserContextConsumer'
import { IUserContextProps } from './contexts/User/userContext.types'

function App() {
  const [count, setCount] = useState<number>(0)
  const { user, setUserAction } = useUserContext();
  const myRef = useRef(null);

  const handleChange = () => {
    if (!myRef.current) return;
    console.log(myRef.current)
  }
  
  useEffect(() => {
    setTimeout(() => {
      setUserAction({
          name: "JOSÉ IVAN do futuro",
          age: 29
      })
    }, 3000);
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
      <h1>Vite + React é da hora!</h1>
      <input ref={myRef} onChange={handleChange} type="text" />
        {/* <h3>{'<<<<<<< usando useContext hook >>>>>>>'}</h3>
        <h4>Made by: {user.data?.name}</h4>
        {!user.data?.age
          ? <h4>Calculando idade do author...</h4>
          : <h4>Author age: {user.data?.age} </h4>
        }        
      <h3>{'<<<<<<< usando context consumer >>>>>>>'}</h3>
        <UserContextConsumer>
        {({ user }: IUserContextProps) => {
            return <>
              <h4>Made by: {user.data?.name}</h4>
              {!user.data?.age
                ? <h4>Calculando idade do author...</h4>
                : <h4>Author age: {user.data?.age} </h4>
              }  
            </>
          }          
        }
        </UserContextConsumer> */}
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
