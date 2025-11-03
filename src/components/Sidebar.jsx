import './Sidebar.css'

export function Sidebar(){
    return (
        <aside className="sidebar">
            <div className="brand">NombreApp</div>

            <nav className="side-nav">
                <a className="active">Dashboard</a>
                <a>Perfil</a>
                <a>Configuración</a>
            </nav>

            <div className="side-foot">Cerrar Sesión</div>
        </aside>
    )
}