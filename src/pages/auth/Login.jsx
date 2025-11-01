import './Login.css'
import { Link, useNavigate } from "react-router-dom";

export function Login() {
    return (
        <div className="login-container">
            <h1 className='titulo-login'>
                Iniciar Sesión
            </h1>
            <p className='parrafo-login'>
                Bienvenido de nuevo. Accede a tu cuenta.
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="container-label-input">
                    <label className="labels" htmlFor="username">
                        Email o Nombre de Usuario
                    </label>
                    <input
                        className="imputs"
                        placeholder="tu@ejemplo.com"
                        id="username"
                        name="username"
                        type="text"
                        aria-label="Email o Nombre de Usuario"
                    />
                </div >
                <div className="container-label-input">
                    <label className="labels" htmlFor="password">
                        Contraseña
                    </label>
                    <Link className='link-contraseña'>¿Olvidaste tu contraseña?</Link>
                    <input
                        className="imputs"
                        placeholder="••••••••"
                        id="password"
                        name="password"
                        type="password"
                        aria-label="Contraseña"
                    />
                </div>
                <button className="button-login"
                    type="submit"
                >
                    Iniciar Sesion
                </button>
            </form>
            <div className="container-sin-cuenta">
                ¿No tienes una cuenta? <Link className='direccion-registro' to="/registro">Regístrate</Link>
            </div>

        </div>
    )
}