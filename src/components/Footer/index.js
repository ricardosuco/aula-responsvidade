import './styles.css'
import Logo from '../../assets/logo.svg'

function Footer() {
    return (
     <footer>
        <div className="footer-left">
             <img src={Logo} alt="logo" />
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est leo, tincidunt non elit eget, fermentum semper arcu. Curabitur consequat sollicitudin varius.
             </p>
        </div>
        <div className="footer-right">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est leo, tincidunt non elit eget, fermentum semper arcu. Curabitur consequat sollicitudin varius. Curabitur accumsan at orci quis accumsan. Integer aliquet elit gravida erat sollicitudin, at finibus libero mollis. Duis sollicitudin nunc eget erat pulvinar, ut mattis metus iaculis.
             </p>
        </div>
    </footer>
    )
}

export default Footer