import './Registro.css'
import { Link } from 'react-router-dom';

export function Registro() {
    return (
        <div className='registro-container'>
            <h1 className='titulo-registro'>
                Crea tu cuenta
            </h1>
            <p className='parrafo-registro'>
                Registrate para empezar a utilizar la aplicacion.
            </p>
            <form className='form-registro'>
                <div className="container-label-input-registro">
                    <label className='label-registro'>
                        Nombre
                    </label>
                    <input
                        className='input-registro'
                        placeholder="Ingresa tu nombre"
                        id="username"
                        type="text"
                    />
                </div>
                <div className="container-label-input-registro">
                    <label className='label-registro'>
                        Correo Electrónico
                    </label>
                    <input
                        className='input-registro'
                        placeholder="tucorreo@ejemplo.com"
                        id="password"
                        type="email"
                    />
                </div>
                <div className="container-label-input-registro">
                    <label className='label-registro'>
                        Contarseña
                    </label>
                    <input
                        className='input-registro'
                        placeholder="Crea una contraseña segura"
                        id="confirmPassword"
                        type="password"
                    />
                </div>
                <div className="container-label-input-registro">
                    <label className=''>
                        Confirmar contraseña
                    </label>
                    <input
                        className='input-registro'
                        placeholder="Vuelve a escribir la contraseña"
                        id="confirmPassword"
                        type="text"
                    />
                </div>

                <button
                    className='button-registro'
                    type="submit"
                >
                    Registrarse
                </button>
            </form>
            <div className="container-tiene-cuenta">
                ¿Ya tiene una cuenta?. <Link className='direccion-login' to="/login">Inicie sesión</Link>
            </div>
        </div>
    )
}