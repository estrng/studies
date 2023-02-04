import './styles/main.css'
import logoEemp from "./assets/logo-emp.svg";
import estrngLogo from "./assets/logo-estrng.png";

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-row items-center my-20'>
      <img src={logoEemp} alt="logoemp" />
      +
      <img width={100} height={100} src={estrngLogo} alt="estrng logo" />
      <h1 className='text-6xl text-white font-black m-20'>Sua party
        <span className='text-transparent bg-estrng-gradient bg-clip-text'>
          game
        </span>
        está aqui!
      </h1>
    </div>
  )
}

export default App

