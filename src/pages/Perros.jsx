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