import './Dashboard.css'
import { Sidebar } from '../../components/Sidebar'
import { StatCard } from '../../components/StatCard'
import { Notificacion } from '../../components/Notificacion'
import { QuickActions } from '../../components/QuickActions'
import { Nav } from '../../components/Nav'

export function Dashboard() {
    const stats = [
        { label: 'Proyectos Activos', value: 12 },
        { label: 'Tareas Completadas', value: 86 },
        { label: 'Alertas', value: 3 },
        { label: 'Miembros del equipo', value: 8 },
    ]

    const notes = [
        { title: 'Actualización del sistema programada', desc: 'El mantenimiento se realizará el 25 de Diciembre a las 10 PM.' },
        { title: 'Nueva factura disponible', desc: 'Tu factura de Noviembre ya está lista para descargar.' },
        { title: 'Recordatorio de reunión', desc: 'Tienes una reunión de equipo hoy a las 3 PM.' },
    ]

    return (
        <div className="dashboard-page">
            <Sidebar />

            <div className="dashboard-main">
                <Nav />

                <div className="dashboard-inner">
                    <h2 className="welcome">Bienvenido de nuevo</h2>
                    <h1 className="panel">Panel de Control</h1>
                    <p className="panel-sub">Un resumen de la actividad de tu cuenta.</p>

                    <div className="stats-row">
                        {stats.map((s, idx) => (
                            <StatCard key={idx} label={s.label} value={s.value} />
                        ))}
                    </div>

                    <div className="content-row">
                        <div className="left-col">
                            <Notifications items={notes} />
                        </div>

                        <aside className="right-col">
                            <QuickActions />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}
