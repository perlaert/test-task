import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import style from "../AppBar/AppBar.module.css";

const AppBar = () => {
  return (
    <header className={style.AppBar}>
      <a href="/">
        <Logo />
      </a>
      <Navigation />
    </header>
  );
};

export default AppBar;
