import Site_Carousel from "../components/carousel"
import Products from "../components/products"


const Home = () => {
  return (
  
    <div className="flex flex-col w-full h-fit gap-y-4">
         <Site_Carousel/>
          <Products title="Recommended For You"/>
    </div>
  )
}

export default Home