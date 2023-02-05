import styles from "./styles.module.css";

import estrngLogo from '../../assets/estrng-logo.png'

export default function Header() {
  const { header } = styles;
  return (
    <header className={header}>
      <img src={estrngLogo} alt="estrng group S/A logo" />
    </header>
  )
}
