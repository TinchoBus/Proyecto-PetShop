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