import './CardsHome.css'

export const CardsHome = ({ title, desc }) => {
    return (
        <div className='cards-home'>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}