import './QuickActions.css'

export function QuickActions(){
    return (
        <div className="quick-actions">
            <h4>Accesos Directos</h4>
            <button className="primary">Crear Nuevo Proyecto</button>
            <button>Añadir Tarea</button>
            <button>Invitar Miembro</button>
            <button>Generar Reporte</button>
        </div>
    )
}