
import ListPosts from './../components/ListPosts';
import ListCategories from '../components/ListCategories';


const Home = () => {
  
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Noticias Perrunas y Gatunas</h2>
      </div>
      <ListCategories/>
      <ListPosts url={"/posts"}/>
      
    </main>
  )
}

export default Home
