import './Notificacion.css'

export function Notificacion({ items = [] }){
    return (
        <div className="notifications">
            <h3>Notificaciones</h3>
            <div className="notes-list">
                {items.map((it, idx) => (
                    <div className="note" key={idx}>
                        <div className="note-title">{it.title}</div>
                        <div className="note-desc">{it.desc}</div>
                    </div>
                ))}
            </div>
            <a className="see-all">Ver todas las notificaciones</a>
        </div>
    )
}