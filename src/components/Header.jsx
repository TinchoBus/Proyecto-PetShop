import image from "../assets/img/doguito.svg"
import "../assets/css/componentes/header.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className="header container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img className="header__logo" src={image} alt="doguito" />
                    <h1 className="header__title">Tienda de Mascotas</h1>
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                    <li><Link className="menu-item" to="#">Productos</Link></li>
                    <li><Link className="menu-item" to="/">Blog</Link></li>
                    <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
                    <li><Link className="menu-item menu-item"to="/Gatos">Gatos</Link> </li>
                    <li><Link className="menu-item menu-item"to="/Perros">Perros</Link> </li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    )
}

export default Header














//  <li> <a className="menu-item menu-item--entrar"href="#"></a> Entrar</li>
// <li> <a className="menu-item menu-item--entrar"href="#"></a> Productos </li>
// <li><a className="menu-item menu-item--entrar"href="/"></a> Blogs</li>
//<li><Link className="menu-item menu-item--entrar"to="/sobre">Sobre</Link> </li>
//<li><Link className="menu-item menu-item--entrar"to="/Gatos">Gatos</Link> </li>
//<li><Link className="menu-item menu-item--entrar"to="/Perros">Perros</Link> </li>



/*
GATOS.JSX

import historiaGatos from "../assets/img/historiasGatos.webp"
import cat2 from "../assets/img/cat2.png"
import '../assets/css/componentes/gatos.css'

const Gatos =()=>{
    return (
        <main>

            <div className="container">
                <h1 className="title-history-2">Historias Gatunas </h1>

            </div>
            <section className="container flex flex--center">
                <article>
                    <img className="gatito" src={historiaGatos} alt="Imagen-gato"/>

                    <p className="titulo-texto">HISTORIAS GATUNAS </p>

                    <p className="text-history"> El origen de los gatos se remonta a 12 millones de años, momento en que los felinos comenzaron a poblar la Tierra. Sin embargo, fue hace 4000 años cuando empezó su domesticación. En aquellos tiempos, los egipcios decidieron utilizarlos para mantener a las ratas lejos de sus almacenes de cereales</p>

                  
                    <img className="gatito2" src={cat2} alt="imagen-gato1"/>




                </article>

            </section>

        </main>
    )
}

export default Gatos


  

*/ 

/*

PERROS.JSX

import pastorAleman from "../assets/img/pastorAleman.jpg"
import '../assets/css/componentes/perros.css'   

const Perros =()=>{
    return (
        <main>
            <div className="container">
            <h1 className="title-history">Historias Perrunas</h1>
            
            </div>
            <section className="container flex flex--center">
                <article>
                    <img className="pastor-aleman"src={pastorAleman} alt="Imagen-perro"/>
                    
                    <p className="titulo-texto"> HISTORIAS PERRUNAS DEL OVEJERO ALEMAN</p> 

                    <p className="text-history">La historia de Alemania como país se inicia en 1871 al instaurarse el Imperio Alemán. Con anterioridad lo que conocemos como Alemania fue una agrupación de estados en el marco del Imperio Romano Germánico. Dentro de estos estados ya existía una crianza de perros de pastoreo que datan de varios siglos, durante este tiempo se crearon diferentes tipos, perros para llanuras ágiles y ligeros, otros para montaña más corpulentos y fuertes. Las diferencias entre estos ejemplares eran en color, largo de pelo, postura de orejas, tamaño, etcétera.

                    Todo comenzó cuando Max Emil Friedrich von Stephanitz, un militar de caballería, en unas maniobras observó cómo trabajaban dos perros de pastor, sus movimientos, las respuestas a las órdenes; en definitiva, todo le maravilló hasta el punto de que no fue capaz de volverse sin conseguir comparte uno de esos dos ejemplares al granjero. Con el tiempo Max von Stephanitz se compró una granja Grafrath y comenzó a criar. A la par acudía a exposiciones caninas e iba viendo diferentes razas y conociendo a diversos criadores. En una de esas exposiciones conoció a Arthur Meyer, con quien terminó uniéndole una gran amistad, pero además se convirtió en compañero de una gran empresa, la formación del club de raza. Pero antes de llegar a eso, además tuvieron la suerte de que las desavenencias de diferentes criadores en el intento de la formación del Phylax Club, a cargo del conde Von Hahm y el capitán Rieckelmann-Dunau, no dieran su fruto. </p>
                </article>

            </section>
            

        </main>

    )
}
export default Perros


ERROR.JSX
import error from "../assets/img/error.jpg"
import '../assets/css/404.css'

const Page404 =()=>{
    return (
        <main className="container flex flex--center flex--center flex--column">Main
        <img className="error" src={error} alt="Imagen"/>
        <p className="notfound-text">Lo sentimos esta pagina no existe!!</p>
        
        </main>
    
    )
}  
export default Page404
*******************************************
HEADER

import image from "../assets/img/doguito.svg"
import "../assets/css/componentes/header.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className="header container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img className="header__logo" src={image} alt="doguito" />
                    <h1 className="header__title">Tienda de Mascotas</h1>
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                    <li><Link className="menu-item" to="#">Productos</Link></li>
                    <li><Link className="menu-item" to="/">Blog</Link></li>
                    <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
                    <li><Link className="menu-item menu-item"to="/Gatos">Gatos</Link> </li>
                    <li><Link className="menu-item menu-item"to="/Perros">Perros</Link> </li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    )
}

export default Header






*/