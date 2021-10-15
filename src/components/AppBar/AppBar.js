import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import style from "../AppBar/AppBar.module.css";
// import svgLogo from "../../images/logo.svg";

const AppBar = () => {
  return (
    <header className={style.AppBar}>
      <a href="/" className="header-logo">
        {/* <img src={svgLogo} alt="logo" /> */}
        <Logo className="header-logo" laptopClassName="header-laptop" />
      </a>
      {/* <p className={style.logo}>UKAD</p> */}
      <Navigation />
    </header>
  );
};

export default AppBar;
