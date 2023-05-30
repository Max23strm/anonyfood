import Titulo from "./Titulo"
import logo from '../img/logo.png'

const Header = () => {
  return (
    <div className="mainHeader">
        <Titulo/>
        <img src={logo} alt="anonyfood logo"/>
    </div>
  )
}

export default Header