import { Link, Navigate } from 'react-router-dom'
import './Nav.css'

export function Nav(){
    return(
        <header className='header-nav'>
            <h1>Mi Aplicación</h1>
            <div className='div-link-nav'>
                <Link to={"/login"} className='links'>Iniciar Sesión</Link>
                <Navigate to={"./registro"} className="buttoon-link">Registrarse</Navigate>
            </div>
        </header>
    )
}