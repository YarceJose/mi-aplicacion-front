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
            <form className="form-login">
                <div className="container-label-input-login">
                    <label className="label-login">
                        Email o Nombre de Usuario
                    </label>
                    <input
                        className="input-login"
                        placeholder="tu@ejemplo.com"
                        id="username"
                        name="username"
                        type="text"
                    />
                </div >
                <div className="container-label-input-login">
                    <label className="label-login">
                        Contraseña
                    </label>
                    <Link className='link-contraseña'>¿Olvidaste tu contraseña?</Link>
                    <input
                        className="input-login"
                        placeholder="••••••••"
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>
                <Link to={"/"} className="button-login"
                    type="submit"
                >
                    Iniciar Sesion
                </Link>
            </form>
            <div className="container-sin-cuenta">
                ¿No tienes una cuenta? <Link className='direccion-registro' to="/registro">Regístrate</Link>
            </div>

        </div>
    )
}