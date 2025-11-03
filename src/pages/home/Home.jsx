import './Home.css'
import { Link } from 'react-router-dom'
import { CardsHome } from '../../components/CardsHome'
import { Nav } from '../../components/Nav'



export function Home() {
    const info = [
        {
            id: 1,
            title: 'Gestión Centralizada',
            desc: 'Accede y administra todas tus herramientas y datos desde un único panel de control intuitivo.'
        },
        {
            id: 2,
            title: 'Flujos de Trabajo Ágiles',
            desc: 'Optimiza tus procesos y colabora con tu equipo en tiempo real para mayor productividad.'
        },
        {
            id: 3,
            title: 'Seguridad Confiable',
            desc: 'Mantenemos tu información segura con protocolos de encriptación y protección de última generación.'
        }
    ]

    return (
        <div className='home-page'>
            <Nav />

            <header className='hero'>
                <div className='hero-inner'>
                    <h1>Bienvenido a Nuestra Plataforma</h1>
                    <p className='hero-sub'>Un espacio diseñado para simplificar tus tareas y potenciar tu productividad. Empieza en segundos.</p>
                    <button className='cta'><Link to={"/dashboard"} className='link'>Comenzar Ahora</Link></button>
                </div>
            </header>

            <main className='info-home'>
                <div className='info-inner'>
                    <h2>Características Principales</h2>
                    <p className='info-sub'>Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus objetivos de manera más eficiente.</p>

                    <section className='cards-row'>
                        {info.map(item => (
                            <CardsHome key={item.id} title={item.title} desc={item.desc} />
                        ))}
                    </section>
                </div>
            </main>

            <footer className='site-footer'>
                <div className='footer-inner'>
                    <div className='footer-links'>
                        <a>Terminos de Servicio</a>
                        <a>Política de Privacidad</a>
                        <a>Contacto</a>
                    </div>
                    <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}