import './StatCard.css'

export function StatCard({ label, value }){
    return (
        <div className="stat-card">
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
        </div>
    )
}