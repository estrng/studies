import { BrowserRouter } from "react-router-dom";
import { Providers } from "./components/Providers";
import { Routes } from "./routes";

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Providers>
  )
}


