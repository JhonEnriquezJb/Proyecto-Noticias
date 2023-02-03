
import "./Header.scss";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { RedesSociales } from "./RedesSociales";



export const Header = () => {
  return (
    <header className="Header">
      <div className="Wrapper">
        <Logo/>
        <Navbar/>
        <RedesSociales/>
    
      </div>
    </header>
  );
};






