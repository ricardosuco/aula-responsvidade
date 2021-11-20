import './styles.css'
import logo from '../../assets/logo.svg'
import Menu from '../../components/Menu'

function Header() {
    return (
        <>
            <header>
                <img className="logo" src={logo} alt="logo" />
                <Menu />
            </header>
        </>
    )
}

export default Header