import './styles.css'
import MenuIcon from '../../assets/menu.svg'
import Close from '../../assets/close.svg'
import { useEffect, useState } from 'react'

function Menu() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.querySelector('body').style.overflow =
            open
                ? 'hidden'
                : 'initial'
    }, [open])
    return (
        <div className={`${open && 'fullscreen-menu'}`}>
            {open ?
                <img
                    className="icon-close"
                    style={{ display: `${open} ? 'block' : 'none'` }}
                    src={Close}
                    alt="close icon"
                    onClick={() => setOpen(false)}
                />
                :
                <img
                    className="icon-menu"
                    src={MenuIcon}
                    alt="menu icon"
                    onClick={() => setOpen(true)}
                />
            }
            <ul className="menu">
                <li>Ação</li>
                <li>Comédia</li>
                <li>Drama</li>
                <li>Documentário</li>
                <li>Infantis</li>
            </ul>
        </div>
    )
}

export default Menu