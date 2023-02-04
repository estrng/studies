import Compose from "./Compose";
import { ContextProviders } from "./ContextProviders";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <Compose components={ContextProviders}>
      {children}
    </Compose>
  )
}