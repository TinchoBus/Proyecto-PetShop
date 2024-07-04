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


  